var GBasePlugin = (function() {
    var sha256=function a(b){function c(a,b){return a>>>b|a<<32-b}for(var d,e,f=Math.pow,g=f(2,32),h="length",i="",j=[],k=8*b[h],l=a.h=a.h||[],m=a.k=a.k||[],n=m[h],o={},p=2;64>n;p++)if(!o[p]){for(d=0;313>d;d+=p)o[d]=p;l[n]=f(p,.5)*g|0,m[n++]=f(p,1/3)*g|0}for(b+="\x80";b[h]%64-56;)b+="\x00";for(d=0;d<b[h];d++){if(e=b.charCodeAt(d),e>>8)return;j[d>>2]|=e<<(3-d)%4*8}for(j[j[h]]=k/g|0,j[j[h]]=k,e=0;e<j[h];){var q=j.slice(e,e+=16),r=l;for(l=l.slice(0,8),d=0;64>d;d++){var s=q[d-15],t=q[d-2],u=l[0],v=l[4],w=l[7]+(c(v,6)^c(v,11)^c(v,25))+(v&l[5]^~v&l[6])+m[d]+(q[d]=16>d?q[d]:q[d-16]+(c(s,7)^c(s,18)^s>>>3)+q[d-7]+(c(t,17)^c(t,19)^t>>>10)|0),x=(c(u,2)^c(u,13)^c(u,22))+(u&l[1]^u&l[2]^l[1]&l[2]);l=[w+x|0].concat(l),l[4]=l[4]+w|0}for(d=0;8>d;d++)l[d]=l[d]+r[d]|0}for(d=0;8>d;d++)for(e=3;e+1;e--){var y=l[d]>>8*e&255;i+=(16>y?0:"")+y.toString(16)}return i};
    
    if (!String.prototype.format) {
        String.prototype.format = function() {
            var args = arguments;
            return this.replace(/{(\d+)}/g, function(match, number) {
                return typeof args[number] !== 'undefined'
                    ? args[number]
                    : match
                    ;
            });
        };
    }

    const METHOD_POST = "POST";
    const METHOD_GET = "get";
    const RETRY_PERIOD = 2000;//ms
    const CACHED_CLIENT_ID = "CACHED_CLIENT_ID";
    const CACHED_CLIENT_SECRET = "CACHED_CLIENT_SECRET";

    const _RequestsQueue = [];
    let _platformVersion = "stdl;0.0.1";
    let _hmacSecret, _projectName, _environment, _domainName;
    let _prefix, _url;
    let _requestSequence = -1;
    let _isAuthorized = false;
    let _sending = false;
    let _unicorn = null;

    function initialize() {
        const str = "{0}-{1}.{2}".format(_projectName, _environment, _domainName);
        _prefix = str + "_";
        _url = "https://{0}".format(str);
    }

    function uuid()
    {
        var seed = Date.now();
        if (window.performance && typeof window.performance.now === "function") {
            seed += performance.now();
        }

        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (seed + Math.random() * 16) % 16 | 0;
            seed = Math.floor(seed/16);

            return (c === 'x' ? r : r & (0x3|0x8)).toString(16);
        });

        return uuid;
    }

    function getHmacSign(request, address)
    {
        let data = "";
        if (request.data) {
            // const utf = encodeURI(request.data);
            // data = utf;
            data = request.data;
            console.log("> " + _unicorn);
        }
        let str = address + data + _requestSequence + (_unicorn ? _unicorn : "") + _hmacSecret;
        console.error(str);
        str = sha256(str);
        console.warn("> " + str);
        return str;
    }
    
    function checkForNewRequests() {        
        if (!_sending && _isAuthorized && _RequestsQueue.length > 0) {
            const request = _RequestsQueue.shift();
            console.info("CHECK ", request);
            sendRequest(request);
        } 
    }

    function pushRequest(address, method, callback, dontRetry, data) {
        _RequestsQueue.push({
            address: address,
            method: method || METHOD_POST,
            callback: callback,
            retry: dontRetry ? false : true,
            data: data
        });
        checkForNewRequests();
    }

    function pushPostRequest(address, callback) {
        pushRequest(address, METHOD_POST, callback);
    }

    function sendRequest(reqInfo) {
        _sending = true;
        
        const url = _url + reqInfo.address;
        const request = {
            method: reqInfo.method,
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
                "X-Req-Seq": (++_requestSequence).toString(),
                "X-Platform-Version": _platformVersion
            }
        };

        if (_unicorn) 
            request.headers["X-Unicorn"] = _unicorn;
        
        if (reqInfo.data)
            request.body = encodeURI(reqInfo.data);
        
        request.headers["X-Request-Sign"] = getHmacSign(request, reqInfo.address);

        console.info("GO", request);
        fetch(url, request).then(function (response) {
            console.log('Request succeeded with JSON response', response);
            if (response.status === 200) 
                return response.json();
            else {
                return Promise.reject(response);
            }
        }).then((data)=>{
            console.info("DONE ", data);
            _sending = false;
            if (reqInfo.callback)
                reqInfo.callback(data, reqInfo);
            checkForNewRequests();
        })
        .catch(function (error) {
            console.log('Request failed', error);
            if (reqInfo.retry) {
                setTimeout(()=>sendRequest(reqInfo), RETRY_PERIOD);
            } else {
                if (reqInfo.callback)
                    reqInfo.callback(error, reqInfo);
            }
        });
    }
    
    function _checkAuthorization(callback) {
        if (_isAuthorized) {
            if (authCallback)
                authCallback({
                    status: 'error',
                    message: 'already authorized'
                });
            return true;
        }
        return false;
    }
    
    function authCompleted(response, reqInfo) {
        console.warn("AUTH Completed", response, reqInfo);
        
        if (response.hasOwnProperty('gClientId')) {
            localStorage.setItem(CACHED_CLIENT_ID, response["gClientId"]);
            localStorage.setItem(CACHED_CLIENT_SECRET, response["gClientSecret"]);
            _unicorn = response["unicorn"];
            _isAuthorized = true;
        }
        
        if (reqInfo.authCallback)
            reqInfo.authCallback(response);
        
        checkForNewRequests();
    }
    
    function sendAuthRequest(address, authCallback) {
        sendRequest({
            address: address,
            method: METHOD_POST,
            callback: authCompleted,
            authCallback: authCallback
        });
    }
    
    function sendNewGuestAuth(authCallback) {
        sendAuthRequest("/api/v0/accounts.getAccount", authCallback);
    }

    function sendOldGuestAuth(clientId, clientSecret, authCallback) {        
        sendAuthRequest("/api/v0/accounts.getAccount?gclientid={0}&gclientsecret={1}".format(clientId, clientSecret), authCallback);
    }
    
    function _updateProfile(data, callback) {
        pushRequest("/api/v0/profile.updateProfile", METHOD_POST, callback, true, data);
    }

    return {
        init: function(secret, project, environment, domain, platform, version) {
            _hmacSecret = secret;
            _projectName = project;
            _environment = environment;
            _domainName = domain;
            _platformVersion = platform + ";" + version;
            initialize();
        },

        authGuestNew: function(authCallback)
        {
            if (_checkAuthorization(authCallback))
                return false;

            sendNewGuestAuth(authCallback);
        },
        
        authGuest: function (authCallback) {
            if (_checkAuthorization(authCallback))
                return false;
            
            const clientId = localStorage.getItem(CACHED_CLIENT_ID);
            if (clientId) {
                const clientSecret = localStorage.getItem(CACHED_CLIENT_SECRET);
                console.log("RETURN");
                sendOldGuestAuth(clientId, clientSecret, authCallback);
            } else {
                console.log("NEW");
                sendNewGuestAuth(authCallback);                
            }
        },
        
        updateProfile: function (data, callback) {
            _updateProfile(data, callback);
        }
}
})();

if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
        exports = module.exports = GBasePlugin;
    }
    exports.GBasePlugin = GBasePlugin;
}

// GBasePlugin.init('QApc3yTyXNTqvSUvJRRCzvur', 'rmg-h5c', 'dev', 'gbln.app', 'stdl', "0.0.1");
//
// function save() {
//     console.log(">>>>>>");
//     GBasePlugin.updateProfile('{"name":"hello"}');
// }
//
// GBasePlugin.authGuest(save);

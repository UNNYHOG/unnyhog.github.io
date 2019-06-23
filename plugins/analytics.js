class GameAnalytics {

    sendEvent(name, params) {
        if (!params)
            params = {};
        params.eventCategory = name;
        ga('send', 'event', params);
    }

    sendServerError(error, type) {
        console.error("sendServerError", error);

        this.sendEvent("ServerError", {
            error: error.code,
            message: error.message,
            type: type
        });
    }
}

const gameAnalytics = new GameAnalytics();

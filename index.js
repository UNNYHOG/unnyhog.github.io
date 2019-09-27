const UnnyObjectType = {
    Image: 0,
    SpriteSheet: 1,
    Spine: 2,
    NineSlice: 3,
    Audio: 4,
    Json: 5
};

const RESOURCES_SCALE = 100;

let localScale;
let imageSizeLocalScale;
let imagesDeltaScale;
let use2ximages = true;

const CommonVisualData = {
    PRELOAD_OBJECTS: [//Bundle specific images
        'Tut_Circle',
        'Tut_Finger',
        'Lock',
        'LockIcon',
        'LockPuzzle',

        'Background1',
        'PriceIcon',
        'PriceGems',
        'PriceSeeds',
        // 'Building_1',
        // 'Building_2',
        // 'Building_3',
        // 'Building_4',
        // 'Building_5',
        // 'Building_6',
        // 'Building_7',
        // 'Building_8',
        // 'Building_9',

        'Production_Progress_Bar_Back',
        'Production_Progress_Bar',
        'Upgrade_Progress_Bar',

        'LikePlus',
        'TableLike',
        'TableUpgrade',

        'WinStandardBack',
        'WinUpgradeBack',
        'DefaultButton',
        'ExitButton',
        'BlackPixel',
        'CollectionBack',

        'MM_Btn_Login',
        'MM_Btn_Upgrade',
        'MM_Btn_Likes',
        'MM_Btn_Worlds',
        'MM_Btn_Chests',
        'MM_Btn_Store',

        'Tab_Close',
        'Tab_Open',
        'TabIcon_Actual',
        'TabIcon_Money',
        'Store_Slot',

        'BoxTabIcon',
        'PuzzleTabIcon',

        'PuzzleBonusBack',
        'PuzzleItemFrame',
        'PuzzleItemLockDL',
        'PuzzleItemLockDR',
        'PuzzleItemLockUL',
        'PuzzleItemLockUR',
        'PuzzleOpened',
        'PuzzleBronze',
        'PuzzleSilver',
        'PuzzleGold',
        'PuzzleDiamond',

        'PuzzlesOpened',
        'PuzzlesBronze',
        'PuzzlesSilver',
        'PuzzlesGold',
        'PuzzlesDiamond',

        'BoxCounter',

        'FortuneItemTimeTravel',
        'FortuneHUDButton',
        'GiftBox',
        'GiftBoxOpen',
        'GiftBoxSuper',
        'GiftBoxSuperOpen',

        'Quests_RefreshBtn',
        'Quests_ProgressFill',
        'Quests_ProgressBar',
        'QuestsHUDButton',
        'Daily_HUDButton',
        'QuestBack',
        'Daily_Opened',
        'Daily_Active',
        'HudPlusButton',
        'SeedsQuestIcon',

        'Popup',
        'PopupThumbsUp',

        'SettingsBtn',
        'FastProduction',
        'Effect_Glow',
        'AdCam',
        'Notification'
    ],

    ALL_OBJECTS: {

        'AdCam': {
            file: 'UI/HUD_and_common/adCamIcon.png',
        },
        'Music_On': {
            file: 'UI/Windows/Settings/musicOn.png',
        },
        'Music_Off': {
            file: 'UI/Windows/Settings/musicOff.png',
        },

        'Sounds_On': {
            file: 'UI/Windows/Settings/soundsOn.png',
        },
        'Sounds_Off': {
            file: 'UI/Windows/Settings/soundsOff.png',
        },

        'Language_Arabic': {
            file: 'UI/Windows/ChangeLanguage/Arabic.png',
        },
        'Language_Chinese (Simplified)': {
            file: 'UI/Windows/ChangeLanguage/Chinese (Simplified).png',
        },
        'Language_Chinese (Traditional)': {
            file: 'UI/Windows/ChangeLanguage/Chinese (Traditional).png',
        },
        'Language_English': {
            file: 'UI/Windows/ChangeLanguage/English.png',
        },
        'Language_French': {
            file: 'UI/Windows/ChangeLanguage/French.png',
        },
        'Language_German': {
            file: 'UI/Windows/ChangeLanguage/German.png',
        },
        'Language_Italian': {
            file: 'UI/Windows/ChangeLanguage/Italian.png',
        },
        'Language_Japanese': {
            file: 'UI/Windows/ChangeLanguage/Japanese.png',
        },
        'Language_Korean': {
            file: 'UI/Windows/ChangeLanguage/Korean.png',
        },
        'Language_Portuguese (Brazil)': {
            file: 'UI/Windows/ChangeLanguage/Portuguese (Brazil).png',
        },
        'Language_Russian': {
            file: 'UI/Windows/ChangeLanguage/Russian.png',
        },
        'Language_Spanish': {
            file: 'UI/Windows/ChangeLanguage/Spanish.png',
        },

        'LoadingSplash': {
            file: '../LoadingSplash.jpg',
        },
        'LoadingSplash_ProgressBar': {
            file: '../ProgressBar.png',
        },
        'LoadingSplash_ProgressBarFill': {
            file: '../ProgressBarFill.png',
        },

        'Tut_Circle': {
            file: 'Tutorial/Circle.png',
        },

        'LockIcon': {
            file: 'Slots/Lock.png',
        },
        'LockPuzzle': {
            file: 'Slots/LockPuzzle.png',
        },
        'Lock': {
            file: 'Slots/GroundBlocked.png',
        },

        'Notification': {
            file: 'UI/HUD_and_common/ui_button_red.png',
        },

        'PriceIcon': {
            file: 'UI/HUD_and_common/HUD/HudGoldIcon.png',
        },
        'PriceGems': {
            file: 'UI/HUD_and_common/HUD/HudGemIcon.png',
        },
        'PriceSeeds': {
            file: 'UI/HUD_and_common/HUD/HudSeedIcon.png',
        },
        'HudPlusButton': {
            file: 'UI/HUD_and_common/HUD/HudPlusButton.png',
        },
        'SeedsQuestIcon': {
            file: 'UI/HUD_and_common/HUD/SeedsQuestIcon.png',
        },
        'Tut_Finger': {
            type: UnnyObjectType.Spine,
            json: 'finger.json',
            atlas: 'finger.atlas',
            animations: {
                idle: 'active',
            },
        },
        'Background1': {
            type: UnnyObjectType.Spine,
            json: 'world1_fullhd.json',
            atlas: 'world1_fullhd.atlas',
            animations: {
                idle: 'idle',
            },
            files: [
                'world1_fullhd.png',
                'world1_fullhd2.png'
            ]
        },
        'Background2': {
            type: UnnyObjectType.Spine,
            json: 'winter_map_1920x1080.json',
            atlas: 'winter_map_1920x1080.atlas',
            animations: {
                idle: 'Idle',
            }
        },
        'Background3': {
            type: UnnyObjectType.Spine,
            json: 'cosmos_map_1920x1080.json',
            atlas: 'cosmos_map_1920x1080.atlas',
            animations: {
                idle: 'Idle',
            },
            files: [
                'cosmos_map_1920x1080.png',
                'cosmos_map_1920x10802.png'
            ]
        },
        'Building_1w1': {
            type: UnnyObjectType.Spine,
            json: 'Slot1.json',
            atlas: 'Slot1.atlas',
            animations: {
                idle: 'Idle',
                appear: 'Appear',
                action: 'Touch',
            }
        },
        'Building_2w1': {
            type: UnnyObjectType.Spine,
            json: 'Slot2.json',
            atlas: 'Slot2.atlas',
            animations: {
                idle: 'Idle',
                appear: 'Appear',
                action: 'Touch',
            }
        },
        'Building_3w1': {
            type: UnnyObjectType.Spine,
            json: 'Slot3.json',
            atlas: 'Slot3.atlas',
            animations: {
                idle: 'Idle',
                appear: 'Appear',
                action: 'Touch',
            }
        },
        'Building_4w1': {
            type: UnnyObjectType.Spine,
            json: 'Slot4.json',
            atlas: 'Slot4.atlas',
            animations: {
                idle: 'Idle',
                appear: 'Appear',
                action: 'Touch',
            }
        },
        'Building_5w1': {
            type: UnnyObjectType.Spine,
            json: 'Slot5.json',
            atlas: 'Slot5.atlas',
            animations: {
                idle: 'Idle',
                appear: 'Appear',
                action: 'Touch',
            }
        },
        'Building_6w1': {
            type: UnnyObjectType.Spine,
            json: 'Slot6.json',
            atlas: 'Slot6.atlas',
            animations: {
                idle: 'Idle',
                appear: 'Appear',
                action: 'Touch',
            }
        },
        'Building_7w1': {
            type: UnnyObjectType.Spine,
            json: 'slot7.json',
            atlas: 'slot7.atlas',
            animations: {
                idle: 'Idle',
                appear: 'Appear',
                action: 'Touch',
            }
        },
        'Building_8w1': {
            type: UnnyObjectType.Spine,
            json: 'slot8.json',
            atlas: 'slot8.atlas',
            animations: {
                idle: 'Idle',
                appear: 'Appear',
                action: 'Touch',
            }
        },
        'Building_9w1': {
            type: UnnyObjectType.Spine,
            json: 'slot9.json',
            atlas: 'slot9.atlas',
            animations: {
                idle: 'Idle',
                appear: 'Appear',
                action: 'Touch',
            }
        },
        'Building_1w2': {
            type: UnnyObjectType.Spine,
            json: 'Slot1w2.json',
            atlas: 'Slot1w2.atlas',
            animations: {
                idle: 'Idle',
                appear: 'Appear',
                action: 'Touch',
            }
        },
        'Building_2w2': {
            type: UnnyObjectType.Spine,
            json: 'slot2w2.json',
            atlas: 'slot2w2.atlas',
            animations: {
                idle: 'Idle',
                appear: 'Appear',
                action: 'Touch',
            }
        },
        'Building_3w2': {
            type: UnnyObjectType.Spine,
            json: 'slot3w2.json',
            atlas: 'slot3w2.atlas',
            animations: {
                idle: 'Idle',
                appear: 'Appear',
                action: 'Touch',
            }
        },
        'Building_4w2': {
            type: UnnyObjectType.Spine,
            json: 'slot4w2.json',
            atlas: 'slot4w2.atlas',
            animations: {
                idle: 'Idle',
                appear: 'Appear',
                action: 'Touch',
            }
        },
        'Building_5w2': {
            type: UnnyObjectType.Spine,
            json: 'slot5w2.json',
            atlas: 'slot5w2.atlas',
            animations: {
                idle: 'Idle',
                appear: 'Appear',
                action: 'Touch',
            }
        },
        'Building_6w2': {
            type: UnnyObjectType.Spine,
            json: 'slot6w2.json',
            atlas: 'slot6w2.atlas',
            animations: {
                idle: 'Idle',
                appear: 'Appear',
                action: 'Touch',
            }
        },
        'Building_7w2': {
            type: UnnyObjectType.Spine,
            json: 'slot7w2.json',
            atlas: 'slot7w2.atlas',
            animations: {
                idle: 'Idle',
                appear: 'Appear',
                action: 'Touch',
            }
        },
        'Building_8w2': {
            type: UnnyObjectType.Spine,
            json: 'slot8w2.json',
            atlas: 'slot8w2.atlas',
            animations: {
                idle: 'Idle',
                appear: 'Appear',
                action: 'Touch',
            }
        },
        'Building_9w2': {
            type: UnnyObjectType.Spine,
            json: 'slot9w2.json',
            atlas: 'slot9w2.atlas',
            animations: {
                idle: 'Idle',
                appear: 'Appear',
                action: 'Touch',
            }
        },

        'Building_1w3': {
            type: UnnyObjectType.Spine,
            json: 'Slot1w3.json',
            atlas: 'Slot1w3.atlas',
            animations: {
                idle: 'Idle',
                appear: 'Appear',
                action: 'Touch',
            }
        },
        'Building_2w3': {
            type: UnnyObjectType.Spine,
            json: 'Slot2w3.json',
            atlas: 'Slot2w3.atlas',
            animations: {
                idle: 'Idle',
                appear: 'Appear',
                action: 'Touch',
            }
        },
        'Building_3w3': {
            type: UnnyObjectType.Spine,
            json: 'Slot3w3.json',
            atlas: 'Slot3w3.atlas',
            animations: {
                idle: 'Idle',
                appear: 'Appear',
                action: 'Touch',
            }
        },
        'Building_4w3': {
            type: UnnyObjectType.Spine,
            json: 'Slot4w3.json',
            atlas: 'Slot4w3.atlas',
            animations: {
                idle: 'Idle',
                appear: 'Appear',
                action: 'Touch',
            }
        },
        'Building_5w3': {
            type: UnnyObjectType.Spine,
            json: 'Slot5w3.json',
            atlas: 'Slot5w3.atlas',
            animations: {
                idle: 'Idle',
                appear: 'Appear',
                action: 'Touch',
            }
        },
        'Building_6w3': {
            type: UnnyObjectType.Spine,
            json: 'Slot6w3.json',
            atlas: 'Slot6w3.atlas',
            animations: {
                idle: 'Idle',
                appear: 'Appear',
                action: 'Touch',
            }
        },
        'Building_7w3': {
            type: UnnyObjectType.Spine,
            json: 'Slot7w3.json',
            atlas: 'Slot7w3.atlas',
            animations: {
                idle: 'Idle',
                appear: 'Appear',
                action: 'Touch',
            }
        },
        'Building_8w3': {
            type: UnnyObjectType.Spine,
            json: 'Slot8w3.json',
            atlas: 'Slot8w3.atlas',
            animations: {
                idle: 'Idle',
                appear: 'Appear',
                action: 'Touch',
            }
        },
        'Building_9w3': {
            type: UnnyObjectType.Spine,
            json: 'Slot9w3.json',
            atlas: 'Slot9w3.atlas',
            animations: {
                idle: 'Idle',
                appear: 'Appear',
                action: 'Touch',
            }
        },

        'Production_Progress_Bar_Back': {
            file: 'Slots/timeBar.png',
        },
        'Production_Progress_Bar': {
            file: 'Slots/timeprogress.png',
        },
        'Upgrade_Progress_Bar': {
            file: 'Slots/macroProgress.png',
        },
        'LikePlus': {
            file: 'Slots/likePlus.png',
        },
        'TableLike': {
            file: 'Slots/tableLike.png',
        },
        'TableUpgrade': {
            file: 'Slots/tableUpgrade.png',
        },
        'FastProduction': {
            type: UnnyObjectType.SpriteSheet,
            file: 'Slots/timefast.jpg',
            frameWidth: 256,
            frameHeight: 29,
            frames: 8,
            period: 0.033,
        },

        'DefaultButton': {
            file: 'UI/HUD_and_common/Buttons/Btn355x158.png', //TODO Optimize ... too many buttons
            type: UnnyObjectType.NineSlice,
            paddingX: 80,
            paddingY: 79
        },
        'ExitButton': {
            file: 'UI/HUD_and_common/Buttons/CloseBtn.png',
        },
        'BlackPixel': {
            file: 'Backs/BlackPixel.png',
        },
        'CollectionBack': {
            file: 'Backs/CollectionBack.png',
        },

        'MM_Btn_Login': {
            file: 'UI/HUD_and_common/HUD/HudSocialBtn.png',
        },
        'MM_Btn_Upgrade': {
            file: 'UI/HUD_and_common/HUD/HudSlotUpgradeBtn.png',
        },
        'MM_Btn_Likes': {
            file: 'UI/HUD_and_common/HUD/HudLikesBtn.png',
        },
        'MM_Btn_Worlds': {
            file: 'UI/HUD_and_common/HUD/HUDChangeLocation.png',
        },
        'MM_Btn_Chests': {
            file: 'UI/HUD_and_common/HUD/HudPuzzlesBtn.png',
        },
        'MM_Btn_Store': {
            file: 'UI/HUD_and_common/HUD/HudShovelBtn.png',
        },

        'Tab_Close': {
            file: 'UI/Windows/Upgrade/DeactiveTabBack.png',
        },
        'Tab_Open': {
            file: 'UI/Windows/Upgrade/ActiveTabBack.png',
        },
        'TabIcon_Actual': {
            file: 'UI/Windows/Upgrade/ActualTabIcon.png',
        },
        'TabIcon_Money': {
            file: 'UI/Windows/Upgrade/InappTabIcon.png',
        },
        'Store_Slot': {
            file: 'UI/Windows/Upgrade/UpgradeItemBack.png',
        },

        'BoxTabIcon': {
            file: 'UI/Windows/Puzzles/BoxTabIcon.png',
        },
        'PuzzleTabIcon': {
            file: 'UI/Windows/Puzzles/PuzzleTabIcon.png',
        },
        'PuzzleBonusBack': {
            file: 'UI/Windows/Puzzles/PuzzleItem/PuzzleBonusBack.png',
        },
        'PuzzleItemFrame': {
            file: 'UI/Windows/Puzzles/PuzzleItem/PuzzleItemFrame.png',
        },

        'PuzzleItemLockDL': {
            file: 'UI/Windows/Puzzles/PuzzleItem/Parts/blocked/PuzzleItemLockDL.png',
        },
        'PuzzleItemLockDR': {
            file: 'UI/Windows/Puzzles/PuzzleItem/Parts/blocked/PuzzleItemLockDR.png',
        },
        'PuzzleItemLockUL': {
            file: 'UI/Windows/Puzzles/PuzzleItem/Parts/blocked/PuzzleItemLockUL.png',
        },
        'PuzzleItemLockUR': {
            file: 'UI/Windows/Puzzles/PuzzleItem/Parts/blocked/PuzzleItemLockUR.png',
        },
        'PuzzleOpened': {
            file: 'UI/Windows/Puzzles/PuzzleItem/Parts/opened/s.png',
        },
        'PuzzleBronze': {
            file: 'UI/Windows/Puzzles/PuzzleItem/Parts/bronze/s.png',
        },
        'PuzzleSilver': {
            file: 'UI/Windows/Puzzles/PuzzleItem/Parts/silver/s.png',
        },
        'PuzzleGold': {
            file: 'UI/Windows/Puzzles/PuzzleItem/Parts/gold/s.png',
        },
        'PuzzleDiamond': {
            file: 'UI/Windows/Puzzles/PuzzleItem/Parts/diamond/s.png',
        },

        'PuzzlesOpened': {
            file: 'UI/Windows/Puzzles/PuzzlesOpened.png',
        },
        'PuzzlesBronze': {
            file: 'UI/Windows/Puzzles/PuzzlesBronze.png',
        },
        'PuzzlesSilver': {
            file: 'UI/Windows/Puzzles/PuzzlesSilver.png',
        },
        'PuzzlesGold': {
            file: 'UI/Windows/Puzzles/PuzzlesGold.png',
        },
        'PuzzlesDiamond': {
            file: 'UI/Windows/Puzzles/PuzzlesDiamond.png',
        },
        'BoxCounter': {
            file: 'UI/Windows/Puzzles/BoxCounter.png',
        },
        'CollectCrop': {
            file: 'UI/WindowsBigPictures/CollectCrop.png',
        },
        'Banjo': {
            file: 'UI/WindowsBigPictures/Banjo.png',
        },
        'BanjoEnd': {
            file: 'UI/WindowsBigPictures/BanjoEnd.png',
        },
        'MultiplyOnStart': {
            file: 'UI/WindowsBigPictures/MultiplyOnStart.png',
        },
        'Cloud': {
            file: 'UI/WindowsBigPictures/Cloud.png',
        },

        'Popup': {
            file: 'UI/HUD_and_common/Popup.png',
        },
        'PopupThumbsUp': {
            file: 'UI/HUD_and_common/PopupThumbsUp.png',
        },

        'NotEnoughGems' : {
            file :'UI/WindowsBigPictures/NotEnoughGems.png',
        },
        'NoAdAndRatings' : {
            file : 'UI/WindowsBigPictures/spaceman.png',
        },
        'OtherWorldsLocked': {
            file: 'UI/WindowsBigPictures/Scientist.png'
        },
        'Wait' : {
            file : 'UI/WindowsBigPictures/Wait.png',
        },
        // 'Clockwork_icon_big' : {
        //     file : 'GoodsBuyWindowIcons/Clockwork_icon.png',
        // },
        'AppleInfo' : {
            file: 'UI/WindowsBigPictures/AppleInfo.png',
        },
        'TimeTravel4h' : {
            file : 'UI/Windows/Upgrade/Items/TimeTravel4h.png',
        },
        'TimeTravel24h' : {
            file : 'UI/Windows/Upgrade/Items/TimeTravel24h.png',
        },
        'TimeTravel7d' : {
            file : 'UI/Windows/Upgrade/Items/TimeTravel7d.png',
        },

        'collectCropSplash': {
            file: 'Backs/collectCropSplash.png',
        },


        'FortuneWheelBack': {
            file: 'UI/Windows/FortuneWindow/WheelBack.png',
        },
        'FortuneWheel': {
            file: 'UI/Windows/FortuneWindow/Wheel.png',
        },
        'FortuneItemTimeTravel': {
            file: 'UI/Windows/FortuneWindow/ItemTimeTravel.png',
        },
        'FortuneHUDButton': {
            file: 'UI/Windows/FortuneWindow/HUDButton.png',
        },
        'FortuneDevil': {
            file: 'UI/Windows/FortuneWindow/Devil.png',
        },
        'FortuneWheelArrow': {
            file: 'UI/Windows/FortuneWindow/WheelArrow.png',
        },
        'OpenedBox': {
            file: 'UI/Windows/Puzzles/OpenedBox.png',
        },
        'GiftBox': {
            file: 'UI/Windows/Upgrade/Items/GiftBox.png',
        },
        'GiftBoxSuper': {
            file: 'UI/Windows/Upgrade/Items/GiftBoxSuper.png',
        },

        'QuestBack': {
            file: 'UI/Windows/DailyQuests/Back.png',
        },
        'Quests_ProgressFill': {
            file: 'UI/Windows/DailyQuests/ProgressFill.png',
        },
        'Quests_ProgressBar': {
            file: 'UI/Windows/DailyQuests/ProgressBar.png',
        },
        'Quests_RefreshBtn': {
            file: 'UI/Windows/DailyQuests/RefreshBtn.png',
        },
        'QuestsHUDButton': {
            file: 'UI/HUD_and_common/HUD/HudDailyQuestsBtn.png',
        },

        'Daily_Opened': {
            file: 'UI/Windows/LoginBonus/Opened.png',
        },
        'Daily_Closed': {
            file: 'UI/Windows/LoginBonus/Closed.png',
        },
        'Daily_Active': {
            file: 'UI/Windows/LoginBonus/Active.png',
        },
        'Daily_Check': {
            file: 'UI/Windows/LoginBonus/04.png',
        },
        'Daily_HUDButton': {
            file: 'UI/HUD_and_common/HUD/HudLoginBonusBtn.png',
        },
        'GiftBoxSuperOpen' : {
            file :'UI/Windows/GetPuzzlePart/Chest_open.png',
        },
        'GiftBoxOpen' : {
            file :'UI/Windows/GetPuzzlePart/ChestNormalOpen.png',
        },

        'SettingsBtn' : {
            file :'UI/HUD_and_common/SeetingBtn.png',
        },

        'Effect_Glow': {
            file: 'Effects/glow.png',
        },
    },
};

if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
        exports = module.exports = CommonVisualData;
    }
    exports.CommonData = CommonVisualData;
    exports.UnnyObjectType = UnnyObjectType;
}

class GameTrail {
    constructor(game) {
        const engine = game.engine;
        this.group = engine.add.group();

        this.points = [];
        // const d = 0.2;
        for (let i = 0;i<10;i++) {
            const img = this.group.create(0, 0, "Effect_Glow").setDepth(WinDefaultDepth).setScale(0.5 ,0.5).setOrigin(0.5, 0);
            // img.setCrop(0, img.height * d, img.width, img.height * (1 - d * 2));
            this.points.push(img);
        }

        const trail = this;
        document.body.onmousedown = function(ev) {
            trail.showTrail({x: ev.clientX / ScreenSize.width * RealScreenWidth, y: ev.clientY / ScreenSize.height * RealScreenHeight});
        };
        document.body.onmouseup = function() {
            trail.hideTrail();
        };
        document.body.onmousemove = function(ev) {
            trail.moveTrail({x: ev.clientX / ScreenSize.width * RealScreenWidth, y: ev.clientY / ScreenSize.height * RealScreenHeight});
        };

        game.update.addListener(this.update.bind(this));

        SetGroupVisible(this.group, false);
    }

    showTrail(pos) {
        this.visible = true;
        for (let i = 0; i < this.points.length; i++)
            this.points[i].setPosition(pos.x, pos.y);

        SetGroupVisible(this.group, true);
    }

    moveTrail(pos) {
        this.points[0].setPosition(pos.x, pos.y);
    }

    update(deltaTime) {
        if (this.visible) {
            // for (let i = this.points.length - 1;i > 0; i--) {
            //     const p = this.points[i];
            //     const p0 = this.points[i - 1];
            //     p.x = p0.x;
            //     p.y = p0.y;
            // }

            for (let i = 1;i < this.points.length; i++) {
                const p = this.points[i];
                const dx = this.points[i-1].x - p.x;
                const dy = this.points[i-1].y - p.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 1) {
                    p.setScale(0.5, 0);
                    continue;
                }

                const newDist = dist * 0.75;
                const k = newDist/dist;

                p.angle = -Math.atan2(dx, dy) / Math.PI * 180;
                p.setScale(0.5, dist / 38);

                p.x = p.x + dx * k;
                p.y = p.y + dy * k;
            }
        }
    }

    hideTrail() {
        this.visible = false;
        SetGroupVisible(this.group, false);
    }
}

let gameTrail;

let CommonData = null;

const totalScale = 1;//temporary - it should be 1 in the release

let RealScreenWidth = 1920 * totalScale;
let RealScreenHeight = 1080 * totalScale;
const GlobalScale = 0.595;

const NormalTint = 0xffffff;
const LockTint = 0xaaaaaa;

var VisualData = (function() {

    let DATA_FOLDER = './games/fish/data/';
    let DATA_LOCALIZATIONS_RELATIVE = '../localizations/';
    let DATA_AUDIO = './games/fish/Audio/';
    let IMAGES_FOLDER = './games/fish/images/';
    let IMAGES_FOLDER_2x = './games/fish/images2x/';
    let STORE_IMAGES_FOLDER = 'UI/Windows/Upgrade/Items/';
    let PUZZLE_UI_FOLDER = 'UI/Windows/Puzzles/';
    let PUZZLE_IMAGES_FOLDER = 'GoodsPuzzleIcons/';

    let QUEST_ICONS_FOLDER = 'UI/Windows/DailyQuests/DailyQuests Icons/';
    let DAILY_ICONS_FOLDER = 'UI/Windows/LoginBonus/BonusTypes/';

    if (typeof exports !== 'undefined') {
        CommonData = require('../../../CommonVisualData');
        UnnyObjectType = CommonData.UnnyObjectType;
    } else
        CommonData = CommonVisualData;

    const AllLanguages = [
        'Arabic',
        // 'Chinese (Simplified)',
        // 'Chinese (Traditional)',
        'English',
        'French',
        'German',
        'Italian',
        'Japanese',
        'Korean',
        'Portuguese (Brazil)',
        'Russian',
        'Spanish'
    ];

    const PaymentInfo = {
        hellprodgems100: {
            vk_price: 20,
            //ok_price: 20 * 7
            ok_price: 20
        },
        hellprodgems200: {
            vk_price: 40,
            ok_price: 40 * 7
        },
        hellprodgems300: {
            vk_price: 80,
            ok_price: 80 * 7
        },
        hellprodgems400: {
            vk_price: 160,
            ok_price: 160 * 7
        },
        hellprodgems500: {
            vk_price: 320,
            ok_price: 320 * 7
        }
    };

    const LocalObjects = {
        'Fabrika': {
            type: UnnyObjectType.Spine,
                json: 'fabrika2.json',
                atlas: 'fabrika2.atlas',
                animations: {
                idle: 'Active',
                    appear: 'Appear'
            },
        },
        'Podkova': {
            type: UnnyObjectType.Spine,
            json: 'podkova.json',
            atlas: 'podkova.atlas',
            animations: {
                idle: 'Idle',
                active: 'Active'
            },
        },
        'SplitScreen': {
            type: UnnyObjectType.Spine,
            json: 'SplitScreen.json',
            atlas: 'SplitScreen.atlas',
            animations: {
                appear: 'Appear',
                disappear: 'Disappear',
                idle: 'Idle_2'
            },
        },
        'FactoryWorking': {
            type: UnnyObjectType.Spine,
                json: 'Conveer_fullhd.json',
                atlas: 'Conveer_fullhd.atlas',
                animations: {
                idle: 'idle',
            },
        },

        'WinStandardBack': {
            file: 'UI/Windows/Common/standartBack.png',
                type: UnnyObjectType.NineSlice,
                paddingX: 100,
                paddingY: 70
        },
        'WinStandardBack2': {
            file: 'UI/Windows/Common/back2.png',
                type: UnnyObjectType.NineSlice,
                paddingX: 100,
                paddingY: 70
        },
        'WinUpgradeBack': {
            file: 'UI/Windows/Upgrade/UpgradeWindowBack.png',
                type: UnnyObjectType.NineSlice,
                paddingX: 100,
                paddingY: 70
        },
        'DefaultButton_Slice': {
            file: 'UI/HUD_and_common/Buttons/Btn355x158.png', //TODO Optimize ... too many buttons
                type: UnnyObjectType.NineSlice,
                paddingX: 80,
                paddingY: 79
        },


        'MM_Btn_Bread': {
            file: 'UI/HUD_and_common/HUD/HudBreadBtn.png',
        },
        'MM_Btn_Worlds_Inverse': {
            file: 'UI/HUD_and_common/HUD/locEarth.png',
        },
        'MM_Btn_Worlds2': {
            file: 'UI/HUD_and_common/HUD/locWinter.png',
        },
        'MM_Btn_Worlds2_Inverse': {
            file: 'UI/HUD_and_common/HUD/HudTempBtn.png',
        },

        'ui_headline': {
            file: 'UI/Windows/Upgrade/ui_headline.png',
        },

        'bread_1': {
            file: 'bread/bread_1.png'
        },
        'bread_2': {
            file: 'bread/bread_2.png'
        },
        'bread_3': {
            file: 'bread/bread_3.png'
        },
        'bread_4': {
            file: 'bread/bread_4.png'
        },
        'bread_5': {
            file: 'bread/bread_5.png'
        },
        'bread_6': {
            file: 'bread/bread_6.png'
        },
        'bread_7': {
            file: 'bread/bread_7.png'
        },

        'LockWater': {
            file: 'Slots/WaterBlocked.png',
        },

        'RainTimerBack': {
            file: 'UI/HUD_and_common/HUD/RainTimerBack.png',
        },

        'BackgroundMusic': {
            type: UnnyObjectType.Audio,
            file: '../Audio/Fishclicker - Music/MUS_Sea_Theme_Loop.ogg',
        },
        'BackgroundMusic2': {
            type: UnnyObjectType.Audio,
            file: '../Audio/Fishclicker - Music/MUS_Space_Theme_Loop.ogg',
        },
        'BackgroundMusic3': {
            type: UnnyObjectType.Audio,
            file: '../Audio/Fishclicker - Music/MUS_Winter_Theme_Loop.ogg',
        },
        'Gathering': {
            type: UnnyObjectType.Audio,
            file: '../Audio/Fishclicker - Music/MUS_Gathering_Loop.ogg',
        },
        'Banjoded': {
            type: UnnyObjectType.Audio,
            file: '../Audio/Fishclicker - Music/MUS_Bread_Theme.ogg',
        },
        'Audio_Chest_1': {
            type: UnnyObjectType.Audio,
            file: '../Audio/Sounds/GetPuzzlePart/chest_1.wav',
        },
        'Audio_Chest_2': {
            type: UnnyObjectType.Audio,
            file: '../Audio/Sounds/GetPuzzlePart/chest_2.wav',
        },
        'Audio_Chest_3': {
            type: UnnyObjectType.Audio,
            file: '../Audio/Sounds/GetPuzzlePart/chest_3.wav',
        },
        'Audio_longtap1': {
            type: UnnyObjectType.Audio,
            file: '../Audio/Sounds/ObjectsClick/longtap1.wav',
        },
        'Audio_longtap2': {
            type: UnnyObjectType.Audio,
            file: '../Audio/Sounds/ObjectsClick/longtap2.wav',
        },
        'Audio_longtap3': {
            type: UnnyObjectType.Audio,
            file: '../Audio/Sounds/ObjectsClick/longtap3.wav',
        },
        'Audio_longtap4': {
            type: UnnyObjectType.Audio,
            file: '../Audio/Sounds/ObjectsClick/longtap4.wav',
        },
        'Audio_Pop-ani-1': {
            type: UnnyObjectType.Audio,
            file: '../Audio/Fishclicker - Sounds/SND_Tap_1.ogg',
        },
        'Audio_Pop-ani-2': {
            type: UnnyObjectType.Audio,
            file: '../Audio/Fishclicker - Sounds/SND_Tap_2.ogg',
        },
        'Audio_Pop-ani-3': {
            type: UnnyObjectType.Audio,
            file: '../Audio/Fishclicker - Sounds/SND_Tap_3.ogg',
        },
        'Audio_ClickUI': {
            type: UnnyObjectType.Audio,
            file: '../Audio/Fishclicker - Sounds/SND_Click.ogg',
        },
        'Audio_Info': {
            type: UnnyObjectType.Audio,
            file: '../Audio/Fishclicker - Sounds/SND_Tap_Dif_Level_Up.ogg',
        },
        // 'Audio_LevelUp': {
        //     type: UnnyObjectType.Audio,
        //     file: '../Audio/Sounds/UI/LevelUp.wav',
        // },
        'Audio_Money': {
            type: UnnyObjectType.Audio,
            file: '../Audio/Fishclicker - Sounds/SND_Fly_Fish_2.ogg',
        },
        'Audio_Window': {
            type: UnnyObjectType.Audio,
            file: '../Audio/Fishclicker - Sounds/SND_Window_Show.ogg',
        },
        // 'Audio_WindowHide': {
        //     type: UnnyObjectType.Audio,
        //     file: '../Audio/Fishclicker - Sounds/SND_Window_Hide.ogg',
        // },
    };

    const PreloadObjects = [
        'SplitScreen',
        'Fabrika',
        'Podkova',

        'WinStandardBack2',
        'DefaultButton_Slice',

        'MM_Btn_Bread',
        'MM_Btn_Worlds_Inverse',
        'MM_Btn_Worlds2',
        'MM_Btn_Worlds2_Inverse',

        'ui_headline',
        'LockWater',
        'RainTimerBack'
    ];

    const GameSettings = {
        fb_app_id: 2077329288999958,//hz
        vk_app_id: 7123740,//6955719,
        photos: false,
        likes: {
            ok: true,
            vk: false,
        },
        share: {
            ok: true,
            vk: false,
        }
    };

    return {
        getGameSettings() {
            return GameSettings;
        },

        getAllLanguages() {
            return AllLanguages;
        },

        getGlobalScale() {
            return GlobalScale;
        },

        IsVertical() {
            return false;
        },

        getWorldsCount() {
            return 3;
        },

        getPaymentInfoById(id) {
            return PaymentInfo.hasOwnProperty(id) ? PaymentInfo[id] : null;
        },

        ANIMATIONS: {
            flyingResources: 1.5,
            flyingResourcesScale: 1,
        },

        GUI_WinStore: {
            headerImg: "ui_headline",
            headerOffsetY: -270,
            btnOffsetY: 330,
            descOffsetY: 160,
            nineSlice: "store",
            togglesX: -700,
            togglesY: -550,
            togglesDistance: 160,
            activeOffset: 30,
            iconOffset: 90,
            iconOffsetActive: 160,
            imageOffset: 80,
        },

        GUI_WinConstruct: {
            nineSlice: "small",
            headerOffset: -450,
            buttonOffset: 400,
        },

        GUI_WinWithPicture: {
            nineSlice: "long",
            imageX: -500,
            imageY: 0,
            headerOffset: -370,
            buttonOffset: 300,
            buttonOffsetX: 350,
            descriptionX: 350,
            descriptionY: 0,
        },

        GUI_WinAppleDescription: {
            nineSlice: "long",
            centerX: 350,
            distanceX: 430,
            startY: -150,
            distanceY: 75,
            imageX: -500,
            imageY: -200,
            headerOffset: -370,
        },

        GUI_WinPuzzle: {
            nineSlice: "puzzle",
            storeDistanceX: 270,
            storeDistanceY: 370,
            togglesX: 700,
            togglesY: -480,
            togglesDistance: 160,
            activeOffset: 30,
            iconOffset: 90,
            iconOffsetActive: 160,
            imageOffset: 80,
            centerBlock: false,
            showGrid: false,
            partSize: 310,
            frontPartSize: 330,
            BonusOffsetX: 160,
        },

        GUI_BuildingsGUI : {
            loaderOffsetX: 0,
            loaderOffsetY: -105,
            loaderScale: 1,
            purchaseIconScale: 1
        },

        GUI_WinDailyBonus : {
            columns: 8,
            rows: 4,
            distance: 300,
            addDistance: 50,
        },

        GUI_WinFortuneWheel: {
            backX: 0,
            backY: -50,
            rotationX: 0,
            rotationY: 70,
            buttonY: 800,
            heroX: 500,
            heroY: 300,
            arrowX: 0,
            arrowY: -500,
            headerY: 100,
            initRotation: 180,
            radius: 250,

            backSize: {
                width: 1327,
                height: 1177
            },
            lights: [
                {
                    x: 180,
                    y: 1000,
                },
                {
                    x: 160,
                    y: 830,
                },
                {
                    x: 125,
                    y: 640,
                },
                {
                    x: 150,
                    y: 520,
                },
                {
                    x: 130,
                    y: 300,
                },
                {
                    x: 200,
                    y: 130,
                },
                {
                    x: 375,
                    y: 125,
                },
                {
                    x: 525,
                    y: 150,
                },

                {
                    x: 860,
                    y: 150,
                },
                {
                    x: 1010,
                    y: 125,
                },
                {
                    x: 1125,
                    y: 125,
                },
                {
                    x: 1200,
                    y: 260,
                },
                {
                    x: 1210,
                    y: 430,
                },
                {
                    x: 1175,
                    y: 525,
                },
                {
                    x: 1180,
                    y: 715,
                },
                {
                    x: 1200,
                    y: 845,
                },
                {
                    x: 1170,
                    y: 1010,
                }
            ]
        },

        GUI_WinQuests: {
            distance: 500,
            centerY: 50,
            iconsScale: 0.75,
            noMoreQuestsIcon: 'FortuneDevil'
        },

        GUI_HUDResources: {
            labelOffsetY: -6,
            greenButtonOffsetX1: 420,

            singleImage: 'RainTimerBack',
            hudBackScale: 1.5
        },

        getFolderPath: function () {
            return use2ximages ? IMAGES_FOLDER_2x : IMAGES_FOLDER;
        },

        getAtlasPath: function () {
            return use2ximages ? 'altas_spritesv1.json' : 'altas_spritesv2.json';
        },

        getAtlasFullPath: function () {
            return use2ximages ? './games/fish/images2x/altas_spritesv1.json' : './games/fish/images/altas_spritesv2.json';
        },

        getQuestIcons: function () {
            return QUEST_ICONS_FOLDER;
        },

        getDataFolder() {
            return DATA_FOLDER;
        },

        getDailyBonusIconsFolder() {
            return DAILY_ICONS_FOLDER;
        },

        getLocalizationsFolder() {
            return DATA_LOCALIZATIONS_RELATIVE;
        },

        getAudioFolder() {
            return DATA_AUDIO;
        },

        getStoreFolder() {
            return STORE_IMAGES_FOLDER;
        },

        getPuzzleFolder() {
            return PUZZLE_IMAGES_FOLDER;
        },

        getPuzzleUIFolder() {
            return PUZZLE_UI_FOLDER;
        },

        getGullPath: function (path) {
            return path ? IMAGES_FOLDER + path : IMAGES_FOLDER;
        },

        getAutoClickSlot1Id() {
            return 23;
        },

        WINDOW_NINE_SLICE: {
            store: {
                name: 'WinUpgradeBack',
                width: 1800,
                height: 1400,
                y: 130
            },
            small: {
                name: 'WinStandardBack',
                width: 1200,
                height: 1200,
                y: 0
            },
            long: {
                name: 'WinStandardBack',
                width: 1800,
                height: 1000,
                y: 0
            },
            puzzle: {
                name: 'WinStandardBack2',
                width: 1800,
                height: 1000,
            }
        },

        STORE_SCROLL_CONFIG: {
            maxSlots: 9,
            columns: 3,
            cellWidth: 500,
            cellHeight: 850,
            offsetX: 0,
            offsetY: 170,
            width: 1600,
            height: 1200,
        },

        PUZZLE_SCROLL_CONFIG: {
            columns: 4,
            cellWidth: 350,
            cellHeight: 350,
            offsetX: 0,
            offsetY: 0,
            width: 1600,
            height: 900,
        },

        PUZZLE_SCROLL_CONFIG_STORE: {
            columns: 3,
            cellWidth: 500,
            cellHeight: 850,
            offsetX: 0,
            offsetY: 0,
            width: 1600,
            height: 900,
        },

        BUNDLE_FOLDERS: [//Bundle the folders
            'GoodsBuyWindowIcons',
            'GoodsSmallIcons',
            'GoodsDrops',
            'GoodsPuzzleIcons',
            STORE_IMAGES_FOLDER,
            QUEST_ICONS_FOLDER,
            DAILY_ICONS_FOLDER
            // '../Audio/'
        ],

        PRELOAD_OBJECTS: CommonData.PRELOAD_OBJECTS.concat(PreloadObjects),

        MAP_PARAMS: {
            width: 1536,
            height: 2448,
        },

        BACKGROUNDS: {
            1: {
                objects: [
                    {
                        name: 'Background1'
                    }
                ]
            },
            2: {
                objects: [
                    {
                        name: 'Background2',
                    }
                ]
            },
            3: {
                objects: [
                    {
                        name: 'Background3',
                    }
                ]
            }
        },

        SPLIT_SCREEN: {
            objects: [
                {
                    name: 'SplitScreen'
                }
            ]
        },

        FACTORY_WORKING: {
            objects: [
                {
                    name: 'FactoryWorking'
                }
            ]
        },

        FABRIKA: {
            objects: [
                {
                    click: true,
                    name: 'Fabrika',
                    scale: 0.2 * totalScale,
                    x: 750,
                    y: -320,
                }
            ]
        },

        PODKOVA: {
            objects: [
                {
                    click: true,
                    name: 'Podkova',
                    scale: 0.2 * totalScale,
                    x: -800,
                    y: -50,
                }
            ]
        },

        ALL_OBJECTS: Object.assign({}, CommonData.ALL_OBJECTS, LocalObjects),

        ATLASES: [
            'altas_spritesv2'
        ],
        ATLASES_2x: [
            'altas_spritesv1'
        ],

        VISUAL_BUILDINGS: {
            start1w1: {
                objects: [
                    {
                        name: 'Lock',
                        x: -106,
                        y: -52,
                    },
                ]
            },
            start2w1: {
                objects: [
                    {
                        name: 'Lock',
                        x: 32,
                        y: -16,
                    },
                ]
            },
            start3w1: {
                objects: [
                    {
                        name: 'LockWater',
                        x: 70,
                        y: -26,
                    },
                ]
            },
            start4w1: {
                objects: [
                    {
                        name: 'Lock',
                        x: 20,
                        y: -70,
                    },
                ]
            },
            start5w1: {
                objects: [
                    {
                        name: 'LockWater',
                        x: 76,
                        y: -50,
                    },
                ]
            },
            start6w1: {
                objects: [
                    {
                        name: 'LockWater',
                        x: 8,
                        y: -56,
                    },
                ]
            },
            start7w1: {
                objects: [
                    {
                        name: 'LockWater',
                        x: -30,
                        y: -64,
                    },
                ]
            },
            start8w1: {
                objects: [
                    {
                        name: 'LockWater',
                        x: -22,
                        y: -84,
                    },
                ]
            },
            start9w1: {
                objects: [
                    {
                        name: 'LockWater',
                        x: -90,
                        y: -66,
                    },
                ]
            },

            start1w2: {
                objects: [
                    {
                        name: 'Lock',
                        x: -46,
                        y: -70,
                    },
                ]
            },
            start2w2: {
                objects: [
                    {
                        name: 'Lock',
                        x: 26,
                        y: -80,
                    },
                ]
            },
            start3w2: {
                objects: [
                    {
                        name: 'Lock',
                        x: -40,
                        y: -100,
                    },
                ]
            },
            start4w2: {
                objects: [
                    {
                        name: 'Lock',
                        x: -10,
                        y: -74,
                    },
                ]
            },
            start5w2: {
                objects: [
                    {
                        name: 'LockWater',
                        x: -10,
                        y: -46,
                    },
                ]
            },
            start6w2: {
                objects: [
                    {
                        name: 'LockWater',
                        x: -12,
                        y: -72,
                    },
                ]
            },
            start7w2: {
                objects: [
                    {
                        name: 'LockWater',
                        x: -30,
                        y: -80,
                    },
                ]
            },
            start8w2: {
                objects: [
                    {
                        name: 'LockWater',
                        x: -84,
                        y: -100,
                    },
                ]
            },
            start9w2: {
                objects: [
                    {
                        name: 'LockWater',
                        x: -190,
                        y: -106,
                    },
                ]
            },

            start1w3: {
                objects: [
                    {
                        name: 'Lock',
                        x: 90,
                        y: -60,
                    },
                ]
            },
            start2w3: {
                objects: [
                    {
                        name: 'Lock',
                        x: -160,
                        y: -40,
                    },
                ]
            },
            start3w3: {
                objects: [
                    {
                        name: 'Lock',
                        x: -20,
                        y: -26,
                    },
                ]
            },
            start4w3: {
                objects: [
                    {
                        name: 'Lock',
                        x: 36,
                        y: -40,
                    },
                ]
            },
            start5w3: {
                objects: [
                    {
                        name: 'LockWater',
                        x: -60,
                        y: 0,
                    },
                ]
            },
            start6w3: {
                objects: [
                    {
                        name: 'Lock',
                        x: -10,
                        y: -60,
                    },
                ]
            },
            start7w3: {
                objects: [
                    {
                        name: 'Lock',
                        x: -120,
                        y: -20,
                    },
                ]
            },
            start8w3: {
                objects: [
                    {
                        name: 'Lock',
                        x: -90,
                        y: -20,
                    },
                ]
            },
            start9w3: {
                objects: [
                    {
                        name: 'LockWater',
                        x: -160,
                        y: -46,
                    },
                ]
            },

            building1w1: {
                objects: [
                    {
                        scale: 0.2 * totalScale,
                        x: -70,
                        y: 6,
                    }
                ]
            },
            building2w1: {
                objects: [
                    {
                        scale: 0.21 * totalScale,
                        x: 44,
                        y: 0,
                    }
                ]
            },
            building3w1: {
                objects: [
                    {
                        scale: 0.19 * totalScale,
                        x: 24,
                        y: 10,
                    }
                ]
            },
            building4w1: {
                objects: [
                    {
                        scale: 0.24 * totalScale,
                        x: 50,
                        y: -30,
                    }
                ]
            },
            building5w1: {
                objects: [
                    {
                        scale: 0.17 * totalScale,
                        x: 56,
                        y: 20,
                    }
                ]
            },
            building6w1: {
                objects: [
                    {
                        scale: 0.16 * totalScale,
                        x: 30,
                        y: 0,
                    }
                ]
            },
            building7w1: {
                objects: [
                    {
                        scale: 0.17 * totalScale,
                        x: 0,
                        y: 0,
                    }
                ]
            },
            building8w1: {
                objects: [
                    {
                        scale: 0.16 * totalScale,
                        x: -10,
                        y: -46,
                    }
                ]
            },
            building9w1: {
                objects: [
                    {
                        scale: 0.17 * totalScale,
                        x: -30,
                        y: -4,
                    }
                ]
            },

            building1w2: {
                objects: [
                    {
                        scale: 0.31 * totalScale,
                        x: -40,
                        y: -24,
                    }
                ]
            },
            building2w2: {
                objects: [
                    {
                        scale: 0.17 * totalScale,
                        x: 40,
                        y: -22,
                    }
                ]
            },
            building3w2: {
                objects: [
                    {
                        scale: 0.32 * totalScale,
                        x: -44,
                        y: -40,
                    }
                ]
            },
            building4w2: {
                objects: [
                    {
                        scale: 0.14 * totalScale,
                        x: -20,
                        y: -50,
                    }
                ]
            },
            building5w2: {
                objects: [
                    {
                        scale: 0.16 * totalScale,
                        x: -10,
                        y: -50,
                    }
                ]
            },
            building6w2: {
                objects: [
                    {
                        scale: 0.18 * totalScale,
                        x: -36,
                        y: -70,
                    }
                ]
            },
            building7w2: {
                objects: [
                    {
                        scale: 0.21 * totalScale,
                        x: -30,
                        y: 10,
                    }
                ]
            },
            building8w2: {
                objects: [
                    {
                        scale: 0.17 * totalScale,
                        x: -100,
                        y: 10,
                    }
                ]
            },
            building9w2: {
                objects: [
                    {
                        scale: 0.23 * totalScale,
                        x: -140,
                        y: -110,
                    }
                ]
            },

            building1w3: {
                objects: [
                    {
                        scale: 0.1 * totalScale,
                        x: 104,
                        y: -10,
                    }
                ]
            },
            building2w3: {
                objects: [
                    {
                        scale: 0.12 * totalScale,
                        x: -144,
                        y: -4,
                    }
                ]
            },
            building3w3: {
                objects: [
                    {
                        scale: 0.1 * totalScale,
                        x: 14,
                        y: 0,
                    }
                ]
            },
            building4w3: {
                objects: [
                    {
                        scale: 0.13 * totalScale,
                        x: 20,
                        y: -10,
                    }
                ]
            },
            building5w3: {
                objects: [
                    {
                        scale: 0.09 * totalScale,
                        x: -40,
                        y: -20,
                    }
                ]
            },
            building6w3: {
                objects: [
                    {
                        scale: 0.16 * totalScale,
                        x: -10,
                        y: 10,
                    }
                ]
            },
            building7w3: {
                objects: [
                    {
                        scale: 0.11 * totalScale,
                        x: -6,
                        y: 20,
                    }
                ]
            },
            building8w3: {
                objects: [
                    {
                        scale: 0.1 * totalScale,
                        x: -86,
                        y: -20,
                    }
                ]
            },
            building9w3: {
                objects: [
                    {
                        scale: 0.13 * totalScale,
                        x: -164,
                        y: -4,
                    }
                ]
            }
        },

        PLACED_BUILDINGS: {
            1: {
                position: {
                    x: 660 * totalScale,
                    y: 356 * totalScale
                }
            },
            2: {
                position: {
                    x: -500 * totalScale,
                    y: 384 * totalScale
                }
            },
            3: {
                position: {
                    x: -560 * totalScale,
                    y: 104 * totalScale
                }
            },
            4: {
                position: {
                    x: -20 * totalScale,
                    y: 390 * totalScale
                }
            },
            5: {
                position: {
                    x: -100 * totalScale,
                    y: 64 * totalScale
                }
            },
            6: {
                position: {
                    x: -400 * totalScale,
                    y: -160 * totalScale
                }
            },
            7: {
                position: {
                    x: 130 * totalScale,
                    y: -162 * totalScale
                }
            },
            8: {
                position: {
                    x: 350 * totalScale,
                    y: 230 * totalScale
                }
            },
            9: {
                position: {
                    x: 520 * totalScale,
                    y: 10 * totalScale
                }
            },

            10: {
                position: {
                    x: 650 * totalScale,
                    y: 456 * totalScale
                }
            },
            11: {
                position: {
                    x: -480 * totalScale,
                    y: 456 * totalScale
                }
            },
            12: {
                position: {
                    x: 0 * totalScale,
                    y: 456 * totalScale
                }
            },
            13: {
                position: {
                    x: 356 * totalScale,
                    y: 288 * totalScale
                }
            },
            14: {
                position: {
                    x: -50 * totalScale,
                    y: 134 * totalScale
                }
            },
            15: {
                position: {
                    x: -420 * totalScale,
                    y: 140 * totalScale
                }
            },
            16: {
                position: {
                    x: 80 * totalScale,
                    y: -172 * totalScale
                }
            },
            17: {
                position: {
                    x: -250 * totalScale,
                    y: -150 * totalScale
                }
            },
            18: {
                position: {
                    x: 626 * totalScale,
                    y: 0 * totalScale
                }
            },

            19: {
                position: {
                    x: 580 * totalScale,
                    y: 446 * totalScale
                }
            },
            20: {
                position: {
                    x: -370 * totalScale,
                    y: 446 * totalScale
                }
            },
            21: {
                position: {
                    x: -20 * totalScale,
                    y: 426 * totalScale
                }
            },
            22: {
                position: {
                    x: 340 * totalScale,
                    y: 290 * totalScale
                }
            },
            23: {
                position: {
                    x: 130 * totalScale,
                    y: -180 * totalScale
                }
            },
            24: {
                position: {
                    x: -50 * totalScale,
                    y: 170 * totalScale
                }
            },
            25: {
                position: {
                    x: -420 * totalScale,
                    y: 90 * totalScale
                }
            },
            26: {
                position: {
                    x: -330 * totalScale,
                    y: -180 * totalScale
                }
            },
            27: {
                position: {
                    x: 620 * totalScale,
                    y: -50 * totalScale
                }
            }
        }
    }
})();

for (let w = 1; w <= 3; w++) {
    const add = 'w' + w;
    for (let i = 1; i <= 9; i++) {
        const bName = 'building' + i + add;
        const building2 = VisualData.VISUAL_BUILDINGS[bName].objects;
        const b = building2[0];
        b.x *= totalScale;
        b.y *= totalScale;
        b.name = 'Building_' + i + add;
        b.click = true;

        const sName = 'start' + i + add;
        const obj = VisualData.VISUAL_BUILDINGS[sName].objects;
        const s = obj[0];
        s.x *= totalScale;
        s.y *= totalScale;
        s.click = true;
        obj[0].scale = totalScale;

        const slot = VisualData.PLACED_BUILDINGS[(w - 1) * 9 + i];
        slot.depth = 3000 - (i - 1) * 100;
        slot.levels = [
            {
                maxLevel: 0,
                building: sName,
            },
            {
                building: bName,
            },
        ];
    }
}

if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
        exports = module.exports = VisualData;
    }
    exports.VisualData = VisualData;
}

function SocialVK() {

    let app_id;
    let loadedAds = [];
    let _getParams = null;
    const PURCHASE_SUFFIX = ".vk";
    let authorizing = false;

    function _preloadAd(callbacks, playMethod) {
        if (typeof admanInit === 'undefined') {
            if (callbacks && callbacks.onAdBlock)
                callbacks.onAdBlock();
            return;
        }
        console.log("preloadAdFor app " + app_id);
        admanInit({
            user_id: null,
            app_id: app_id,
            type: 'rewarded',         // 'preloader' или 'rewarded' (по умолчанию - 'preloader')
            // params: {preview: 1}   // для проверки корректности работы рекламы
        }, onAdsReady, onNoAds);

        function onAdsReady(adman) {
            loadedAds.push(adman);
            if (playMethod)
                playMethod(callbacks);
        }

        function onNoAds() {
            console.error("onNoAds");
            if (callbacks && callbacks.onNoAds)
                callbacks.onNoAds();
        }
    }

    function _playRewardedAd(callbacks) {
        if (loadedAds.length > 0) {
            adman = loadedAds.pop();
            if (callbacks.onStarted) {
                adman.onStarted(function () {
                    callbacks.onStarted();
                });
            }

            if (callbacks.onCompleted) {
                adman.onCompleted(function () {
                    callbacks.onCompleted();
                });
            }
            if (callbacks.onSkipped) {
                adman.onSkipped(function () {
                    callbacks.onSkipped();
                });
            }
            if (callbacks.onClicked) {
                adman.onClicked(function () {
                    callbacks.onClicked();
                });
            }
            adman.start('preroll');
            _preloadAd();
        } else
            _preloadAd(callbacks, _playRewardedAd);
    }

    function getAuthKey() {
        // return "a7aeecb9cf5b60cfba66225716e7395d";
        return _getParams['auth_key'];
    }

    function getViewerId() {
        // return "539955786";
        return _getParams['viewer_id'];
    }

    function _checkPurchases(consumeCallback, offset) {
        const request_limit = 20;
        offset = offset || 0;
        gBase.social.vkListPurchases(offset, request_limit, (err, response) => {
            console.info("list  err ", err);
            console.info("response ", response);
            if (err) {
                gameAnalytics.sendServerError(err, "vkListPurchases");
                socialManager.checkAuthStatus(err, () => _checkPurchases(consumeCallback, 0));
            } else {
                if (response) {
                    let stopped = false;
                    const arr = response.details.originalResponse;
                    for (let i = 0;i < arr.length; i++) {
                        const a = arr[i];
                        if (!a.isConsumed) {
                            console.warn("CONSUME " + a.purchaseNum);
                            gBase.social.vkConsumePurchase(a.purchaseNum, (err, response) => {
                                console.info("consume err ", err);
                                console.info("response ", response);

                                if (err) {
                                    gameAnalytics.sendServerError(err, "vkConsumePurchase");
                                    socialManager.checkAuthStatus(err, () => _checkPurchases(consumeCallback, 0));
                                    stopped = true;
                                }
                                else {
                                    consumeCallback(a.itemId.substring(0, a.itemId.length - PURCHASE_SUFFIX.length));
                                }
                            });
                        }

                        if (stopped)
                            return;
                    }

                    if (arr.length === request_limit)
                        _checkPurchases(consumeCallback, offset + request_limit);
                }
            }
        });
    }

    return {
        initVK: function (appId) {
            app_id = appId;
            this.createGBase();
            if (typeof VK !== 'undefined')
            VK.init(function() {
                // API initialization succeeded
                // console.info("INIT2 ", window.location);
                // Your code here
                // VK.callMethod("showInviteBox");

                var callbacksResults = document.getElementById('callbacks');

                VK.addCallback('onOrderSuccess', (order_id) => {
                    _checkPurchases((id)=>{
                       gameInit.progress.publicConfirmedPayment(id);
                    });
                });
            });
            _preloadAd();
        },

        setAllGetParams(prms) {
            _getParams = prms;
        },

        playRewardedAd: function (callbacks) {
            _playRewardedAd(callbacks);
        },

        isAuthorizing() {
            return authorizing;
        },

        reconnect(callback) {
            this.createGBase();
            this.authorize(()=> {
                gBase.profile.getp((err) => {
                    if (err)
                        gameAnalytics.sendServerError(err, "getp");
                    else
                        callback();
                });
            });
        },

        authorize(callback) {
            if (!getViewerId() || !getAuthKey())
                callback();
            else {
                authorizing = true;
                console.log("Authorize: " + getViewerId());
                gBase.account.authWebVk(getViewerId(), getAuthKey(), (err) => {
                    authorizing = false;
                    if (err)
                        gameAnalytics.sendServerError(err, "authWebVk");
                    callback();
                });
            }
        },

        checkPurchases(consumeCallback) {
            _checkPurchases(consumeCallback);
        },

        purchase(productId) {
            var params = {
                type: 'item',
                item: productId + PURCHASE_SUFFIX
            };

            VK.callMethod('showOrderBox', params);
        },

        getPriceLabel(productId) {
            const info = VisualData.getPaymentInfoById(productId);
            return info ? (info.vk_price * 7) + " Руб." : null;
        }
    };
}

function SocialOK() {

    let app_id;
    let loadedAds = [];
    let _getParams = null;
    const PURCHASE_SUFFIX = ".ok";
    let authorizing = false;

    let callbackOnNoAds = null;
    let callbackAdIsReady = null;
    let callbackAdStarted = null;
    let callbackAdCompleted = null;

    let callbackPostMessage = null;

    let authData;
    let authCallback;

    function _applyCallbacks() {

    }

    function _preloadAd(callbacks, playMethod) {
        // if (typeof admanInit === 'undefined') {
        //     if (callbacks && callbacks.onAdBlock)
        //         callbacks.onAdBlock();
        //     return;
        // }
        callbackAdIsReady = function onAdsReady() {
            loadedAds.push(1);
            if (playMethod)
                playMethod(callbacks);
            callbackAdIsReady = null;
        };

        callbackOnNoAds = function onNoAds() {
            console.error("onNoAds");
            if (callbacks && callbacks.onNoAds)
                callbacks.onNoAds();
            callbackOnNoAds = null;
        };

        FAPI.invokeUIMethod("prepareMidroll");
    }

    function _playRewardedAd(callbacks) {
        if (callbacks.onStarted) {
            callbackAdStarted = function () {
                callbacks.onStarted();
                callbackAdStarted = null;
            }
        }

        if (callbacks.onCompleted) {
            callbackAdCompleted = function () {
                callbacks.onCompleted();
                callbackAdCompleted = null;
            }
        }

        if (loadedAds.length > 0) {
            loadedAds.pop();

            // if (callbacks.onCompleted) {//TODO
            //     adman.onCompleted(function () {
            //         callbacks.onCompleted();
            //     });
            // }

            FAPI.invokeUIMethod("showMidroll");
            _preloadAd();
        } else
            _preloadAd(callbacks, _playRewardedAd);
    }

    function _checkPurchases(consumeCallback, offset) {
        const request_limit = 20;
        offset = offset || 0;
        gBase.social.okListPurchases(offset, request_limit, (err, response) => {
            console.info("list  err ", err);
            console.info("response ", response);
            if (err) {
                gameAnalytics.sendServerError(err, "okListPurchases");
                socialManager.checkAuthStatus(err, () => _checkPurchases(consumeCallback, 0));
            } else {
                if (response) {
                    let stopped = false;
                    const arr = response.details.originalResponse;
                    for (let i = 0; i < arr.length; i++) {
                        const a = arr[i];
                        if (!a.isConsumed) {
                            console.warn("CONSUME " + a.purchaseNum);
                            gBase.social.okConsumePurchase(a.purchaseNum, (err, response) => {
                                console.info("consume err ", err);
                                console.info("response ", response);

                                if (err) {
                                    gameAnalytics.sendServerError(err, "okConsumePurchase");
                                    socialManager.checkAuthStatus(err, () => _checkPurchases(consumeCallback, 0));
                                    stopped = true;
                                }
                                else {
                                    consumeCallback(a.itemId.substring(0, a.itemId.length - PURCHASE_SUFFIX.length));
                                }
                            });
                        }

                        if (stopped)
                            return;
                    }

                    if (arr.length === request_limit)
                        _checkPurchases(consumeCallback, offset + request_limit);
                }
            }
        });
    }

    return {
        initOK: function (appId) {
            app_id = appId;
            this.createGBase();
            // gBase = new Gbase.GbaseApi(CURRENT_ENVIRONMENT.name, CURRENT_ENVIRONMENT.env, CURRENT_ENVIRONMENT.hmac, CURRENT_ENVIRONMENT.platform, CURRENT_ENVIRONMENT.version);
            if (typeof FAPI !== 'undefined') {
                var rParams = FAPI.Util.getRequestParameters();
                console.info("rParams", rParams);
                authData = rParams;
                FAPI.init(rParams["api_server"], rParams["apiconnection"],
                    /*
                    * Первый параметр:
                    * функция, которая будет вызвана после успешной инициализации.
                    */
                    function () {
                        window.API_callback = function (method, result, data) {
                            console.warn("method " + method + " > " + result + " data = ", data);
                            switch (method) {
                                case "postMediatopic":
                                    if (result === "ok") {
                                        if (callbackPostMessage) {
                                            callbackPostMessage();
                                            callbackPostMessage = null;
                                        }
                                    }
                                    break;
                                case "showInvite":
                                    if (result === "ok" && data) {
                                        const ids = data.split(",");
                                        if (ids && ids.length > 0)
                                            gameInit.likedSuccessfull(ids);
                                    }
                                    break;
                                case "showPayment":
                                    if (result === "ok") {
                                        _checkPurchases((id) => {
                                            gameInit.progress.publicConfirmedPayment(id);
                                        });
                                    }
                                    break;
                                case "prepareMidroll":
                                    switch (data) {
                                        case "ready":
                                            if (callbackAdIsReady)
                                                callbackAdIsReady();
                                            break;
                                        case "in_use":
                                            if (callbackAdStarted)
                                                callbackAdStarted();
                                            break;
                                        default:
                                            if (callbackOnNoAds)
                                                callbackOnNoAds();
                                            break;
                                    }
                                    break;
                                case "showMidroll":
                                    if (result === "ok") {
                                        switch (data) {
                                            case "complete":
                                                if (callbackAdCompleted)
                                                    callbackAdCompleted();
                                                break;
                                        }
                                    } else {
                                        if (callbackOnNoAds)
                                            callbackOnNoAds();
                                    }
                                    break;
                            }
                        }
                    },
                    /*
                    * Второй параметр:
                    * функция, которая будет вызвана, если инициализация не удалась.
                    */
                    function (error) {
                        alert("Ошибка инициализации");
                    }
                );
            }

            _preloadAd();
        },

        openLikes() {
            FAPI.UI.showInvite("Поиграй в мою игру!");
        },

        setAllGetParams(prms) {
            _getParams = prms;
        },

        playRewardedAd: function (callbacks) {
            _playRewardedAd(callbacks);
        },

        isAuthorizing() {
            return authorizing;
        },

        authorize(callback) {
            if (!authData) {
                console.log("Waiting for auth data");
                authCallback = callback;
            }
            else {
                authorizing = true;
                // okId, okSecret, okSessionKey
                gBase.account.authWebOk(authData.logged_user_id, authData.auth_sig, authData.session_key, (err) => {//TODO
                    authorizing = false;
                    console.info("auth!!", err);
                    if (err)
                        gameAnalytics.sendServerError(err, "authWebOk");
                    callback();
                });
            }
        },

        checkPurchases(consumeCallback) {
            _checkPurchases(consumeCallback);
        },

        purchase(productId) {
            FAPI.UI.showPayment("Яблоко", "Это очень вкусно!", productId + PURCHASE_SUFFIX, this.getPrice(productId), null, null, "ok", "true");//TODO
        },

        getPrice(productId) {
            const info = VisualData.getPaymentInfoById(productId);
            return info ? info.ok_price : null;//TODO
        },

        getPriceLabel(productId) {
            const price = this.getPrice(productId);
            return price ? price + " Руб." : 0;
        },

        postMessage(callback) {
            callbackPostMessage = callback;
            FAPI.UI.postMediatopic({
                "media":[
                    {
                        "type": "text",
                        "text": "Давай играть вместе!"
                    }
                ]
            }, false);
        }
    };
}

function SocialFB() {

    let app_id;
    let loadedAds = [];
    let _getParams = null;

    function _preloadAd(callbacks, playMethod) {
        if (typeof admanInit === 'undefined') {
            if (callbacks && callbacks.onAdBlock)
                callbacks.onAdBlock();
            return;
        }
        admanInit({
            user_id: null,
            app_id: app_id,
            type: 'rewarded',         // 'preloader' или 'rewarded' (по умолчанию - 'preloader')
            // params: {preview: 1}   // для проверки корректности работы рекламы
        }, onAdsReady, onNoAds);

        function onAdsReady(adman) {
            loadedAds.push(adman);
            if (playMethod)
                playMethod(callbacks);
        }

        function onNoAds() {
            console.error("onNoAds");
            if (callbacks && callbacks.onNoAds)
                callbacks.onNoAds();
        }
    }

    function _playRewardedAd(callbacks) {
        if (loadedAds.length > 0) {
            adman = loadedAds.pop();
            if (callbacks.onStarted) {
                adman.onStarted(function () {
                    callbacks.onStarted();
                });
            }

            if (callbacks.onCompleted) {
                adman.onCompleted(function () {
                    callbacks.onCompleted();
                });
            }
            if (callbacks.onSkipped) {
                adman.onSkipped(function () {
                    callbacks.onSkipped();
                });
            }
            if (callbacks.onClicked) {
                adman.onClicked(function () {
                    callbacks.onClicked();
                });
            }
            adman.start('preroll');
            _preloadAd();
        } else
            _preloadAd(callbacks, _playRewardedAd);
    }

    return {
        initFB: function (appId) {
            app_id = appId;
            gBase = new Gbase.GbaseApi(CURRENT_ENVIRONMENT.name, CURRENT_ENVIRONMENT.env, CURRENT_ENVIRONMENT.hmac, CURRENT_ENVIRONMENT.platform, CURRENT_ENVIRONMENT.version);
        },

        setAllGetParams(prms) {
            _getParams = prms;
        },

        playRewardedAd: function (callbacks) {
            // _playRewardedAd(callbacks);
            console.error("not implemented");
        },

        authorize(callback) {
            if (window.fbAsyncInit) {
                callback();
                return;
            }
            window.fbAsyncInit = function() {
                FB.init({
                    appId      : app_id,
                    cookie     : true,
                    xfbml      : true,
                    version    : 'v3.3'
                });

                FB.AppEvents.logPageView();

                function onLogin(response) {
                    var accessToken = response.authResponse.accessToken;
                    gBase.account.authFb(accessToken, (err) => {
                        if (err)
                            gameAnalytics.sendServerError(err, "authFb");
                        callback();
                    });
                }

                FB.getLoginStatus(function(response) {
                    if (response.status === 'connected') {
                        // the user is logged in and has authenticated your
                        // app, and response.authResponse supplies
                        // the user's ID, a valid access token, a signed
                        // request, and the time the access token
                        // and signed request each expire
                        // var uid = response.authResponse.userID;
                        onLogin(response);
                    } else {
                        FB.login(function (response) {
                            onLogin(response);
                        }, {scope: 'email'});
                    }
                });
            };

            (function(d, s, id){
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) {return;}
                js = d.createElement(s); js.id = id;
                js.src = "https://connect.facebook.net/en_US/sdk.js";
                fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));
        },
    };
};

function SocialFB_Instant() {

    let app_id;
    let loadedAds = [];
    let _getParams = null;

    function _preloadAd(callbacks, playMethod) {
        if (typeof admanInit === 'undefined') {
            if (callbacks && callbacks.onAdBlock)
                callbacks.onAdBlock();
            return;
        }
        admanInit({
            user_id: null,
            app_id: app_id,
            type: 'rewarded',         // 'preloader' или 'rewarded' (по умолчанию - 'preloader')
            // params: {preview: 1}   // для проверки корректности работы рекламы
        }, onAdsReady, onNoAds);

        function onAdsReady(adman) {
            loadedAds.push(adman);
            if (playMethod)
                playMethod(callbacks);
        }

        function onNoAds() {
            console.error("onNoAds");
            if (callbacks && callbacks.onNoAds)
                callbacks.onNoAds();
        }
    }

    function _playRewardedAd(callbacks) {
        if (loadedAds.length > 0) {
            adman = loadedAds.pop();
            if (callbacks.onStarted) {
                adman.onStarted(function () {
                    callbacks.onStarted();
                });
            }

            if (callbacks.onCompleted) {
                adman.onCompleted(function () {
                    callbacks.onCompleted();
                });
            }
            if (callbacks.onSkipped) {
                adman.onSkipped(function () {
                    callbacks.onSkipped();
                });
            }
            if (callbacks.onClicked) {
                adman.onClicked(function () {
                    callbacks.onClicked();
                });
            }
            adman.start('preroll');
            _preloadAd();
        } else
            _preloadAd(callbacks, _playRewardedAd);
    }

    return {
        initFB: function (appId) {
            app_id = appId;
            gBase = new Gbase.GbaseApi(CURRENT_ENVIRONMENT.name, CURRENT_ENVIRONMENT.env, CURRENT_ENVIRONMENT.hmac, CURRENT_ENVIRONMENT.platform, CURRENT_ENVIRONMENT.version);
        },

        setAllGetParams(prms) {
            _getParams = prms;
        },

        playRewardedAd: function (callbacks) {
            // _playRewardedAd(callbacks);
            console.error("not implemented");
        },

        authorize(callback) {
            callback();
        },
    };
};

const GAME_ENVIRONMENTS = {
    'vk_production': {
        name: "rmg-vkfish",
        env: "production",
        hmac: 'bR2UBrFSHflMlXILNVENAoLR',
        platform: "webvk",
        version: "0.0.1"
    },
    'vk_dev': {
        name: 'rmg-vkfish',
        env: 'dev',
        hmac: 'mE2ibFZ1tPCDOcdc6n0XB7I4',
        platform: "webvk",
        version: "0.0.1"
    },
    'ok_production': {
        name: "rmg-vkfish",
        env: "production",
        hmac: 'J8Bsh1KT2bt4gnUcSEJrjrep',
        platform: "webok",
        version: "0.0.1"
    },
    'ok_dev': {
        name: 'rmg-vkfish',
        env: 'dev',
        hmac: 'uwe6KwuCvFLCU5WuwXXU4pMW',
        platform: "webok",
        version: "0.0.1"
    }
};

const DEFAULT_PLATFORM = "fb_instant";
const DEFAULT_ENVIRONMENT = "vk_production";

let AllGetParams = null;
function parseGetParams() {
    if (!AllGetParams) {
        const prms = {};
        var queryString = window.location.search;
        if (queryString && queryString.length > 0) {
            queryString = queryString.substring(1);
            const queries = queryString.split("&");

            for (let i = 0; i < queries.length; i++) {
                const kvp = queries[i].split('=');
                if (kvp[0].startsWith("amp;"))
                    prms[kvp[0].substring(4)] = kvp[1];
                else
                    prms[kvp[0]] = kvp[1];
            }
        }
        AllGetParams = prms;
    }
    return AllGetParams;
}
var socialManager;
parseGetParams();

if (!AllGetParams.hasOwnProperty('game_platform')) {
    console.error("platform wasn't specified");
    AllGetParams.game_platform = DEFAULT_PLATFORM;
}

if (!AllGetParams.hasOwnProperty('game_env')) {
    console.error("game_env wasn't specified");
    AllGetParams.game_env = DEFAULT_ENVIRONMENT;
}

const CURRENT_ENVIRONMENT = GAME_ENVIRONMENTS[AllGetParams.game_env];

const TEST_MODE = AllGetParams.test_mode;

{
    switch (AllGetParams.game_platform) {
        case "vk":
            socialManager = new SocialVK();
            socialManager.initialize = function (gameSettings) {
                socialManager.initVK(gameSettings.vk_app_id);
            };
            break;
        case "ok":
            socialManager = new SocialOK();
            socialManager.initialize = function (gameSettings) {
                socialManager.initOK(gameSettings.ok_app_id);
            };
            break;
        case "fb":
            socialManager = new SocialFB();
            socialManager.initialize = function (gameSettings) {
                socialManager.initFB(gameSettings.fb_app_id);
            };
            break;
        case "fb_instant":
            socialManager = new SocialFB_Instant();
            socialManager.initialize = function (gameSettings) {
                socialManager.initFB(gameSettings.fb_app_id);
            };
            FBInstant.initializeAsync()
                .then(function() {
                        console.log("LOAD");

                        FBInstant.startGameAsync()
                            .then(function () {
                                // Retrieving context and player information can only be done
                                // once startGameAsync() resolves
                                var contextId = FBInstant.context.getID();
                                var contextType = FBInstant.context.getType();

                                var playerName = FBInstant.player.getName();
                                var playerPic = FBInstant.player.getPhoto();
                                var playerId = FBInstant.player.getID();

                                // Once startGameAsync() resolves it also means the loading view has
                                // been removed and the user can see the game viewport
                                console.log("PLAYERID " + playerId);
                                game.start();
                            });
                    });
            break;
    }
}

socialManager.createGBase = function() {
    gBase = new Gbase.GbaseApi(CURRENT_ENVIRONMENT.name, CURRENT_ENVIRONMENT.env, CURRENT_ENVIRONMENT.hmac, CURRENT_ENVIRONMENT.platform, CURRENT_ENVIRONMENT.version);
};

socialManager.reconnect = function (callback) {
    this.createGBase();
    this.authorize(()=> {
        gBase.profile.getp((err) => {
            if (err)
                gameAnalytics.sendServerError(err, "getp");
            else
                callback();
        });
    });
},

socialManager.checkAuthStatus = function(err, callback) {
    if (err.code == 310 && !socialManager.isAuthorizing()) {
        console.log("Re-auth");
        socialManager.reconnect(callback);
    }
};

let activeButtonForTutorial = null;
const invisibleButton = {};

function lockGuiAtButton(btn) {
    activeButtonForTutorial = btn;
}

function lockGuiEverything() {
    activeButtonForTutorial = invisibleButton;
}

function unlockGUI() {
    activeButtonForTutorial = null;
}

class BasicButton extends Phaser.GameObjects.Sprite {
    constructor(group, config, callback) {
        config.x = config.x || 0;
        config.y = config.y || 0;
        //check if config contains a scene
        if (!config.scene) {
            console.log('missing scene');
            return;
        }
        //check if config contains a key
        if (!config.key) {
            console.log("missing key!");
            return;
        }

        //if there is no up property assume 0
        if (!config.up) {
            config.up = 0;
        }
        //if there is no down in config use up
        if (!config.down) {
            config.down = config.up;
        }
        //if there is no over in config use up
        if (!config.over) {
            config.over = config.up;
        }

        const obj = VisualData.ALL_OBJECTS[config.key];

        var sliceName, nineSlice;
        if (config.minWidth) {
            sliceName = config.key + "_Slice";
            nineSlice = VisualData.ALL_OBJECTS[sliceName];
        }

        if (nineSlice && nineSlice.type === UnnyObjectType.NineSlice) {
            super(config.scene, config.x, config.y, null);
        } else {
            if (obj && GameData.getAtlasName(obj)) {
                super(config.scene, config.x, config.y, 'atlas_sprites', obj.file);
            }
            else {
                super(config.scene, config.x, config.y, config.key, config.up);
            }
        }
        this.config = config;
        this.callback = callback;

        //add this to the scene
        config.scene.add.existing(this);
        this.group = group;
        if (group)
            group.add(this);

        this.clickable = this;

        if (config.minWidth) {
            if (nineSlice.type === UnnyObjectType.NineSlice) {
                this.clickable = config.scene.add.myNineSlice(config.x, config.y, {
                    name: sliceName,
                    width: config.minWidth,
                    height: this.height,
                }).setOrigin(0.5);
                this.visible = false;
                // this.visible = false;
                this.nineActive = true;
                if (group)
                    group.add(this.clickable);
            }
        }

        if (!config.scale)
            config.scale = 1;
        if (this.config.scale_parent)
            this._defaultScale(1);
        this.setScale(config.scale);

        //make interactive and set listeners
        this.clickable.setInteractive();
        this.clickable.on('pointerdown',this.onDown,this);
        this.clickable.on('pointerup',this.onUp,this);
        this.clickable.on('pointerover',this.onOver,this);
        this.clickable.on('pointerout',this.onOut,this);
    }

    setVisible(visible) {
        if (!this.nineActive)
            super.setVisible(visible);
        else
            this.clickable.setVisible(visible);
    }

    getParentObject() {
        return this.config.scale_parent ? this.group : this.clickable;
    }

    isLocked() {
        return (activeButtonForTutorial && activeButtonForTutorial !== this && !this.ignoreTutorial) || this.locked;
    }

    setButtonLocked(locked) {
        this.locked = locked;
        setLockedColor(this.clickable, locked);
    }

    onDown()
    {
        if (this.isLocked())
            return;

        this.down = true;
        // this.setFrame(this.config.down);
        if (this.callback) {
            this.setScale(0.95 * this.config.scale);
            audioManager.playButtonClick();
        }
    }
    onOver()
    {
        if (this.isLocked())
            return;

        // this.setFrame(this.config.over);
    }

    onOut()
    {
        if (this.isLocked())
            return;

        this.down = false;
        // this.setFrame(this.config.up);
        if (this.callback)
            this.setScale(this.config.scale);
    }

    _defaultScale(x, y) {
        if (this.nineActive)
            this.clickable.setScale(x, y);
        else
            super.setScale(x, y);
    }

    setScale(x, y) {
        if (this.config.scale_parent) {
            this.group.setScale(x, y);
        } else
            this._defaultScale(x, y);
    }

    onUp()
    {
        if (this.isLocked())
            return;

        // this.setFrame(this.config.up);
        if (this.down && this.callback) {
            this.down = false;
            this.setScale(this.config.scale);
            this.callback();
        }
    }
}

class ButtonWithText extends BasicButton {
    constructor(group, config, callback) {
        super(group, config, callback);//.setDepth(WinDefaultDepth + 100);

        const iconSize = 100 * GlobalScale;

        if (config.icon) {
            const priceIcon = config.scene.add.sprite(this.x / localScale - config.minWidth / 2 * GlobalScale + iconSize, this.y / localScale, config.icon);
            group.add(priceIcon);
            this.caption = config.scene.add.text(priceIcon.x / localScale + iconSize, this.y / localScale, config.caption, DefaultFont)
                .setOrigin(0, 0.5)
                .setDepth(WinDefaultDepth + 110);
        } else {
            this.caption = config.scene.add.text(this.x / localScale, this.y / localScale, config.caption, DefaultFont)
                .setOrigin(0.5, 0.5)
                .setDepth(WinDefaultDepth + 110);
        }

        group.add(this.caption);
    }

    setScale(x, y) {
        super.setScale(x, y);
        if (this.caption)
            this.caption.setScale(x, y);
    }
}

class AnimationBase {
    constructor(group, duration, callback, startDelay) {
        this.group = group;
        this.callback = callback;
        this.time = 0;
        this.delay = startDelay || 0;
        this.duration = duration;
        if (group) {
            this.x = group.x / localScale;
            this.y = group.y / localScale;
            this.scaleX = group.scaleX / imageSizeLocalScale;
            this.scaleY = group.scaleY / imageSizeLocalScale;
        }
    }

    setInverse() {
        this.inverse = true;
        this.playFrame(0);
    }

    getTime() {
        return this.inverse ? (1 - this.time / this.duration) : this.time / this.duration;
    }

    _playAnimation() {

    }

    stopAnimation() {
        this.stopped = true;
    }

    playFrame(deltaTime){
        if (this.stopped)
            return true;

        this.deltaTime = deltaTime;
        this.time += deltaTime;
        let done = false;
        if (this.time >= this.duration) {
            this.time = this.duration;
            done = true;
        }

        this._playAnimation();

        if (done) {
            this.animationDone();
            return true;
        } else
            return false;
    }

    animationDone() {
        if (this.callback)
            this.callback();
    }
}

class AnimationChangeAlpha extends AnimationBase {
    constructor(group, finalAlpha, duration, callback) {
        super(group, duration, callback);
        this.alphaStart = group.alpha;
        this.alphaFinish = finalAlpha;
    }

    _playAnimation() {
        const dt = this.getTime();
        this.group.alpha = this.alphaStart * (1-dt) + this.alphaFinish * dt;
    }
}

class AnimationWinOpen extends AnimationBase {
    constructor(group, callback) {
        super(group, 0.2, callback);
        this.angle = Math.PI * 0.65;
        this.sinAngle = Math.sin(this.angle);
        this.scale = 1;

        this.playFrame(0);
    }

    _playAnimation() {
        this.group.alpha = this.getTime();
        this.group.setScale(Math.sin(this.group.alpha * this.angle) / this.sinAngle * this.scale);
    }
}

class AnimationButtonShow extends AnimationWinOpen {
    constructor(button, callback) {
        super(button, callback);
        this.scale = button.config.scale;
        this.duration = 0.5;
    }
}

class MoveToPoint extends AnimationBase {
    constructor(group, point, duration, callback) {
        super(group, duration, callback);

        this.dx = point.x - this.x;
        this.dy = point.y - this.y;
    }

    _playAnimation() {
        const dt = this.getTime();
        this.group.setPosition(this.x + this.dx * dt, this.y + this.dy * dt);
    }
}

class JumpShieldAnimation extends AnimationBase {
    constructor(group, params, duration, callback) {
        super(group, duration, callback);
        this.params = params;
    }

    _playAnimation() {
        const dt = this.getTime();
        const a = Math.sin(Math.PI * dt);
        this.group.setPositionY(this.y - this.params.height * a);
        this.group.setScale((1 + a * this.params.scale));
    }
}

class AnimationInfinite extends AnimationBase {
    constructor(group, period, callback) {
        super(group, Number.MAX_VALUE, callback);
        this.period = period;
    }

    getTime() {
        return this.time / this.period - Math.trunc(this.time / this.period);
    }
}

class JumpFishAnimation extends AnimationInfinite {
    constructor(group, params, period, callback) {
        super(group, period, callback);
        this.params = params;
    }

    _playAnimation() {
        const dt = this.getTime();
        const a = Math.sin(Math.PI * dt);
        this.group.setPositionY(this.y - this.params.height * a);
        this.group.setScale((1 + a * this.params.scale) * this.scaleX);
    }
}

class FallFishAnimation extends AnimationInfinite {
    constructor(group, params, period, callback) {
        super(group, period, callback);
        this.params = params;
    }

    _playAnimation() {
        const dt = this.getTime();
        const a = Math.sin(Math.PI * dt);
        this.group.setPositionY(this.y - this.params.height * (1 - a));
        this.group.setScale((1 + a * this.params.scale) * this.scaleX, (1 - this.params.scale + this.params.scale * (1 - a)) * this.scaleY);
    }

    stopAnimation() {
        super.stopAnimation();

        this.group.setPositionY(this.y);
        this.group.setScale(this.scaleX, this.scaleY);
    }
}

class RandomJumpRotation extends AnimationBase {
    constructor(group, params, duration, callback) {
        super(group, duration, callback);
        this.params = params;
    }

    _playAnimation() {
        const dt = this.getTime();
        this.group.setPosition(this.group.x / localScale + this.params.vx * dt, this.group.y / localScale + this.params.vy * dt);
        this.group.angle += this.params.angle * dt;
        this.params.vy += this.params.g * dt;
    }
}

class MoveToPointExtra extends MoveToPoint {
    constructor(group, point, extra, duration, callback) {
        super(group, point, duration, callback);
        this.sinAngle = 1 - extra;
        this.angle = Math.PI - Math.asin(this.sinAngle);
    }

    _playAnimation() {
        const dt = Math.sin(this.getTime() * this.angle) / this.sinAngle;
        this.group.setPosition(this.x + this.dx * dt, this.y + this.dy * dt);
    }
}

class MoveToPointSin extends MoveToPoint {
    constructor(group, point, duration, callback) {
        super(group, point, duration, callback);
        const d = Math.sqrt(this.dx * this.dx + this.dy * this.dy);
        this.d = d;
        this.nx = this.dy / d;
        this.ny = -this.dx / d;
    }

    _playAnimation() {
        const dt = this.getTime();
        const a = Math.sin(dt * Math.PI * 2) * this.d / 10;
        this.group.setPosition(this.x + this.dx * dt + a * this.nx, this.y + this.dy * dt + a * this.ny);
    }
}

class ChangeShape extends AnimationBase {
    constructor(group, scale, duration, periods, callback) {
        super(group, duration, callback);
        this.scale = scale;
        this.periods = periods;
    }

    _playAnimation() {
        const dt = this.getTime();
        const a = Math.sin(dt * Math.PI * 2 * this.periods) * this.scale;
        this.group.setScale2(this.scaleX * (1 + a), this.scaleY * (1 - a));
    }
}

class ScaleAnimation extends AnimationBase {
    constructor(group, scale, duration, callback) {
        super(group, duration, callback);
        this.scaleStart = group.scaleX;
        this.scaleEnd = scale;
    }

    _playAnimation() {
        const dt = this.getTime();
        this.group.setScale(this.scaleStart * (1-dt) + this.scaleEnd * dt);
    }
}

class RotationAnimation extends AnimationBase {
    constructor(group, amplitude, duration, periods, callback) {
        super(group, duration, callback);
        this.amplitude = amplitude;
        this.periods = periods;
        this.angle = this.group.angle;
    }

    _playAnimation() {
        const dt = this.getTime();
        this.group.angle = this.angle + Math.sin(dt * Math.PI * 2 * this.periods) * this.amplitude;
    }
}

class ShakeBox extends RotationAnimation {
    constructor(group, amplitude, distance, duration, periods, callback) {
        super(group, amplitude, duration, periods, callback);
        this.distance = distance;
    }

    _playAnimation() {
        const dt = this.getTime();
        const delay = Math.PI / 2;
        this.group.angle = -Math.sin(dt * (Math.PI * 2 * this.periods - delay) + delay) * this.amplitude;
        const sin = Math.sin(dt * Math.PI * 2 * this.periods);
        this.group.setPositionX(this.x + sin * this.distance);
    }
}

class ScaleSinInfinite extends AnimationInfinite {
    constructor(group, period, startScale, amplitude, callback) {
        super(group, period, callback);
        this.startScale = startScale;
        this.amplitude = amplitude;
    }

    _playAnimation() {
        const dt = this.getTime();
        this.group.setScale(this.startScale + this.amplitude * Math.sin(dt * Math.PI * 2));
    }
}

class MoveSinInfinite extends AnimationInfinite {
    constructor(group, period, amplitudeX, amplitudeY, callback) {
        super(group, period, callback);
        this.amplitudeX = amplitudeX;
        this.amplitudeY = amplitudeY;
    }

    _playAnimation() {
        const dt = this.getTime();
        this.group.setPosition(
            this.x + this.amplitudeX * Math.sin(dt * Math.PI * 2),
            this.y + this.amplitudeY * Math.sin(dt * Math.PI * 2)
            );
    }
}

class ScaleAlphaInfinite extends AnimationInfinite {
    _playAnimation() {
        const dt = this.getTime();
        this.group.setScale(dt);
        this.group.alpha = Math.cos(dt * Math.PI / 2) * 2;
    }
}

class SwipeInfinite extends AnimationInfinite {
    constructor(group, period, callback) {
        super(group, period, callback);
        this.part = 0.3;
        this.endPoint = {
            x: this.x + 200 * GlobalScale,
            y: this.y - 100 * GlobalScale
        };
    }

    _playAnimation() {
        let dt = this.getTime();
        if (dt <= this.part) {
            dt /= this.part;
            this.group.setPosition(this.x * (1-dt) + this.endPoint.x * dt, this.y * (1-dt) + this.endPoint.y * dt);
        } else {
            dt = 1 - dt;
            dt /= (1 - this.part);
            this.group.setPosition(this.x * (1-dt) + this.endPoint.x * dt, this.y * (1-dt) + this.endPoint.y * dt);
        }
    }
}

class AnimationFallingBread extends AnimationBase {
    constructor(engine, group, duration, callback) {
        super(group, duration, callback);
        this.engine = engine;
        this.breads = [];
        this.period = 0.15;

        this.respawn = true;
        this.destroyedCount = 0;

        this.timer = Math.trunc(duration - 0.5);

        const number = this.engine.add.textOld(RealScreenWidth / 2, RealScreenHeight * 0.1, LocalizationManager.getLocalizization("BanjoManTipStart"), DefaultFontBig)
            .setDepth(WinDefaultDepth)
            .setOrigin(0.5);
        animManager.applyWinOpenAnimation(number, ()=>{
            setTimeout(()=>number.destroy(true), 500);
        });

        audioManager.playBanjoded();
    }

    playFrame(deltaTime){
        if (this.stopped)
            return true;

        this.deltaTime = deltaTime;

        if (this.respawn) {
            this.time += deltaTime;
            if (this.time >= this.duration - 1) {
                this.time = this.duration;
                this.respawn = false;
            }
        } else {
            if (this.destroyedCount >= this.breads.length) {
                this.animationDone();
                return true;
            }
        }

        this._playAnimation();
    }

    _playAnimation() {
        const timeLeft = Math.trunc(this.duration - this.time);

        if (timeLeft < this.timer) {
            this.timer = timeLeft;
            const number = this.engine.add.textOld(RealScreenWidth / 2, RealScreenHeight * 0.1, timeLeft, DefaultFontVeryBig)
                .setDepth(WinDefaultDepth)
                .setOrigin(0.5);
            animManager.applyWinOpenAnimation(number, ()=>{
                setTimeout(()=>number.destroy(true), 500);
            });
        }

        const count = Math.trunc(this.time / this.period);
        if (count > this.breads.length) {
            let newCount = count - this.breads.length;
            const part = 0.2;
            for (let i = 0; i < newCount; i++) {
                const obj = {};
                this.breads.push(obj);
                CreateImageInGroup(this.engine, this.group, 'bread_' + (Math.trunc(Math.random() * 7) + 1), (sprite)=>{
                    obj.img = sprite;
                    obj.v = (3 + Math.random()) * 400;
                    obj.y = 0;
                    let x;
                    if (Math.random() > 0.5)
                        x = (1 - part * 0.25 - Math.random() * part) * RealScreenWidth;
                    else
                        x = part * 0.25 + (Math.random() * part) * RealScreenWidth;
                    sprite.setPosition(x, obj.y).setScale(0.7 + Math.random() * 0.5);
                    sprite.angle = Math.random() * 360;
                });
            }
        }

        for (let i = 0; i < this.breads.length; i++) {
            const obj = this.breads[i];
            const img = obj.img;

            if (img) {
                obj.y += obj.v * this.deltaTime;
                if (obj.y >= RealScreenHeight){
                    this.destroyedCount++;
                    obj.img.destroy(true);
                    obj.img = null;
                } else
                    img.setPositionY(obj.y);
            }
        }
    }
}

class AnimationsManager {

    constructor() {
        this.allAnimations = [];
        this.deltaTime = 1.0 / 30.0;
        setInterval(() => this.playAnimations(), this.deltaTime * 1000);
    }

    _canAddAnimation(group) {
        for (let i in this.allAnimations) {
            if (this.allAnimations[i].group === group)
                return false;
        }
        return true;
    }

    _addAnimation(anim) {
        this.allAnimations.push(anim);
        return anim;
    }

    applyWinOpenAnimation(group, callback) {
        return this._addAnimation(new AnimationWinOpen(group, callback));
    }

    applyButtonShowAnimation(group) {
        return this._addAnimation(new AnimationButtonShow(group));
    }

    moveToPoint(group, point, duration, callback) {
        return this._addAnimation(new MoveToPoint(group, point, duration, callback));
    }

    moveToPointExtra(group, point, extra, duration, callback) {
        return this._addAnimation(new MoveToPointExtra(group, point, extra, duration, callback));
    }

    animationChangeAlpha(group, finalAlpha, duration, callback) {
        return this._addAnimation(new AnimationChangeAlpha(group, finalAlpha, duration, callback));
    }

    moveToPointSin(group, point, duration, callback) {
        return this._addAnimation(new MoveToPointSin(group, point, duration, callback));
    }

    changeShape(group, scale, duration, periods, callback) {
        return this._addAnimation(new ChangeShape(group, scale, duration, periods, callback));
    }

    rotationAnimation(group, amplitude, duration, periods, callback) {
        return this._addAnimation(new RotationAnimation(group, amplitude, duration, periods, callback));
    }

    shakeBox(group, amplitude, distance, duration, periods, callback) {
        return this._addAnimation(new ShakeBox(group, amplitude, distance, duration, periods, callback));
    }

    scaleAnimation(group, scale, duration, callback) {
        return this._addAnimation(new ScaleAnimation(group, scale, duration, callback));
    }

    randomJumpRotation(group, params, duration, callback) {
        return this._addAnimation(new RandomJumpRotation(group, params, duration, callback));
    }

    jumpShieldAnimation(group, params, duration, callback) {
        if (this._canAddAnimation(group))
            return this._addAnimation(new JumpShieldAnimation(group, params, duration, callback));
        return null;
    }

    jumpFishAnimation(group, params, period, callback) {
        if (this._canAddAnimation(group))
            return this._addAnimation(new JumpFishAnimation(group, params, period, callback));
        return null;
    }

    fallFishAnimation(group, params, period, callback) {
        if (this._canAddAnimation(group))
            return this._addAnimation(new FallFishAnimation(group, params, period, callback));
        return null;
    }

    waitAnimation(duration, callback) {
        return this._addAnimation(new AnimationBase(null, duration, callback));
    }

    scaleAlphaInfinite(group, period, callback) {
        return this._addAnimation(new ScaleAlphaInfinite(group, period, callback));
    }

    moveSinInfinite(group, period, amplitudeX, amplitudeY, callback) {
        return this._addAnimation(new MoveSinInfinite(group, period, amplitudeX, amplitudeY, callback));
    }

    scaleSinInfinite(group, period, startScale, amplitude, callback) {
        return this._addAnimation(new ScaleSinInfinite(group, period, startScale, amplitude, callback));
    }

    swipeInfinite(group, period, callback) {
        return this._addAnimation(new SwipeInfinite(group, period, callback));
    }

    playFallingBread(engine, group, duration, callback) {
        return this._addAnimation(new AnimationFallingBread(engine, group, duration, callback));
    }

    changeShapeOfSouls(group, callback) {
        if (this._canAddAnimation(group)) {
            audioManager.playMoneyCollected();
            return this._addAnimation(new ChangeShape(group, 0.2, 0.5, 1, callback));
        }
        return null;
    }

    playAnimations() {
        for (let i = this.allAnimations.length - 1; i >= 0; i--) {
            if (this.allAnimations[i].playFrame(this.deltaTime)) {
                this.allAnimations.splice(i, 1);
            }
        }
    }
}

let animManager = new AnimationsManager();

class AudioManager {
    constructor() {
        this.names = {
            BackgroundMusic: 'BackgroundMusic',
            Banjoded: 'Banjoded',
            Chest: ['Audio_Chest_1',
                'Audio_Chest_2',
                'Audio_Chest_3'
            ],
            LongTap: [
                'Audio_longtap1',
                'Audio_longtap2',
                'Audio_longtap3',
                'Audio_longtap4'
            ],
            Click: [
                'Audio_Pop-ani-1',
                'Audio_Pop-ani-2',
                'Audio_Pop-ani-3',
            ],
            ButtonClick: 'Audio_ClickUI',
            Info: 'Audio_Info',
            // LevelUp: 'Audio_LevelUp',
            Money: 'Audio_Money',
            Window: 'Audio_Window'
        };

        this.addMusic = {
            BackgroundMusic2: 'BackgroundMusic2',
            BackgroundMusic3: 'BackgroundMusic3',
            Gathering: 'Gathering'
        };
        this.sounds = {};
        this._activeWorldMusic = 0;
    }

    playFactoryMusic() {
        this.playWorldMusic(0);
    }

    _playBackMusic(music, volume) {
        if (this.activeMusic === music || GameSettings.musicOff)
            return;

        volume = volume || 1;
        this.stopMusic();

        if (music)
            music.play({loop: true, volume: volume});
        this.activeMusic = music;
    }

    stopMusic() {
        if (this.activeMusic) {
            this.activeMusic.stop();
            this.activeMusic = null;
        }
    }

    restoreMusic() {
        this.playWorldMusic(this._activeWorldMusic);
    }

    _loadAndPlayMusicByKey(worldIndex, key) {
        if (this.sounds.hasOwnProperty(key)) {
            this._playBackMusic(this.sounds[key]);
        } else {
            const music = this.addMusic[key];
            LoadPreparedFile(this.engine, music, ()=>{
                this.sounds[key] = this.engine.sound.add(music);
                if (this._activeWorldMusic === worldIndex)
                    this._playBackMusic(this.sounds[key]);
            });
        }
    }

    playWorldMusic(worldIndex) {
        worldIndex = parseInt(worldIndex);
        this._activeWorldMusic = worldIndex;
        switch (worldIndex) {
            case 0:
                this._loadAndPlayMusicByKey(worldIndex, 'Gathering');
                break;
            case 1:
                this._playBackMusic(this.sounds.BackgroundMusic, 0.4);
                break;
            default:
                this._loadAndPlayMusicByKey(worldIndex, 'BackgroundMusic' + worldIndex);
                break;
        }
    }

    load(engine) {
        this.engine = engine;
        const load = engine.load;

        for (let key in this.names) {
            if (typeof this.names[key] === 'object') {
                for (let name of this.names[key])
                    load.audio(name, VisualData.ALL_OBJECTS[name].file);
            } else {
                const name = this.names[key];
                load.audio(name, VisualData.ALL_OBJECTS[name].file);
            }
        }

        engine.load.once('complete', ()=>{
            for (let key in this.names) {
                if (typeof this.names[key] === 'object') {
                    const arr = this.sounds[key] = [];
                    for (let name of this.names[key])
                        arr.push(engine.sound.add(name));
                } else {
                    const name = this.names[key];
                    this.sounds[key] = engine.sound.add(name);
                }
            }

            window.onclick = () => {
                if (this._activeWorldMusic === 0)
                    this.playWorldMusic(1);
                window.onclick = null;
            };
        });
        load.start();
    }

    playWindowOpen(){
        if (GameSettings.soundsOff)
            return;

        if (this.sounds.Window)
            this.sounds.Window.play();
    }

    playButtonClick(){
        if (GameSettings.soundsOff)
            return;

        if (this.sounds.ButtonClick)
            this.sounds.ButtonClick.play();
    }

    playMoneyCollected(){
        if (GameSettings.soundsOff)
            return;

        if (this.sounds.Money)
            this.sounds.Money.play();
    }

    playBuildingClick() {
        if (GameSettings.soundsOff)
            return;

        if (this.sounds.Click)
            this.sounds.Click[Math.trunc(Math.random() * this.sounds.Click.length)].play();
    }

    playUpgrade(counter) {
        if (GameSettings.soundsOff)
            return;

        if (this.sounds.LongTap) {
            const index = Math.min(this.sounds.LongTap.length - 1, Math.trunc(counter / 4));
            const sound = this.sounds.LongTap[index];
            sound.play();
        }
    }

    playChestSound(index) {
        if (GameSettings.soundsOff)
            return;

        if (this.sounds.Chest)
            this.sounds.Chest[index].play();
    }

    playBanjoded() {
        if (GameSettings.soundsOff)
            return;

        if (this.sounds.Banjoded)
            this.sounds.Banjoded.play();
    }

    playInfo() {
        if (GameSettings.soundsOff)
            return;

        if (this.sounds.Info)
            this.sounds.Info.play();
    }

    muteSounds() {
        if (!GameSettings.musicOff && this.activeMusic) {
            this.activeMusic.pause();
        }
    }

    unMuteSounds() {
        if (!GameSettings.musicOff && this.activeMusic) {
            this.activeMusic.resume();
        }
    }
}

var audioManager = new AudioManager();

function Random(seed) {
    this._seed = seed % 2147483647;
    if (this._seed <= 0) this._seed += 2147483646;
}

/**
 * Returns a pseudo-random value between 1 and 2^32 - 2.
 */
Random.prototype.next = function () {
    return this._seed = this._seed * 16807 % 2147483647;
};


/**
 * Returns a pseudo-random floating point number in range [0, 1).
 */
Random.prototype.nextFloat = function () {
    return (this.next() - 1) / 2147483646;
};

function BigIntSqrRoot(val) {
    function newtonIteration(x0) {
        const x1 = val.divide(x0).add(x0).divide(2);
        if (x1.compare(x0) >= 0)
            return x1;

        return newtonIteration(x1);
    }

    return newtonIteration(val);
}

class UnnyAction {

    constructor(){
        this.allListeners = [];
    }

    addListener(listener) {
        this.allListeners.push(listener);
    }

    removeListener(listener) {
        for (let i = 0;i < this.allListeners.length;i++){
            if (this.allListeners[i] === listener){
                this.allListeners.splice(i, 1);
                break;
            }
        }
    }

    clear() {
        this.allListeners = [];
    }

    callListeners (...theArgs) {
        for (let i = 0;i < this.allListeners.length;i++)
            this.allListeners[i](...theArgs);
    }

    callAndClearListeners (...theArgs) {
        const temp = this.allListeners;
        this.clear();
        for (let i = 0;i < temp.length;i++)
            temp[i](...theArgs);
    }
}

class EventManager {
    constructor() {
        this.onSoulsCollected = new UnnyAction();//slot, amount
        this.onBoxOpened = new UnnyAction();
        this.onBoxPurchased = new UnnyAction();
        this.onBoxReceived = new UnnyAction();
        this.onLongSpeedActivated = new UnnyAction();
        this.onShortSpeedActivated = new UnnyAction();
        this.onUpgradePurchased = new UnnyAction();
        this.onBuildingUpgraded = new UnnyAction();
        this.onHarvestCompleted = new UnnyAction();
        this.onMacroUpgraded = new UnnyAction();
        this.onMouseWheel = new UnnyAction();
        this.onAdStarted = new UnnyAction();
        this.onDailyBonusCollected = new UnnyAction();
        this.onQuestCompleted = new UnnyAction();
        this.onQuestClaimed = new UnnyAction();
        this.onLikesReseted = new UnnyAction();
        this.onFortuneWheelUsed = new UnnyAction();
        this.onActionQuestProgress = new UnnyAction();
    }

    soulsCollected(slot, amount) {
        this.onSoulsCollected.callListeners(slot, amount);
    }

    boxOpened() {
        this.onBoxOpened.callListeners();
        gameAnalytics.sendEvent("BoxOpened");
    }

    boxReceived(amount) {
        this.onBoxReceived.callListeners(amount);
    }

    boxPurchased(amount) {
        this.onBoxPurchased.callListeners(amount);
    }

    longSpeedActivated() {
        this.onLongSpeedActivated.callListeners();
    }

    shortSpeedActivated() {
        this.onShortSpeedActivated.callListeners();
    }

    upgradePurchased(upgradeInfo) {
        this.onUpgradePurchased.callListeners(upgradeInfo);
    }

    buildingUpgraded(building, slot) {
        this.onBuildingUpgraded.callListeners(building, slot);
    }

    harvestCompleted(seeds) {
        this.onHarvestCompleted.callListeners(seeds);
    }

    macroUpgraded(building, bonus) {
        this.onMacroUpgraded.callListeners(building, bonus);
    }

    mouseWheel(deltaX, deltaY) {
        this.onMouseWheel.callListeners(deltaX, deltaY);
    }

    adStarted() {
        this.onAdStarted.callListeners();
    }

    dailyBonusCollected() {
        this.onDailyBonusCollected.callListeners();
    }

    questClaimed() {
        this.onQuestClaimed.callListeners();
    }

    questCompleted() {
        this.onQuestCompleted.callListeners();
    }

    likesReseted() {
        this.onLikesReseted.callListeners();
    }

    fortuneWheelUsed() {
        this.onFortuneWheelUsed.callListeners();
    }

    actionQuestProgress(quest) {
        this.onActionQuestProgress.callListeners(quest);
    }
}

let eventManager = new EventManager();

const BONUS_PER_LIKE = 1;
const MAX_LIKES_COUNT = 100;

const AllBuildings = {};

class Building {
    constructor(info, slot, key) {
        this.onResourcesUpdated = new UnnyAction();
        this.onBuildingUpdated = new UnnyAction();
        this.onResourcesCollected = new UnnyAction();
        this.onPreUpgrade = new UnnyAction();
        this.onUpgraded = new UnnyAction();
        this.onLiked = new UnnyAction();
        this.onReseted = new UnnyAction();
        this.onUnlockChanged = new UnnyAction();

        this.currentLoading = 0;
        this.info = info;
        this.resources = 0;
        this.level = 0;
        this.likes = [];
        this.slot = slot;
        this.id = parseInt(key);

        AllBuildings[this.slot] = this;

        this.onLikesReseted = new UnnyAction();
        eventManager.onLikesReseted.addListener(this.likesWereReseted.bind(this));
    }

    _saveState() {
        this.savedProgress.resources = this.resources.toString();
        this.savedProgress.loading = this.currentLoading;
        this.savedProgress.update = this.update = Progress.getTimeNow();
    }

    _loadProgress(progress, globalProgress, nowTime) {
        this.savedProgress = progress;

        this.level = progress.level;
        this.likes = progress.likes ? progress.likes : [];
        this.resources = bigInt(progress.resources);
        if (!progress.hasOwnProperty("upgradePrice")) {
            progress.upgradePrice = "0"
        }
        this.upgradePrice = bigInt(this.level > 0 ? progress.upgradePrice : this.info.construct.price);
        this.currentLoading = progress.loading || 0;
        this.update = progress.update || 0;
        this.bonus_SpeedUp = progress.speedUpMultiplier ? progress.speedUpMultiplier : 1;
        if (!progress.hasOwnProperty('multiProfitMultiplier'))
            progress.multiProfitMultiplier = "1";
        this.bonus_MultiProfit = new bigInt(progress.multiProfitMultiplier);
        this.autoCollect = progress.hasAutoClick;

        this._updateFinalProductionRate();

        if (this.level > 0) {
            const loadTime = this.getLoadingTime();
            const production = this.getProductionPerLoad();

            let deltaTime = nowTime - this.update;

            const guardEndTime = globalProgress.getGuardEndTime();
            let guardScale = 1;
            if (guardEndTime > this.update) {
                if (guardEndTime >= nowTime)
                    guardScale = 2;
                else
                    guardScale = ((nowTime - guardEndTime) + 2 * (guardEndTime - this.update)) / deltaTime;
            }

            if (this.resources.compare(0) !== 0 && !this.autoCollect) {
                this.currentLoading = 0;
                this.anyResources = true;
            } else {
                deltaTime /= 1000;
                let periods = Math.trunc(deltaTime / loadTime);
                if (!this.autoCollect)
                    periods = Math.min(1, periods);

                // console.log("id = " + this.id + " > " + this.autoCollect + " ? " + periods + " <> " + production + " this.resources = " + this.resources.toString());
                // console.warn("guardScale " + guardScale);
                this.resources = this.resources.add(production.multiply(Math.trunc(periods * guardScale)));
                this.anyResources = this.resources.compare(0) !== 0;

                if (this.anyResources && !this.autoCollect)
                    this.currentLoading = 0;
                else
                    this.currentLoading += deltaTime - periods * loadTime;
            }
            this._calculateNextBigUpgradeLevel();

        } else
            this.anyResources = false;

        globalProgress.onResourcesChanges.addListener(this.resourcesChanged.bind(this));

        this._checkBuildingForOpen(globalProgress);
        // const info = globalProgress.getPuzzleInfoById(this.id - 1);
        // if (info && info.level > 1) {
        //     const data = {
        //         upgradeType: 'MultiProfit'
        //     };
        //     for (let i = 2;i < info.level;i++) {
        //         data.parameter = GameData.getPuzzleResourceBonusPerLevel(i);
        //         this._applyBonus(data);
        //     }
        // }
    }

    isUnlocked() {
        return this.unlocked;
    }

    _checkBuildingForOpen(progress) {
        if (this.getLevel() > 0) {
            this.unlocked = false;
        } else {
            const newUnlocked = progress.isResourcesEnoughForConstruction(this);
            if (this.unlocked !== newUnlocked) {
                this.unlocked = newUnlocked;
                this.onUnlockChanged.callListeners(this);
            }
        }
    }

    resourcesChanged(progress, increased) {
        if (this.unlocked === !increased && increased !== undefined) {
            this._checkBuildingForOpen(progress);
        }
    }

    loadProgress(progress, globalProgress, nowTime) {
        this._loadProgress(progress, globalProgress, nowTime);

        globalProgress.onPuzzleCompleted.addListener(this.puzzleCompleted.bind(this));
        globalProgress.onSeedsBonusChanged.addListener(this._updateFinalProductionRate.bind(this));
    }

    reseted(globalProgress, buildings) {
        const nowTime = Math.trunc(Progress.getTimeNow());
        const prog = buildings[this.id];

        this._loadProgress(prog, globalProgress, nowTime);

        this.onReseted.callListeners();
    }

    puzzleCompleted(info) {
        if (info.id !== this.slot)
            return;

        const data = {
            upgradeType: 'MultiProfit',
            parameter: GameData.getPuzzleResourceBonusPerLevel(info.level),
            div_parameter: GameData.getPuzzleResourceBonusDivPerLevel(info.level)
        };

        if (info.level === 1)
            this._checkBuildingForOpen(gameInit.progress);

        this._applyBonus(data);
    }

    getLoadingTime() {
        return this.info.loading.duration / this.bonus_SpeedUp;
    }

    getProductionPerLoad() {
        return this.finalProduction;// this.info.production.base.multiply(this.bonus_MultiProfit);
    }

    updateBuilding(deltaTime) {
        if (this.level <= 0)
            return;

        if (this.anyResources && !this.autoCollect)
            return;

        this.currentLoading += deltaTime;
        const loadTime = this.getLoadingTime();
        if (this.currentLoading >= loadTime) {
            let loads = Math.trunc(this.currentLoading / loadTime);

            if (this.autoCollect)
                this.currentLoading -= loads * loadTime;
            else {
                this.currentLoading = 0;
                loads = 1;
            }

            const multiply = gameInit.progress.isGuardActive() ? 2 : 1;
            this.resources = this.resources.add(this.getProductionPerLoad().multiply(loads * multiply));
            this.onResourcesUpdated.callListeners(this);
            this.anyResources = true;
        }
        this.onBuildingUpdated.callListeners(this);
    }

    getProducedResources() {
        return this.resources;
    }

    getLoadingPercentage() {
        if (this.anyResources && !this.autoCollect)
            return 1;
        return Math.min(this.currentLoading / this.getLoadingTime(), 1);
    }

    getLevel() {
        return this.level;
    }

    likesWereReseted() {
        if (this.getLikes() > 0) {
            this.likes = [];
            this._updateFinalProductionRate();
            this.onLikesReseted.callListeners(this);
        }
    }

    getLikes() {
        return this.likes.length > MAX_LIKES_COUNT ? MAX_LIKES_COUNT : this.likes.length;
    }

    addLikes(arr) {
        for (let i in arr) {
            const val = arr[i];
            if (!this.likes.includes(val))
                this.likes.push(val);
        }

        this.savedProgress.likes = this.likes;
        this.onLiked.callListeners(this);
        this._updateFinalProductionRate();
        gameInit.progress.saveProgress();
    }

    getUpgradePrice() {
        return this.upgradePrice;//.getUpgradePrice(this.level);
    }

    getUpgradeProgress() {
        return (this.level - this.prevBigUpgradeLevel) / (this.nextBigUpgradeLevel - this.prevBigUpgradeLevel);
    }

    buildingWasClicked() {
        if (this.anyResources) {
            if (gameInit.progress.isSupervisorActive()) {
                const amount = this.resources.multiply(2);
                this.onResourcesCollected.callListeners(this, amount);
                gameInit.progress.addSupervisorResources(amount);
            }
            else
                this.onResourcesCollected.callListeners(this, this.resources);
            this.resources = bigInt(0);
            this.anyResources = false;
            this.onResourcesUpdated.callListeners(this);

            this._saveState();
        }
    }

    _calculateNextBigUpgradeLevel() {
        const upgradeData = GameData.getSlotsUpgrade();

        for (let i = 0; i < upgradeData.length; i++) {
            const val = upgradeData[i];
            if (this.level < val.requiredLevel) {
                this.nextBigUpgradeLevel = val.requiredLevel;
                this.prevBigUpgradeLevel = i === 0 ? 0 : upgradeData[i - 1].requiredLevel;
                return;
            }
        }

        this.nextBigUpgradeLevel = Math.trunc(this.level / 100 + 1) * 100;
        this.prevBigUpgradeLevel = this.nextBigUpgradeLevel - 100;
    }

    _getBigUpgradeLevelBonus() {
        const upgradeData = GameData.getSlotsUpgrade();

        for (let i in upgradeData) {
            const val = upgradeData[i];
            if (val.requiredLevel === this.level)
                return val;
        }

        return upgradeData[upgradeData.length - 1];
    }

    _applyPuzzleBonusAfterConstruction() {
        const puzzleInfo = gameInit.progress.getPuzzleInfoById(this.slot - 1);
        if (puzzleInfo.level >= 2) {
            const data = {
                upgradeType: 'MultiProfit',
                parameter: GameData.getPuzzleResourceBonusPerLevel(puzzleInfo.level)
            };
            this._applyBonus(data);
        }
    }

    upgradeBuilding(free) {
        if (!free)
            this.onPreUpgrade.callListeners(this);

        this.level++;

        this._updateFinalProductionRate();

        const upgrade = this.info.upgrade;
        if (this.level === 1) {
            this.upgradePrice = bigInt(upgrade.base);
            this._calculateNextBigUpgradeLevel();
            this._applyPuzzleBonusAfterConstruction();
        } else {
            if (this.upgradePrice.compare(10) <= 0) {//Exception for level 1
                const oldVal = this.upgradePrice;
                this.upgradePrice = this.upgradePrice.multiply(Math.trunc(upgrade.scale * 100)).divide(100);
                if (this.upgradePrice.compare(oldVal) === 0)
                    this.upgradePrice = this.upgradePrice.add(1);
            } else
                this.upgradePrice = this.upgradePrice.multiply(Math.trunc(upgrade.scale * 100)).divide(100);

            if (this.level === this.nextBigUpgradeLevel) {
                const bonus = this._getBigUpgradeLevelBonus();

                this._applyBonus(bonus);
                this._calculateNextBigUpgradeLevel();

                eventManager.macroUpgraded(this, bonus);
            }

            eventManager.buildingUpgraded(this, this.id);
        }

        this.update = Progress.getTimeNow();

        this.savedProgress.level = this.level;
        this.savedProgress.upgradePrice = this.upgradePrice.toString();
        this._saveState();

        this.onUpgraded.callListeners(this);

        if (this.unlocked) {
            this.unlocked = false;
            this.onUnlockChanged.callListeners(this);
        }
    }

    _updateFinalProductionRate() {
        const seedsBonus = gameInit.progress.getTotalSeedsBonus();

        this.finalProduction = this.info.production.base.multiply(this.getLevel()).multiply(seedsBonus).multiply(this.bonus_MultiProfit);
        if (this.getLikes() > 0)
            this.finalProduction = this.finalProduction.multiply(100 + this.getLikes() * BONUS_PER_LIKE).divide(100);
    }

    getProductionForLevel(level) {
        const seedsBonus = gameInit.progress.getTotalSeedsBonus();
        return this.info.production.base.multiply(level).multiply(seedsBonus).multiply(this.bonus_MultiProfit);
    }

    _applyBonus(bonus) {
        switch (bonus.upgradeType) {
            case 'SpeedUp':
                this.bonus_SpeedUp *= bonus.parameter;
                this.savedProgress.speedUpMultiplier = this.bonus_SpeedUp;
                break;
            case 'MultiProfit':
                this.bonus_MultiProfit = this.bonus_MultiProfit.multiply(bonus.parameter);
                if (bonus.div_parameter)
                    this.bonus_MultiProfit = this.bonus_MultiProfit.divide(bonus.div_parameter);
                this.savedProgress.multiProfitMultiplier = this.bonus_MultiProfit.toString();
                this._updateFinalProductionRate();
                break;
            case 'AutoClick':
                this.savedProgress.hasAutoClick = this.autoCollect = true;
                break;
            case 'TimeTravel':
                this.updateBuilding(bonus.parameter);
                break;
            case 'Upgrade':
                if (this.getLevel() > 0) {
                    for (let i = 0; i < bonus.parameter; i++) {
                        this.upgradeBuilding(true);
                    }
                }
                break;
            //TODO implement those:
            case 'SuperSeed':
            case 'SeedProc':
        }
        this._saveState();
    }

    upgradePurchased(data) {
        if (data.slotNumber >= 0 && data.slotNumber + 1 !== this.id)
            return;

        this._applyBonus(data);
    }

    getDropIcon() {
        return this.info.visual.drop;
    }

    getDropIconPath() {
        return "GoodsDrops/" + this.info.visual.drop + ".png";
    }

    getSmallIcon() {
        return this.info.visual.icon + "_small";
    }

    getSmallIconPath() {
        return "GoodsSmallIcons/" + this.info.visual.icon + ".png";
    }

    getBigIcon() {
        return this.info.visual.icon + "_big";
    }

    getBigIconPath() {
        return "GoodsBuyWindowIcons/" + this.info.visual.icon + ".png"; //TODO Optimize ... do we need them?
    }

    getLocalizationKey() {
        return this.info.visual.icon.substring(0, this.info.visual.icon.length - 5);
    }
}

class World {
    constructor(logic, key) {
        this.onUpdateWorld = new UnnyAction();
        this.onBuildingCreated = new UnnyAction();
        this.onBuildingUpgraded = new UnnyAction();
        this.onBuildingPreUpgrade = new UnnyAction();
        this.onResourcesUpdated = new UnnyAction();
        this.onBuildingUpdated = new UnnyAction();
        this.onBuildingLiked = new UnnyAction();
        this.onResourcesCollected = new UnnyAction();
        this.onUpgradePurchased = new UnnyAction();
        this.onReseted = new UnnyAction();
        this.id = key;

        logic.update.addListener(this.update.bind(this));
        logic.reseted.addListener(this.resetWorld.bind(this));
    }

    upgradePurchased(data) {
        this.onUpgradePurchased.callListeners(data);
    }

    loadProgress(progress) {
        const buildings = progress.getBuildingsForWorld(this.id);

        const nowtime = Math.trunc(Progress.getTimeNow());
        this.allBuildings = {};
        for (let key in buildings) {
            const prog = buildings[key];
            // const data = new BuildingData(GameData.getBuildingInfoByPlace(prog.name));
            const building = this.createBuilding(GameData.getBuildingInfoBySlot(prog.slot), prog.slot, key);
            building.loadProgress(prog, progress, nowtime);
            this.onBuildingCreated.callListeners(this, building);
            this.allBuildings[key] = building;
        }
    }

    getBuildingById(id) {
        return this.allBuildings[id];
    }

    resetWorld(progress) {
        const buildings = progress.getBuildingsForWorld(this.id);
        this.onReseted.callListeners(progress, buildings);
    }

    isSelected() {
        return this.id == gameInit.selectedWorld;
    }

    createBuilding(data, slot, key) {
        const building = new Building(data, slot, key);
        this.onUpdateWorld.addListener(building.updateBuilding.bind(building));
        this.onUpgradePurchased.addListener(building.upgradePurchased.bind(building));
        this.onReseted.addListener(building.reseted.bind(building));
        building.world = this;
        building.onResourcesCollected.addListener(this.resourcesCollected.bind(this));
        building.onUpgraded.addListener(this.buildingUpgraded.bind(this));
        building.onPreUpgrade.addListener(this.buildingPreUpgrade.bind(this));
        building.onResourcesUpdated.addListener(this.resourcesUpdate.bind(this));
        building.onBuildingUpdated.addListener(this.buildingUpdated.bind(this));
        building.onLiked.addListener(this.buildingLiked.bind(this));
        return building;
    }

    buildingPreUpgrade(building) {
        this.onBuildingPreUpgrade.callListeners(this, building);
    }

    buildingUpgraded(building) {
        this.onBuildingUpgraded.callListeners(this, building);
    }

    resourcesUpdate(building) {
        this.onResourcesUpdated.callListeners(this, building);
    }

    buildingUpdated(building) {
        this.onBuildingUpdated.callListeners(this, building);
    }

    buildingLiked(building) {
        this.onBuildingLiked.callListeners(this, building);
    }

    resourcesCollected(building, resources) {
        this.onResourcesCollected.callListeners(building, resources);
    }

    update(deltaTime) {
        this.onUpdateWorld.callListeners(deltaTime);
    };
}

const TutPhases = {
    BuildSlot1: 0,
    Collect1: 1,
    Collect20: 2,
    UpgradeBuilding: 3,
    UpgradeBuilding5: 4,
    Collect1k: 5,
    BuyAutoCollect: 6,
    Boost4h: 7,
    Collect10k: 8,
    Boost6s: 9,
    BuildSlots6: 10,
    SummonBoss: 11,
    WaitForSummonToEnd: 12,
    PuzzlesAvailable: 13,
    BuildSlots9: 14,
    TutorialEnd: 15,
    FortuneWheel: 100,
    FortuneWheelEnded: 101,
};

const BanjoDuration = 7;
const GuardDurationHours = 4;
const SpinsResporeTime = 8 * 3600 * 1000;
const AdsAvailableToWatchADay = 5;
const MAX_PUZZLE_LEVEL = 5;
const JACKPOT_SIZE = 5;
const JACKPOT_INCREASE = 2;
const GEMS_PRICE_FOR_WHEEL_SPIN = 5;
const LIKES_RESET_TIMER = 3 * 24 * 3600 * 1000;

const BoxType = {
    GoldBox: "0",
    GemsBox: "1",
    SuperBox: "2",
    GuardBox: "3",
    GuardSuperBox: "4"
};

const MUSIC_STATE = "MUSIC_STATE";
const SOUNDS_STATE = "SOUNDS_STATE";
const CURRENT_LANGUAGE = "CURRENT_LANGUAGE";
const GAME_VERSION = "0.9.14";

let LockAllSounds = false;

var ua = navigator.userAgent.toLowerCase();
if (ua.indexOf('safari') != -1) {
    if (ua.indexOf('chrome') > -1) {
    } else {
        LockAllSounds = true;
    }
}

const GameSettings = {
    musicOff: localStorage.getItem(MUSIC_STATE) || LockAllSounds,
    soundsOff: localStorage.getItem(SOUNDS_STATE) || LockAllSounds,
    language: localStorage.getItem(CURRENT_LANGUAGE),
    allLanguages: {},
};

if (!GameSettings.language)
    GameSettings.language = "Russian";

function SetMusicState(state) {
    GameSettings.musicOff = !state || LockAllSounds;
    if (GameSettings.musicOff) {
        localStorage.setItem(MUSIC_STATE, "true");
        audioManager.stopMusic();
    }
    else {
        localStorage.removeItem(MUSIC_STATE);
        audioManager.restoreMusic();
    }
}

function SetSoundsState(state) {
    GameSettings.soundsOff = !state || LockAllSounds;
    if (GameSettings.soundsOff)
        localStorage.setItem(SOUNDS_STATE, "true");
    else
        localStorage.removeItem(SOUNDS_STATE);
}

function SetCurrentLanguage(language) {
    GameSettings.language = language;
    localStorage.setItem(CURRENT_LANGUAGE, language);

    if (GameSettings.allLanguages.hasOwnProperty(GameSettings.language)) {
        LocalizationManager.initWithJson(GameSettings.allLanguages[GameSettings.language]);
        guiManager.localize();
    }
    else {
        const localization = 'Localization_' + GameSettings.language;
        LoadFile(gameInit.engine, localization, VisualData.getLocalizationsFolder() + localization + ".json", () => {
            const json = gameInit.engine.cache.json.get(localization);
            GameSettings.allLanguages[GameSettings.language] = json;
            SetCurrentLanguage(GameSettings.language);
        }, UnnyObjectType.Json);
    }
}

function getCheatSave() {
    return JSON.parse("{\"profile\":{\"version\":8,\"gold\":\"266171821978\",\"gems\":\"0\",\"seeds\":\"0\",\"goldSpent\":\"4949388240722\",\"seedsStrength\":2,\"firstTimeInGame\":1565169308763,\"tutorialPhase\":11,\"maxGoldModifier\":3,\"gameLanguage\":\"English\",\"sessionNumber\":2,\"harvestsCount\":0,\"gemsMultiProfit\":\"1\",\"adsWatched\":{\"count\":0,\"update\":0},\"savedVersion\":172},\"purchases\":{\"23\":1,\"24\":1,\"25\":1,\"26\":1,\"27\":1,\"28\":1,\"29\":1,\"30\":1,\"31\":1,\"34\":1},\"fortuneWheel\":{\"freeSpins\":1,\"windowOpened\":false,\"jackpot\":500,\"update\":0},\"puzzle\":{\"boxes\":{\"0\":3,\"1\":0,\"2\":0,\"3\":0,\"4\":0},\"goods\":[{\"id\":1,\"level\":1,\"pieces\":0},{\"id\":2,\"level\":1,\"pieces\":0},{\"id\":3,\"level\":1,\"pieces\":0},{\"id\":4,\"level\":1,\"pieces\":0},{\"id\":5,\"level\":1,\"pieces\":0},{\"id\":6,\"level\":1,\"pieces\":0},{\"id\":7,\"level\":1,\"pieces\":0},{\"id\":8,\"level\":1,\"pieces\":0},{\"id\":9,\"level\":1,\"pieces\":0},{\"id\":10,\"level\":0,\"pieces\":0},{\"id\":11,\"level\":0,\"pieces\":0},{\"id\":12,\"level\":0,\"pieces\":0},{\"id\":13,\"level\":0,\"pieces\":0},{\"id\":14,\"level\":0,\"pieces\":0},{\"id\":15,\"level\":0,\"pieces\":0},{\"id\":16,\"level\":0,\"pieces\":0},{\"id\":17,\"level\":0,\"pieces\":0},{\"id\":18,\"level\":0,\"pieces\":0},{\"id\":19,\"level\":0,\"pieces\":0},{\"id\":20,\"level\":0,\"pieces\":0},{\"id\":21,\"level\":0,\"pieces\":0},{\"id\":22,\"level\":0,\"pieces\":0},{\"id\":23,\"level\":0,\"pieces\":0},{\"id\":24,\"level\":0,\"pieces\":0},{\"id\":25,\"level\":0,\"pieces\":0},{\"id\":26,\"level\":0,\"pieces\":0},{\"id\":27,\"level\":0,\"pieces\":0}],\"guards\":[],\"openedBox\":0,\"goldBoxPrice\":\"100000000000000\"},\"worlds\":{\"1\":{\"buildings\":{\"1\":{\"slot\":1,\"level\":100,\"resources\":\"0\",\"multiProfitMultiplier\":\"3\",\"upgradePrice\":\"3708853\",\"loading\":0.024249999999280902,\"update\":1565174442352,\"speedUpMultiplier\":16,\"hasAutoClick\":true},\"2\":{\"slot\":2,\"level\":53,\"resources\":\"0\",\"multiProfitMultiplier\":\"9\",\"upgradePrice\":\"78608808\",\"loading\":0.20100000000062224,\"update\":1565174430226,\"hasAutoClick\":true,\"speedUpMultiplier\":8},\"3\":{\"slot\":3,\"level\":26,\"resources\":\"0\",\"multiProfitMultiplier\":\"9\",\"upgradePrice\":\"50805695\",\"loading\":0.7410000000000956,\"update\":1565174452038,\"speedUpMultiplier\":4,\"hasAutoClick\":true},\"4\":{\"slot\":4,\"level\":17,\"resources\":\"0\",\"multiProfitMultiplier\":\"9\",\"upgradePrice\":\"914740365\",\"loading\":4.584999999999955,\"update\":1565174442020,\"speedUpMultiplier\":2,\"hasAutoClick\":true},\"5\":{\"slot\":5,\"level\":23,\"resources\":\"0\",\"multiProfitMultiplier\":\"27\",\"upgradePrice\":\"1571183804763\",\"loading\":28.036999999999885,\"speedUpMultiplier\":2,\"update\":1565174435270},\"6\":{\"slot\":6,\"level\":12,\"resources\":\"0\",\"multiProfitMultiplier\":\"3\",\"upgradePrice\":\"552394641792\",\"loading\":17.944000000000017,\"speedUpMultiplier\":2,\"update\":1565174438829},\"7\":{\"slot\":7,\"level\":0,\"resources\":\"0\",\"multiProfitMultiplier\":\"3\",\"upgradePrice\":\"0\",\"loading\":0,\"speedUpMultiplier\":2,\"update\":1565170079333},\"8\":{\"slot\":8,\"level\":0,\"resources\":\"0\",\"multiProfitMultiplier\":\"3\",\"upgradePrice\":\"0\",\"loading\":0,\"speedUpMultiplier\":2,\"update\":1565170079333},\"9\":{\"slot\":9,\"level\":0,\"resources\":\"0\",\"multiProfitMultiplier\":\"3\",\"upgradePrice\":\"0\",\"loading\":0,\"speedUpMultiplier\":2,\"update\":1565170079333}}},\"2\":{\"buildings\":{\"1\":{\"slot\":10,\"level\":0,\"resources\":\"0\",\"multiProfitMultiplier\":\"3\",\"upgradePrice\":\"0\",\"hasAutoClick\":true,\"loading\":0,\"update\":1565170079333,\"speedUpMultiplier\":2},\"2\":{\"slot\":11,\"level\":0,\"resources\":\"0\",\"multiProfitMultiplier\":\"9\",\"upgradePrice\":\"0\",\"hasAutoClick\":true,\"loading\":0,\"update\":1565170329398,\"speedUpMultiplier\":2},\"3\":{\"slot\":12,\"level\":0,\"resources\":\"0\",\"multiProfitMultiplier\":\"9\",\"upgradePrice\":\"0\",\"loading\":0,\"speedUpMultiplier\":2,\"update\":1565170329948,\"hasAutoClick\":true},\"4\":{\"slot\":13,\"level\":0,\"resources\":\"0\",\"multiProfitMultiplier\":\"9\",\"upgradePrice\":\"0\",\"loading\":0,\"speedUpMultiplier\":2,\"update\":1565170426625,\"hasAutoClick\":true},\"5\":{\"slot\":14,\"level\":0,\"resources\":\"0\",\"multiProfitMultiplier\":\"27\",\"upgradePrice\":\"0\",\"loading\":0,\"speedUpMultiplier\":2,\"update\":1565174174974},\"6\":{\"slot\":15,\"level\":0,\"resources\":\"0\",\"multiProfitMultiplier\":\"3\",\"upgradePrice\":\"0\",\"loading\":0,\"speedUpMultiplier\":2,\"update\":1565170079334},\"7\":{\"slot\":16,\"level\":0,\"resources\":\"0\",\"multiProfitMultiplier\":\"3\",\"upgradePrice\":\"0\",\"loading\":0,\"speedUpMultiplier\":2,\"update\":1565170079334},\"8\":{\"slot\":17,\"level\":0,\"resources\":\"0\",\"multiProfitMultiplier\":\"3\",\"upgradePrice\":\"0\",\"loading\":0,\"speedUpMultiplier\":2,\"update\":1565170079334},\"9\":{\"slot\":18,\"level\":0,\"resources\":\"0\",\"multiProfitMultiplier\":\"3\",\"upgradePrice\":\"0\",\"loading\":0,\"speedUpMultiplier\":2,\"update\":1565170079334}}},\"3\":{\"buildings\":{\"1\":{\"slot\":19,\"level\":0,\"resources\":\"0\",\"multiProfitMultiplier\":\"3\",\"upgradePrice\":\"0\",\"hasAutoClick\":true,\"loading\":0,\"update\":1565170079334,\"speedUpMultiplier\":2},\"2\":{\"slot\":20,\"level\":0,\"resources\":\"0\",\"multiProfitMultiplier\":\"9\",\"upgradePrice\":\"0\",\"hasAutoClick\":true,\"loading\":0,\"update\":1565170329398,\"speedUpMultiplier\":2},\"3\":{\"slot\":21,\"level\":0,\"resources\":\"0\",\"multiProfitMultiplier\":\"9\",\"upgradePrice\":\"0\",\"loading\":0,\"speedUpMultiplier\":2,\"update\":1565170329948,\"hasAutoClick\":true},\"4\":{\"slot\":22,\"level\":0,\"resources\":\"0\",\"multiProfitMultiplier\":\"9\",\"upgradePrice\":\"0\",\"loading\":0,\"speedUpMultiplier\":2,\"update\":1565170426625,\"hasAutoClick\":true},\"5\":{\"slot\":23,\"level\":0,\"resources\":\"0\",\"multiProfitMultiplier\":\"27\",\"upgradePrice\":\"0\",\"loading\":0,\"speedUpMultiplier\":2,\"update\":1565174174975},\"6\":{\"slot\":24,\"level\":0,\"resources\":\"0\",\"multiProfitMultiplier\":\"3\",\"upgradePrice\":\"0\",\"loading\":0,\"speedUpMultiplier\":2,\"update\":1565170079334},\"7\":{\"slot\":25,\"level\":0,\"resources\":\"0\",\"multiProfitMultiplier\":\"3\",\"upgradePrice\":\"0\",\"loading\":0,\"speedUpMultiplier\":2,\"update\":1565170079334},\"8\":{\"slot\":26,\"level\":0,\"resources\":\"0\",\"multiProfitMultiplier\":\"3\",\"upgradePrice\":\"0\",\"loading\":0,\"speedUpMultiplier\":2,\"update\":1565170079334},\"9\":{\"slot\":27,\"level\":0,\"resources\":\"0\",\"multiProfitMultiplier\":\"3\",\"upgradePrice\":\"0\",\"loading\":0,\"speedUpMultiplier\":2,\"update\":1565170079334}}}},\"quests\":{\"activeQuests\":[{\"id\":10,\"isComplete\":false,\"isRefreshed\":false,\"level\":1,\"progress\":771},{\"id\":8,\"isComplete\":false,\"isRefreshed\":false,\"level\":2,\"progress\":7},{\"id\":0,\"isComplete\":false,\"isRefreshed\":false,\"level\":2,\"progress\":0}],\"update\":1565174169001},\"dailyBonus\":{\"seed\":0,\"update\":0,\"lastBonus\":0}}");
}

class Progress {
    constructor(gameInit, progress) {
        // gameInit.onBuildingCreated.addListener(this.buildingCreated.bind(this));
        gameInit.onResourcesCollected.addListener(this.resourcesCollected.bind(this));
        gameInit.onBuildingLiked.addListener(this.buildingLiked.bind(this));
        gameInit.update.addListener(this.update.bind(this));
        this.onResourcesChanges = new UnnyAction();
        this.onUpgradePurchased = new UnnyAction();

        const localProgress = this.loadProgress();
        let save = progress;
        let localSaveUsed = false;
        if (!progress) {
            save = localProgress;
            localSaveUsed = true;
            console.log("no server progress -> use local")
        } else {
            if (localProgress) {
                const lp = localProgress.profile.savedVersion;
                const sp = progress.profile.savedVersion;
                console.log("server progress version: " + sp + " ; local version = " + lp);
                if (lp && (!sp || lp > sp)) {
                    save = localProgress;
                    localSaveUsed = true;
                    gameAnalytics.sendServerError({
                            code: -1,
                            message: "Old Version (local: " + lp + '; server: ' + sp + " )"
                        }, "load_progress");
                }
            }
        }

        if (save && save.profile && save.profile.version >= 8) {
            this.savedProgress = save;
            this.savedProgress.profile.sessionNumber++;
            if (!localSaveUsed)
                this._getDeltaSave();
        }
        else {
            this.savedProgress = {
                profile: {
                    version: 8,
                    gold: "0",
                    gems: "27500",
                    seeds: "0",
                    goldSpent: "0",
                    seedsStrength: 2,
                    firstTimeInGame: Progress.getTimeNow(),
                    tutorialPhase: 0,
                    maxGoldModifier: 0,
                    gameLanguage: "English",
                    sessionNumber: 1,
                    harvestsCount: 0,
                    gemsMultiProfit: "1",
                    adsWatched: {
                        count: 0,
                        update: 0
                    }
                },
                purchases: {
                    //Id:key
                },
                fortuneWheel: {
                    freeSpins: 1,
                    windowOpened: false,
                    jackpot: JACKPOT_SIZE * RESOURCES_SCALE,
                    update: 0
                },
                puzzle: {
                    boxes: {
                        [BoxType.GoldBox]: 3,
                        [BoxType.GemsBox]: 0,
                        [BoxType.SuperBox]: 0,
                        [BoxType.GuardBox]: 0,
                        [BoxType.GuardSuperBox]: 0
                    },
                    goods: [],
                    guards: [],
                    openedBox: 0,
                    goldBoxPrice: "100000000000000"
                },
                worlds: {
                    1: {}
                },
                quests: {
                    activeQuests: [],
                    update: 0
                },
                dailyBonus: {
                    seed: 0,
                    update: 0,
                    lastBonus: 0
                }
            };

            this._resetConstructions();

            const puzzle = this.savedProgress.puzzle.goods;
            for (let i = 1; i <= 9; i++) {
                puzzle.push({
                    id: i,
                    level: 1,
                    pieces: 0
                });
            }

            for (let i = 10; i <= 27; i++) {
                puzzle.push({
                    id: i,
                    level: 0,
                    pieces: 0
                });
            }

            if (gBase.currentUnicorn)
                gBase.profile.setp(
                    this.savedProgress, null,
                    null, null, null, null,
                    (err) => {
                        if (err)
                            gameAnalytics.sendServerError(err, "setp");
                    }
                );

            this._getDeltaSave();
        }

        // this.savedProgress.profile.tutorialPhase = TutPhases.TutorialEnd;
        // this._resetConstructions();

        // this._setResourceByName("gems", "20000");
        // this._setResourceByName("seeds", "0");

        for (let i = 1; i <= VisualData.getWorldsCount(); i++) {
            if (!this.savedProgress.worlds.hasOwnProperty(i))
                this._resetWorld(i);
        }

        this.supervisor = {};

        this.general = {
            resources: bigInt(this._getResourceByName("gold")),
            seeds: bigInt(this._getResourceByName("seeds")),
            resourcesSpent: bigInt(this._getResourceByName("goldSpent")),
            gems: bigInt(this._getResourceByName("gems")),
            boxPrice: bigInt(this.savedProgress.puzzle.goldBoxPrice),
        };

        this.onPuzzlePeaceReceived = new UnnyAction();
        this.onPuzzleCompleted = new UnnyAction();
        this.onSeedsBonusChanged = new UnnyAction();

        this._updateTotalSeedsBonus();

        this.dailyBonusData = new DailyBonus(this.savedProgress.dailyBonus.seed, GameData.getLoginData());
        this.wheelOfFortune = new WheelOfFortune();

        this.lastSaveTime = Progress.getTimeNow();

        this.onResourcesChanges.addListener(this.saveProgress.bind(this));
        this.onPuzzlePeaceReceived.addListener(this.saveProgress.bind(this));
        this.onUpgradePurchased.addListener(this.saveProgress.bind(this));
    }

    _getResourceByName(name) {
        return this.savedProgress.profile[name];
    }

    _setResourceByName(name, value) {
        return this.savedProgress.profile[name] = value;
    }

    _resetWorld(worldId) {
        const world = this.savedProgress.worlds[worldId] = {};
        const buildings = world['buildings'] = {};
        for (let i = 1; i <= 9; i++) {
            buildings[i] = {
                slot: i + (worldId - 1) * 9,
                level: 0,
                resources: "0",
                multiProfitMultiplier: this.savedProgress.profile.gemsMultiProfit,
            }
        }
    }

    _resetConstructions() {
        for (let i = 1; i <= VisualData.getWorldsCount(); i++)
            this._resetWorld(i);
    }

    _updateTotalSeedsBonus() {
        if (this.general.seeds.compare(0) <= 0)
            this.general.seedsBonus = bigInt(1);
        else
            this.general.seedsBonus = this.general.seeds.multiply(this.savedProgress.profile.seedsStrength).divide(100 * RESOURCES_SCALE).add(1);
        // console.log("APPLES " + this.savedProgress.general.seedsBonus + " * "+ this.general.seeds + " = " + this.general.seedsBonus);
        this.onSeedsBonusChanged.callListeners(this.getTotalSeedsBonus());
    }

    static getTimeNow() {
        return Math.trunc(new Date().getTime());
    }

    static getDayNow() {
        return Math.trunc(this.getTimeNow() / (24 * 3600 * 1000));
    }

    static getDayFromTime(time) {
        return Math.trunc(time / (24 * 3600 * 1000));
        // return Math.trunc(Progress.getTimeNow() / (10));
    }

    getFortuneData() {
        return this.wheelOfFortune;
    }

    getDailyBonusData() {
        return this.dailyBonusData;
    }

    getMyDailyBonusInfo() {
        return this.savedProgress.dailyBonus;
    }

    getGuardEndTime() {
        return this.savedProgress.guard;
    }

    getGuardTimeLeft() {
        return this.getGuardEndTime() - Progress.getTimeNow();
    }

    isSupervisorActive() {
        return Progress.getTimeNow() < this.supervisor;
    }

    isGuardActive() {
        return Progress.getTimeNow() < this.savedProgress.guard;
    }

    getTotalSeedsBonus() {
        return this.general.seedsBonus;
    }

    getBonusPerSeed() {
        return this.savedProgress.profile.seedsStrength;
    }

    getPuzzlesCountForId(id) {
        const info = this.getPuzzleInfoById(id);
        const size = GameData.getPuzzleSizePerLevel(info.level);
        let count = 0;
        for (let i = 0; i < size * size; i++) {
            if ((info.pieces & (1 << i)) !== 0)
                count++;
        }
        return count;
    }

    getPuzzleInfoById(id) {
        return this.savedProgress.puzzle.goods[id];
    }

    getPuzzleInfo() {
        return this.savedProgress.puzzle.goods;
    }

    getWorlds() {
        return this.savedProgress.worlds;
    }

    getBuildingsForWorld(worldId) {
        return this.savedProgress.worlds[worldId].buildings;
    }

    getTotalResources() {
        return this.general.resources;
    }

    getTotalGems() {
        return this.general.gems;
    }

    getTotalSeeds() {
        return this.general.seeds;
    }

    getChestsCount() {
        return this.savedProgress.puzzle.boxes[BoxType.GoldBox] + this.savedProgress.puzzle.boxes[BoxType.GemsBox];
    }

    // getAllPurchases() {
    //     return this.savedProgress.purchases;
    // }

    _isPurchaseRepeatable(data) {
        return (data.repeatable || data.priceType === "Gems");
    }

    _isPurchasePriceIncreasing(data) {
        return (data.repeatable || (data.priceType === "Gems" && data.upgradeType === "MultiProfit"));
    }

    canPurchaseUpgrade(data) {
        if (data.hasOwnProperty('slotNumber')) {
            if (data.slotNumber >= 0 && !this.isBuildingConstructed(1, data.slotNumber + 1))
                return false;
        }

        if (this._isPurchaseRepeatable(data))
            return true;

        return !this.isUpgradePurchased(data.id);
    }

    isUpgradePurchased(id) {
        return this.savedProgress.purchases.hasOwnProperty(id);
    }

    isDailyBonusAvailable() {
        const dayNow = Progress.getDayNow();
        const dayWas = Progress.getDayFromTime(this.getMyDailyBonusInfo().update);

        return dayNow > dayWas;
    }

    bonusWasActivated() {
        const info = this.getMyDailyBonusInfo();
        info.update = Progress.getTimeNow();
        info.lastBonus++;
        eventManager.dailyBonusCollected();

        this.saveProgress();
    }

    activateSupervisor() {
        this.supervisor = Progress.getTimeNow() + BanjoDuration * 1000;
        this.resourcesCollectedWithSupervisor = bigInt("0");
        eventManager.shortSpeedActivated();
    }

    addSupervisorResources(amount) {
        this.resourcesCollectedWithSupervisor = this.resourcesCollectedWithSupervisor.add(amount);
    }

    getSupervisorResourcesCollected() {
        return this.resourcesCollectedWithSupervisor;
    }

    activateGuard() {
        // socialManager.playRewardedAd();
        if (this.isGuardActive())
            this.savedProgress.guard += 3600 * GuardDurationHours * 1000;
        else
            this.savedProgress.guard = Progress.getTimeNow() + 3600 * GuardDurationHours * 1000;
        eventManager.longSpeedActivated();
        this.saveProgress();
    }

    increaseBonusPerSeed(count) {
        this.savedProgress.profile.seedsStrength += count;
        this._updateTotalSeedsBonus();

        this.saveProgress();
    }

    isResourcesWithTypeEnoughForPurchase(data) {
        const price = this.getPurchasePrice(data);
        switch (data.priceType) {
            case "Gold":
                return this.isResourcesEnough(price);
            case "Seeds":
                return this.isSeedsEnough(price);
            case "Gems":
                return this.isGemsEnough(price);
        }
        return true;
    }

    isResourcesWithTypeEnough(data) {
        switch (data.priceType) {
            case "Gold":
                return this.isResourcesEnough(data.bigInt);
            case "Seeds":
                return this.isSeedsEnough(data.bigInt);
            case "Gems":
                return this.isGemsEnough(data.bigInt);
        }
        return true;
    }

    getPurchasePrice(data) {
        if (this.savedProgress.purchases.hasOwnProperty(data.id) && this._isPurchasePriceIncreasing(data))
            return new bigInt(this.savedProgress.purchases[data.id]);
        return data.bigInt;
    }

    tryToPurchaseUpgrade(id) {
        const data = GameData.getMarketPurchaseById(id);

        if (!data || !this.canPurchaseUpgrade(data))
            return false;

        if (data.priceType === "IN_APP") {
            socialManager.purchase(id);
            return true;
        } else {
            return this.purchaseConfirmed(id, data);
        }

        return false;
    }

    publicConfirmedPayment(id) {
        const data = GameData.getMarketPurchaseById(id);
        const win = guiManager.openNewWindow(WindowType.WinInAppBought);
        if (win)
            win.setInAppData(data);
        this.purchaseConfirmed(id, data);
    }

    purchaseConfirmed(id, data) {
        let price = this.getPurchasePrice(data);

        let mult;
        switch (data.priceType) {
            case "Gold":
                if (!this.isResourcesEnough(price))
                    return false;
                mult = 1000;
                this.resourcesSpent(price);
                break;
            case "Seeds":
                if (!this.isSeedsEnough(price))
                    return false;
                mult = 100;
                this.seedsSpent(price);
                break;
            case "IN_APP":
                this.gotGems(data.gems);
                break;
            case "Gems":
                if (!this.isGemsEnough(price))
                    return false;

                gameAnalytics.sendEvent("PurchaseUpgrade", {
                    "gems": this.getTotalGems(),
                    "spent": price.toString(),
                    "session": this.savedProgress.profile.sessionNumber,
                    id: id
                });

                mult = 2;
                this.gemsSpent(price);
                switch (data.upgradeType) {
                    case "MultiProfit":
                        const int = new bigInt(this.savedProgress.profile.gemsMultiProfit);
                        this.savedProgress.profile.gemsMultiProfit = int.multiply(data.parameter).toString();
                        break;
                    case "SuperSeed":
                        gameInit.harvestCompleted(true);
                        break;
                }
                break;
        }

        if (price) {
            if (!this._isPurchasePriceIncreasing(data))
                this.savedProgress.purchases[id] = 1;
            else {
                this.savedProgress.purchases[id] = price.multiply(mult).toString();
            }
        }
        this.onUpgradePurchased.callListeners(data);

        eventManager.upgradePurchased(data);
        return true;
    }

    getPriceForGoldBox() {
        return this.general.boxPrice;
    }

    tryToPurchaseBoxForGold(count) {
        if (this.isResourcesEnough(this.general.boxPrice)) {
            this.purchaseBox(BoxType.GoldBox, count);
            this.resourcesSpent(this.general.boxPrice);

            this.general.boxPrice = this.general.boxPrice.multiply(3);
            this.savedProgress.puzzle.goldBoxPrice = this.general.boxPrice.toString();
            return this.getPriceForGoldBox();
        }
        return false;
    }

    purchaseBox(boxType, count) {
        this.giveChests(boxType, count);
        eventManager.boxPurchased(count);
    }

    giveChests(boxType, count) {
        this.savedProgress.puzzle.boxes[boxType] += count;
        this.saveProgress();

        eventManager.boxReceived(count);

        if (boxType === BoxType.SuperBox)
            this.openSuperChest();
    }

    getOpenedBoxes() {
        return this.savedProgress.puzzle.openedBox;
    }

    openChest() {
        if (this.savedProgress.puzzle.boxes[BoxType.GoldBox] > 0)
            this.savedProgress.puzzle.boxes[BoxType.GoldBox]--;
        else
            this.savedProgress.puzzle.boxes[BoxType.GemsBox]--;

        this.savedProgress.puzzle.openedBox += 1;

        const puzzle = this.getPuzzleInfo();
        const image = Math.floor(Math.random() * puzzle.length);

        const info = puzzle[image];
        const size = GameData.getPuzzleSizePerLevel(info.level);

        const piece = Math.floor(Math.random() * size * size);

        const duplicate = (((1 << piece) & info.pieces) !== 0) || info.level >= MAX_PUZZLE_LEVEL;

        const before = Object.assign({}, info);
        if (duplicate)
            this.gotGems(bigInt(GameData.getGemsForDublicate() * RESOURCES_SCALE));
        else {
            info.pieces |= (1 << piece);
        }

        if (info.level < MAX_PUZZLE_LEVEL) {
            let completed = true;
            for (let i = 0; i < size * size; i++) {
                if ((1 << i & info.pieces) === 0) {
                    completed = false;
                    break;
                }
            }

            if (completed) {
                info.level++;
                info.pieces = 0;
                this.onPuzzleCompleted.callListeners(info);
            }
        }

        this.onPuzzlePeaceReceived.callListeners(before, image, piece, duplicate, true);

        eventManager.boxOpened();
    }

    areAllPuzzlesCollected() {
        const puzzle = this.getPuzzleInfo();
        for (let i = 0; i < puzzle.length; i++) {
            if (puzzle[i].level < MAX_PUZZLE_LEVEL)
                return false;
        }
        return true;
    }

    openSuperChest() {
        if (this.savedProgress.puzzle.boxes[BoxType.SuperBox] <= 0 || this.areAllPuzzlesCollected())
            return false;

        const maxLevel = MAX_PUZZLE_LEVEL;
        this.savedProgress.puzzle.boxes[BoxType.SuperBox] -= 1;

        const puzzle = this.getPuzzleInfo();

        let completedCount = 0;
        for (let i = 0; i < puzzle.length; i++) {
            if (puzzle[i].level >= maxLevel)
                completedCount++;
        }

        if (completedCount === puzzle.length) {
            console.log("Nothing to collect");
            return;
        }

        let index = Math.floor(Math.random() * (puzzle.length - completedCount));

        let image = index;
        for (let i = 0; i <= index; i++) {
            if (puzzle[i].level >= maxLevel) {
                image++;
                index++;
            }
        }

        const info = puzzle[image];
        const size = GameData.getPuzzleSizePerLevel(info.level);

        let piece = 0;
        for (let i = 0; i < size * size; i++) {
            if ((1 << i & info.pieces) === 0) {
                piece = i;
                break;
            }
        }

        const before = Object.assign({}, info);
        const duplicate = false;
        info.pieces |= (1 << piece);

        if (info.level < maxLevel) {
            let completed = true;
            for (let i = 0; i < size * size; i++) {
                if ((1 << i & info.pieces) === 0) {
                    completed = false;
                    break;
                }
            }

            if (completed) {
                info.level++;
                info.pieces = 0;
                this.onPuzzleCompleted.callListeners(info);
            }
        }

        this.onPuzzlePeaceReceived.callListeners(before, image, piece, duplicate, false);

        eventManager.boxOpened();

        return true;
    }

    getSeedsForSoulsCount() {
        const separator = bigInt("10000000000000000");
        const totalResources = this.general.resources.add(this.general.resourcesSpent).divide(RESOURCES_SCALE);
        if (totalResources.compare(0) <= 0)
            return new bigInt(0);

        if (totalResources.compare(separator) < 0) {
            let result = BigIntSqrRoot(totalResources);
            return BigIntSqrRoot(result).multiply(RESOURCES_SCALE);
        } else {
            let result = totalResources.multiply(totalResources).multiply(totalResources);
            result = BigIntSqrRoot(result);
            result = BigIntSqrRoot(result);
            result = BigIntSqrRoot(result);
            return result;//.divide(100);//RESOURCES_SCALE
        }
    }

    //region likes

    isLikesTimerActive() {
        return this.savedProgress.profile.likedTimer;
    }

    resetLikesTimer() {
        this.savedProgress.profile.likedTimer = 0;

        for (let w in this.savedProgress.worlds) {
            const world = this.savedProgress.worlds[w];
            const buildings = world.buildings;
            for (let b in buildings)
                buildings[b].likes = [];
        }

        eventManager.likesReseted();
        this.saveProgress();
    }

    getLikesTimeleft() {
        return (LIKES_RESET_TIMER - (Progress.getTimeNow() - this.savedProgress.profile.likedTimer));
    }

    buildingLiked(world, building) {
        if (!this.savedProgress.profile.likedTimer)
            this.savedProgress.profile.likedTimer = Progress.getTimeNow();
    }

    //endregion

    update() {
        if (this.isLikesTimerActive()) {
            if (this.getLikesTimeleft() <= 0)
                this.resetLikesTimer();
        }
    }

    /***
     *
     * @type {Building} building
     * @type {bigInt} resources
     */
    resourcesCollected(building, resources) {
        eventManager.soulsCollected(building.id, resources);
        this.addResources(resources);
    }

    _resourcesWereUpdated() {
        this._setResourceByName("gold", this.general.resources.toString());
    }

    _seedsWereUpdated() {
        this._setResourceByName("seeds", this.general.seeds.toString());
        this.onResourcesChanges.callListeners(this);
        this._updateTotalSeedsBonus();
    }

    _gemsWereUpdated() {
        this._setResourceByName("gems", this.general.gems.toString());
        this.onResourcesChanges.callListeners(this);
    }

    /***
     *
     * @type {bigInt} resources
     */
    addResources(resources) {
        this.general.resources = this.general.resources.add(resources);
        this._resourcesWereUpdated();
        this.onResourcesChanges.callListeners(this, true);

        const len = Math.round(this._getResourceByName("gold").length / 3);
        if (len > this.savedProgress.profile.maxGoldModifier) {
            this.savedProgress.profile.maxGoldModifier = len;

            gameAnalytics.sendEvent("NewGoldNumber", {
                "gems": this.getTotalGems(),
                "gold": len,
                "session": this.savedProgress.profile.sessionNumber
            });
        }
    }

    isResourcesEnough(amount) {
        return this.general.resources.compare(amount) >= 0;
    }

    isSeedsEnough(amount) {
        return this.general.seeds.compare(amount) >= 0;
    }

    isGemsEnough(amount) {
        return this.general.gems.compare(amount) >= 0;
    }

    /***
     *
     * @type {bigInt} resources
     */
    resourcesSpent(resources) {
        this.general.resources = this.general.resources.minus(resources);
        this.general.resourcesSpent = this.general.resourcesSpent.add(resources);
        this._setResourceByName("goldSpent", this.general.resourcesSpent.toString());
        this._resourcesWereUpdated();
        this.onResourcesChanges.callListeners(this, false);
    }

    /***
     *
     * @type {bigInt} gems
     */
    seedsEarned(seeds) {
        this.general.seeds = this.general.seeds.add(seeds);
        this._seedsWereUpdated();
    }

    /***
     *
     * @type {bigInt} gems
     */
    seedsSpent(seeds) {
        this.general.seeds = this.general.seeds.minus(seeds);
        this._seedsWereUpdated();
    }

    getJackPotSize() {
        return this.savedProgress.fortuneWheel.jackpot;
    }

    incJackPotSize() {
        this.savedProgress.fortuneWheel.jackpot += JACKPOT_INCREASE * RESOURCES_SCALE;
    }

    giveJackPot() {
        this.gotGems(this.savedProgress.fortuneWheel.jackpot);
        this.savedProgress.fortuneWheel.jackpot = JACKPOT_SIZE * RESOURCES_SCALE;
    }

    /***
     *
     * @type {int} gems
     */
    gotGems(gems) {
        this.general.gems = this.general.gems.add(gems);
        this._gemsWereUpdated();
    }

    /***
     *
     * @type {bigInt} gems
     */
    gemsSpent(gems) {
        gameAnalytics.sendEvent("GemsSpent", {
            "gems": this.general.gems.toString(),
            "spent": gems.toString(),
            "session": this.savedProgress.profile.sessionNumber
        });
        this.general.gems = this.general.gems.minus(gems);
        this._gemsWereUpdated();
    }

    saveBuilding(world, building) {
        const deltaJson = {worlds: {}};
        const worldJson = deltaJson.worlds[world.id] = {};
        worldJson[building.id] = this.savedProgress.worlds[world.id].buildings[building.id];

        //Send deltaJson to the server

        this.saveProgress();
    }

    buildingCreated(world, building) {
        //Check if that was from loading
        const blds = this.savedProgress.worlds[world.id].buildings;
        if (!blds.hasOwnProperty(building.id)) {
            this.saveBuilding(world, building);
        }
    }

    isWorldChangeAvailable() {
        return this.getHarvestsCount() >= 1;
    }

    getHarvestsCount() {
        return (this.savedProgress.profile.harvestsCount || 0);
    }

    harvestStarted() {
        // const count = this.savedProgress.profile.harvestsCount || 0;
        // this.savedProgress.profile.harvestsCount = count + 1;
        // this.saveProgress();
    }

    harvestCompleted(dontReset) {
        const count = this.savedProgress.profile.harvestsCount || 0;
        this.savedProgress.profile.harvestsCount = count + 1;

        const seeds = this.getSeedsForSoulsCount();
        this._setResourceByName("gold", "0");
        this._setResourceByName("goldSpent", "0");
        this.general.resources = bigInt("0");
        this.general.resourcesSpent = bigInt("0");
        const gemsPurchases = {};
        for (let id in this.savedProgress.purchases) {
            if (GameData.getMarketPurchaseById(id).priceType === "Gems")
                gemsPurchases[id] = this.savedProgress.purchases[id];
        }
        this.savedProgress.purchases = gemsPurchases;

        this.seedsEarned(seeds);

        if (!dontReset)
            this._resetConstructions();

        eventManager.harvestCompleted(seeds);

        this.saveProgress();
    }

    _getDeltaSave() {
        const newSave = {};

        if (!this.lastSave)
            this.lastSave = {};

        const lastSave = this.lastSave;

        function addFields(obj, path) {
            for (let k in obj) {
                const n = path + k;
                if ((typeof obj[k]) == "object") {
                    addFields(obj[k], n + ".");
                } else {
                    const v = obj[k];
                    if (lastSave[n] !== v) {
                        newSave[n] = obj[k];
                        lastSave[n] = v;
                    }
                }
            }
        }

        addFields(this.savedProgress, "");

        return newSave;
    }

    _writeToStorage() {
        if (socialManager.isAuthorizing()) {
            console.log("authorizing right now, won't save");
            return;
        }

        const v = this.savedProgress.profile.savedVersion || 0;
        this.savedProgress.profile.savedVersion = v + 1;
        window.localStorage.setItem("allProgress", JSON.stringify(this.savedProgress));
        this.timerId = null;
        this.lastSaveTime = Progress.getTimeNow();

        const deltaSave = this._getDeltaSave();

        this._sendDataToServer(deltaSave);
    }

    _sendDataToServer(deltaSave) {
        if (gBase.currentUnicorn)
            gBase.profile.update(
                deltaSave, null,
                null, null, null, null,
                (err) => {
                    if (err) {
                        gameAnalytics.sendServerError(err, "update");
                        socialManager.checkAuthStatus(err, () => this._sendDataToServer(deltaSave));
                    }
                }
            );
    }

    saveProgress() {
        if (this.timerId == null)
            this.timerId = setTimeout(this._writeToStorage.bind(this), 2000);
        else {
            if (Progress.getTimeNow() - this.lastSaveTime <= 10000) {
                clearTimeout(this.timerId);
                this.timerId = setTimeout(this._writeToStorage.bind(this), 2000);
            }
        }
    }

    static loadProgressFromServer(callback) {
        if (!gBase.currentAccount)
            callback(null);
        else {
            if (!gBase.currentAccount.haveProfile) {
                gBase.profile.create((err) => {
                    if (err)
                        gameAnalytics.sendServerError(err, "create");
                });
                callback(null);
            } else {
                gBase.profile.getp((err) => {
                    if (err)
                        gameAnalytics.sendServerError(err, "getp");
                    callback(gBase.currentProfile.profileData);
                });
            }
        }
    }

    loadProgress() {

        const value = window.localStorage.getItem("allProgress");
        // console.log("load " + value);
        return value ? JSON.parse(value) : null;
        // if (value) {
        //     return Promise.resolve(JSON.parse(value));
        // }
        // return Promise.reject();
    }

    cheatResources() {
        this.addResources(this.getTotalResources().add(1000).multiply(10));
        // this.seedsEarned(this.getTotalSeeds().add(1).multiply(10));
        // this.gotGems(this.getTotalGems().add(1).multiply(10));
    }

    getTutorialPhase() {
        return this.savedProgress.profile.tutorialPhase || 0;
    }

    setTutorialPhase(phase) {
        this.savedProgress.profile.tutorialPhase = phase;
        this.saveProgress();
    }

    getBuildingLevel(worldId, buildingId) {
        return this.savedProgress.worlds[worldId].buildings[buildingId].level;
    }

    isBuildingConstructed(worldId, buildingId) {
        return this.getBuildingLevel(worldId, buildingId) >= 1;
    }

    getBuildingInfo(worldId, buildingId) {
        return this.savedProgress.worlds[worldId].buildings[buildingId];
    }

    canCheckStore() {
        return this.getTutorialPhase() >= TutPhases.BuildSlots9 && this.getTutorialPhase() < TutPhases.FortuneWheel;
    }

    isTutorialCompleted() {
        return this.getTutorialPhase() >= TutPhases.BuildSlots6 && this.getTutorialPhase() < TutPhases.FortuneWheel;
    }

    canShowBoss(worldId) {
        return this.getTutorialPhase() >= TutPhases.SummonBoss && this.getConstructedBuildingsCount(worldId) >= 6;
    }

    canShowGuard() {
        return this.getTutorialPhase() >= TutPhases.Boost4h;
    }

    getConstructedBuildingsCount(worldId) {
        worldId = worldId || 1;
        const buildings = this.savedProgress.worlds[worldId].buildings;
        let count = 0;
        for (let i = 1; i <= 9; i++) {
            if (buildings[i].level !== 0)
                count++;
        }
        return count;
    }

    isResourcesEnoughForConstruction(building) {
        return (this.isResourcesEnough(building.getUpgradePrice()) && this.getPuzzleInfoById(building.slot - 1).level >= 1);
    }

    saveQuestsProgress(manager) {
        this.savedProgress.quests.update = manager.update;

        const savedQuests = this.savedProgress.quests.activeQuests;
        const quests = manager.activeQuests;
        for (let i = 0; i < quests.length; i++) {
            const q = quests[i];
            savedQuests[i] = {
                id: q.info.id,
                level: q.level,
                progress: q.progress,
                isRefreshed: q.isRefreshed,
                isComplete: q.isComplete,
                // fullProgress:
            };
        }
        this.saveProgress();
    }

    savePhotoQuestsProgress(quest) {
        this._checkPhotoQuests();

        const savedQuest = this.savedProgress.photo_quests[quest.info.parent.id];
        savedQuest.level = quest.level;
        savedQuest.progress = quest.progress;
        savedQuest.isComplete = quest.isComplete;
        this.saveProgress();
    }

    getQuestsProgress() {
        return this.savedProgress.quests;
    }

    resetProgress() {
        this.savedProgress.profile.version = 1;
        this.saveProgress();
    }

    getFreeSpinsCount() {
        return this.savedProgress.fortuneWheel.freeSpins;
    }

    getNextSpinTime() {
        return this.savedProgress.fortuneWheel.update + SpinsResporeTime - Progress.getTimeNow();
    }

    spendSpin() {
        if (this.getFreeSpinsCount() >= Progress.getMaxFreeSpins())
            this.savedProgress.fortuneWheel.update = Progress.getTimeNow();
        this.savedProgress.fortuneWheel.freeSpins = Math.max(0, this.savedProgress.fortuneWheel.freeSpins - 1);
    }

    canOpenOtherWorld() {
        const puzzle = this.getPuzzleInfo();

        for (let i = 9; i < puzzle.length; i++) {
            if (puzzle[i].level > 0)
                return true;
        }

        return this.getConstructedBuildingsCount() >= 9;
    }

    checkForNewSpin() {
        if (this.getFreeSpinsCount() < Progress.getMaxFreeSpins()) {
            if (this.getNextSpinTime() <= 0) {
                console.log("add new spin");
                this.savedProgress.fortuneWheel.freeSpins++;
                this.savedProgress.fortuneWheel.update += SpinsResporeTime;
                return true;
            }
        }
        return false;
    }

    _checkForAdsField() {
        if (!this.savedProgress.adsWatched) {
            this.savedProgress.adsWatched = {
                count: 0,
                update: 0
            };
        }

        const timeNow = Progress.getTimeNow();
        const dayNow = Progress.getDayFromTime(timeNow);
        const dayWas = Progress.getDayFromTime(this.savedProgress.adsWatched.update);
        if (dayNow != dayWas)
            this.savedProgress.adsWatched.count = 0;
    }

    getAdsWatchedToday() {
        this._checkForAdsField();
        return this.savedProgress.adsWatched.count;
    }

    adWasWatched() {
        this._checkForAdsField();
        this.savedProgress.adsWatched.count++;
        this.savedProgress.adsWatched.update = Progress.getTimeNow();
        this.saveProgress();
    }

    static getMaxFreeSpins() {
        return 3;
    }

    _checkPhotoQuests() {
        if (!this.savedProgress.photo_quests) {
            this.savedProgress.photo_quests = {};
        }
    }

    getPhotoQuestById(id) {
        this._checkPhotoQuests();
        if (this.savedProgress.photo_quests.hasOwnProperty(id))
            return this.savedProgress.photo_quests[id];

        const q = this.savedProgress.photo_quests[id] = {
            level: 0,
            progress: 0,
            isComplete: false
        };

        return q;
    }

    static getTimeTillTheNextDay() {
        const day = Progress.getDayNow() + 1;
        const time = Progress.getTimeNow();
        return day * 24 * 3600 - time / 1000;
    }
}

let GameData = (function() {

    BUILDINGS_INFO = {};
    SLOTS_UPGRADE = null;

    MARKET_GOLD = [];
    MARKET_SEEDS = [];
    MARKET_GEMS = [];

    MARKET_DATA = {};

    ATLAS_SPRITES = {};

    IN_APP_DATA = {};

    PHOTO_DATA = null;

    _compareFunction = function(a, b) {
        const intA = new bigInt(a.price);
        const intB = new bigInt(b.price);
        return intA.compare(intB);
    };

    _compareFunctionOrder = function(a, b) {
        return a.order - b.order;
    };

    return {
        getGemsForDublicate() {
            return 5;
        },

        getMarketListGold(){
            return MARKET_GOLD;
        },

        getMarketListSeeds(){
            return MARKET_SEEDS;
        },

        getMarketListGems(){
            return MARKET_GEMS;
        },

        getInAppData(){
            return IN_APP_DATA;
        },

        getMarketPurchaseById(id){
            return MARKET_DATA[id];
        },

        getBuildingInfoBySlot(slot) {
            return BUILDINGS_INFO[slot];
        },

        getSlotsUpgrade() {
            return SLOTS_UPGRADE;
        },
        
        getPuzzleSizePerLevel(level){
            switch (level) {
                case 0:
                case 1:
                    return 2;
                case 2:
                case 3:
                    return 3;
                case 4:
                case 5:
                    return 4;
            }
        },

        getPuzzleResourceBonusDivPerLevel(level){
            switch (level) {
                case 0:
                case 1:
                case 2:
                    return 1;
                case 3:
                    return 2;
                case 4:
                    return 6;
                default:
                    return 26;
            }
        },

        getPuzzleResourceBonusPerLevel(level){
            switch (level) {
                case 0:
                case 1:
                    return 1;
                case 2:
                    return 2;
                case 3:
                    return 6;
                case 4:
                    return 26;
                default:
                    return 126;
            }
        },

        getPuzzleBackNamePerLevel(level) {
            switch (level) {
                case 1: return 'PuzzleOpened';
                case 2: return 'PuzzleBronze';
                case 3: return 'PuzzleSilver';
                case 4: return 'PuzzleGold';
                case 5: return 'PuzzleDiamond';
            }
            return null;
        },

        getPuzzlesIconNamePerLevel(level) {
            switch (level) {
                case 1: return 'PuzzlesOpened';
                case 2: return 'PuzzlesBronze';
                case 3: return 'PuzzlesSilver';
                case 4: return 'PuzzlesGold';
                case 5: return 'PuzzlesDiamond';
            }
            return null;
        },

        getPuzzlesTextPerLevel(level) {
            switch (level) {
                case 1: return 'PuzzleCounterOpened';
                case 2: return 'PuzzleCounterBronze';
                case 3: return 'PuzzleCounterSilver';
                case 4: return 'PuzzleCounterGold';
                case 5: return 'PuzzleCounterDiamond';
            }
            return null;
        },

        getIconByType(priceType) {
            switch (priceType) {
                case "Gold": return 'PriceIcon';
                case "Seeds": return 'PriceSeeds';
                case "Gems": return 'PriceGems';
            }
            return null;
        },

        getPuzzleIcon(id) {
            return BUILDINGS_INFO[id].visual.puzzle;
        },

        getBoxData() {
            return BOX_DATA;
        },

        getLoginData() {
            return LOGIN_DATA;
        },

        getRandomQuest() {
            // return QUESTS_DATA[10];
            return QUESTS_DATA[Math.floor(Math.random() * QUESTS_DATA.length)];
        },

        getQuestById(id) {
            for (let i in QUESTS_DATA) {
                if (QUESTS_DATA[i].id === id)
                    return QUESTS_DATA[i];
            } 
            return null;
        },

        getPhotoData() {
            return PHOTO_DATA;
        },

        getPhotoDataBySlotId(id) {
            for (let i in PHOTO_DATA) {
                if (PHOTO_DATA[i].slot_id == id)
                    return PHOTO_DATA[i];
            }
            return null;
        },

        prepareAtlases(atlasJson) {
            if (atlasJson) {
                for (let i in atlasJson.textures) {
                    const frames = atlasJson.textures[i].frames;
                    for (let f in frames) {
                        ATLAS_SPRITES[frames[f].filename] = 1;
                    }
                }
            }
        },

        getAtlasName(objInfo) {
            return ATLAS_SPRITES.hasOwnProperty(objInfo.file) ? "AtlasJson" : null;
        },

        prepareGameData(data) {
            const slotsData = data.SlotsData;
            const goodsData = data.GoodsData;
            const slotsUpgrade = data.SlotsUpgrade;
            const marketData = data.MarketData;
            const boxData = data.BoxData;
            const questsData = data.QuestsData;
            const loginData = data.LoginData;
            const inAppData = data.InAppLots;

            QUESTS_DATA = questsData;
            inAppData.sort(_compareFunctionOrder);

            for (let i = 0;i < slotsData.length; i++) {
                let price = bigInt(slotsData[i].createPrice).multiply(RESOURCES_SCALE);
                for (let w = 0; w < 3; w++) {
                    const newKey = BUILDINGS_INFO[(i + 1 + w * 9)] = {};
                    newKey.construct = {price: price};
                }
            }

            for (let i = 0;i < goodsData.length; i++) {
                const val = goodsData[i];
                let add = 0;
                switch (val.puzzleType) {
                    case "Basic":
                        add = 0;
                        break;
                    case "Middle":
                        add = 9;
                        break;
                    default:
                        add = 18;
                        break;
                }
                // if (val.isBase) {
                    const newKey = BUILDINGS_INFO[(val.slotNumber + 1 + add)];

                    newKey.visual = {
                        icon: val.smallIcon,
                        drop: val.drop,
                        puzzle: val.icon
                    };

                    newKey.production = {
                        base: bigInt(val.incomeBase).multiply(RESOURCES_SCALE),
                        perLevel: 0
                    };

                    newKey.upgrade = {
                        base: bigInt(val.upgradePriceBase).multiply(RESOURCES_SCALE),
                        scale: val.upgradePriceStep,
                    };

                    newKey.loading = {
                        duration: val.incomeTimerBase,
                    };
                // }
            }

            SLOTS_UPGRADE = slotsUpgrade;

            for (let i in marketData) {
                const val = marketData[i];
                switch (val.priceType) {
                    case "Gold":
                        MARKET_GOLD.push(val);
                        break;
                    case "Seeds":
                        MARKET_SEEDS.push(val);
                        break;
                    case "Gems":
                        val.price = val.priceGems.toString();
                        MARKET_GEMS.push(val);
                        break;
                }
                val.bigInt = bigInt(val.price).multiply(RESOURCES_SCALE);
                MARKET_DATA[val.id] = val;
            }

            IN_APP_DATA = inAppData;
            for (let i in inAppData) {
                const val = inAppData[i];
                val.id = val.itemIdprod;
                val.priceType = "IN_APP";
                val.repeatable = true;
                val.originalGems = val.gems;
                val.gems *= RESOURCES_SCALE;
                MARKET_DATA[val.itemIdprod] = val;
            }

            MARKET_GOLD.sort(_compareFunction);
            MARKET_SEEDS.sort(_compareFunction);

            BOX_DATA = boxData;
            for (let i = 0;i<BOX_DATA.length;i++) {
                const d = BOX_DATA[i];
                if (d.priceGems)
                    d.bigInt = bigInt(d.priceGems).multiply(RESOURCES_SCALE);
            }

            LOGIN_DATA = loginData;

            PHOTO_DATA = data.PhotoData;
            for (let i in PHOTO_DATA) {
                const pd = PHOTO_DATA[i];
                const levels = pd.levels;
                for (let l in levels) {
                    const lev = levels[l];
                    const q = this.getQuestById(lev.quest_id);
                    if (q) {
                        lev.type = q.type;
                        lev.info = q.info;
                        lev.parent = pd;
                    } else
                        console.error("Quest wasn't found " + lev.quest_id);
                }

            }
        }
    }
})();

class QuestBase {
    constructor(prms, progress) {
        this.info = prms;
        if (progress) {
            this.level = progress.level;
            this.progress = progress.progress;
            this.isRefreshed = progress.isRefreshed;
            this.isComplete = progress.isComplete;
        } else {
            this.level = Math.floor(Math.random() * prms.reward.length);
            this.progress = 0;
            this.isRefreshed = false;
            this.isComplete = false;
        }
        if (prms.hasOwnProperty("reward")) {
            this.originalReward = prms.reward[this.level];
            this.reward = this.originalReward * RESOURCES_SCALE;
            this.count = prms.levels[this.level];
        } else {
            this.count = prms.count;
        }

        this.completeCallback = prms.completeCallback;
        this.claimCallback = prms.claimCallback;
        this.replaceCallback = prms.replaceCallback;
        this.progressChanged = prms.progressChanged;

        if (this.progress >= this.count)
            this.completeCallback(this);
    }

    hasAction() {
        return this.info.hasAction;
    }

    useAction() {

    }

    getRewardForUI() {
        return this.originalReward;
    }

    increaseProgress(count) {
        this.progress += count;
        if (this.progress >= this.count)
            this.completeCallback(this);

        this.progressChanged(this);

        eventManager.actionQuestProgress(this);
    }

    canReplaceQuest() {
        return !this.isRefreshed;
    }

    canDisplayQuest() {
        return !this.isComplete;
    }

    replaceQuest() {
        this.isRefreshed = true;
        this.replaceCallback();
    }

    claimReward() {
        this.isComplete = true;
        this.claimCallback(this);
    }

    clearCallback() {

    }

    isReadyToClaim() {
        return this.progress >= this.count;
    }
}

class QuestBoxOpen extends QuestBase {
    constructor(prms, progress) {
        super(prms, progress);
        this.subscribe = () => this.increaseProgress(1);
        eventManager.onBoxOpened.addListener(this.subscribe);
    }

    clearCallback() {
        eventManager.onBoxOpened.removeListener(this.subscribe);
    }
}

class QuestBoxPurchased extends QuestBase {
    constructor(prms, progress) {
        super(prms, progress);
        this.subscribe = (count) => this.increaseProgress(count);
        eventManager.onBoxPurchased.addListener(this.subscribe);
    }

    clearCallback() {
        eventManager.onBoxPurchased.removeListener(this.subscribe);
    }
}

class QuestCollectSoulsTimes extends QuestBase {
    constructor(prms, progress) {
        super(prms, progress);
        this.subscribe = (slot) => {
            if (slot === prms.slot || !prms.slot)
                this.increaseProgress(1);
        };
        eventManager.onSoulsCollected.addListener(this.subscribe);
    }

    clearCallback() {
        eventManager.onSoulsCollected.removeListener(this.subscribe);
    }
}

class QuestCollectSoulsAmount extends QuestBase {
    constructor(prms, progress) {
        super(prms, progress);
        this.progress = bigInt(this.progress);
        this.subscribe = (slot, count) => {
            if (slot === prms.slot || !prms.slot)
            // this.increaseProgress(count);
                this.progress = this.progress.add(count);
        };
        eventManager.onSoulsCollected.addListener(this.subscribe);
    }

    clearCallback() {
        eventManager.onSoulsCollected.removeListener(this.subscribe);
    }
}

class QuestLongSpeedActivate extends QuestBase {
    constructor(prms, progress) {
        super(prms, progress);
        this.subscribe = () => {
            this.increaseProgress(1);
        };
        eventManager.onLongSpeedActivated.addListener(this.subscribe);
    }

    clearCallback() {
        eventManager.onLongSpeedActivated.removeListener(this.subscribe);
    }
}

class QuestShortSpeedActivate extends QuestBase {
    constructor(prms, progress) {
        super(prms, progress);
        this.subscribe = () => {
            this.increaseProgress(1);
        };
        eventManager.onShortSpeedActivated.addListener(this.subscribe);
    }

    clearCallback() {
        eventManager.onShortSpeedActivated.removeListener(this.subscribe);
    }
}

class QuestPurchaseUpgrade extends QuestBase {
    constructor(prms, progress) {
        super(prms, progress);
        this.subscribe = (upgradeInfo) => {
            if (!prms.priceType || prms.priceType === upgradeInfo.priceType)
                this.increaseProgress(1);
        };
        eventManager.onUpgradePurchased.addListener(this.subscribe);
    }

    clearCallback() {
        eventManager.onUpgradePurchased.removeListener(this.subscribe);
    }
}

class QuestBuildingUpgraded extends QuestBase {
    constructor(prms, progress) {
        super(prms, progress);
        this.subscribe = (building, slot) => {
            if (slot === prms.slot || !prms.slot)
                this.increaseProgress(1);
        };
        eventManager.onBuildingUpgraded.addListener(this.subscribe);
    }

    clearCallback() {
        eventManager.onBuildingUpgraded.removeListener(this.subscribe);
    }
}

class QuestBuildingUpgraded25 extends QuestBase {
    constructor(prms, progress) {
        super(prms, progress);
        this.subscribe = (building, slot) => {
            if ((slot === prms.slot || !prms.slot) && (building.getLevel() % 25) === 0)
                this.increaseProgress(1);
        };
        eventManager.onBuildingUpgraded.addListener(this.subscribe);
    }

    clearCallback() {
        eventManager.onBuildingUpgraded.removeListener(this.subscribe);
    }
}

class QuestShare extends QuestBase {
    constructor(prms, progress) {
        super(prms, progress);
    }

    useAction() {
        socialManager.postMessage(() => {
            this.increaseProgress(1);
        });
    }

    claimReward() {
        super.claimReward();
        localStorage.setItem("quest_1000", Progress.getDayNow());
    }
}

class QuestHarvest extends QuestBase {
    constructor(prms, progress) {
        super(prms, progress);
        this.subscribe = () => {
            this.increaseProgress(1);
        };
        eventManager.onHarvestCompleted.addListener(this.subscribe);
    }

    clearCallback() {
        eventManager.onHarvestCompleted.removeListener(this.subscribe);
    }
}

class QuestsManager {
    constructor(questsFromProgress) {
        this.activeQuests = [];
        this.mainQuests = [];

        const timeNow = Progress.getTimeNow();
        const dayNow = Progress.getDayFromTime(timeNow);
        const dayWas = Progress.getDayFromTime(questsFromProgress.update);

        this.update = timeNow;
        if (dayNow === dayWas) {
            const quests = questsFromProgress.activeQuests;
            for (let i = 0; i < quests.length; i++) {
                const p = quests[i];
                const info = GameData.getQuestById(p.id);
                const quest = this._initQuest(info, p);
                this.activeQuests.push(quest);
            }
        }
        this.activateRandomQuests(this.activeQuests.length);

        const gameSettings = VisualData.getGameSettings();
        if (gameSettings.share && gameSettings.share.hasOwnProperty(AllGetParams.game_platform) && gameSettings.share[AllGetParams.game_platform]) {
            const day = localStorage.getItem("quest_1000");
            if (Progress.getDayNow() > day) {
                const quest = this._initQuest({
                    id: 1000,
                    type: 'SharePost',
                    levels: [1],
                    reward: [5],
                    info: 'SharePostInfo',
                    hasAction: true
                }, null);
                this.mainQuests.push(quest);
            }
        }
    }

    getQuestInfo(index) {
        if (this.mainQuests.length > index)
            return this.mainQuests[index];
        return this.activeQuests[index - this.mainQuests.length];
    }

    replaceQuest(index) {
        const info = GameData.getRandomQuest();
        let quest = this._initQuest(info);
        this.activeQuests[index] = quest;
        quest.replaceQuest();
    }

    questCompleted(quest) {
        eventManager.questCompleted(quest);
    }

    questClaimed(quest) {
        gameInit.progress.gotGems(quest.reward);
        this.progressChanged();
        eventManager.questClaimed(quest);
    }

    questReplaced() {
        this.progressChanged();
    }

    progressChanged() {
        gameInit.progress.saveQuestsProgress(this);
    }

    static publicGetQuest(prms, progress) {
        switch (prms.type) {
            case "OpenBox":
                return new QuestBoxOpen(prms, progress);
            case "CollectCrop":
                return new QuestHarvest(prms, progress);
            case "CollectLastSlot":
                prms.slot = 9;
                return new QuestCollectSoulsTimes(prms, progress);
            case "Banjo":
                return new QuestShortSpeedActivate(prms, progress);
            case "Rain":
                return new QuestLongSpeedActivate(prms, progress);
            case "MacroUpgrades":
                return new QuestPurchaseUpgrade(prms, progress);
            case "BuyBox":
                return new QuestBoxPurchased(prms, progress);
            case "FirstSlotUpgrade":
                return new QuestBuildingUpgraded25(prms, progress);
            case "SeedsUpgrades":
                prms.priceType = "Seeds";
                return new QuestPurchaseUpgrade(prms, progress);
            case "CollectGold":
                return new QuestCollectSoulsTimes(prms, progress);
            //TODO not implemented
            case "Gift":
            case "NewLevelGold":
                // return new QuestBase(prms, progress);
                return new QuestCollectSoulsTimes(prms, progress);
            case "SharePost":
                return new QuestShare(prms, progress);
        }
        return null;
    }

    _initQuest(prms, progress) {
        if (!prms)
            return null;

        switch (prms.type) {
            //TODO not implemented
            case "Gift":
            case "NewLevelGold":
                console.error("replace", GameData.getQuestById(prms.id - 1));
                prms = GameData.getQuestById(prms.id - 1);
                break;
        }
        prms.completeCallback = this.questCompleted.bind(this);
        prms.claimCallback = this.questClaimed.bind(this);
        prms.replaceCallback = this.questReplaced.bind(this);
        prms.progressChanged = this.progressChanged.bind(this);

        return QuestsManager.publicGetQuest(prms, progress);
    }

    activateRandomQuestForSlot(slot) {
        //TODO value depends on quest
        const info = GameData.getRandomQuest();
        let quest = this._initQuest(info);
        this.activeQuests[slot] = quest;
    }

    activateRandomQuests(startIndex) {
        for (let i = startIndex; i < 3; i++) {
            this.activateRandomQuestForSlot(i);
        }

        if (startIndex < 3)
            this.progressChanged();
    }

    isAnyCompleteQuest() {
        for (let i in this.activeQuests) {
            const q = this.activeQuests[i];
            if (q && q.isReadyToClaim() && !q.isComplete)
                return true;
        }
        return false;
    }
}

const ResourceIncreaseGold = 20;
const ResourceIncreaseSeed = 10;

class BonusBase {
    constructor(prms) {
        this.info = prms;
    }
    
    activateBonus() {
    }

    _getType() {
        return this.info.bonusType;
    }
    
    getIconName() {
        return "DailyBonus_" + this._getType();
    }

    getIconPath() {
        return VisualData.getDailyBonusIconsFolder() + this._getType() + ".png";
    }
    
    getText() {
        return this.info.parameter.toString();
    }

    isUpdatable() {
        return false;
    }
}

class BonusWithIndex extends BonusBase {
    constructor(prms, index) {
        super(prms);
        this.index = index;
    }
}

class BonusResources extends BonusWithIndex{

    activateBonus() {
        super.activateBonus();
        gameInit.progress.addResources(this.getCount());
    }

    getCount() {
        return Math.max(gameInit.progress.getTotalResources().multiply(Math.trunc(this.getKoeff() * RESOURCES_SCALE)).divide(RESOURCES_SCALE), 1000 * RESOURCES_SCALE);
    }

    isUpdatable() {
        return true;
    }

    getKoeff() {
        return (this.info.parameter + this.index * ResourceIncreaseGold) / 100;
    }

    getText() {
        return 'x' + (this.getKoeff() + 1);
    }
}

// class BonusScaleResources extends BonusBase{
//
//     activateBonus() {
//         super.activateBonus();
//         let current = gameInit.progress.getResources();
//         gameInit.progress.addResources(Math.trunc(current * this.info.value));
//     }
// }

class BonusGems extends BonusBase {

    activateBonus() {
        super.activateBonus();
        gameInit.progress.gotGems(this.info.parameter * RESOURCES_SCALE);
    }
}

class BonusSeeds extends BonusWithIndex {

    activateBonus() {
        super.activateBonus();
        gameInit.progress.seedsEarned(this.getCount());
    }

    getKoeff() {
        return (this.info.parameter + this.index * ResourceIncreaseSeed) / 100;
    }

    getText() {
        return 'x' + (this.getKoeff() + 1);
    }

    getCount() {
        return Math.max(gameInit.progress.getTotalSeeds().multiply(Math.trunc(this.getKoeff() * RESOURCES_SCALE)).divide(RESOURCES_SCALE), 1000 * RESOURCES_SCALE);
    }

    isUpdatable() {
        return true;
    }
}

class BonusSeedsStrength extends BonusBase {

    activateBonus() {
        super.activateBonus();
        gameInit.progress.increaseBonusPerSeed(this.info.parameter);
    }

    getText() {
        return "+" + super.getText() + "%";
    }
}

class BonusBox extends BonusBase {

    activateBonus() {
        super.activateBonus();
        gameInit.progress.giveChests(BoxType.GoldBox, this.info.parameter);
    }
}

class BonusSuperBox extends BonusBase {

    activateBonus() {
        super.activateBonus();
        gameInit.progress.giveChests(BoxType.SuperBox, this.info.parameter);
    }

    _getType() {
        return "SuperBox";
    }
}

class BonusTimeTravel extends BonusBase {
    activateBonus() {
        super.activateBonus();
        gameInit.upgradePurchased({
            upgradeType: this.info.bonusType,
            parameter: this.info.parameter * 3600
        });
    }
}

class DailyBonus
{
    constructor(seed, data) {
        this.bonuses = {};
        this.goldIndex = 0;
        this.seedIndex = 0;

        const totalDays = 30;
        const randomPrizes = [];
        let takenDays = 0;

        for (let k in data) {
            const info = data[k];
            const day = info.number;
            if (day > 0) {
                const bonus = this._generateBonus(info);
                this.bonuses[day] = bonus;
                takenDays++;
            } else
                randomPrizes.push(info);
        }

        for (let i = 0; i < randomPrizes.length && randomPrizes.length < (totalDays - takenDays);i++) {
            randomPrizes.push(randomPrizes[i]);
        }

        const rnd = new Random(seed);

        for (let i = 1; i<= 30;i++) {
            if (!this.bonuses.hasOwnProperty(i)) {
                const ind = Math.trunc(rnd.nextFloat() * randomPrizes.length);
                const bonus = this._generateBonus(randomPrizes[ind]);
                if (bonus)
                    this.bonuses[i] = bonus;
                randomPrizes.splice(ind, 1);
            }
        }
    }

    _generateBonus(info) {
        switch (info.bonusType) {
            case "Gold": return new BonusResources(info, this.goldIndex++);
            case "Box": return new BonusBox(info);
            case "SuperBox":
            case "MiddlePuzzle":
            case "SuperPuzzle":
                return new BonusSuperBox(info);
            case "TimeTravel": return new BonusTimeTravel(info);
            case "Seed": return new BonusSeeds(info, this.seedIndex++);
            case "SeedStrength": return new BonusSeedsStrength(info);
            case "Crystal":
            case "MegaCrystal":
                return new BonusGems(info);
        }
        return null;
    }

    getBonusForDay(day){
        return this.bonuses[day];
    }
}

class WheelPrizeBase {
    constructor(prms) {
        this.info = prms;
    }

    getChance() {
        return this.info.chance;
    }
    
    activateBonus() {
        gameInit.progress.incJackPotSize();
    }

    getType() {
        return this.info.bonusType;
    }
    
    getIconName() {
        return "DailyBonus_" + this.info.bonusType;
    }

    getIconPath() {
        return VisualData.getDailyBonusIconsFolder() + this.info.bonusType + ".png";
    }
    
    getText() {
        return this.info.parameter;
    }

    needToUpdate() {
        return false;
    }
}

class WheelResources extends WheelPrizeBase {
    
    activateBonus() {
        super.activateBonus();
        gameInit.progress.addResources(this._getBonusSize());
    }

    _getBonusSize()
    {
        return Math.max(gameInit.progress.getTotalSeeds() * 1000, 1000 * RESOURCES_SCALE, AllBuildings[3].getProducedResources());
    }

    getText() {
        return LocalizationManager.getLocalizedNumber(this._getBonusSize());
    }

    needToUpdate() {
        return true;
    }
}

class WheelGems extends WheelPrizeBase {

    activateBonus() {
        super.activateBonus();
        gameInit.progress.gotGems(this.info.parameter);
    }

    getText() {
        return Math.round(this.info.parameter / RESOURCES_SCALE);
    }
}

class WheelJackPot extends WheelPrizeBase {

    activateBonus() {
        // super.activateBonus(); Don't call it
        gameInit.progress.giveJackPot();
    }

    getText() {
        return Math.round(gameInit.progress.getJackPotSize() / RESOURCES_SCALE);
    }

    needToUpdate() {
        return true;
    }
}

class WheelBox extends WheelPrizeBase {

    activateBonus() {
        super.activateBonus();
        gameInit.progress.giveChests(BoxType.GoldBox, this.info.parameter);
    }
}

class WheelTimeTravel extends WheelPrizeBase {
    activateBonus() {
        super.activateBonus();
        gameInit.upgradePurchased({
            upgradeType: this.info.bonusType,
            parameter: this.info.parameter * 60
        });
    }
}

class WheelOfFortune
{
    constructor() {
        this.bonuses = [
            new WheelTimeTravel({
                chance: 10,
                parameter: 30,
                bonusType: "TimeTravel"
            }),
            new WheelBox({
                chance: 5,
                parameter: 1,
                bonusType: 'Box',
            }),
            new WheelJackPot({
                chance: 3,
                bonusType: 'JackPot'
            }),
            new WheelTimeTravel({
                chance: 35,
                parameter: 15,
                bonusType: "TimeTravel",
            }),
            new WheelGems({
                chance: 12,
                parameter: 5 * RESOURCES_SCALE,
                bonusType: 'Gems'
            }),
            new WheelResources({
                chance: 35,
                bonusType: 'Gold'
            })
        ];
    }

    getBonuses() {
        return this.bonuses;
    }
}

class PhotoManager
{
    constructor(progress) {
        this.activeQuests = {};

        progress.onPuzzleCompleted.addListener(this.newPuzzleCompleted.bind(this));
        const photoData = GameData.getPhotoData();

        for (let i = 0; i < photoData.length; i++) {
            const p = photoData[i];
            this._addPhotoQuest(p);
        }
    }

    _addPhotoQuest(photoData) {
        const puzzleInfo = gameInit.progress.getPuzzleInfoById(photoData.slot_id - 1);
        const myQ = gameInit.progress.getPhotoQuestById(photoData.id);
        if (puzzleInfo.level > myQ.level) {
            const questByLevel = photoData.levels[myQ.level];
            const quest = this._initQuest(questByLevel, myQ);
            this.activeQuests[photoData.id] = quest;
        }
    }

    newPuzzleCompleted(info) {
        const data = GameData.getPhotoDataBySlotId(info.id);
        this._addPhotoQuest(data);
    }

    questCompleted(quest) {

    }

    questClaimed(quest) {
        quest.level++;
        quest.clearCallback();
        //TODO show photo
        this.progressChanged(quest);
        delete this.activeQuests[quest.info.parent.id];
        this._addPhotoQuest(quest.info.parent);
    }

    progressChanged(quest) {
        gameInit.progress.savePhotoQuestsProgress(quest);
    }

    _initQuest(prms, progress) {
        if (!prms)
            return null;

        prms.completeCallback = this.questCompleted.bind(this);
        prms.claimCallback = this.questClaimed.bind(this);
        prms.progressChanged = this.progressChanged.bind(this);

        return QuestsManager.publicGetQuest(prms, progress);
    }

    getQuestById(id) {
        return this.activeQuests.hasOwnProperty(id) ? this.activeQuests[id] : null;
    }
}

class GameInit{
    constructor() {
        this.preload = new UnnyAction();
        this.create = new UnnyAction();
        this.update = new UnnyAction();
        this.loaded = new UnnyAction();
        this.reseted = new UnnyAction();
        this.onBuildingCreated = new UnnyAction();
        this.onBuildingUpgraded = new UnnyAction();
        this.onResourcesCollected = new UnnyAction();
        this.onResourcesUpdated = new UnnyAction();
        this.onBuildingResourcesUpdated = new UnnyAction();
        this.onBuildingUpdated = new UnnyAction();
        this.onBuildingLiked = new UnnyAction();
        this.onWorldChanged = new UnnyAction();
        this.onWorldPreChanged = new UnnyAction();

        this.allWorlds = [];
        this.selectedWorld = "1";
    }

    GamePreload(engine) {
        this.engine = engine;

        const load = engine.load;
        load.setPath(VisualData.getDataFolder());
        load.json('GoodsData', 'goods_data.json');
        load.json('SlotsData', 'farm_slot_data.json');
        load.json('SlotsUpgrade', 'slots_upgrade_data.json');
        load.json('MarketData', 'market_upgrades.json');
        load.json('BoxData', 'box_data.json');
        load.json('QuestsData', 'dailyquests_data.json');
        load.json('LoginData', 'loginbonus_data.json');
        load.json('InAppLots', 'in_app_lots.json');

        if (VisualData.getGameSettings().photos)
            load.json('PhotoData', 'photo_data.json');

        load.setPath(VisualData.getFolderPath());
        const localization = 'Localization_' + GameSettings.language;
        load.json(localization, VisualData.getLocalizationsFolder() + localization + '.json');

        load.multiatlas('atlas_sprites', VisualData.getAtlasPath());

        this.preload.callListeners(engine);
    }

    upgradePurchased(data) {
        for (let key in this.allWorlds) {
            const world = this.allWorlds[key];
            world.upgradePurchased(data);
        }

        switch (data.upgradeType) {
            case 'SeedProc':
                this.progress.increaseBonusPerSeed(data.parameter);
                break;
            //TODO implement those:
            case 'SuperSeed':
            case 'Upgrade':
                break;
        }
    }

    LoadProgress() {
        // const purchases = this.progress.getAllPurchases();
        // for (let key in purchases) {
        //     const data = GameData.getMarketPurchaseById(key);
        //     this.upgradePurchased(data);
        // }

        const worlds = this.progress.getWorlds();
        for (let key in worlds) {
            const w = new World(this, key);
            this.allWorlds.push(w);
            w.onBuildingCreated.addListener(this.buildingCreated.bind(this));
            w.onBuildingUpgraded.addListener(this.buildingUpgraded.bind(this));
            w.onResourcesCollected.addListener(this.resourcesCollected.bind(this));
            w.onBuildingPreUpgrade.addListener(this.buildingPreUpgrade.bind(this));
            w.onBuildingUpdated.addListener(this.buildingUpdated.bind(this));
            w.onResourcesUpdated.addListener(this.buildingResourcesUpdate.bind(this));
            w.onBuildingLiked.addListener(this.buildingLiked.bind(this));
            w.loadProgress(this.progress);
        }

        this.loaded.callListeners(this.progress);
    }

    GameCreate(engine, hideCallback) {
        const cache = engine.cache;
        const data = {
            SlotsData: cache.json.get('SlotsData'),
            GoodsData: cache.json.get('GoodsData'),
            SlotsUpgrade: cache.json.get('SlotsUpgrade'),
            MarketData: cache.json.get('MarketData'),
            BoxData: cache.json.get('BoxData'),
            QuestsData: cache.json.get('QuestsData'),
            LoginData: cache.json.get('LoginData'),
            InAppLots: cache.json.get('InAppLots')
        };

        if (VisualData.getGameSettings().photos)
            data.PhotoData = cache.json.get('PhotoData');
        GameData.prepareGameData(data);

        const localization = 'Localization_' + GameSettings.language;
        const json = cache.json.get(localization);
        GameSettings.allLanguages[GameSettings.language] = json;
        LocalizationManager.initWithJson(json);

        socialManager.setAllGetParams(parseGetParams());
        try {
            socialManager.initialize(VisualData.getGameSettings());
        } catch (e) {
            console.error(e);
        }

        socialManager.authorize(()=> {
            Progress.loadProgressFromServer((progress) => {
                this.progress = new Progress(this, progress);
                this.progress.onUpgradePurchased.addListener(this.upgradePurchased.bind(this));

                this.create.callListeners(engine);

                this.time = engine.time.now / 1000;
                this.LoadProgress();

                this.questsManager = new QuestsManager(this.progress.getQuestsProgress());
                if (VisualData.getGameSettings().photos)
                    this.photoManager = new PhotoManager(this.progress);

                audioManager.load(engine);

                hideCallback();
            });
        });
    }

    GameUpdate(engine) {
        if (!this.progress)
            return;

        const newTime = engine.time.now / 1000;
        this.deltaTime = newTime - this.time;
        this.time = newTime;

        this.update.callListeners(this.deltaTime);

        // const daynow = Progress.getDayNow();
        // if (this.daynow !== daynow) {
        //     // console.log("DAY " + daynow);
        //     this.daynow = daynow;
        // }
    }

    buildingPreUpgrade(world, building) {
        const price = building.getUpgradePrice();
        this.progress.resourcesSpent(price);
        this.onResourcesUpdated.callListeners(this.progress);
    }

    resourcesCollected(building, resources) {
        this.onResourcesCollected.callListeners(building, resources);
        this.onResourcesUpdated.callListeners(this.progress);
    }

    buildingResourcesUpdate(world, building) {
        this.onBuildingResourcesUpdated.callListeners(world, building);
    }

    buildingCreated(world, building) {
        this.onBuildingCreated.callListeners(world, building);
    }

    buildingUpgraded(world, building) {
        this.onBuildingUpgraded.callListeners(world, building);
    }

    buildingUpdated(world, building) {
        this.onBuildingUpdated.callListeners(world, building);
    }

    buildingLiked(world, building) {
        this.onBuildingLiked.callListeners(world, building);
    }

    harvestCompleted(dontReset) {
        this.progress.harvestCompleted(dontReset);
        this.reseted.callListeners(this.progress);
    }

    getBuildingById(worldIndex, id) {
        return this.allWorlds[worldIndex - 1].getBuildingById(id);
    }

    switchWorld(worldId) {
        if (!this.progress.canOpenOtherWorld()) {
            guiManager.openNewWindow(WindowType.WinOtherWorlds);
        } else {
            this.onWorldPreChanged.callListeners(() => {
                this.selectedWorld = worldId;
                this.onWorldChanged.callListeners(this.selectedWorld);
            });
        }
    }

    openLikesForBuilding(building) {
        this.likedBuilding = building;
        if (socialManager.openLikes)
            socialManager.openLikes();
    }

    likedSuccessfull(ids) {
        if (this.likedBuilding)
            this.likedBuilding.addLikes(ids);
    }
}

let gameInit = new GameInit();

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

let LocalizationManager = (function() {

    const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
    let ALL_WORDS = null;

    _getLocalizization = function(text){
        if (ALL_WORDS.hasOwnProperty(text))
            return ALL_WORDS[text];
        return "!!!" + text;
    };

    _getNumberText = function (count){
        if (count >= 1 && count <= 4)
            return this._getLocalizization("GoldString" + count);

        if (count >= 5) {
            count -= 5;
            const alpLen = ALPHABET.length;
            if (count < ALPHABET.length) {
                const char = ALPHABET.charAt(count);
                return char + char;
            } else {
                count -= alpLen;
                if (count < ALPHABET.length) {
                    const char = ALPHABET.charAt(count).toUpperCase();
                    return char + char + char;
                } else {
                    count -= alpLen;
                    if (count < ALPHABET.length) {
                        const char = ALPHABET.charAt(count).toUpperCase();
                        return char + 'x4';
                    } else {
                        count -= alpLen;
                        if (count < ALPHABET.length) {
                            const char = ALPHABET.charAt(count).toUpperCase();
                            return char + 'x5';
                        } else {
                            count -= alpLen;
                            if (count < ALPHABET.length) {
                                const char = ALPHABET.charAt(count).toUpperCase();
                                return char + 'x6';
                            } else
                                return '!!!'
                        }
                    }
                }
            }
        }

        return null;
    };

    return {
        initWithJson(json) {
            ALL_WORDS = json;
        },

        getLocalizization(text){
            if (ALL_WORDS.hasOwnProperty(text))
                return ALL_WORDS[text];
            return "!!!" + text;
        },

        removeCodes(text) {
            text = text.split("\\n").join("");

            while (true) {
                const index = text.indexOf("<");
                if (index < 0)
                    break;

                const index2 = text.indexOf(">");
                if (index >= index2)
                    break;

                text = text.slice(0, index) + text.slice(index2 + 1);
            }

            return text;
        },

        getLocalizedNumberString(str){
            if (str.length <= 2)
                return "0";

            str = str.substring(0, str.length - 2);

            const len = str.length;
            let count = Math.trunc(len / 3);
            let numbersCount = len - count * 3;
            if (numbersCount === 0) {
                numbersCount = 3;
                count--;
            }

            const letters = _getNumberText(count);
            let number = str.substring(0, numbersCount);
            if (len >= 4) {
                const decimal = str.substring(numbersCount, numbersCount + 1);
                if (decimal !== '0')
                    number += ',' + decimal;
            }
            return letters ? number + ' ' + letters : str;
        },

        getLocalizedNumber(bigNumber){
            return this.getLocalizedNumberString(bigNumber.toString());
        },

        getStoreItemTitle(item) {
            if (!item.upgradeType)
                return this.getLocalizization(item.title);

            let name = "Title";
            switch (item.upgradeType) {
                case "MultiProfit": {
                    if (item.priceType === "Gems")
                        name = "GemsTitle";
                    else {
                        if (item.slotNumber < 0)
                            name = "AllTitle";
                    }
                    break;
                }
                case "TimeTravel": {
                    name = "Title" + item.parameter;
                    break;
                }
            }

            return this.getLocalizization(item.upgradeType + name);
        },

        getStoreItemDescription(item) {
            if (!item.upgradeType)
                return this.getLocalizization(item.description).format(item.originalGems);

            let name = "Desc";
            switch (item.upgradeType) {
                case "MultiProfit": {
                    switch (item.priceType) {
                        case "Gems":
                            return this.getLocalizization(item.upgradeType +"GemsDesc");
                        case "Gold":
                        case "Seeds":
                            if (item.slotNumber >= 0)
                                return this.getLocalizization(item.upgradeType +"DescMultiSlot").format(item.slotNumber + 1, item.parameter);
                            else
                                return this.getLocalizization(item.upgradeType +"AllDesc").format(item.parameter);
                    }
                    break;
                }
                case "SeedProc": {
                    return this.getLocalizization(item.upgradeType +"Desc").format(item.parameter);
                }
                case "TimeTravel": {
                    return this.getLocalizization(item.upgradeType + "Desc" + item.parameter);
                }
                case "Upgrade": {
                    return this.getLocalizization("UpgradeDescMultiSlot").format(item.parameter, item.slotNumber + 1);
                }
                case "AutoClick": {
                    if (item.slotNumber >= 0)
                        return this.getLocalizization(item.upgradeType +"DescMultiSlot").format(item.slotNumber + 1);
                    else
                        return this.getLocalizization(item.upgradeType +"Desc");
                }
            }
            return this.getLocalizization(item.upgradeType + name);
        }
    }
})();

class Loader {
    constructor(parent, backImg, frontImg, x, y, scale, makeFast) {
        scale = scale || 1;
        if (backImg) {
            this.back = parent.scene.add.sprite(x, y, backImg).setScale(scale).setDepth(parent.depth + 1);
            parent.add(this.back);
        }

        this.parent = parent;
        this.x = x;
        this.y = y;
        this.progressBar = parent.scene.add.sprite(x, y, frontImg).setScale(scale).setOrigin(0, 0.5).setDepth(parent.depth + 2);
        this.progressBar.setPositionX(this.progressBar.x / localScale - this.progressBar.width / 2 * scale * imageSizeLocalScale / localScale);
        this.scale = scale;
        this.value = -1;

        parent.add(this.progressBar);

        if (makeFast) {
            this._makeFast();
            this.fastBar.obj.setForceInvisible(true);
        }
    }

    setTint(color) {
        this.progressBar.tint = color;
    }

    setVisible(visible) {
        if (this.back)
            this.back.setVisible(visible);
        this.progressBar.setVisible(visible);
    }

    setProgress(value) {
        if (Math.abs(value - this.value) > 0.005) {
            this.value = value;
            this.progressBar.setScale(value * this.scale, this.scale);
        }
    }

    _makeFast() {
        this.fastBar = PrepareSpriteSheetObject(this.parent.scene, 'FastProduction', this.x, this.y);
        this.fastBar.obj.setDepth(this.parent.depth + 2);
        this.fastBar.obj.setScale(1.1);
        this.parent.add(this.fastBar.obj);
    }

    setFast(fast) {
        this.fastBar.obj.forceInvisible = this.progressBar.visible = !fast;
        this.progressBar.forceInvisible = fast;

        if (this.parent.visible !== false || !fast)
            this.fastBar.obj.setVisible(fast);
    }
}

class SpriteSheetObject {
    constructor(obj, info) {
        this.obj = obj;
        this.frame = 0;
        this.time = 0;
        this.info = info;
        gameInit.update.addListener(this.update.bind(this));
    }

    setVisible(visible) {
        this.obj.setVisible(visible);
    }

    update(deltaTime) {
        if (this.obj.visible) {
            this.time += deltaTime;
            if (this.time >= this.info.period) {
                this.time -= this.info.period;
                this.frame = (this.frame + 1) % this.info.frames;
                this.obj.setFrame(this.frame);
            }
        }
    }
}

class AnimatedObject {

    constructor(obj, animations) {
        this.obj = obj;
        this.animations = animations;
        this.nextPlay = 0;
        this.playAppear();
    }

    getAnimationDuration(name) {
        // return 0;
        const anims = this.obj.skeletonData.animations;
        for (let i in anims) {
            if (anims[i].name === name)
               return anims[i].duration;
        }
        return 0;
    }

    playAnimation(name, force) {
        // return;
        const duration = this.getAnimationDuration(name);

        const time = Progress.getTimeNow() / 1000;
        if (time >= this.nextPlay || force) {
            this.nextPlay = time + duration;
            this.obj.play(name);
            if (this.animations.idle)
                this.obj.addAnimation(0, this.animations.idle, true, duration);
        }
    }

    getObject() {
        return this.obj;
    }

    setVisible(visible) {
        this.obj.setVisible(visible);
    }

    destroy(param) {
        this.obj.destroy(param);
    }

    playAction(force) {
        if (this.animations.action)
            this.playAnimation(this.animations.action, force);
    }

    playAppear(force) {
        if (this.animations.appear)
            this.playAnimation(this.animations.appear, force);
    }

    playDisappear(force) {
        if (this.animations.disappear)
            this.playAnimation(this.animations.disappear, force);
    }

    _play(anim) {
        this.obj.play(anim, true);
    }

    playActiveLoop() {
        if (this.animations.active)
            this._play(this.animations.active);
    }

    playIdleLoop() {
        if (this.animations.idle)
            this._play(this.animations.idle);
    }
}

let GlobalInputLocked = false;

const GlobalClickables = [];

let LockedAnimatedObject = null;

function lockAtOneAnimatedObject(animatedObject) {
    LockedAnimatedObject = animatedObject;
    GlobalInputLocked = false;
}

function unlockAnimatedObject() {
    LockedAnimatedObject = null;
    GlobalInputLocked = false;
}

function SetClickablesActive(active) {
    if (active) {
        for (let i = GlobalClickables.length - 1; i >= 0; i--) {
            const gr = GlobalClickables[i];
            if (gr && gr.active)
                gr.setInteractive();
            else
                GlobalClickables.splice(i, 1);
        }
    } else {
        for (let i = GlobalClickables.length - 1; i >= 0; i--) {
            const gr = GlobalClickables[i];
            if (gr && gr.active)
                gr.disableInteractive();
            else
                GlobalClickables.splice(i, 1);
        }
    }
}

function timeToStringClock(time) {
    function giveTimeNumberAsString(number) {
        if (number >= 10)
            return number;
        return "0" + number;
    }

    const hours = Math.trunc(time / 3600);
    const minutes = Math.trunc((time % 3600) / 60);
    const seconds = Math.trunc(time % 60);
    if (hours > 0)
        return "{0}:{1}:{2}".format(giveTimeNumberAsString(hours), giveTimeNumberAsString(minutes), giveTimeNumberAsString(seconds));
    else
        return "{0}:{1}".format(giveTimeNumberAsString(minutes), giveTimeNumberAsString(seconds));
}

let spineMethodsReady = false;
function PrepareSpineMethods(obj) {
    if (!spineMethodsReady) {
        spineMethodsReady = true;
        const scale = localScale;
        // const scale = imageSizeLocalScale;
        const prot = obj.constructor.prototype;
        const oldSpinePosition = prot.setPosition;
        function newSpinePosition(x, y) {
            return oldSpinePosition.call(this, x * scale, y * scale);
        }

        const oldSpineScale = prot.setScale;
        function newSpineScale(x, y) {
            return oldSpineScale.call(this, x * scale, y ? y * scale : y);
        }

        prot.setPosition = newSpinePosition;
        prot.setScale = newSpineScale;
        prot.setScale2 = function (x, y) {
            return oldSpineScale.call(this, x * imageSizeLocalScale, y ? y * imageSizeLocalScale : y);
        };

        obj.setPosition(obj.x, obj.y);

        overloadSetVisible(prot);
    }
}

function PrepareSpriteSheetObject(engine, name, x, y) {
    const allObj = VisualData.ALL_OBJECTS[name];
    const sprite = engine.add.sprite(x, y, name);
    return new SpriteSheetObject(sprite, allObj);
}

function addInvisibleClickable(engine, group, depth, x, y) {
    const obj = engine.add.sprite (0,0).setInteractive();
    obj.clickable = true;
    if (group) {
        obj.setVisible(group.visible);
        group.add(obj);
    }
    obj.setPosition(x / localScale, y / localScale);
    obj.setScale(10 * GlobalScale / imagesDeltaScale, 20 * GlobalScale / imagesDeltaScale);
    obj.setDepth(depth);
    obj.clicker = true;
    return obj;
}

function PrepareObject(objects, group, engine, depth, pos, clickCallback) {
    let main = null;
    for (let i = 0;i < objects.length;i++) {
        const b = objects[i];
        let x = (pos ? pos.x : 0) + VisualData.MAP_PARAMS.center.x;
        let y = (pos ? pos.y : 0) + VisualData.MAP_PARAMS.center.y;

        if (b.hasOwnProperty('x'))
            x += b.x;
        if (b.hasOwnProperty('y'))
            y += b.y;

        const allObj = VisualData.ALL_OBJECTS[b.name];

        let obj;
        const clickable = b.click && clickCallback;
        switch (allObj.type) {
            case UnnyObjectType.SpriteSheet: {
                const sprite = group.create(x, y, b.name);
                if (clickable)
                    sprite.setInteractive();
                if (allObj.hasOwnProperty('animation')) {
                    const animName = allObj.animation.key;
                    sprite.anims.load(animName);
                    sprite.anims.play(animName);
                }
                obj = sprite;

                main = new SpriteSheetObject(obj, allObj);
                break;
            }
            case UnnyObjectType.Spine: {
                obj = engine.add.spine(x, y, b.name, allObj.animations.idle, true);
                PrepareSpineMethods(obj);

                // obj = engine.add.sprite(x, y, b.name);

                obj.setScale(allObj.scale || 1);
                main = new AnimatedObject(obj, allObj.animations, allObj);

                if (b.hasOwnProperty('scale'))
                    main.obj.setScale(b.scale);

                obj.objName = b.name + "_spine";
                if (clickable) {
                    obj.setDepth(depth);
                    obj = addInvisibleClickable(engine, group, depth, main.obj.x, main.obj.y);
                }

                if (group)
                    group.add(main.obj);
                break;
            }
            default:
                obj = group.create(x, y, b.name);
                obj.setVisible(group.visible);
                if (b.hasOwnProperty('scale'))
                    obj.setScale(b.scale);

                obj.objName = b.name + "_default";
                if (clickable) {
                    obj.setDepth(depth);
                    obj = addInvisibleClickable(engine, group, depth, obj.x, obj.y);
                }

                break;
        }

        obj.objName = b.name;
        if (clickable) {
            GlobalClickables.push(obj);
            obj.clickable = true;

            const delay = 200;

            function canBeClicked() {
                if (main && !main.obj.visible)
                    return false;

                return (!LockedAnimatedObject || LockedAnimatedObject === main);
            }

            const funcDown = () => {
                if (!canBeClicked())
                    return;

                obj.lastTime = engine.time.now;
                if (engine.input.activePointer.isDown && !GlobalInputLocked)
                    clickCallback('down');
            };
            const funcMove = () => {
                if (!canBeClicked())
                    return;

                if (engine.input.activePointer.isDown && !GlobalInputLocked) {
                    const newTime = engine.time.now;
                    if (newTime - obj.lastTime >= delay || !obj.lastTime) {
                        obj.lastTime = newTime;
                        clickCallback('move');
                    }
                }
            };
            obj.on('pointerdown', funcDown);
            obj.on('pointermove', funcMove);
        }

        obj.setDepth(depth);
    }
    return main;
}

function SetGroupVisible(group, visible, startElement) {
    group.invisible = !visible;
    group.setVisible(visible);
    if (group.children)
    {
        const children = group.children.entries;
        if (children) {
            startElement = startElement || 0;
            for (let i = startElement; i < children.length; i++) {
                if (!children[i].forceInvisible)
                    children[i].setVisible(visible);
            }
        }
    } else {
        if (group.list) {
            for (let i = 0; i < group.list.length; i++) {
                if (!group.list[i].forceInvisible)
                    group.list[i].setVisible(visible);
            }
        }
    }
}

function SetBuildingVisible(group, visible, clicker) {
    group.setVisible(clicker);
    if (group.children)
    {
        const children = group.children.entries;
        if (children) {
            for (let i = 0; i < children.length; i++)
                children[i].setVisible(children[i].clicker ? clicker : visible);
        }
    }
}

let loadCallbackHelper;
let loadingImages = {};
let loadedImages = {};

for (let i in VisualData.PRELOAD_OBJECTS) {
    loadedImages[VisualData.PRELOAD_OBJECTS[i]] = 1;
}

function LoadingComplete() {
    loadedImages = Object.assign(loadedImages, loadingImages);
    loadingImages = {};
    loadCallbackHelper.callAndClearListeners();
}

function LoadingError() {
    console.log("Error Occured");
}

function CreateImageInGroup(engine, group, name, callback) {
    LoadPreparedFile(engine, name, () => {
        const image = engine.add.sprite(0, 0, name);
        group.add(image);
        callback(image);
    });
}

function CreateImage(engine, x, y, name, callback) {
    LoadPreparedFile(engine, name, () => {
        callback(engine.add.sprite(x, y, name));
    });
}

function PreloadObjects(engine, objects, callback) {
    let count = 0;
    for (let i = 0;i < objects.length;i++) {
        const name = objects[i].name;
        if (!loadedImages.hasOwnProperty(name)) {
            LoadPreparedFile(engine, name, count === 0 ? callback : null);
            count++;
        }
    }

    if (count === 0 && callback)
        callback();
}

function LoadPreparedFile(engine, name, callback) {
    const allObj = VisualData.ALL_OBJECTS[name];
    if (!allObj)
        console.trace("ERROR " + name);
    else {
        switch (allObj.type) {
            case UnnyObjectType.Spine:
                LoadFile(engine, name, allObj.json, callback, allObj.type, allObj.atlas);
                break;
            default:
                LoadFile(engine, name, allObj.file, callback, allObj.type);
                break;
        }
    }
}

function LoadFile(engine, name, path, callback, type, secondPath) {
    if (loadedImages.hasOwnProperty(name)) {
        callback();
        return;
    }

    path += "?v=9";
    secondPath += "?v=9";

    if (!loadingImages.hasOwnProperty(name)) {
        switch (type) {
            case UnnyObjectType.Audio:
                engine.load.audio(name, path);
                break;
            case UnnyObjectType.Spine:
                engine.load.spine(name, path, secondPath);
                break;
            case UnnyObjectType.Json:
                engine.load.json(name, path);
                break;
            // case UnnyObjectType.NineSlice:
            //     const allObj = VisualData.ALL_OBJECTS[name];
            //     console.log(">> ", allObj);
            //     // engine.load.nineSlice(name, path, 25);
            //     engine.load.image(name, path);
            //     break;
            default:
                const obj = VisualData.ALL_OBJECTS[name];
                if (!obj || !GameData.getAtlasName(obj))
                    engine.load.image(name, path);
                break;
        }
        loadingImages[name] = 1;
    }

    if (!loadCallbackHelper) {
        loadCallbackHelper = new UnnyAction();
        engine.load.on('complete', LoadingComplete, this);
        engine.load.on('loadError', LoadingError, this);
    }

    loadCallbackHelper.addListener(callback);

    if (!engine.load.isLoading())
        engine.load.start();
}

function WaitForEverythingToLoad(callback) {
    if (!gameInit.engine.load.isLoading())
        callback();
    else
        loadCallbackHelper.addListener(callback);
}

function PrepareAndCreateObject(object, parent, engine, depth, callback, clickCallback) {
    const objects = object.objects;
    const name = objects[0].name;
    LoadPreparedFile(engine, name, () => {
        const obj = PrepareObject(objects, parent, engine, depth, null, clickCallback);
        if (callback)
            callback(obj);
    });
}

class ClickController {

    constructor() {
        this.onBuildingClicked = new UnnyAction();
        this.onFabrikaWasClicked = new UnnyAction();
        this.onPodkovaWasClicked = new UnnyAction();
    }

    buildingWasClicked(buildingInterface) {
        this.onBuildingClicked.callListeners(buildingInterface);
    }

    fabrikaWasClicked(buildingInterface) {
        this.onFabrikaWasClicked.callListeners(buildingInterface);
    }

    podkovaWasClicked(buildingInterface) {
        this.onPodkovaWasClicked.callListeners(buildingInterface);
    }
}

let clickController = new ClickController();

class VisualBuilding {

    constructor(engine, building, visible) {
        this.buildingInterface = building;
        this.buildingInterface.onUpgraded.addListener(this.buildingUpgraded.bind(this));
        this.buildingInterface.onResourcesUpdated.addListener(this.resourcesUpdated.bind(this));

        this.group = engine.add.group();
        this.engine = engine;
        if (visible)
            this.applyTexture(this.buildingInterface.getLevel());
        else
            this.delayApplyTexture = true;

        this.setVisible(visible);

        building.onReseted.addListener(this.reseted.bind(this));
        building.onUnlockChanged.addListener(this.changeVisibility.bind(this));
    }

    harvestStarted() {
        if (this.buildingInterface.getLevel() > 0) {
            this.buildingInterface.harvest = 5;
            return true;
        } else
            this.setVisible(false);
        return false;
    }

    reseted() {
        this.applyTexture(this.buildingInterface.getLevel());
        this.setVisible(this.buildingInterface.world.isSelected());
    }

    resourcesUpdated(building) {
        if (building.autoCollect) {
            if (this.animatedObject)
                this.animatedObject.playAction();
        }
    }

    buildingWasClicked(action) {
        // console.log("buildingWasClicked " + action + " > " + this.buildingInterface.getLevel() + " harv = " + this.buildingInterface.harvest + " :res = " + this.buildingInterface.anyResources);
        if (action === 'move' && this.buildingInterface.getLevel() === 0)
            return;

        let playAnimation = false;

        if (this.buildingInterface.harvest) {
            this.buildingInterface.harvest--;
            if (!this.buildingInterface.harvest)
                this.setVisible(false);
            playAnimation = true;
        } else
            playAnimation = this.buildingInterface.anyResources || this.buildingInterface.getLevel() === 0;

        if (playAnimation) {
            clickController.buildingWasClicked(this.buildingInterface);
            if (this.animatedObject)
                this.animatedObject.playAction(true);
        }
    }

    setProductionVisible(visible) {
        SetGroupVisible(this.group, visible, this.buildingInterface.getLevel() ? 0 : 1);
    }

    setVisible(visible) {
        if (this.delayApplyTexture) {
            this.delayApplyTexture = false;
            this.applyTexture(this.buildingInterface.getLevel());
        }
        this.visible = visible;
        SetBuildingVisible(this.group, visible && !this.buildingInterface.isUnlocked(), visible);
    }

    buildingUpgraded(building) {
        if (building.getLevel() === 1)
            this.applyTexture(building.getLevel());
    }

    changeVisibility() {
        this.setVisible(this.visible);
    }

    isVisible() {
        return (!this.buildingInterface.isUnlocked() && this.group.visible);
    }

    applyTexture(level) {
        const engine = this.engine;
        this.group.clear(true, true);

        const bInfo = VisualData.PLACED_BUILDINGS[this.buildingInterface.slot];
        const pos = bInfo.position;
        const levels = bInfo.levels;

        let bName = null;
        for (let i = 0;i < levels.length; i++){
            bName = levels[i].building;
            if (!levels[i].hasOwnProperty('maxLevel') || level <= levels[i].maxLevel)
                break;
        }

        if (bName) {
            const building = VisualData.VISUAL_BUILDINGS[bName];
            const objects = building.objects;
            PreloadObjects(engine, objects, ()=> {
                this.animatedObject = PrepareObject(objects, this.group, engine, bInfo.depth, pos, this.buildingWasClicked.bind(this));
                if (this.animatedObject)
                    this.animatedObject.setVisible(this.isVisible());
            });
        }
    }
}

class VisualInit {

    constructor() {
        gameInit.preload.addListener(this.preload.bind(this));
        gameInit.create.addListener(this.create.bind(this));
        gameInit.onBuildingCreated.addListener(this.buildingCreated.bind(this));
        gameInit.onBuildingUpgraded.addListener(this.buildingUpgraded.bind(this));
        gameInit.onWorldChanged.addListener(this.worldChanged.bind(this));
        gameInit.onWorldPreChanged.addListener(this.worldPreChanged.bind(this));
        gameInit.loaded.addListener(this.progressWasLoaded.bind(this));
        gameInit.update.addListener(this.update.bind(this));
        gameInit.reseted.addListener(this.reseted.bind(this));
    }

    worldPreChanged(callback) {
        const self = this;
        function go(splitAnimation, callback) {
            //splitAnimation.playAction(true);
            splitAnimation.playAppear(true);
            divElementForLabels.style.display = 'none';
            if (self.timer)
                clearTimeout(self.timer);

            self.timer = setTimeout(()=>{
                if (callback)
                    callback();
                // self.timer = setTimeout(()=> {
                WaitForEverythingToLoad(()=>{
                    splitAnimation.playDisappear(true);
                    self.timer = setTimeout(()=> {
                        GlobalInputLocked = false;
                        unlockGUI();
                        divElementForLabels.style.display = 'inherit';
                        self.timer = null;
                        splitAnimation.setVisible(false);
                    }, 1000);
                });
                //, 1000);
            }, 1000);
        }

        if (!VisualData.SPLIT_SCREEN) {
            callback();
        } else {
            GlobalInputLocked = true;
            lockGuiEverything();

            if (this.splitAnimation) {
                this.splitAnimation.setVisible(true);
                go(this.splitAnimation, callback);
            } else {
                PrepareAndCreateObject(VisualData.SPLIT_SCREEN, null, this.engine, OverlayDepth + WinDefaultDepth, (splitAnimation) => {
                    this.splitAnimation = splitAnimation;
                    go(this.splitAnimation, callback);
                });
            }
        }
    }

    worldChanged(worldId) {
        for (let id in this.visible_groups) {
            if (this.visible_groups[id]) {
                if (id !== worldId)
                    this.setBuildingsVisible(id, false);
            } else {
                if (id === worldId)
                    this.setBuildingsVisible(id, true);
            }
        }

        this.showBackground(worldId);
        audioManager.playWorldMusic(worldId);
        this.updateBossState();
    }

    preload(engine) {
        this.engine = engine;
        const loader = engine.load;

        for (let i in VisualData.PRELOAD_OBJECTS) {
            const key = VisualData.PRELOAD_OBJECTS[i];
            const obj = VisualData.ALL_OBJECTS[key];
            // const path = VisualData.getGullPath(obj.path);
            if (!obj)
                console.log("[ERROR] No such object: " + key);

            switch (obj.type) {
                case UnnyObjectType.SpriteSheet:
                    const newParams = {
                        frameWidth: Math.trunc(obj.frameWidth * GlobalScale / imagesDeltaScale),
                        frameHeight: (obj.frameHeight * GlobalScale / imagesDeltaScale)
                    };
                    loader.spritesheet(key, obj.file, newParams);
                    break;
                case UnnyObjectType.Spine: loader.spine(key, obj.json, obj.atlas);
                    break;
                // case UnnyObjectType.NineSlice:
                //     loader.nineSlice(key, obj.file, obj.paddingY, obj.paddingX, obj.paddingX, obj.paddingY);
                //     break;
                default:
                    if (!GameData.getAtlasName(obj))
                        loader.image(key, obj.file);
                    break;
            }
        }
    }

    create(engine) {
        for (let i in VisualData.PRELOAD_OBJECTS) {
            const key = VisualData.PRELOAD_OBJECTS[i];
            const obj = VisualData.ALL_OBJECTS[key];
            switch (obj.type) {
                case UnnyObjectType.SpriteSheet:
                {
                    if (obj.hasOwnProperty('animation')) {
                        const config = Object.assign({
                            frames: engine.anims.generateFrameNumbers(key)
                        }, obj.animation);
                        engine.anims.create(config);
                    }
                    break;
                }
            }
        }

        this.backgrounds = {};
        this.showBackground(gameInit.selectedWorld);

        this.groups = {};
        this.visible_groups = {};
    }

    updatePodkova(progress) {
        if (this.podkova) {
            this.podkovaActive = progress.isGuardActive();
            if (this.podkovaActive) {
                this.podkova.playActiveLoop();
                this.podkovaTimer.setVisible(true);
            }
            else {
                this.podkova.playIdleLoop();
                this.podkovaTimer.setVisible(false);
            }
        }
    }

    setGameObjectsVisible(visible) {
        if (this.podkovaTimer && this.podkovaActive)
            this.podkovaTimer.setVisible(visible);
    }

    update() {
        if (this.podkovaActive !== gameInit.progress.isGuardActive())
            this.updatePodkova(gameInit.progress);

        if (this.podkovaActive) {
            const left = Math.trunc(gameInit.progress.getGuardTimeLeft() / 1000);
            if (this.podkovaTimerTime !== left) {
                this.podkovaTimerTime = left;
                this.podkovaTimer.time.setText(timeToStringClock(left));
            }
        }
    }

    progressWasLoaded(progress) {
        this.updatePodkova(progress);
    }

    showBackground(worldId, callback) {
        if (!this.backgrounds.hasOwnProperty(worldId)) {
            this.backgrounds[worldId] = this.engine.add.group();
            PrepareAndCreateObject(VisualData.BACKGROUNDS[worldId], this.backgrounds[worldId], this.engine, 0, callback);
        }

        for (let i in this.backgrounds)
            SetGroupVisible(this.backgrounds[i], i == worldId);

        //load fabrika and podkova if necessary and apply position
        if (!this.fabrika && VisualData.FABRIKA) {
            PrepareAndCreateObject(VisualData.FABRIKA, null, this.engine, 1, (fabrika)=>{
                this.fabrika = fabrika;
                this.updateBossState();
            }, (action)=>clickController.fabrikaWasClicked(action));
        }

        if (!this.podkova && VisualData.PODKOVA) {
            PrepareAndCreateObject(VisualData.PODKOVA, null, this.engine, 1, (podkova)=>{
                this.podkova = podkova;
                this.podkova.setVisible(gameInit.progress.canShowGuard());
                this.podkovaTimer = this.engine.add.container();
                const back = this.engine.add.sprite(0, 0, 'RainTimerBack');
                this.podkovaTimer.add(back);
                this.podkovaTimer.time = this.engine.add.text(0, -4 * GlobalScale, null, DefaultFontSmall).setOrigin(0.5);
                this.podkovaTimer.add(this.podkovaTimer.time);
                this.podkovaTimer.setPosition(this.podkova.obj.x / localScale, this.podkova.obj.y / localScale + 100 * GlobalScale);
                this.podkovaTimer.setDepth(WinDefaultDepth - 1000);
            }, (action)=>clickController.podkovaWasClicked(action));
        }
    }

    updateBossState() {
        this.fabrika.setVisible(gameInit.progress.canShowBoss(gameInit.selectedWorld));
    }

    getBoss() {
        return this.fabrika;
    }

    showGuard() {
        if (this.podkova)
            this.podkova.setVisible(true);
    }

    getGuard() {
        return this.podkova;
    }

    reseted() {
        this.updateBossState();
    }

    buildingUpgraded(world, building) {
        if (building.getLevel() === 1) {
            this.updateBossState();
        }
    }

    buildingCreated(world, building) {
        let group;
        if (!this.groups.hasOwnProperty(world.id)) {
            group = this.groups[world.id] = {};
            this.visible_groups[world.id] = world.isSelected();
        } else
            group = this.groups[world.id];

        group[building.id] = new VisualBuilding(this.engine, building, this.visible_groups[world.id]);
    }

    setBuildingsProductionVisible(worldId, visible) {
        const group = this.groups[worldId];
        if (group) {
            for (let i in group)
                group[i].setProductionVisible(visible);
        }
    }

    setBuildingsVisible(worldId, visible) {
        const group = this.groups[worldId];
        if (group) {
            for (let i in group)
                group[i].setVisible(visible);
        }
        this.visible_groups[worldId] = visible;
    }

    prepareForHarvest() {
        const worldId = gameInit.selectedWorld;

        const group = this.groups[worldId];
        let count = 0;
        if (group) {
            for (let i in group) {
                if (group[i].harvestStarted())
                    count++;
            }
        }
        return count;
    }
}

let visualGame = new VisualInit();

class GUINotification extends Phaser.GameObjects.Container {
    constructor(config) {
        super(config.scene, config.x, config.y);
        this.config = config;

        config.scene.add.existing(this);

        this.image = config.scene.add.sprite(0, 0, 'Notification').setScale(0.4);
        this.text = config.scene.add.textOld(0, 0, config.getText(), DefaultFont).setOrigin(0.5);
        this.add(this.image);
        this.add(this.text);
        animManager.jumpFishAnimation(this, {
            height: 20 * GlobalScale,
            scale: 0.2
        }, 0.6);

        if (config.group)
            config.group.add(this);

        this.config.subscribe(this.update.bind(this));
    }

    setVisible(visible) {
        super.setVisible(this.config.parent.visible && visible && this.config.isVisible());
    }

    update() {
        this.setVisible(true);
        this.text.setText(this.config.getText());
    }
}

class GUIScroll {
    constructor(engine, config, getCellMethod, getItemsMethod) {
        // let background = engine.add.sprite(0, 0, 'WinUpgradeBack').setInteractive().setDepth(WinDefaultDepth - 1000);
        const padding = (config.width - config.cellWidth * config.columns);
        const conf = {
            // Position
            x: config.x * localScale,
            y: config.y * localScale,

            // Elements
            // background: engine.add.sprite(0, 0, "ExitButton").setDepth(5000),
            // background: engine.rexUI.add.roundRectangle(0, 0, 0, 0, 13, 0xffffff),
            // background: background,

            table: {
                width: config.width * GlobalScale * localScale,
                height: config.height * GlobalScale * localScale,

                cellWidth: config.cellWidth * GlobalScale * localScale,
                cellHeight: config.cellHeight * GlobalScale * localScale,
                // width: config.width,
                // height: config.height,
                //
                // cellWidth: config.cellWidth,
                // cellHeight: config.cellHeight,
                columns: config.columns,
                interactive: false
            },

            // slider: {
            //     track: engine.rexUI.add.roundRectangle(0, 0, 20, 10, 10, 0x260e04),
            //     thumb: engine.rexUI.add.roundRectangle(0, 0, 0, 0, 13, 0x7b5e57),
            // },

            scroller: {
                slidingDeceleration: 5000,
                backDeceleration: 2000,
            },

            space: {
                left: padding * GlobalScale * localScale,
                right: 0,
                top: 0,
                bottom: 0,

                table: 0,
            },

            createCellContainerCallback: getCellMethod,

            items: getItemsMethod(),//this.getItems(5),

            name: '',
        };

        // this.table = engine.rexUI.add.gridTable(conf).setInteractive().setDepth(WinDefaultDepth).layout();
        this.table = new RexPlugins.UI.GridTable(engine, conf).setInteractive().setDepth(WinDefaultDepth).layout();
    }

    setScrollerEnable(enable) {
        this.table.setScrollerEnable(enable);
        this.scrollerDisabled = !enable;
    }

    fakeMove() {
        this._mouseWheel(0, -1);
    }

    _mouseWheel(x, y) {
        if (this.scrollerDisabled)
            return;

        let t = this.table.t + Math.sign(y) * Math.min(Math.abs(y), 20) * 0.005;
        if (t) {
            if (t < 0)
                t = 0;
            if (t > 1)
                t = 1;
            this.table.setT(t);
        }
    }

    setVisible(visible) {
        this.table.visible = visible;
        if (this.table.visible) {
            if (!this.wheel) {
                this.wheel = this._mouseWheel.bind(this);
                eventManager.onMouseWheel.addListener(this.wheel);
            }
        } else {
            if (this.wheel) {
                eventManager.onMouseWheel.removeListener(this.wheel);
                this.wheel = null;
            }
        }
    }
}

let mainResourceIcon = null;
let cansResourceIcon = null;
let hudResources;

class HUDResources {
    /***
     *
     * @type {GUIManager} gui
     * @type {GameInit} gameInit
     */
    constructor(gameInit){
        gameInit.loaded.addListener(this.gameLoaded.bind(this));
        hudResources = this;
    }

    setVisible(visible) {
        SetGroupVisible(this.group, visible);
    }

    createGame(engine) {
        this.group = engine.add.group();

        const centerX = VisualData.MAP_PARAMS.center.x;
        const centerY = VisualData.MAP_PARAMS.center.y;
        const Distance = 120 * GlobalScale;
        const IconOffset = 30 * GlobalScale;
        const LabelOffset = 80 * GlobalScale;

        let x = centerX - RealScreenWidth / 2 + 50 * GlobalScale;
        let y = centerY - RealScreenHeight / 2 + 80 * GlobalScale;

        const font = DefaultFontSmall;
        const info = VisualData.GUI_HUDResources;

        let image;
        image = engine.add.sprite(x, y, info.singleImage ? info.singleImage : 'HudResBack1').setOrigin(0, 0.5);
        if (info.hudBackScale)
            image.setScale(info.hudBackScale, 1);
        this.group.add(image);
        mainResourceIcon = this.group.create(x + IconOffset, y, 'PriceIcon').setScale(0.85, 0.9);
        this.resources = engine.add.text(x + LabelOffset, y + info.labelOffsetY * GlobalScale, '99999', font).setOrigin(0, 0.5);
        this.group.add(this.resources);

        y += Distance;
        image = engine.add.sprite(x, y, info.singleImage ? info.singleImage : 'HudResBack2').setOrigin(0, 0.5);
        if (info.hudBackScale)
            image.setScale(info.hudBackScale, 1);
        this.group.add(image);
        this.group.create(x + IconOffset, y, 'PriceGems');
        this.gems = engine.add.text(x + LabelOffset, y + info.labelOffsetY * GlobalScale, '99999', font).setOrigin(0, 0.5);
        this.group.add(this.gems);
        new BasicButton(this.group, {
            'scene': engine,
            'key': 'HudPlusButton',
            'x': x + info.greenButtonOffsetX1 * GlobalScale,
            'y': y,
        }, ()=>guiManager.openGemsStore());

        y += Distance;
        image = engine.add.sprite(x, y, info.singleImage ? info.singleImage : 'HudResBack3').setOrigin(0, 0.5);
        if (info.hudBackScale)
            image.setScale(info.hudBackScale, 1);
        this.group.add(image);
        cansResourceIcon = this.group.create(x + IconOffset, y, 'PriceSeeds').setScale(0.9);
        this.seeds = engine.add.text(x + LabelOffset, y + info.labelOffsetY * GlobalScale, '99999', font).setOrigin(0, 0.5);
        this.group.add(this.seeds);
        new BasicButton(this.group, {
            'scene': engine,
            'key': 'SeedsQuestIcon',
            'x': x + info.greenButtonOffsetX1 * GlobalScale,
            'y': y,
        }, ()=>guiManager.openNewWindow(WindowType.WinApples));

        this.group.setDepth(WinDefaultDepth + 100);
    }

    /***
     *
     * @type {Progress} progress
     */
    gameLoaded(progress) {
        progress.onResourcesChanges.addListener(this.updateResources.bind(this));
        this.updateResources(progress);
    }

    /***
     *
     * @type {Progress} progress
     */
    updateResources(progress) {
        this.resources.setText(LocalizationManager.getLocalizedNumber(progress.getTotalResources()));
        this.gems.setText(LocalizationManager.getLocalizedNumber(progress.getTotalGems()));
        this.seeds.setText(LocalizationManager.getLocalizedNumber(progress.getTotalSeeds()));
    }
}

const OverlayDepth = 30000;
const WinDefaultDepth = 10000;
const TextScale = 1;

function getFont(size) {
    return Math.trunc(size * GlobalScale * localScale * TextScale * 1.2) + 'px';
}

function getFont2(size) {
    // return Math.trunc(size * GlobalScale * localScale * TextScale / dpi * 1.4) + 'px PT Sans Narrow';
    return Math.trunc(size * GlobalScale * localScale * TextScale / dpi * 1.4) + 'px';
}

function getStroke(size) {
    return Math.max(1, Math.trunc(size * localScale / dpi)) * TextScale;
}
//ElectraMedium
//ArchivoBlack
let DefaultFontVeryBig, DefaultFontBig, DefaultFont, DefaultFontSmall, DefaultFontSmall2, DefaultFontBlack, DefaultFontSmallBlack, DefaultFontVerySmall, DefaultFontVerySmall2;

const DefaultFontColor = "#fff";
const DefaultStrokeColor = "#555";

function createFont(obj) {
    obj.fontFamily = "PT Sans Narrow";
    obj.fontSize = obj.font;
    delete obj.font;
    return obj;
}

function CalculateFonts() {
    DefaultFontVeryBig = createFont({
        font: getFont(150),
        font2: getFont2(150),
        fill: DefaultFontColor,
        align: 'center',
        stroke: DefaultStrokeColor,
        strokeThickness: getStroke(6)
    });
    DefaultFontBig = createFont({
        font: getFont(80),
        font2: getFont2(80),
        fill: DefaultFontColor,
        align: 'center',
        stroke: DefaultStrokeColor,
        strokeThickness: getStroke(8)
    });
    DefaultFont = createFont({
        font: getFont(60),
        font2: getFont2(60),
        fill: DefaultFontColor,
        align: 'center',
        stroke: DefaultStrokeColor,
        strokeThickness: getStroke(7)
    });
    DefaultFontSmall = createFont({
        font: getFont(50),
        font2: getFont2(50),
        fill: DefaultFontColor,
        align: 'center',
        stroke: DefaultStrokeColor,
        strokeThickness: getStroke(7)
    });
    DefaultFontSmall2 = createFont({
        font: getFont(40),
        font2: getFont2(40),
        fill: DefaultFontColor,
        align: 'center',
        stroke: DefaultStrokeColor,
        strokeThickness: getStroke(5)
    });
    DefaultFontBlack = createFont({font: getFont(45), font2: getFont2(45), fill: '#333', align: 'center'});
    DefaultFontSmallBlack = createFont({font: getFont(40), font2: getFont2(40), fill: '#333', align: 'center'});
    DefaultFontVerySmall = createFont({
        font: getFont(40),
        font2: getFont2(40),
        fill: '#333',
        align: 'center',
        // stroke: '#000',
        // strokeThickness: getStroke(4)
    });
    DefaultFontVerySmall2 = createFont({
        font: getFont(55),
        font2: getFont2(55),
        fill: '#333',
        align: 'center',
        // stroke: '#000',
        // strokeThickness: getStroke(4)
    });
}

class ToogleButton {
    constructor(engine, group, icon, x, y, callback, winInfo) {
        this.winInfo = winInfo;
        const offset = (winInfo && winInfo.activeOffset) || 0;
        this.button = new BasicButton(group, {
                'scene': engine,
                'key':'Tab_Close',
                'x': x,
                'y': y},
            callback)
            .setOrigin(0.5, 1)
            .setDepth(WinDefaultDepth - 250);
        this.y = y;
        this.selected = new BasicButton(group, {
                'scene': engine,
                'key':'Tab_Open',
                'x': x,
                'y': y + offset},
            callback)
            .setOrigin(0.5, 1)
            .setDepth(WinDefaultDepth - 120);
        this.icon = group.create(x, y - 70, icon).setDepth(WinDefaultDepth - 50);
        this.icon.setScale(100 * GlobalScale / this.icon.width / imagesDeltaScale);
    }

    setSelected(selected) {
        this.selected.setVisible(selected);
        this.button.setVisible(!selected);
        this.icon.setPositionY(this.y - (selected ? ((this.winInfo && this.winInfo.iconOffsetActive) || 100) * GlobalScale : ((this.winInfo && this.winInfo.iconOffset) || 70) * GlobalScale));
    }
}

function setStoreCellLocked(group, locked) {
    const color = locked ? LockTint : NormalTint;
    group.unny_btn.setButtonLocked(locked);
    group.priceText.tint = color;
    if (group.priceIcon)
        group.priceIcon.tint = color;
}

function setLockedColor(group, locked) {
    group.tint = locked ? LockTint : NormalTint;
}

function createStoreCell(engine, group, cellCenterX, cellCenterY, title, imageName, imagePath, desc, priceImg, price, purchaseCallback, ignoreVisibility, scroll, addSecondLabel) {
    const depth = WinDefaultDepth + 100;

    const storeGUI = VisualData.GUI_WinStore;

    group.unny_back = engine.add.sprite(cellCenterX, cellCenterY, "Store_Slot").setDepth(depth);
    group.add(group.unny_back);

    if (storeGUI.headerImg) {
        const headerImg = engine.add.sprite(cellCenterX, cellCenterY + storeGUI.headerOffsetY * GlobalScale , storeGUI.headerImg).setDepth(depth);
        group.add(headerImg);
    }

    group.unny_text = engine.add.textOld(cellCenterX, cellCenterY + storeGUI.headerOffsetY * GlobalScale, title, DefaultFontVerySmall).setOrigin(0.5, 0.5).setDepth(depth);
    group.add(group.unny_text);
    group.unny_text.setWordWrapWidth(400 * GlobalScale);

    const btnCenterY = cellCenterY + storeGUI.btnOffsetY * GlobalScale;
    group.unny_container = engine.add.container(cellCenterX, btnCenterY);
    group.unny_btn = new BasicButton(group.unny_container, {
        'scene': engine,
        'key': 'DefaultButton',
        'x': 0,
        'y': 0,
        'scale_parent': true
    }, purchaseCallback);

    // group.add(group.unny_btn.setDepth(depth));
    group.add(group.unny_container.setDepth(depth));

    //Image
    let loading = true;
    if (imageName) {
        LoadFile(engine, imageName, imagePath, () => {
            if (group && group.active) {
                const sprite = engine.add.sprite((group.x / localScale || 0) + cellCenterX, (group.y / localScale || 0) + cellCenterY - (storeGUI.imageOffset || 110) * GlobalScale, imageName)
                    .setDepth(depth);
                group.add(sprite);
                group.unny_sprite = sprite;
                if (!ignoreVisibility && !group.visible && group.children)
                    sprite.setVisible(false);
                else {
                    if (scroll && !loading)
                        scroll.fakeMove();
                }
            }
        });
    }
    loading = false;
    //

    desc = LocalizationManager.removeCodes(desc);
    group.unny_desc = engine.add.textOld(cellCenterX, cellCenterY + storeGUI.descOffsetY * GlobalScale, desc, DefaultFontVerySmall).setOrigin(0.5, 0.5).setDepth(depth);
    group.add(group.unny_desc);
    group.unny_desc.setWordWrapWidth(400 * GlobalScale);

    let priceText;
    if (priceImg) {
        const priceIcon = engine.add.sprite(- 120 * GlobalScale, 0, priceImg);
        priceIcon.setScale(70 / priceIcon.width * GlobalScale / imagesDeltaScale).setDepth(depth);
        group.unny_container.add(priceIcon);
        group.priceIcon = priceIcon;
        priceText = engine.add.textOld(- 70 * GlobalScale, 0, price, DefaultFontVerySmall2).setOrigin(0, 0.5).setDepth(depth);
    } else {
        priceText = engine.add.textOld(0, 0, price, DefaultFontVerySmall2).setOrigin(0.5, 0.5).setDepth(depth);
    }
    group.priceText = priceText;
    group.unny_container.add(priceText);

    if (addSecondLabel) {
        group.priceText2 = engine.add.textOld(0, 50 * GlobalScale, "Hdhsadsa", DefaultFontVerySmall).setOrigin(0.5, 0.5).setDepth(depth);
        group.unny_container.add(group.priceText2);
    }
    return priceText;
}

class WinBase {
    constructor(gui, gameInit){
        gui.onCreate.addListener(this.createGame.bind(this));
        this.onClose = new UnnyAction();
        this.gui = gui;
        this.disableClickables = false;
        this.gameInit = gameInit;

        this.applyWinInfo("GUI_" + this.constructor.name);
    }

    createButton(key, x, y, action) {
        const btn = new BasicButton(this.group, {
            'scene': this.engine,
            'key': key,
            'x': x,
            'y': y,
        }, action);
        this.addButton(btn);
        return btn;
    }

    applyWinInfo(key) {
        this.winInfo = VisualData[key];

        if (this.winInfo && this.winInfo.nineSlice)
            this.nineSlice = this.winInfo.nineSlice;
    }

    addButton(button) {
        if (!this.allButtons)
            this.allButtons = [];

        this.allButtons.push(button);
    }

    playButtonsAnimation() {
        if (this.allButtons) {
            for (let i in this.allButtons) {
                animManager.applyButtonShowAnimation(this.allButtons[i]);
            }
        }
    }

    createGroup() {
        this.group = this.engine.add.container(this.centerX, this.centerY).setDepth(WinDefaultDepth);
    }

    createGroupNotCenter() {
        this.group = this.engine.add.container(0, 0).setDepth(WinDefaultDepth);
    }

    createGame(engine) {
        this.centerX = VisualData.MAP_PARAMS.center.x;
        this.centerY = VisualData.MAP_PARAMS.center.y;

        this.engine = engine;
        this.createGroup();
        this.group.setVisible(false);
    }

    destroyImage() {
        if (this.image) {
            this.image.destroy(true);
            this.image = null;
        }
    }

    _createBlackBackground() {
        const size = 32 * GlobalScale;
        this.group.create(size * 5, size * 3, 'BlackPixel')
            .setScale(RealScreenWidth / size + 10, RealScreenHeight / size + 10)
            .setDepth(WinDefaultDepth - 2).setInteractive();
    }

    closeWindow() {
        this.setWindowVisible(false);
        this.destroyImage();
        this.onClose.callListeners(this);
    }

    playOpenAnimation() {
        animManager.applyWinOpenAnimation(this.group);
    }

    setWindowVisible(visible) {
        this.visible = visible;
        SetGroupVisible(this.group, visible);

        if (!this.enableClickables)
            SetClickablesActive(!visible);

        if (visible) {
            this.playOpenAnimation();
            this.playButtonsAnimation();
        }
    }

    localize(){

    }

    imageWasLoaded() {

    }

    loadImage(icon, x, y) {
        LoadPreparedFile(this.engine, icon, () => {
            this.destroyImage();
            if (this.visible) {
                this.image = this.group.create(x, y, icon).setDepth(WinDefaultDepth + 1);
                if (this.info.scaleImage)
                    this.image.setScale(this.info.scaleImage);
                this.imageWasLoaded();
            }
        });
    }

    getWinInfoValue(key, def) {
        const val = this.winInfo && this.winInfo[key];
        return ((val || val === 0) || def) * GlobalScale;
    }

    createHeader(engine) {
        this.header = engine.add.text(0, this.getWinInfoValue('headerOffset', -600), null, DefaultFontBig)
            .setOrigin(0.5, 0.5)
            .setDepth(WinDefaultDepth);
        this.group.add(this.header);
    }

    createActionButton(engine, action, y, visible, scale, x, minWidth, icon) {
        y = y || this.getWinInfoValue('buttonOffset', 500 * GlobalScale);
        x = x || this.getWinInfoValue('buttonOffsetX', 0);
        this.actionButton = new ButtonWithText(this.group, {
            'scene': engine,
            'key': 'DefaultButton',
            'x': x,
            'y': y,
            'scale': scale,
            'minWidth': minWidth,//for nine slice
            icon: icon
        }, action)
            .setDepth(WinDefaultDepth + 100);

        this.buttonLabel = this.actionButton.caption;
        return this.buttonLabel;
    }

    getTutorialButton() {
        return this.actionButton;
    }

    hideAllButtonsForTutorial() {
        for (let i in this.allButtons)
            this.allButtons[i].setForceInvisible(true);
    }

    showAllButtonsFromTutorial() {
        for (let i in this.allButtons)
            this.allButtons[i].forceInvisible = false;

        this.setAllButtonsVisible(true);
    }

    showButtonFromTutorial(btn) {
        btn.setVisible(true);
        btn.forceInvisible = false;
    }

    setAllButtonsVisible(visible) {
        for (let i in this.allButtons) {
            if (!visible || !this.allButtons[i].forceInvisible)
                this.allButtons[i].setVisible(visible);
        }
    }

    _showAllButtonsBack() {
        for (let i in this.allButtons) {
            const btn = this.allButtons[i];
            if (btn.temp_mark) {
                delete btn.temp_mark;
                btn.setVisible(true);
                animManager.applyButtonShowAnimation(btn);
            }
        }
    }

    hideAllButtonsForTime(duration) {
        for (let i in this.allButtons) {
            const btn = this.allButtons[i];
            if (btn.visible) {
                btn.setVisible(false);
                btn.temp_mark = true;
            }
        }

        setTimeout(()=>{
            this._showAllButtonsBack();
        }, duration * 1000);
    }
}

class WinWithExit extends WinBase {

    createGame(engine) {
        super.createGame(engine);
        this.createExitButton();
    }

    createExitButton() {
        let x, y;
        if (VisualData.IsVertical()) {
            x = 150 * GlobalScale;
            y = RealScreenHeight - 150 * GlobalScale;
        } else {
            x = RealScreenWidth - 180 * GlobalScale;
            y = 150 * GlobalScale;
        }
        this.exitButton = new BasicButton(null, {
            'scene': this.engine,
            'key': 'ExitButton',
            'x': x,
            'y': y,
        }, this.closeWindow.bind(this)).setDepth(WinDefaultDepth);
        this.exitButton.visible = false;
        this.addButton(this.exitButton);
    }

    setWindowVisible(visible) {
        super.setWindowVisible(visible);
        if (this.exitButton)
            this.exitButton.visible = visible;
    }
}

let staticWinBack = null;
let staticWinBlackBack = null;

let staticBackgrounds = {};

class WinWithBack extends WinWithExit {

    constructor(gui, gameInit){
        super(gui, gameInit);
    }

    createBack() {
        if (!staticWinBack) {
            staticWinBack = this.engine.add.container(this.centerX, this.centerY).setDepth(WinDefaultDepth - 1);

            staticWinBack.add(this.engine.add.sprite(0, 0, 'WinStandardBack').setDepth(WinDefaultDepth - 1));
            staticWinBack.setVisible(false);
        }
    }

    createGame(engine) {
        super.createGame(engine);

        if (!staticWinBlackBack) {
            const size = 32 * GlobalScale;
            staticWinBlackBack = engine.add.sprite(this.centerX + size * 5, this.centerY + size * 3, 'BlackPixel')
                .setScale(RealScreenWidth / size + 10, RealScreenHeight / size + 10)
                .setDepth(WinDefaultDepth - 200);
            staticWinBlackBack.setVisible(false);
        }

        if (!this.nineSlice) {
            this.createBack();
        } else {
            if (!staticBackgrounds.hasOwnProperty(this.nineSlice)) {
                const container = this.engine.add.container(this.centerX, this.centerY).setDepth(WinDefaultDepth - 1);
                const back = engine.add.myNineSlice(0, 0, VisualData.WINDOW_NINE_SLICE[this.nineSlice]).setOrigin(0.5);
                container.add(back);
                container.setVisible(false);
                staticBackgrounds[this.nineSlice] = container;
            }
        }
    }

    showBackground(visible) {
        let back = staticWinBack;
        if (back) {
            back.setVisible(visible);
            if (visible)
                animManager.applyWinOpenAnimation(back);
        }
    }

    showBackOrNineSlice(visible){
        let back = null;

        if (this.nineSlice)
            back = staticBackgrounds[this.nineSlice];

        if (back) {
            back.setVisible(visible);
            if (visible)
                animManager.applyWinOpenAnimation(back);
        } else
            this.showBackground(visible);
    }

    setBlackBackVisible(visible) {
        if (staticWinBlackBack)
            staticWinBlackBack.setVisible(visible);
    }

    setWindowVisible(visible) {
        super.setWindowVisible(visible);
        this.showBackOrNineSlice(visible);
        this.setBlackBackVisible(visible);

        if (visible)
            audioManager.playWindowOpen();
    }
}

let staticWinBrownBack = null;

class WinWithBrownBack extends WinWithBack {

    createGame(engine) {
        super.createGame(engine);

        if (!staticWinBrownBack) {
            const size = 32 * GlobalScale;
            staticWinBrownBack = engine.add.sprite(this.centerX + size * 5, this.centerY + size * 3, 'CollectionBack')
                .setScale(RealScreenWidth / size + 10, RealScreenHeight / size + 10)
                .setDepth(WinDefaultDepth - 1000);
            staticWinBrownBack.setVisible(false);
        }

        // this.createMyExitButton();
    }

    createExitButton2() {
        //TOTO temp hack
    }

    playOpenAnimation() {
        //no default animation
    }

    showBackground() {
        //DO nothing
    }

    setBlackBackVisible(visible) {
        if (this.nineSlice)
            super.setBlackBackVisible(visible);
        else {
            if (staticWinBrownBack)
                staticWinBrownBack.setVisible(visible);
        }
    }

    createMyExitButton() {
        this.exitButton = new BasicButton(this.group, {
            'scene': this.engine,
            'key': 'ExitButton',
            'x': this.centerX - RealScreenWidth / 2 + 150 * GlobalScale,
            'y': this.centerY + RealScreenHeight / 2 - 150 * GlobalScale,
        }, this.closeWindow.bind(this)).setDepth(WinDefaultDepth);
        this.addButton(this.exitButton);
    }

    createGroup() {
        this.createGroupNotCenter();
    }
}

class WinDailyBonus extends WinWithBrownBack {
    constructor(gui, gameInit){
        super(gui, gameInit);
    }

    setWindowVisible(visible) {
        super.setWindowVisible(visible);

        if (visible) {
            if (!this.prepared)
                this.prepareWindow();
            else {
                const dailyBonusData = this.gameInit.progress.getDailyBonusData();
                for (let i = 0;i < this.days.length;i++) {
                    const dayInfo = dailyBonusData.getBonusForDay(i + 1);
                    if (dayInfo && dayInfo.isUpdatable()) {
                        const group = this.days[i];
                        group.parameter.setText(dayInfo.getText());
                    }
                }
            }

            const dailyBonusInfo = this.gameInit.progress.getMyDailyBonusInfo();

            const dayNow = Progress.getDayNow();
            const dayWas = Progress.getDayFromTime(dailyBonusInfo.update);

            this.setBonusInfo(dailyBonusInfo.lastBonus, dayNow > dayWas);
            this._updateButtonState();
        }
    }

    _applyVisibilityClosed(group) {
        if (group.img_closed)
            group.img_closed.visible = group.vis_closed === true;
    }

    _applyVisibilityCheck(group) {
        if (group.img_check)
            group.img_check.visible = group.vis_check === true;
    }

    _applyVisibilityActive(group) {
        if (group.img_active)
            group.img_active.visible = group.vis_active === true;
    }

    setBonusInfo(lastBonus, activeNext) {
        this.activeIndex = -1;
        for (let i = 0;i < this.days.length;i++) {
            const group = this.days[i];

            if (i < lastBonus) {
                group.vis_closed = group.vis_check = true;
                group.vis_active = false;
            } else {
                group.vis_closed = group.vis_check = false;
                group.vis_active = (i == lastBonus && activeNext);//== on purpose
                if (group.vis_active)
                    this.activeIndex = i;
            }
            this._applyVisibilityClosed(group);
            this._applyVisibilityCheck(group);
            this._applyVisibilityActive(group);
        }
    }

    prepareWindow() {
        this.prepared = true;
        const engine = this.engine;

        this.days = [];

        const columns = this.winInfo.columns;
        const rows = this.winInfo.rows;
        const distance = this.winInfo.distance * GlobalScale;

        const dailyBonusData = this.gameInit.progress.getDailyBonusData();

        let index = 0;
        for (let j = 0;j < rows; j++) {
            for (let i = 0; i < columns; i++) {
                index++;

                const dayInfo = dailyBonusData.getBonusForDay(index);
                if (!dayInfo)
                    break;
                const group = engine.add.container();

                group.setPosition(
                    this.centerX + (i - columns / 2 + 0.5) * distance,
                    this.centerY + (j - rows / 2 + 0.5) * distance - this.winInfo.addDistance * GlobalScale);
                group.depth = WinDefaultDepth;

                CreateImageInGroup(engine, group, 'Daily_Opened', (image) => {
                    image.setDepth(WinDefaultDepth);
                });

                CreateImageInGroup(engine, group, 'Daily_Active', (image) => {
                    group.img_active = image.setDepth(WinDefaultDepth + 10);
                    this._applyVisibilityActive(group);
                });

                if (dayInfo) {
                    LoadFile(engine, dayInfo.getIconName(), dayInfo.getIconPath(), () => {
                        const img = engine.add.sprite(0, 0, dayInfo.getIconName());
                        group.add(img);
                        img.setDepth(WinDefaultDepth + 15);

                        group.parameter = engine.add.text(110 * GlobalScale, 30 * GlobalScale, dayInfo.getText(), DefaultFont)
                            .setOrigin(1, 0)
                            .setDepth(WinDefaultDepth + 18);
                        group.add(group.parameter);

                        CreateImageInGroup(engine, group, 'Daily_Closed', (image) => {
                            group.img_closed = image.setDepth(WinDefaultDepth + 20);
                            this._applyVisibilityClosed(group);

                            CreateImageInGroup(engine, group, 'Daily_Check', (image) => {
                                image.x += 90 * GlobalScale * localScale;
                                image.y -= 90 * GlobalScale * localScale;
                                group.img_check = image.setDepth(WinDefaultDepth + 30);
                                this._applyVisibilityCheck(group);
                            });
                        });
                    });
                }

                this.group.add(group);
                this.days.push(group);
            }
        }

        this.createActionButton(engine, this.buttonClicked.bind(this), RealScreenHeight - 200 * GlobalScale, true, 1, RealScreenWidth / 2, 1400 * GlobalScale);
    }

    _updateButtonState() {
        if (this.activeIndex >= 0) {
            this.buttonLabel.setText(LocalizationManager.getLocalizization("LoginBonusGetBtn"));
            this.actionButton.setButtonLocked(false);
        }
        else {
            this.buttonLabel.setText(LocalizationManager.getLocalizization("LoginBonusBlockedBtn"));
            this.actionButton.setButtonLocked(true);
        }
    }

    buttonClicked() {
        if (this.activeIndex >= 0) {
            const dailyBonusData = this.gameInit.progress.getDailyBonusData();
            const bonus = dailyBonusData.getBonusForDay(this.activeIndex + 1);
            if (bonus)
                bonus.activateBonus();
            else
                console.log('No bonus');
            this.gameInit.progress.bonusWasActivated();

            //Visual Update
            const group = this.days[this.activeIndex];
            group.vis_closed = group.vis_check = true;
            group.vis_active = false;
            this._applyVisibilityClosed(group);
            this._applyVisibilityCheck(group);
            this._applyVisibilityActive(group);

            this.activeIndex = -1;
            this._updateButtonState();
        }
    }

    localize() {
        super.localize();
        this.header.setText(LocalizationManager.getLocalizization("LoginBonusTitle"));
    }

    createGame(engine) {
        super.createGame(engine);

        this.header = this.engine.add.text(this.centerX, 100 * GlobalScale, null, DefaultFont)
            .setOrigin(0.5, 0)
            .setDepth(WinDefaultDepth + 1);
        this.group.add(this.header);
    //     this.prepareWindow();
        SetGroupVisible(this.group, false);
    }
}

let staticWinLargeBack = null;

class WinWithLargeBack extends WinWithBack {

    constructor(gui, gameInit){
        super(gui, gameInit);
    }

    createBack() {
        if (!staticWinLargeBack) {
            staticWinLargeBack = this.engine.add.container(this.centerX, this.centerY).setDepth(WinDefaultDepth - 1);
            staticWinLargeBack.add(this.engine.add.sprite(0, 100 * GlobalScale, 'WinUpgradeBack').setDepth(WinDefaultDepth - 100));
            staticWinLargeBack.visible = false;
            staticWinLargeBack.setDepth(WinDefaultDepth - 100);
        }
    }

    showBackground(visible) {
        if (staticWinLargeBack) {
            staticWinLargeBack.visible = visible;
            if (visible)
                animManager.applyWinOpenAnimation(staticWinLargeBack);
        }
    }
}

class WinDropPuzzle extends WinWithBrownBack {
    constructor(gui, gameInit) {
        super(gui, gameInit);
        this.disableClickables = true;
        this.itemsToDestroy = [];
    }

    createExitButton() {

    }

    createGame(engine) {
        super.createGame(engine);

        function mult(o) {
            o.x *= localScale;
            o.y *= localScale;
            return o;
        }

        const boxScale = 1.5;
        this.dropPoint = ({x: this.centerX, y: this.centerY + 400 * GlobalScale});
        this.puzzlePoint = ({x: this.centerX, y: this.centerY - 100 * GlobalScale});
        this.puzzleUpPoint = ({x: this.centerX, y: this.centerY - 300 * GlobalScale});
        this.collectedPoint = ({x: this.centerX, y: this.centerY});
        this.collectedPoint2 = mult({x: this.centerX, y: this.centerY});
        this.startPoxY = -RealScreenHeight * 0.1;

        this.giftBox = this.engine.add.sprite(0, 0, "GiftBox").setScale(boxScale).setOrigin(0.5, 1);
        this.group.add(this.giftBox);

        this.giftBoxSuper = this.engine.add.sprite(0, 0, "GiftBoxSuper").setScale(boxScale).setOrigin(0.5, 1);
        this.group.add(this.giftBoxSuper);

        this.giftBoxOpen = this.engine.add.sprite(0, 0, "GiftBoxOpen").setScale(boxScale).setPosition(this.dropPoint.x - 60 * GlobalScale, this.dropPoint.y - 40 * GlobalScale).setOrigin(0.5, 1);
        this.group.add(this.giftBoxOpen);

        this.giftBoxSuperOpen = this.engine.add.sprite(0, 0, "GiftBoxSuperOpen").setScale(boxScale * 1.2).setPosition(this.dropPoint.x - 70 * GlobalScale, this.dropPoint.y + 10 * GlobalScale).setOrigin(0.5, 1);
        this.group.add(this.giftBoxSuperOpen);

        this.header = this.engine.add.text(this.centerX, 300 * GlobalScale, "", DefaultFont).setOrigin(0.5);
        this.group.add(this.header);
        this.bottomLabel = this.engine.add.text(this.centerX, RealScreenHeight - 500 * GlobalScale, "", DefaultFont).setOrigin(0.5);
        this.group.add(this.bottomLabel);

        this.createActionButton(this.engine, this._tryToCloseWindow.bind(this), RealScreenHeight - 250 * GlobalScale, true, 1, this.centerX);
    }

    _tryToCloseWindow() {
        this._destroyStuff();
        if (!gameInit.progress.openSuperChest())
            this.closeWindow();
    }

    localize() {
        this.buttonLabel.setText(LocalizationManager.getLocalizization("ButtonOk"));
    }

    createMyExitButton()
    {
        //Do nothing
    }

    _destroyStuff() {
        if (this.itemsToDestroy && this.itemsToDestroy.length) {
            for (let i in this.itemsToDestroy)
                this.itemsToDestroy[i].destroy();
            this.itemsToDestroy = [];
        }
    }

    setWindowVisible(visible) {
        super.setWindowVisible(visible);
        if (!visible)
            this._destroyStuff();
    }

    dropPuzzle(beforeInfo, imageId, drop, dublicate, normal) {
        const imageInfo = beforeInfo;
        const newImageInfo = gameInit.progress.getPuzzleInfoById(imageId);
        const size = GameData.getPuzzleSizePerLevel(imageInfo.level);
        const engine = this.engine;

        const i = Math.trunc(drop / size);
        const j = drop % size;

        this.header.setVisible(false);
        this.bottomLabel.setVisible(false);
        this.actionButton.setVisible(false);
        this.buttonLabel.setVisible(false);

        this.giftBox.setVisible(normal);
        this.giftBoxSuper.setVisible(!normal);
        this.giftBoxOpen.setVisible(false);
        this.giftBoxSuperOpen.setVisible(false);

        const box = normal ? this.giftBox : this.giftBoxSuper;
        const openedBox = normal ? this.giftBoxOpen : this.giftBoxSuperOpen;

        box.setPosition(this.dropPoint.x, this.startPoxY);

        // console.log("imageId " + imageId + " > " + drop);
        //Image
        const ImageName = GameData.getPuzzleIcon(imageId + 1);

        LoadFile(engine, ImageName, VisualData.getPuzzleFolder() + ImageName + ".png", () => {

            animManager.moveToPointExtra(box, this.dropPoint, 0.05, 0.3, ()=>{
                audioManager.playChestSound(0);
                animManager.changeShape(box, 0.4, 0.5, 1, ()=>{
                    animManager.rotationAnimation(box, 10, 0.7, 3, ()=>{
                        box.setVisible(false);
                        openedBox.setVisible(true);

                        const scale = 0.5;
                        const puzzleCont = engine.add.container(this.puzzlePoint.x, this.puzzlePoint.y);
                        const puzzleImg = engine.add.sprite(0, 0, ImageName);
                        const step = puzzleImg.width / size;
                        puzzleImg.setCrop(i*step, j*step, step, step).setScale(scale * size).setOrigin((i + 0.5) / size, (j + 0.5) / size);

                        let realLevel = newImageInfo.level;
                        if (newImageInfo.pieces & (1 << (drop)))
                            realLevel++;

                        const backImg = engine.add.sprite(0, 0, GameData.getPuzzleBackNamePerLevel(realLevel));
                        backImg.setScale(puzzleImg.width / backImg.width * scale);

                        puzzleCont.add(backImg);
                        puzzleCont.add(puzzleImg);
                        puzzleCont.setDepth(WinDefaultDepth + 100);
                        puzzleCont.angle = 180;

                        //Labels
                        if (dublicate) {
                            this.header.text = LocalizationManager.getLocalizization("GetPuzzlePartDupTitle");
                            this.bottomLabel.text = LocalizationManager.getLocalizization("GetPuzzlePartDupText").format(GameData.getGemsForDublicate());
                        } else {
                            this.header.text = LocalizationManager.getLocalizization("GetPuzzlePartText");
                            this.bottomLabel.text = LocalizationManager.getLocalizization("GetPuzzlePartTitle");
                        }
                        this.header.setVisible(true);
                        this.bottomLabel.setVisible(true);
                        animManager.applyWinOpenAnimation(this.header);
                        animManager.applyWinOpenAnimation(this.bottomLabel);

                        //Labels...

                        audioManager.playChestSound(1);
                        const upDuration = 0.3;
                        animManager.moveToPointExtra(puzzleCont, this.puzzleUpPoint, 0.1, upDuration);
                        animManager.scaleAnimation(puzzleCont, 2, upDuration);
                        animManager.rotationAnimation(puzzleCont, 180, upDuration, 0.25, ()=>{
                            animManager.animationChangeAlpha(openedBox, 0, 0.3, ()=> {
                                openedBox.setVisible(false);
                                openedBox.alpha = 1;

                                const collectedPuzzle = winPuzzleInstance.getCell({item: imageInfo, index: imageId}, true);
                                this.itemsToDestroy.push(collectedPuzzle);
                                collectedPuzzle.setPosition(this.collectedPoint2.x * localScale, RealScreenHeight * 1.1 * localScale);
                                const moveUpDuration = 0.5;
                                animManager.moveToPointExtra(collectedPuzzle, this.collectedPoint2, 0.05, moveUpDuration);

                                animManager.waitAnimation(0.7 * moveUpDuration, ()=> {
                                    const downDuration = 0.5;
                                    animManager.scaleAnimation(puzzleCont, 1, downDuration);
                                    animManager.rotationAnimation(puzzleCont, 90, downDuration, 0.25);
                                    puzzleCont.setPosition(this.collectedPoint.x, this.collectedPoint.y);
                                    const fallAnim = animManager.moveToPointExtra(puzzleCont, this.puzzleUpPoint, 0.5, downDuration, () => {
                                        audioManager.playChestSound(2);
                                        puzzleCont.destroy(true);
                                        if (!dublicate) {
                                            const prevBack = collectedPuzzle.images[i * size + j];
                                            prevBack.destroy(true);

                                            const puzzleSize = size;
                                            const backSize = winPuzzleInstance.winInfo.partSize * GlobalScale;
                                            const partSize = backSize / puzzleSize;

                                            const x = collectedPuzzle.x / localScale + (i - puzzleSize * 0.5) * partSize;
                                            const y = collectedPuzzle.y / localScale + (j - puzzleSize * 0.5) * partSize;

                                            const newBack = engine.add.sprite(x, y, GameData.getPuzzleBackNamePerLevel(realLevel))
                                                .setOrigin(0, 0)
                                                .setDepth(WinDefaultDepth + 100 - 10);

                                            newBack.setScale(partSize / newBack.width / imagesDeltaScale);

                                            collectedPuzzle.add(newBack);
                                        }

                                        this.actionButton.setVisible(true);
                                        this.buttonLabel.setVisible(true);
                                        animManager.applyButtonShowAnimation(this.actionButton);
                                    });
                                    fallAnim.setInverse();
                                });
                            });
                        });
                    });
                })
            });
        });
    }
}

let winPuzzleInstance;

class WinPuzzle extends WinWithBrownBack {
    constructor(gui, gameInit) {
        super(gui, gameInit);

        this.disableClickables = true;
        this.selectedTab = 0;
        winPuzzleInstance = this;
        this.allCells = [];
    }

    localize() {
        super.localize();

        this.header.text = LocalizationManager.getLocalizization("PuzzlesWindowTitle");

        for (let i = 0;i < 5;i++)
            this.puzzleNames[i].text = LocalizationManager.getLocalizization(GameData.getPuzzlesTextPerLevel(i+1));
    }

    addTab(icon, x, y) {
        const tab = new ToogleButton(this.engine, this.group, icon, x, y, () => this.tabWasSwitched(tab), this.winInfo);

        this.tabs.push(tab);
    }

    _prepareWindow() {
        if (this.prepared)
            return;

        this.prepared = true;

        this.createStore(this.engine);
    }

    createGame(engine) {
        super.createGame(engine);

        const yPos = this.centerY + this.winInfo.togglesY * GlobalScale;

        this.header = engine.add.text(this.centerX - this.winInfo.togglesX * GlobalScale, yPos - 30 * GlobalScale, null, DefaultFont)
            .setOrigin(0, 1)
            .setDepth(WinDefaultDepth + 1);
        this.group.add(this.header);

        //Tabs
        const distance = this.winInfo.togglesDistance * GlobalScale;
        let xPos = this.centerX + this.winInfo.togglesX * GlobalScale - distance;

        this.tabs = [];
        this.addTab('PuzzleTabIcon', xPos, yPos);
        xPos += distance;
        this.addTab('BoxTabIcon', xPos, yPos);

        this.configs = [];
        this.configs[0] = VisualData.PUZZLE_SCROLL_CONFIG;
        this.configs[0].x = this.centerX + this.configs[0].offsetX * GlobalScale;
        this.configs[0].y = this.centerY + this.configs[0].offsetY * GlobalScale;

        this.groups = [];
        this.groups.push(engine.add.group());
        this.groups.push(engine.add.group());

        this.createSummary(engine);
        // this.createStore(engine);

        this.updateNumbers();

        for (let i in this.groups)
            SetGroupVisible(this.groups[i], false);
        SetGroupVisible(this.group, false);
    }

    createStore(engine) {
        this.scroll = [];
        this.scroll.push(new GUIScroll(engine, this.configs[0], this.getCell.bind(this), this.getItems.bind(this)));
        this.scroll[0].setVisible(false);

        this.configs[1] = VisualData.PUZZLE_SCROLL_CONFIG_STORE;
        this.configs[1].x = this.centerX + this.configs[1].offsetX * GlobalScale;
        this.configs[1].y = this.centerY + this.configs[1].offsetY * GlobalScale;
        this.scroll.push(new GUIScroll(engine, this.configs[1], this.getStoreCell.bind(this), this.getStoreItems.bind(this)));
        this.scroll[1].setVisible(false);
    }

    updateChestsNumber()
    {
        const group = this.allCells[0];

        if (!group || !group.active)
            return;

        const chestsCount = gameInit.progress.getChestsCount();

        const showButton = chestsCount > 0 && this.selectedTab === 1 && this.visible;

        if (showButton) {
            if (!this.myChestsBack || !this.myChestsBack.active) {
                const config = this.configs[this.selectedTab];
                const depth = WinDefaultDepth + 200;
                const center = false;
                const cellCenterX = center ? 0 : config.cellWidth / 2 * GlobalScale;
                const cellCenterY = center ? 0 : config.cellHeight / 2 * GlobalScale;

                const offsetX = 80 * GlobalScale;
                const offsetY = -180 * GlobalScale;

                const px = group.x / localScale + cellCenterX + offsetX;
                const py = group.y / localScale + cellCenterY + offsetY;
                this.myChestsBack = this.engine.add.sprite(px, py, "BoxCounter").setDepth(depth);
                this.myChestsNumber = this.engine.add.textOld(px, py, "H", DefaultFont).setDepth(depth + 1).setOrigin(0.5);

                group.add(this.myChestsBack);
                group.add(this.myChestsNumber);
            }
        } else {
            if (this.myChestsBack && this.myChestsBack.active) {
                this.myChestsBack.destroy();
                this.myChestsNumber.destroy();
                this.myChestsBack = null;
                this.myChestsNumber = null;
            }
        }

        if (chestsCount > 0 && this.selectedTab === 1) {
            if (this.myChestsNumber && this.myChestsNumber.active)
                this.myChestsNumber.text = chestsCount;
            setStoreCellLocked(this.availableBoxes, false);
            if (this.visible)
                this.scroll[1].fakeMove();
        } else {
            setStoreCellLocked(this.availableBoxes, true);
        }
    }

    createSummary(engine) {
        const group = this.groups[0];
        const distanceX = 800 * GlobalScale;
        const distanceY = 120 * GlobalScale;

        const cx = this.centerX + distanceX / 4;
        const cy = RealScreenHeight - distanceY * 3 - 50 * GlobalScale;

        this.puzzleNumbers = [];
        this.puzzleNames = [];

        for (let i = 1; i <= 5;i++) {
            const x = cx - (i % 2) * distanceX;
            const y = cy + Math.trunc(((i - 1) / 2)) * distanceY;
            group.create(x, y, GameData.getPuzzlesIconNamePerLevel(i))
                .setOrigin(0, 0)
                .setDepth(WinDefaultDepth);

            const number = engine.add.text(x + 130 * GlobalScale, y + 10 * GlobalScale, null, DefaultFontSmall).setDepth(WinDefaultDepth);
            const name = engine.add.text(x + 130 * GlobalScale, y + 60 * GlobalScale, null, DefaultFontSmall).setDepth(WinDefaultDepth);
            this.puzzleNumbers.push(number);
            this.puzzleNames.push(name);
            group.add(number);
            group.add(name);
        }
    }

    tabWasSwitched(tab) {
        for (let i = 0;i < this.tabs.length;i++) {
            if (this.tabs[i] === tab) {
                this.tabs[i].setSelected(true);
                this.selectedTab = i;

                SetGroupVisible(this.groups[i], true);
            } else {
                this.tabs[i].setSelected(false);
                SetGroupVisible(this.groups[i], false);
            }
        }

        this.scroll[this.selectedTab].setVisible(true);
        this.scroll[1 - this.selectedTab].setVisible(false);
        if (this.selectedTab === 0) {
            this.scroll[0].table.setItems(this.getItems());
        } else {
            this.scroll[1].table.setItems(this.getStoreItems());
            this.updateChestsNumber();
        }
    }

    updateNumbers() {
        const puzzles = this.getItems();
        const counts = [];
        for (let i = 0;i < 5;i++)
            counts.push(0);

        for (let i = 0;i < puzzles.length;i++){
            if (puzzles[i].level > 0)
                counts[puzzles[i].level - 1]++;
        }

        const max = "/" + puzzles.length;
        for (let i = 0;i < 5;i++)
            this.puzzleNumbers[i].text = counts[i] + max;
    }

    _removeTimer() {
        if (this.boxShakeTimer) {
            clearInterval(this.boxShakeTimer);
            this.boxShakeTimer = null;
        }
    }

    setWindowVisible(visible) {
        super.setWindowVisible(visible);
        this._removeTimer();
        if (visible) {
            this._prepareWindow();
            this.tabWasSwitched(this.tabs[this.selectedTab]);
            this.updateNumbers();
            this.updateChestsNumber();
            this.boxShakeTimer = setInterval(() => {
                if (gameInit.progress.getChestsCount() > 0 && this.availableBoxes && this.availableBoxes.active)
                    animManager.shakeBox(this.availableBoxes.unny_sprite, 7, 20 * GlobalScale, 0.6, 2);
            }, 2000);
        } else {
            for (let i in this.scroll)
                this.scroll[i].table.setVisible(false);

            for (let i in this.groups)
                SetGroupVisible(this.groups[i], visible);
        }

        hudResources.setVisible(visible);
    }

    _checkPriceInGold(group, price) {
        setStoreCellLocked(group, !gameInit.progress.isResourcesEnough(price));
    }

    _checkPrice(group, data) {
        setStoreCellLocked(group, !gameInit.progress.isResourcesWithTypeEnough(data));
    }

    getStoreCell(cell, center) {
        const progress = gameInit.progress;
        const engine = this.engine;

        const config = this.configs[this.selectedTab];
        const cellCenterX = center ? 0 : config.cellWidth / 2 * GlobalScale;
        const cellCenterY = center ? 0 : config.cellHeight / 2 * GlobalScale;
        const boxData = GameData.getBoxData();

        const offsetX = 80 * GlobalScale;
        const offsetY = -180 * GlobalScale;

        let group = engine.rexUI.add.container(0,0);
        const depth = WinDefaultDepth + 200;
        const chestImage = "GiftBox";
        const chestImagePath = VisualData.getStoreFolder() + "GiftBox.png";

        this.allCells[cell.index] = group;

        switch (cell.index) {
            case 0:
                this.availableBoxes = group;

                createStoreCell(engine, group, cellCenterX, cellCenterY,
                    LocalizationManager.getLocalizization("BoxOpenTitle"),
                    "OpenedBox",
                    VisualData.getPuzzleUIFolder() + "OpenedBox.png",
                    LocalizationManager.getLocalizization("BoxOpenDesc"),
                    null,
                    LocalizationManager.getLocalizization("BoxOpenButtonText"),
                    () => {
                        if (progress.getChestsCount() > 0) {
                            progress.openChest();
                            this.updateChestsNumber();
                        }
                    }
                );

                this.updateChestsNumber();
                break;
            case 1:
                let price = progress.getPriceForGoldBox();
                const boxForGold = createStoreCell(engine, group, cellCenterX, cellCenterY,
                    LocalizationManager.getLocalizization("BoxGoldTitle"),
                    chestImage,
                    chestImagePath,
                    LocalizationManager.getLocalizization("BoxGoldDesc"),
                    GameData.getIconByType(boxData[0].priceType),
                    LocalizationManager.getLocalizedNumber(price),
                    () => {
                        price = progress.tryToPurchaseBoxForGold(boxData[0].count);
                        if (price) {
                            this.updateChestsNumber();
                            boxForGold.text = LocalizationManager.getLocalizedNumber(price);
                            this._checkPriceInGold(group, price);
                        }
                    });

                this._checkPriceInGold(group, price);

                group.add(engine.add.sprite(cellCenterX + offsetX, cellCenterY + offsetY, "BoxCounter").setDepth(depth));
                group.add(engine.add.textOld(cellCenterX + offsetX, cellCenterY + offsetY, "x1", DefaultFont).setDepth(depth).setOrigin(0.5));
                break;
            case 2:
                createStoreCell(engine, group, cellCenterX, cellCenterY,
                    LocalizationManager.getLocalizization("BoxGemTitle"),
                    chestImage,
                    chestImagePath,
                    LocalizationManager.getLocalizization("BoxGemDesc"),
                    GameData.getIconByType(boxData[1].priceType),
                    boxData[1].priceGems,
                    () => {
                        const gemsPrice = boxData[1].bigInt;
                        if (progress.isGemsEnough(gemsPrice)) {
                            if (!progress.areAllPuzzlesCollected()) {
                                progress.gemsSpent(gemsPrice);
                                progress.purchaseBox(BoxType.GemsBox, boxData[1].count);
                                this.updateChestsNumber();
                                // this.checkGemsPrice();
                            }
                        } else
                            guiManager.openNewWindow(WindowType.WinNotEnoughGems);
                    });

                // this.checkGemsPrice();
                group.add(engine.add.sprite(cellCenterX + offsetX, cellCenterY + offsetY, "BoxCounter").setDepth(depth));
                group.add(engine.add.textOld(cellCenterX + offsetX, cellCenterY + offsetY, "x3", DefaultFont).setDepth(depth).setOrigin(0.5));
                break;
            case 3:
                createStoreCell(engine, group, cellCenterX, cellCenterY,
                    LocalizationManager.getLocalizization("BoxGemSuperTitle"),
                    "GiftBoxSuper",
                    VisualData.getStoreFolder() + "GiftBoxSuper.png",
                    LocalizationManager.getLocalizization("BoxGemSuperDesc"),
                    GameData.getIconByType(boxData[2].priceType),
                    boxData[2].priceGems,
                    () => {
                        const gemsPrice = boxData[2].bigInt;
                        if (progress.isGemsEnough(gemsPrice)) {
                            if (!progress.areAllPuzzlesCollected()) {
                                progress.gemsSpent(gemsPrice);
                                progress.giveChests(BoxType.SuperBox, boxData[2].count);
                                // this.checkGemsPrice();
                            }
                        } else
                            guiManager.openNewWindow(WindowType.WinNotEnoughGems);
                    });

                // this.checkGemsPrice();
                break;
        }

        return group.setOrigin(0).setDepth(depth);
    }

    // checkGemsPrice() {
    //     const boxData = GameData.getBoxData();
    //
    //     if (this.allCells[2])
    //         this._checkPrice(this.allCells[2], boxData[1]);
    //     if (this.allCells[3])
    //         this._checkPrice(this.allCells[3], boxData[2]);
    // }

    getCell(cell, center) {
        const config = this.configs[0];

        const puzzle = cell.item;
        const engine = this.engine;
        // const item = cell.item;
        //
        // if (!item) {
        //     return engine.rexUI.add.label();
        // }
        const cellCenterX = center ? 0 : config.cellWidth / 2 * GlobalScale;
        const cellCenterY = center ? 0 : config.cellHeight / 2 * GlobalScale;

        let group = engine.rexUI.add.container(0,0);
        group.images = [];

        const depth = WinDefaultDepth + 100;

        //Image
        const ImageName = GameData.getPuzzleIcon(cell.index + 1);

        let loading = true;
        if (ImageName) {
            LoadFile(engine, ImageName, VisualData.getPuzzleFolder() + ImageName + ".png", () => {
                if (group && group.active) {
                    group.add(
                        engine.add.sprite(group.x / localScale + cellCenterX, group.y / localScale + cellCenterY, ImageName)
                            .setDepth(depth - 7));
                    if (!loading)
                        this.scroll[0].fakeMove();
                }
            });
        }
        loading = false;
        //

        //Background
        const puzzleSize = GameData.getPuzzleSizePerLevel(puzzle.level);
        const backSize = this.winInfo.partSize * GlobalScale;
        const partSize2 = this.winInfo.frontPartSize * GlobalScale / puzzleSize;
        const partSize = backSize / puzzleSize;

        const backDepth = depth - 10;
        let index = 0;
        for (let i = 0;i < puzzleSize;i++) {
            for (let j = 0;j < puzzleSize;j++) {
                let realLevel = puzzle.level;
                if ((puzzle.pieces & (1 << (index++))) !== 0)
                    realLevel++;

                let backImg;
                if (realLevel === 0) {
                    let puzzleImg = null;
                    switch (index) {
                        case 1: puzzleImg = 'PuzzleItemLockUL';
                            break;
                        case 2: puzzleImg = 'PuzzleItemLockDL';
                            break;
                        case 3: puzzleImg = 'PuzzleItemLockUR';
                            break;
                        case 4: puzzleImg = 'PuzzleItemLockDR';
                            break;
                    }

                    if (this.winInfo.centerBlock) {
                        backImg = engine.add.sprite(cellCenterX, cellCenterY, puzzleImg)
                            .setDepth(depth - 2);
                    } else {
                        const x = cellCenterX + (i - puzzleSize * 0.5) * partSize2;
                        const y = cellCenterY + (j - puzzleSize * 0.5) * partSize2;
                        backImg = engine.add.sprite(x, y, puzzleImg).setDepth(depth - 2).setOrigin(0, 0);
                    }
                } else {
                    const x = cellCenterX + (i - puzzleSize * 0.5) * partSize;
                    const y = cellCenterY + (j - puzzleSize * 0.5) * partSize;

                    backImg = engine.add.sprite(x, y, GameData.getPuzzleBackNamePerLevel(realLevel))
                        .setOrigin(0, 0)
                        .setDepth(backDepth);

                    backImg.setScale(partSize / backImg.width / imagesDeltaScale);
                }

                group.add(backImg);
                group.images.push(backImg);
            }
        }

        const frame = engine.add.sprite(cellCenterX, cellCenterY, "PuzzleItemFrame").setDepth(depth - 5);
        group.add(frame);

        if (puzzle.level > 0 && puzzle.level < 5 && this.winInfo.showGrid) {
            const bonusBack = engine.add.sprite(cellCenterX, cellCenterY, "Grid" + puzzleSize)
                .setDepth(depth - 6);
            group.add(bonusBack);
        }

        if (puzzle.level >= 2) {
            const bonusBack = engine.add.sprite(cellCenterX + this.winInfo.BonusOffsetX * GlobalScale, cellCenterY - 140 * GlobalScale, "PuzzleBonusBack")
                .setOrigin(1, 0.5)
                .setDepth(depth);
            group.add(bonusBack);

            const resources = engine.add.sprite(cellCenterX - 55 * GlobalScale, cellCenterY - 140 * GlobalScale, "PriceIcon")
                .setScale(0.7)
                .setDepth(depth);
            group.add(resources);

            const bonusText = engine.add.textOld(cellCenterX - 10 * GlobalScale, cellCenterY - 140 * GlobalScale, "+" + (GameData.getPuzzleResourceBonusPerLevel(puzzle.level) - 1) * 100 + "%", DefaultFontSmall)
                .setOrigin(0, 0.5)
                .setDepth(depth);
            group.add(bonusText);
        }

        return group
            .setOrigin(0);
            // .setDepth(depth);
    }

    getItems() {
        return gameInit.progress.getPuzzleInfo();
    }

    getStoreItems() {
        return [0, 1, 2, 3];
    }

    getSelectedTab() {
        return this.selectedTab;
    }

    getBoxesTab() {
        return this.tabs[1].button;
    }

    getPuzzleOpenBox() {
        return this.allCells[0].unny_btn;
    }
}

const GEMS_VIDEO_REWARD_ID = 'gemsForVideoAd';

class WinStore extends WinWithLargeBack {

    constructor(gui, gameInit){
        super(gui, gameInit);
        this.selectedTab = 0;
        this.allCells = {};
        this.disableClickables = true;
    }

    createSettingsButton() {
        let x, y;
        // if (VisualData.IsVertical()) {
        //     x = 150 * GlobalScale;
        //     y = RealScreenHeight - 150 * GlobalScale;
        // } else {
        x = RealScreenWidth - 180 * GlobalScale;
        y = RealScreenHeight - 150 * GlobalScale;
        // }
        this.settings = new BasicButton(null, {
            'scene': this.engine,
            'key': 'SettingsBtn',
            'x': x,
            'y': y,
        }, ()=>{
            this.gui.openNewWindow(WindowType.WinSettings);
        }).setDepth(WinDefaultDepth);
        this.addButton(this.settings);
        this.settings.setVisible(false);
    }

    createGame(engine) {
        super.createGame(engine);

        this.engine = engine;

        const yPos = this.winInfo.togglesY * GlobalScale;
        let xPos = this.winInfo.togglesX * GlobalScale;
        const distance = this.winInfo.togglesDistance * GlobalScale;

        this.tabs = [];
        this.addTab('TabIcon_Actual', xPos, yPos);
        xPos += distance;
        this.addTab('PriceIcon', xPos, yPos);
        xPos += distance;
        this.addTab('PriceSeeds', xPos, yPos);
        xPos += distance;
        this.addTab('PriceGems', xPos, yPos);

        xPos = -this.winInfo.togglesX * GlobalScale;
        this.addTab('TabIcon_Money', xPos, yPos);

        this.config = VisualData.STORE_SCROLL_CONFIG;
        this.config.x = this.centerX + this.config.offsetX * GlobalScale;
        this.config.y = this.centerY + this.config.offsetY * GlobalScale;

        this.slots = [];
        this.scroll = new GUIScroll(engine, this.config, this.getCell.bind(this), this.getItems.bind(this));
        this.scroll.setVisible(false);
        // this.group.add(this.scroll.table);

        SetGroupVisible(this.group, false);

        this.createSettingsButton();
    }

    getFirstUpgradeSlot(){
        return this.allCells[VisualData.getAutoClickSlot1Id()].unny_btn;
    }

    addTab(icon, x, y) {
        const tab = new ToogleButton(this.engine, this.group, icon, x, y, () => this.tabWasSwitched(tab), this.winInfo);

        this.tabs.push(tab);
    }

    _getOneItemFromList(list) {
        for (let i = 0; i < list.length; i++) {
            if (this.gameInit.progress.canPurchaseUpgrade(list[i]))
                return list[i];
        }

        for (let i = 0; i < list.length; i++) {
            if (!this.gameInit.progress.isUpgradePurchased(list[i].id))
                return list[i];
        }
        return null;
    }

    _upgradeSelectedTabItems() {
        this.slots = [];
        let list = null;
        switch (this.selectedTab) {
            case 0: {
                let item = null;
                item = this._getOneItemFromList(GameData.getMarketListGold());
                if (item)
                    this.slots.push(item);

                item = this._getOneItemFromList(GameData.getMarketListSeeds());
                if (item)
                    this.slots.push(item);

                item = this._getOneItemFromList(GameData.getMarketListGems());
                if (item)
                    this.slots.push(item);

                this.scroll.table.setItems(this.slots);
                return;
            }
            case 1: list = GameData.getMarketListGold();
                break;
            case 2: list = GameData.getMarketListSeeds();
                break;
            case 3: list = GameData.getMarketListGems();
                break;
            case 4: list = GameData.getInAppData();
                break;
        }

        // console.info(list);
        if (list) {
            for (let i = 0; i < list.length; i++) {
                if (this.gameInit.progress.canPurchaseUpgrade(list[i]) || WinStore.isUnlimitedPurchaseIndex(this.selectedTab)) {
                    this.slots.push(list[i]);

                    if (this.slots.length >= this.config.maxSlots)
                        break;
                }
            }

            this.scroll.table.setItems(this.slots);
        }
    }

    static isUnlimitedPurchaseIndex(index) {
        return index > 3;
    }

    tabWasSwitched(tab) {
        for (let i = 0;i < this.tabs.length;i++) {
            if (this.tabs[i] === tab) {
                this.tabs[i].setSelected(true);
                this.selectedTab = i;

                this._upgradeSelectedTabItems();
            } else {
                this.tabs[i].setSelected(false);
            }
        }

        this.scroll.table.setT(0);
    }

    tryToPurchaseUpgrade(id) {
        //TODO check resources
        switch (id) {
            case GEMS_VIDEO_REWARD_ID: {
                const progress = gameInit.progress;
                if (progress.getAdsWatchedToday() < AdsAvailableToWatchADay) {
                    PlayRewardedAd(() => {
                        gameAnalytics.sendEvent("Ads_For_Gems");
                        progress.adWasWatched();
                        const data = GameData.getMarketPurchaseById(id);
                        progress.gotGems(data.gems);
                        this._upgradeSelectedTabItems();
                    });
                }
                return;
            }
        }

        if (this.gameInit.progress.tryToPurchaseUpgrade(id)) {
            if (!WinStore.isUnlimitedPurchaseIndex(this.selectedTab))
                this._upgradeSelectedTabItems();
        } else {
            this.closeWindow();
            guiManager.openNewWindow(WindowType.WinNotEnoughGems);
        }
    }

    _getStoreCellButtonCaption(item) {
        if (item.price)
            return LocalizationManager.getLocalizedNumber(gameInit.progress.getPurchasePrice(item))

        const price = socialManager.getPriceLabel(item.id);
        if (price)
            return price;

        switch (item.id) {
            case GEMS_VIDEO_REWARD_ID: {
                return gameInit.progress.getAdsWatchedToday() + "/" + AdsAvailableToWatchADay;
            }
        }

        return "Unknown";
    }

    getCell(cell) {
        const engine = this.engine;

        const item = cell.item;
        const group = engine.rexUI.add.container(0, 0);

        if (!item)
            return group;

        const config = this.config;
        const cellCenterX = config.cellWidth / 2 * GlobalScale;
        const cellCenterY= config.cellHeight / 2 * GlobalScale;

        const imageName = WinStore.getImageName(item);

        createStoreCell(engine, group, cellCenterX, cellCenterY,
            LocalizationManager.getStoreItemTitle(item),
            imageName,
            VisualData.getStoreFolder() + imageName + ".png",
            LocalizationManager.getStoreItemDescription(item),
            GameData.getIconByType(item.priceType),
            this._getStoreCellButtonCaption(item),
            () => this.tryToPurchaseUpgrade(item.id),
            true, this.scroll, item.id === GEMS_VIDEO_REWARD_ID && gameInit.progress.getAdsWatchedToday() >= AdsAvailableToWatchADay);

        group.item = item;
        this.allCells[item.id] = group;
        this._checkPriceForButton(group);
        if (group.priceText2) {
            this.timerText = group.priceText2;
            this.updateTimer();
        }
        return group.setOrigin(0).setDepth(WinDefaultDepth + 100);
    }

    _checkPriceForButton(group) {
        let locked;
        switch (group.item.id) {
            case GEMS_VIDEO_REWARD_ID: {
                locked = gameInit.progress.getAdsWatchedToday() >= AdsAvailableToWatchADay;
                break;
            }
            default:
                locked = group.item.priceType !== "Gems" && !gameInit.progress.isResourcesWithTypeEnoughForPurchase(group.item);
                break;
        }
        setStoreCellLocked(group, locked);
    }

    static getImageName(item) {
        if (item.title) {
            return item.title.replace("Name","");
        }
        switch (item.upgradeType) {
            case "MultiProfit": {
                if (item.priceType === "Gems")
                    return "MultiProfitGems";
                return item.slotNumber >= 0 ? "MultiProfitOneSlot" : "MultiProfitAll";
            }
            case "TimeTravel": {
                switch (item.parameter) {
                    case 3600 * 4: return "TimeTravel4h";
                    case 3600 * 24: return "TimeTravel24h";
                    case 3600 * 24 * 7: return "TimeTravel7d";
                }
                break;
            }
            default:
                return item.upgradeType;
        }
        return null;
    }

    getItems() {
        return this.slots;
    }

    setGemsPage() {
        this.forceGems = true;
    }

    removeTimer() {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
    }

    updateTimer() {
        if (this.timerText && this.timerText.active) {
            this.timerText.setText(timeToStringClock(Progress.getTimeTillTheNextDay()));
        }
    }

    setWindowVisible(visible) {
        super.setWindowVisible(visible);
        // GlobalInputLocked = visible;
        this.scroll.setVisible(visible);
        this.removeTimer();
        if (visible) {
            if (this.forceGems) {
                this.selectedTab = 4;
                this.forceGems = false;
            } else
                this.selectedTab = 0;
            this.tabWasSwitched(this.tabs[this.selectedTab]);

            if (gameInit.progress.canCheckStore()) {
                socialManager.checkPurchases((itemId) => {
                    gameInit.progress.publicConfirmedPayment(itemId);
                });
            }

            this.timer = setInterval(()=>{
                this.updateTimer();
            }, 1000);
        }

        this.settings.setVisible(visible);
        hudResources.setVisible(visible);
    }
}

class WinFortuneWheel extends WinWithExit {
    constructor(gui, gameInit){
        super(gui, gameInit);

        this.lightAnimation = 1;
        this.lightIndex = 0;
        this.lightTime = 0;
        this.timeToUpdate = 0;
    }

    createGame(engine) {
        super.createGame(engine);
        this._createBlackBackground();

        this.exitButton.ignoreTutorial = true;
    }

    localize() {
        super.localize();

        if (this.header)
            this.header.setText(LocalizationManager.getLocalizization("FortuneWheelWindowTitle"));

        if (this.buttonLabel)
            this.buttonLabel.setText(LocalizationManager.getLocalizization("FortuneWheelWindowGemsButton").format(GEMS_PRICE_FOR_WHEEL_SPIN));

        if (this.buttonLabelFree)
            this.buttonLabelFree.setText(LocalizationManager.getLocalizization("FortuneWheelWindowAdButton"));

        this._updateSpinsTimer();
        this._updateSpinsCount();
    }

    _updateButtonLocalization() {
        if (!this.visible)
            return;

        const spins = gameInit.progress.getFreeSpinsCount() > 0;

        this.actionButtonFree.setVisible(spins);
        this.buttonLabelFree.setVisible(spins);
        this.actionButton.setVisible(!spins);
        this.buttonLabel.setVisible(!spins);
        this.buttonGems.setVisible(!spins);
    }

    _updateSpinsCount() {
        if (this.spinsCounter) {
            const spins = gameInit.progress.getFreeSpinsCount();
            this.spinsCounter.setText(LocalizationManager.getLocalizization("FortuneWheelWindowSpinCountText").format(spins, Progress.getMaxFreeSpins()));
            if (this.visible)
                this.spinsTimer.setVisible(spins < Progress.getMaxFreeSpins());

            this._updateButtonLocalization();
        }
    }

    _updateSpinsTimer() {
        if (this.spinsTimer) {
            const time = gameInit.progress.getNextSpinTime() / 1000;
            if (time <= 0) {
                if (gameInit.progress.checkForNewSpin())
                    this._updateSpinsCount();
            } else
                this.spinsTimer.setText(LocalizationManager.getLocalizization("FortuneWheelWindowCooldownText").format(timeToStringClock(time)));
        }
    }

    _startArrowAnimation() {
        if (this.arrowImage && !this.arrowAnimation) {
            this.arrowImage.setPositionY(this.arrosPos.y);
            this.arrowAnimation = animManager.moveSinInfinite(this.arrowImage, 1, 0, 50 * GlobalScale);
        }
    }

    setWindowVisible(visible) {
        super.setWindowVisible(visible);

        if (visible) {
            if (!this.updateListener) {
                this.updateListener = this.updateWindow.bind(this);
                gameInit.update.addListener(this.updateListener);
            }

            this._startArrowAnimation();
        } else {
            if (this.updateListener) {
                gameInit.update.removeListener(this.updateListener);
                this.updateListener = null;
            }

            if (this.arrowAnimation) {
                this.arrowAnimation.stopAnimation();
                this.arrowAnimation = null;
            }
        }
        if (visible) {
            if (this.loaded) {
                //Refresh gold
                this._updateTexts();
            } else {
                this.loaded = true;
                const engine = this.engine;

                const x = this.winInfo.backX * GlobalScale;
                const y = this.winInfo.backY * GlobalScale;

                const btnY = y + this.winInfo.buttonY * GlobalScale;

                this.createActionButton(engine, this.spinWheel.bind(this), btnY, true, 1, 0, 1600 * GlobalScale, 'AdCam');
                this.actionButtonFree = this.actionButton;
                this.buttonLabelFree = this.buttonLabel;

                this.createActionButton(engine, this.spinWheel.bind(this), btnY, true, 1, 0, 1600 * GlobalScale);

                this.buttonGems = this.group.create(0, btnY, 'PriceGems').setOrigin(0, 0.5);

                const backImage = 'FortuneWheelBack';
                CreateImage(engine, x, y, backImage, (image) => {
                    this.group.add(image);
                    image.setDepth(WinDefaultDepth).setVisible(this.visible);

                    //this.rotation = engine.rexUI.add.label();
                    this.rotation = engine.add.container(x + this.winInfo.rotationX * GlobalScale, y + this.winInfo.rotationY * GlobalScale).setDepth(WinDefaultDepth + 10);
                    // this.rotation.x = x - 90;
                    // this.rotation.y = y - 110;
                    this.rotation.angle = this.winInfo.initRotation;
                    this.group.add(this.rotation);

                    const wheel = 'FortuneWheel';
                    LoadPreparedFile(engine, wheel, () => {
                        this.wheel = this.rotation.create(0, 0, wheel).setDepth(WinDefaultDepth + 100);
                        this.wheel.angle = 180;

                        const arrow = 'FortuneWheelArrow';
                        LoadPreparedFile(engine, arrow, () => {
                            this.arrosPos = {
                                x: x + this.winInfo.arrowX * GlobalScale,
                                y: y + this.winInfo.arrowY * GlobalScale
                            };
                            this.arrowImage = this.group.create(this.arrosPos.x, this.arrosPos.y, arrow).setDepth(WinDefaultDepth + 130);
                            this._startArrowAnimation();
                        });

                        this.header = engine.add.text(0, this.winInfo.headerY * GlobalScale - RealScreenHeight / 2, null, DefaultFontBig)
                            .setOrigin(0.5, 0.5)
                            .setDepth(WinDefaultDepth + 40);
                        this.group.add(this.header);

                        this.placePrizes();

                        this.createLights(x, y);

                        const devil = 'FortuneDevil';
                        LoadPreparedFile(engine, devil, () => {
                            this.group.create(x + this.winInfo.heroX * GlobalScale, y + this.winInfo.heroY * GlobalScale, devil).setDepth(WinDefaultDepth + 120);
                        });

                        this.spinsCounter = engine.add.text(0, btnY - 125 * GlobalScale, null, DefaultFont)
                            .setOrigin(0.5, 0.5)
                            .setDepth(WinDefaultDepth + 200);
                        this.group.add(this.spinsCounter);

                        this.spinsTimer = engine.add.text(0, btnY - 200 * GlobalScale, null, DefaultFont)
                            .setOrigin(0.5, 0.5)
                            .setDepth(WinDefaultDepth + 200);
                        this.group.add(this.spinsTimer);

                        this.localize();
                    });
                });
            }

            this._updateButtonLocalization();
            const timer = setInterval(()=>{
                let kill = !this.visible;
                if (this.buttonLabel.isVisible()) {
                    this.buttonGems.setPositionX((this.buttonLabel.x + this.buttonLabel.getWidth()));
                    kill = true;
                }
                if (kill)
                    clearInterval(timer);
            }, 210);
        }
    }

    getTutorialButton() {
        return this.actionButtonFree;
    }

    createLights(backX, backY) {
        this.lights = [];
        const list = this.winInfo.lights;
        const backSize = this.winInfo.backSize;
        for (let i in list) {
            const p = list[i];
            const x = backX + (p.x - backSize.width / 2) * GlobalScale;
            const y = backY + (p.y - backSize.height / 2) * GlobalScale;
            const l = this.group.create(x, y, 'Effect_Glow').setDepth(WinDefaultDepth + 100).setScale(2);
            l.alpha = 0.3;
            this.lights.push(l);
            l.setVisible(false);
        }
    }

    placePrizes() {
        const items = gameInit.progress.getFortuneData().getBonuses();
        const engine = this.engine;
        const depth = WinDefaultDepth + 100;
        this.allPrizesText = [];

        for (let i = 0;i < items.length;i++) {
            const type = items[i].getType();

            let label = null;
            let image = null;
            let imageAngle;
            let labelAngle;

            let radius = this.winInfo.radius * GlobalScale;

            const angle = 30 + 60 * i;
            let imgScale = 1;

            let x = 0;
            let y = 0;

            switch (type) {
                case "Gold": {
                    image = "PriceIcon";
                    imageAngle = angle - 15;

                    label = items[i].getText();
                    labelAngle = angle;
                    break;
                }
                case "Gems": {
                    image = "PriceGems";
                    imageAngle = angle - 5;

                    label = items[i].getText();
                    labelAngle = angle + 10;
                    break;
                }
                case "TimeTravel": {
                    image = "FortuneItemTimeTravel";
                    imageAngle = angle - 10;

                    label = LocalizationManager.getLocalizization("FortuneWheelWindowMinutes").format(items[i].getText());
                    labelAngle = angle + 5;
                    break;
                }
                case "Box": {
                    image = "GiftBox";
                    imageAngle = angle;

                    radius -= 10;
                    imgScale = 0.8;
                    break;
                }
                case "JackPot": {
                    image = "PriceGems";
                    imageAngle = angle - 5;

                    label = items[i].getText();
                    labelAngle = angle + 10;

                    radius -= 50 * GlobalScale;

                    if (this.winInfo.jackpotImage) {
                        const back = engine.add.sprite(x, y, "FortuneJackpot")
                            .setOrigin(0, 0)
                            .setDepth(depth);
                        this.rotation.add(back);
                    }
                    break;
                }
            }

            imageAngle *= Math.PI / 180;
            labelAngle *= Math.PI / 180;

            if (image) {
                const img = engine.add.sprite(x + radius * Math.sin(imageAngle), y - radius * Math.cos(imageAngle), image)
                    .setScale(imgScale)
                    .setDepth(depth);
                img.angle = angle;
                this.rotation.add(img);
            }

            if (label) {
                const text = engine.add.textOld(x + radius * Math.sin(labelAngle), y - radius * Math.cos(labelAngle), label, DefaultFont)
                    .setOrigin(0, 0.5)
                    .setWordWrapWidth(150 * GlobalScale)
                    .setDepth(depth);
                text.angle = angle;
                this.allPrizesText[i] = text;
                this.rotation.add(text)
            }
        }
    }

    _updateTexts() {
        const items = gameInit.progress.getFortuneData().getBonuses();
        for (let i = 0;i < items.length;i++) {
            if (items[i].needToUpdate() && this.allPrizesText[i]) {
                this.allPrizesText[i].setText(items[i].getText());
            }
        }
    }

    rotateWheel(deltaTime) {
        if (this.rotationLeft <= 0) {
            this.stopWheel();

            gameInit.progress.spendSpin();
            this._updateSpinsCount();
            this._updateSpinsTimer();

            this.reward.activateBonus();
            setTimeout(()=> {
                if (this.visible)
                    this._updateTexts();
            }, 1000);
        } else {
            if (this.rotationSpeed >= 50)
                this.rotationSpeed *= 0.996;

            const speed = this.rotationSpeed;

            const angle = speed * deltaTime;
            this.rotation.angle += angle;
            this.rotationLeft -= angle;
        }
    }

    updateWindow(deltaTime) {
        if (this.listener) {
            this.rotateWheel(deltaTime);
        }

        if (this.timeToUpdate <= 0 && this.spinsTimer && this.spinsTimer.visible) {
            this.timeToUpdate = 1;
            this._updateSpinsTimer();
        } else
            this.timeToUpdate -= deltaTime;

        if (this.lights) {
            this.lightTime += deltaTime;
            switch (this.lightAnimation) {
                case 1: {
                    if (this.lightTime > 0.05) {
                        this.lightTime = 0;
                        this.lights[this.lightIndex].setVisible(false);
                        this.lightIndex = (this.lightIndex - 1);
                        if (this.lightIndex < 0)
                            this.lightIndex = this.lights.length - 1;
                        this.lights[this.lightIndex].setVisible(true);
                    }
                    break;
                }
                case 2: {
                    if (this.lightTime > 0.2) {
                        this.lightTime = 0;
                        this.lightIndex = (this.lightIndex + 1) % 2;
                        for (let i in this.lights)
                            this.lights[i].setVisible((i % 2) === this.lightIndex);
                    }
                    break;
                }
            }
        }
    }

    stopWheel() {
        this.listener = false;
        this.lightAnimation = 2;
        if (this.arrowAnimation) {
            this.arrowAnimation.stopAnimation();
            this.arrowAnimation = null;
        }

        this.arrowImage.setPositionY(this.arrosPos.y + 50);

        unlockGUI();
    }

    spinWheel() {
        if (!this.listener) {

            const func = () => {
                eventManager.fortuneWheelUsed();
                gameAnalytics.sendEvent("Ad_Wheel");
                this._startArrowAnimation();
                this.lightAnimation = 1;

                const items = gameInit.progress.getFortuneData().getBonuses();
                this.rotationSpeed = 800;

                let ind = Math.random() * 100;
                let index = 0;
                for (let i = 0; i < items.length; i++) {
                    const chance = items[i].getChance();
                    if (ind <= chance) {
                        index = i;
                        break;
                    } else
                        ind -= chance;
                }

                const finalAngle = (60 * (5 - index) + 360 * 8 + 30);// + 5 + Math.random() * 50 + 360);
                this.rotation.angle = this.rotation.angle % 360;

                this.reward = items[index];
                this.rotationLeft = finalAngle - this.rotation.angle;
                // this.time = (finalAngle - this.rotation.angle) / this.rotationSpeed;
                this.listener = true;

                lockGuiEverything();
                this.exitButton.ignoreTutorial = false;
            };

            if (gameInit.progress.getFreeSpinsCount() <= 0) {
                if (!gameInit.progress.isGemsEnough(GEMS_PRICE_FOR_WHEEL_SPIN * RESOURCES_SCALE)) {
                    guiManager.openNewWindow(WindowType.WinNotEnoughGems);
                } else {
                    gameInit.progress.gemsSpent(GEMS_PRICE_FOR_WHEEL_SPIN * RESOURCES_SCALE);
                    func();
                }
            } else {
                this.exitButton.ignoreTutorial = false;
                PlayRewardedAd(func);
            }
        }
    }
}

class WinQuests extends WinWithBrownBack {
    constructor(gui, gameInit) {
        super(gui, gameInit);
    }

    createGame(engine) {
        super.createGame(engine);
        this.questGroups = [];
        this.prepareWindow(engine);

        eventManager.onActionQuestProgress.addListener(this._actionQuestProgress.bind(this));
    }

    _actionQuestProgress() {
        if (this.visible) {
            const qm = gameInit.questsManager;
            for (let i = 0; i < this.questGroups.length; i++)
                this._applyQuestInfo(this.questGroups[i], qm.getQuestInfo(i));
        }
    }

    _getYPosForQuest(index) {
        return this.centerY + (index - 1) * this.winInfo.distance * GlobalScale + this.winInfo.centerY * GlobalScale;
    }

    prepareWindow(engine) {
        this.header = engine.add.text(this.centerX, 70 * GlobalScale, null, DefaultFont)
            .setOrigin(0.5, 0)
            .setDepth(WinDefaultDepth + 1);

        this.group.add(this.header);

        this.timerText = engine.add.text(RealScreenWidth - 50, RealScreenHeight - 100 * GlobalScale, null, DefaultFont)
            .setOrigin(1, 0.5)
            .setDepth(WinDefaultDepth + 1);
        this.group.add(this.timerText);

        this.noQuestsText = engine.add.text(this.centerX, this.centerY + 500 * GlobalScale, null, DefaultFont)
            .setOrigin(0.5, 0.5)
            .setDepth(WinDefaultDepth + 1);
        this.group.add(this.noQuestsText);

        LoadPreparedFile(this.engine, this.winInfo.noMoreQuestsIcon, () => {
            this.noQuestsTextIcon = this.group.create(this.centerX, this.centerY - 100 * GlobalScale, this.winInfo.noMoreQuestsIcon).setDepth(WinDefaultDepth + 1);
            this.group.add(this.noQuestsTextIcon);
            this.noQuestsTextIcon.setVisible(this.group.visible && this.noQuestsTextIconVisible || false);
        });

        for (let i = 0; i < 3; i++) {
            const group = engine.add.container();
            const info = group;

            info.index = i;
            group.setPosition(this.centerX, this._getYPosForQuest(i));
            group.depth = WinDefaultDepth;

            group.create(0, 0, 'QuestBack').setDepth(WinDefaultDepth);
            // CreateImageInGroup(engine, group, 'QuestBack', (image) => {
            //     image.setDepth(WinDefaultDepth);//.visible = this.visible;
            // });

            info.button = new ButtonWithText(group, {
                'scene': engine,
                'key': 'DefaultButton',
                'x': 0 * GlobalScale,
                'y': 170 * GlobalScale,
                'minWidth' : 800 * GlobalScale
            }, () => this._collectQuest(i))
                .setDepth(WinDefaultDepth + 1);

            info.refreshButton = new BasicButton(group, {
                'scene': engine,
                'key': 'Quests_RefreshBtn',
                'x': -460 * GlobalScale,
                'y': -170 * GlobalScale,
            }, () => this._replaceQuest(i))
                .setDepth(WinDefaultDepth + 1);

            info.loader = new Loader(group, 'Quests_ProgressBar', 'Quests_ProgressFill', -60 * GlobalScale, 50 * GlobalScale);

            info.progress = engine.add.text(120 * GlobalScale, 50 * GlobalScale, null, DefaultFontSmall)
                .setOrigin(0, 0.5)
                .setDepth(WinDefaultDepth + 1);
            group.add(info.progress);

            const rightPrizeX = 370 * GlobalScale;
            info.prizes = engine.add.text(rightPrizeX, -70 * GlobalScale, null, DefaultFontSmall)
                .setOrigin(0.5, 0.5)
                .setDepth(WinDefaultDepth + 1);
            group.add(info.prizes);

            CreateImageInGroup(engine, group, 'PriceGems', (image) => {
                image.setPosition(rightPrizeX, 10 * GlobalScale);
                image.setDepth(WinDefaultDepth);
            });

            info.xLabel = engine.add.text(rightPrizeX + 20 * GlobalScale, 30 * GlobalScale, null, DefaultFontSmall)
                .setOrigin(0, 0.5)
                .setDepth(WinDefaultDepth + 1);
            group.add(info.xLabel);

            info.description = engine.add.text(0, -50 * GlobalScale, null, DefaultFontSmallBlack)
                .setOrigin(0.5, 0.5)
                .setWordWrapWidth(500 * GlobalScale)
                .setDepth(WinDefaultDepth + 1);
            group.add(info.description);

            this.questGroups.push(info);
            this.group.add(group);
        }

        if (TEST_MODE)
            this.createButton('MM_Btn_Worlds', 100, 100, () => this._testQuests());

        SetGroupVisible(this.group, false);
    }

    _testQuests() {
        gameInit.questsManager.activateRandomQuests(0);
        this.setWindowVisible(true);
    }

    localize() {
        super.localize();

        this.header.setText(LocalizationManager.getLocalizization("DailyQuestsTitle"));
        this.noQuestsText.setText(LocalizationManager.getLocalizization("DailyQuestsNoQuestsLabel"));

        const prizesString = LocalizationManager.getLocalizization("DailyQuestsRewardLabel");
        for (let i in this.questGroups) {
            const group = this.questGroups[i];
            this._applyQuestButtonLocalization(group, gameInit.questsManager && gameInit.questsManager.getQuestInfo(i));
            group.prizes.setText(prizesString);
        }
    }

    _applyQuestButtonLocalization(group, quest) {
        group.button.caption.setText(quest && quest.hasAction() && !this._isQuestCompleted(group.index) ? LocalizationManager.getLocalizization("BanjoManTipStart") : LocalizationManager.getLocalizization("DailyQuestsCollectBtn"));
    }

    _applyQuestInfo(group, quest) {
        if (!quest.canDisplayQuest()) {
            group.setVisible(false);
            return false;
        }

        group.setVisible(true);

        const info = quest.info;

        const current = Math.min(quest.progress, quest.count);
        group.xLabel.setText("x" + quest.getRewardForUI());
        group.description.setText(LocalizationManager.getLocalizization(info.info).format(quest.count));
        group.progress.setText(current + '/' + quest.count);
        group.loader.setProgress(current / quest.count);

        this._applyQuestButtonLocalization(group, quest);

        const completed = this._isQuestCompleted(group.index);
        group.button.setButtonLocked(!completed && !quest.hasAction());

        group.refreshButton.setVisible(quest.canReplaceQuest() && !completed);

        const icon = "Quest_" + info.type;
        const path = VisualData.getQuestIcons() + info.type + ".png";
        LoadFile(this.engine, icon, path, () => {
            if (this.visible) {
                if (group.icon)
                    group.icon.destroy(true);
                group.icon = this.engine.add.sprite(-370 * GlobalScale, 0, icon).setDepth(WinDefaultDepth + 1);
                group.add(group.icon);
                if (this.winInfo.iconsScale)
                    group.icon.setScale(this.winInfo.iconsScale);
            }
        });
        return true;
    }

    _replaceQuest(index) {
        const qm = gameInit.questsManager;
        qm.replaceQuest(index);

        this._applyQuestInfo(this.questGroups[index], qm.getQuestInfo(index));
    }

    _isQuestCompleted(index) {
        const qm = gameInit.questsManager;
        const quest = qm.getQuestInfo(index);
        return quest.progress >= quest.count;
    }

    _collectQuest(index) {
        const qm = gameInit.questsManager;
        const quest = qm.getQuestInfo(index);
        if (quest.progress >= quest.count) {
            this.questGroups[index].setVisible(false);
            quest.claimReward();
            let dec = 1;
            for (let i = 0; i < index; i++)
                if (!this.questGroups[i].visible)
                    dec++;
            for (let i = index + 1; i < this.questGroups.length; i++) {
                if (this.questGroups[i].visible) {
                    const pos = {
                        x: this.centerX,
                        y: this._getYPosForQuest(i - dec)
                    };
                    animManager.moveToPointExtra(this.questGroups[i], pos, 0.1, 0.4);
                } else
                    dec++;
            }
        } else {
            if (quest.hasAction())
                quest.useAction();
        }
        this._checkForNoQuests();
    }

    _updateTimer() {
        this.timerText.setText(LocalizationManager.getLocalizization("DailyQuestsTimer").format(timeToStringClock(Progress.getTimeTillTheNextDay())));
    }

    _checkForNoQuests() {
        let visible = true;
        for (let i = 0; i < this.questGroups.length; i++) {
            if (this.questGroups[i].visible) {
                visible = false;
                break;
            }
        }

        this.noQuestsTextIconVisible = visible;
        this.noQuestsTextIcon.setVisible(visible);
        this.noQuestsText.setVisible(visible);
    }

    setWindowVisible(visible) {
        super.setWindowVisible(visible);

        if (visible) {
            const qm = gameInit.questsManager;
            let dec = 0;
            for (let i = 0; i < this.questGroups.length; i++) {
                if (!this._applyQuestInfo(this.questGroups[i], qm.getQuestInfo(i)))
                    dec++;

                this.questGroups[i].setPositionY(this._getYPosForQuest(i - dec));
            }
            if (!this.timer) {
                this.timer = setInterval(() => this._updateTimer(), 1000);
                this._updateTimer();
            }
            this._checkForNoQuests();
        } else {
            if (this.timer) {
                clearInterval(this.timer);
                this.timer = null;
            }
        }
    }
}

class WinHarvested extends WinBase {
    constructor(gui, gameInit){
        super(gui, gameInit);
        this.cansCount = 20;
    }

    createGame(engine) {
        super.createGame(engine);
        this._createBlackBackground();
    }

    setWindowVisible(visible) {
        super.setWindowVisible(visible);
        if (visible) {
            if (!this.header) {
                const icon = 'collectCropSplash';
                LoadPreparedFile(this.engine, icon, () => {
                    this.destroyImage();
                    if (this.visible) {
                        this.group.create(0, 0, icon).setDepth(WinDefaultDepth - 10);

                        if (!this.header) {
                            this.header = this.engine.add.text(0, -600 * GlobalScale, null, DefaultFontBig)
                                .setOrigin(0.5, 0.5)
                                .setWordWrapWidth(1200 * GlobalScale)
                                .setDepth(WinDefaultDepth);
                            this.group.add(this.header);

                            this.description = this.engine.add.text(0, RealScreenHeight / 2 - 400 * GlobalScale, this.seeds ? this._getDescription() : null, DefaultFontBig)
                                .setOrigin(0.5, 0.5)
                                .setWordWrapWidth(1200 * GlobalScale)
                                .setDepth(WinDefaultDepth);
                            this.group.add(this.description);

                            this.createActionButton(this.engine, this.closeWindow.bind(this), RealScreenHeight / 2 - 150 * GlobalScale, true).setText(LocalizationManager.getLocalizization("ButtonOk"));
                            this.addButton(this.actionButton);
                        }

                        this.header.setText(LocalizationManager.getLocalizization("CollectCropSplash"));
                        this._hideUIForAnimation();
                    }
                });
            } else
                this._hideUIForAnimation();

            this._startAnimation().then(() => {
                this.header.setVisible(true);
                animManager.applyWinOpenAnimation(this.header, ()=>{
                    this.description.setVisible(true);
                    animManager.applyWinOpenAnimation(this.description, ()=> {
                        this.actionButton.setVisible(true);
                        this.buttonLabel.setVisible(true);
                        animManager.applyButtonShowAnimation(this.actionButton);
                    });
                })
            });
        } else {
            this._sendCansToResoruces();
        }
    }

    _hideUIForAnimation() {
        this.header.setVisible(false);
        this.description.setVisible(false);
        this.actionButton.setVisible(false);
        this.buttonLabel.setVisible(false);
    }

    timeout(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async _sendCansToResoruces() {
        if (this.cans) {
            for (let i in this.cans) {
                const icon = this.cans[i];
                animManager.moveToPoint(icon, cansResourceIcon, 0.5, ()=>{
                    icon.destroy(true);
                    animManager.changeShapeOfSouls(cansResourceIcon);
                });
                await this.timeout(100);
            }
        }
        this.cans = null;
    }

    async _startAnimation() {
        this.cans = [];
        const radius = 400 * GlobalScale;
        for (let i = 0; i < this.cansCount;i++) {
            const angle = Math.PI * 2* Math.random();
            const r = radius * (Math.random() * 0.7 + 0.3);
            const can = this.engine.add.sprite(this.centerX + r * Math.sin(angle), this.centerY + r * Math.cos(angle), "PriceSeeds")
                .setDepth(WinDefaultDepth + 100);
            this.cans.push(can);

            await this.timeout(100);
        }

        return Promise.resolve(true);
    }

    _getDescription() {
        return LocalizationManager.getLocalizization("CollectCropSplashText").format(LocalizationManager.getLocalizedNumber(this.seeds));
    }

    setApplesAcount(seeds) {
        this.seeds = seeds;
        if (this.description)
            this.description.text = this._getDescription();
    }
}

class WinSettings extends WinWithExit {
    constructor(gui, gameInit){
        super(gui, gameInit);
    }

    createGame(engine) {
        super.createGame(engine);
        this._createBlackBackground();
    }

    createGame(engine) {
        super.createGame(engine);
        this._createBlackBackground();
    }

    localize() {
        super.localize();

        if (this.header)
            this.header.setText(LocalizationManager.getLocalizization("ButtonChangeLanguage"));

        if (this.soundsText)
            this.soundsText.setText(LocalizationManager.getLocalizization("SettingsSound"));

        if (this.musicText)
            this.musicText.setText(LocalizationManager.getLocalizization("SettingsMusic"));
    }

    setWindowVisible(visible) {
        super.setWindowVisible(visible);

        if (visible && !this.initialized) {
            this.initialized = true;

            const distanceX = 300 * GlobalScale;
            const distanceY = 250 * GlobalScale;
            const columns = 5;

            this.header = this.addText(0, - 100 * GlobalScale);

            const allLanguages = VisualData.getAllLanguages();
            let index = 0;
            for (let i in allLanguages) {
                const lang = allLanguages[i];
                const name = 'Language_' + lang;
                const x = (i % columns - (columns - 1) / 2) * distanceX;
                const y = 100 * GlobalScale + Math.trunc(i / columns) * distanceY;
                LoadPreparedFile(this.engine, name, () => {
                    this.createButton(name, x, y, ()=>{
                        SetCurrentLanguage(lang);
                    });
                });
                index++;
            }

            this.settingsButtons = {};

            const posX = 300 * GlobalScale;
            const posY = -550 * GlobalScale;
            const textDist = 200 * GlobalScale;

            this.soundsText = this.addText(-posX, posY + textDist);
            this.musicText = this.addText(posX, posY + textDist);

            this.loadAndCreateButton("Sounds_On", -posX, posY, ()=>{
                this.settingsButtons["Sounds_Off"].setVisible(true);
                this.settingsButtons["Sounds_On"].setVisible(false);
                SetSoundsState(false);
            }, ()=>{
                return !GameSettings.soundsOff;
            });

            this.loadAndCreateButton("Sounds_Off", -posX, posY, ()=>{
                this.settingsButtons["Sounds_On"].setVisible(true);
                this.settingsButtons["Sounds_Off"].setVisible(false);
                SetSoundsState(true);
            }, ()=>{
                return !!GameSettings.soundsOff;
            });

            this.loadAndCreateButton("Music_On", posX, posY, ()=>{
                this.settingsButtons["Music_Off"].setVisible(true);
                this.settingsButtons["Music_On"].setVisible(false);
                SetMusicState(false);
            }, ()=>{
                return !GameSettings.musicOff;
            });

            this.loadAndCreateButton("Music_Off", posX, posY, ()=>{
                this.settingsButtons["Music_On"].setVisible(true);
                this.settingsButtons["Music_Off"].setVisible(false);
                SetMusicState(true);
            }, ()=>{
                return !!GameSettings.musicOff;
            });

            this.localize();

            const version = this.engine.add.text(RealScreenWidth / 2 - 50, RealScreenHeight / 2 - 50, "v" + GAME_VERSION, DefaultFontSmall)
                .setOrigin(1, 0.5)
                .setDepth(WinDefaultDepth + 40);

            this.group.add(version);

            if (TEST_MODE)
                this.createButton('MM_Btn_Worlds', RealScreenWidth / 2 - 100, 0, () => gameInit.progress.resetProgress());
        } else {
            this.setButtonVisible("Sounds_On", !GameSettings.soundsOff);
            this.setButtonVisible("Sounds_Off", !!GameSettings.soundsOff);
            this.setButtonVisible("Music_On", !GameSettings.musicOff);
            this.setButtonVisible("Music_Off", !!GameSettings.musicOff);
        }
    }

    addText(x, y) {
        const text = this.engine.add.text(x, y, null, DefaultFontBig)
            .setOrigin(0.5, 0.5)
            .setDepth(WinDefaultDepth + 40);

        this.group.add(text);
        return text;
    }

    loadAndCreateButton(name, x, y, action, isVisible) {
        LoadPreparedFile(this.engine, name, () => {
            const b = this.createButton(name, x, y, action);
            this.settingsButtons[name] = b;
            b.setVisible(isVisible());
        });
    }

    setButtonVisible(name, visible) {
        const btn = this.settingsButtons[name];
        if (btn)
            btn.setVisible(visible);
    }
}

class WinConstruct extends WinWithBack {
    constructor(gui, gameInit){
        super(gui, gameInit);
    }

    setWindowVisible(visible) {
        super.setWindowVisible(visible);
    }

    localize() {
        super.localize();
        this.buttonLabel.setText(LocalizationManager.getLocalizization("BuySlotButtonText"));
    }

    createGame(engine) {
        super.createGame(engine);

        this.createActionButton(engine, this.constructBuilding.bind(this), null, false, null, null, 500);
        this.createHeader(engine);
    }

    constructBuilding() {
        this.building.upgradeBuilding();
        this.closeWindow();
    }

    setInfo(building) {
        const icon = building.getBigIcon();
        this.building = building;
        LoadFile(this.engine, icon, building.getBigIconPath(), () => {
            this.destroyImage();
            if (this.visible)
                this.image = this.group.create(0, -30 * GlobalScale, icon).setDepth(WinDefaultDepth + 1);
        });

        this.header.setText(LocalizationManager.getLocalizization(building.getLocalizationKey()));
    }
}

class WinUpgrade extends WinWithExit {
    closeWindow(){
        super.closeWindow();
        this.gui.changeMode(GUIMode.Normal);
    }

    setWindowVisible(visible) {
        super.setWindowVisible(visible);
        hudResources.setVisible(visible);

        this._clearTimer();
        if (visible) {
            this.label.setVisible(guiManager.guiMode === GUIMode.Likes);
            this.resetTimer.setVisible(guiManager.guiMode === GUIMode.Likes);

            if (guiManager.guiMode === GUIMode.Likes) {
                this.timer = setInterval(() => {
                    this._updateTimer();
                }, 1000);

                this._updateTimer();
            }
        }
    }

    _updateTimer() {
        if (gameInit.progress.isLikesTimerActive()) {
            this.resetTimer.setVisible(true);
            this.resetTimer.setText(timeToStringClock(Math.trunc(gameInit.progress.getLikesTimeleft()/1000)));
        } else
            this.resetTimer.setVisible(false);
    }

    _clearTimer() {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
    }

    localize() {
        super.localize();
        this.label.setText(LocalizationManager.getLocalizization("LikesInfoText"));
    }

    createGame(engine) {
        super.createGame(engine);

        this.label = engine.add.text(0, RealScreenHeight / 2 - 200 * GlobalScale, null, DefaultFontBig)
            .setOrigin(0.5, 0.5)
            .setDepth(WinDefaultDepth);
        this.group.add(this.label);

        this.resetTimer = engine.add.text(0, RealScreenHeight / 2 - 100 * GlobalScale, null, DefaultFont)
            .setOrigin(0.5, 0.5)
            .setDepth(WinDefaultDepth);
        this.group.add(this.resetTimer);
    }
}

class WinBossProccess extends WinBase{
    constructor(gui, gameInit) {
        super(gui, gameInit);
        this.enableClickables = true;
    }

    localize() {
        super.localize();
        this.description.setText(LocalizationManager.getLocalizization("CollectCropTipText"));
    }

    createGame(engine) {
        super.createGame(engine);

        this.description = engine.add.text(0, -RealScreenHeight/2 + 100 * GlobalScale, null, DefaultFont)
            .setOrigin(0.5, 0.5)
            .setDepth(WinDefaultDepth);
        this.description.visible = false;
        this.group.add(this.description);
    }

    // setWindowVisible(visible) {
    //     super.setWindowVisible(visible);
    //
    //     if (visible) {
    //         this.loadImage('CollectCrop', this.centerX, 200);
    //     }
    // }
}

class WinWithPicture extends WinWithBack {
    constructor(gui, gameInit, info){
        super(gui, gameInit);
        this.info = info;
    }

    applyWinInfo(key) {
        super.applyWinInfo(key);
        if (!this.winInfo)
            super.applyWinInfo("GUI_WinWithPicture");
    }

    localize() {
        super.localize();

        if (this.header)
            this.header.setText(LocalizationManager.getLocalizization(this.info.header));
        if (this.description)
            this.description.setText(LocalizationManager.getLocalizization(this.info.description));
        if (this.buttonLabel)
            this.buttonLabel.setText(LocalizationManager.getLocalizization(this.info.button));
    }

    createExitButton() {
        if (!this.info.no_exit)
            super.createExitButton();
    }

    createGame(engine) {
        super.createGame(engine);

        if (this.info.button)
            this.createActionButton(engine, this.actionClicked.bind(this), null, true, null, null, this.info.btn_min_width, this.info.icon);
        if (this.info.header)
            this.createHeader(engine);

        if (this.info.description) {
            this.description = engine.add.text(this.getWinInfoValue("descriptionX", 0), this.getWinInfoValue("descriptionY", -300), null, this.info.smallFont ? DefaultFontSmallBlack : DefaultFontBlack)
                .setWordWrapWidth((this.info.wordWrapWidth || 900) * GlobalScale)
                .setOrigin(0.5, 0.5)
                .setDepth(WinDefaultDepth);
            this.group.add(this.description);
        }
    }

    actionClicked() {
        this.closeWindow();
        if (this.info.action)
            this.info.action();
    }

    setWindowVisible(visible) {
        super.setWindowVisible(visible);

        if (visible) {
            let x = (this.info.imageX || 0);
            let y = (this.info.imageY || 100);
            if (this.winInfo) {
                if (this.winInfo.imageX)
                    x += this.winInfo.imageX;
                if (this.winInfo.imageY)
                    y += this.winInfo.imageY;
            }
            this.loadImage(this.info.image, x * GlobalScale, y * GlobalScale);
        }
        else
            this.destroyImage();
    }
}


class WinBossSummon extends WinWithPicture {

    setWindowVisible(visible) {
        super.setWindowVisible(visible);

        if (visible) {
            const seeds = LocalizationManager.getLocalizedNumber(this.gameInit.progress.getSeedsForSoulsCount());
            this.description.setText(LocalizationManager.removeCodes(LocalizationManager.getLocalizization(this.info.description)
                .format(seeds)));
        }
    }
}

class WinWithUnlockedExitButton extends WinWithPicture {

    createGame(engine) {
        super.createGame(engine);
        this.exitButton.ignoreTutorial = true;
    }
}

class WinGuard extends WinWithUnlockedExitButton {

    setWindowVisible(visible) {
        super.setWindowVisible(visible);

        if (visible) {
            this.description.setText(LocalizationManager.getLocalizization(this.info.description)
                .format(GuardDurationHours));
        }
    }
}

class WinBanjoEnd extends WinWithPicture {

     setWindowVisible(visible) {
        super.setWindowVisible(visible);

        if (visible) {
            this.description.setText(LocalizationManager.getLocalizization(this.info.description)
                .format(LocalizationManager.getLocalizedNumber(gameInit.progress.getSupervisorResourcesCollected())));
        }
    }
}

class WinBanjoPreEnd extends WinWithPicture {

    createGame(engine) {
        super.createGame(engine);

        this.description2 = engine.add.text(this.info.descriptionX * GlobalScale, this.info.descriptionY * GlobalScale, null, DefaultFontVeryBig)
            .setOrigin(0.5, 0.5)
            .setDepth(WinDefaultDepth);
        this.group.add(this.description2);
    }

    imageWasLoaded() {
        super.imageWasLoaded();

        if (!this.amplitudeImage) {
            this.amplitudeImage = animManager.scaleSinInfinite(this.image, 0.6, 0.9, 0.1);
        }
    }

    setWindowVisible(visible) {
        super.setWindowVisible(visible);

        if (visible) {
            const max = gameInit.progress.getSupervisorResourcesCollected();
            const steps = 40;
            const step = max.divide(steps);
            let curStep = 1;
            let current = step;

            let amplitudeDesc = animManager.scaleSinInfinite(this.description2, 0.6, 0.8, 0.2);

            let timer = setInterval(()=>{
                curStep++;
                if (curStep === steps) {
                    this.description2.setText(LocalizationManager.getLocalizedNumber(max));
                    clearInterval(timer);

                    amplitudeDesc.stopAnimation();
                    if (this.amplitudeImage) {
                        this.amplitudeImage.stopAnimation();
                        this.amplitudeImage = null;
                    }

                    setTimeout(()=>{
                        guiManager.openNewWindow(WindowType.WinBanjoEnd, true);
                    }, 2000);
                } else {
                    current = current.add(step);
                    this.description2.setText(LocalizationManager.getLocalizedNumber(current));
                }
            }, 100);
        }
    }
}

class WinTimeTravel extends WinWithPicture {

    setTravelTime(minutes, image) {
        this.minutes = minutes;
        this.info.image = image;
    }

    setWindowVisible(visible) {
        super.setWindowVisible(visible);

        if (visible) {
            this.description.setText(LocalizationManager.getLocalizization(this.info.description)
                .format(this.minutes));
        }
    }
}

class WinInAppBought extends WinWithPicture {
    setInAppData(data) {
        this.description.setText(LocalizationManager.getLocalizization(this.info.description) + "\n" + data.originalGems);
    }
}

class WinAppleDescription extends WinWithPicture {

    localize() {
        super.localize();

        this.profitBonus.setText(LocalizationManager.getLocalizization("SeedInfoProfitBonus"));
        this.totalBonus.setText(LocalizationManager.getLocalizization("SeedInfoTotalProfit"));
        this.label1.setText(LocalizationManager.getLocalizization("SeedInfoBiggerFarm") + " " + LocalizationManager.getLocalizization("SeedInfoGetSeeds"));
        // this.label2.text = LocalizationManager.getLocalizization("SeedInfoGetSeeds");
    }

    setWindowVisible(visible) {
        super.setWindowVisible(visible);

        if (visible) {
            this.profitNumber.setText(this.gameInit.progress.getBonusPerSeed() + '%');
            this.totalNumber.setText(LocalizationManager.getLocalizedNumber(this.gameInit.progress.getTotalSeedsBonus().minus(1).multiply(100 * RESOURCES_SCALE)) + '%');
        }
    }

    createGame(engine) {
        super.createGame(engine);

        const info = this.winInfo;

        const distanceX = (info ? info.distanceX : 430) * GlobalScale;
        const startY = (info ? info.startY : -300) * GlobalScale;
        const centerX = (info ? info.centerX : 0) * GlobalScale;
        const distanceY = (info ? info.distanceY : 75) * GlobalScale;

        let y = startY;
        this.profitBonus = engine.add.text(centerX - distanceX, y, null, DefaultFontBlack)
            .setOrigin(0, 0.5)
            .setDepth(WinDefaultDepth);
        this.group.add(this.profitBonus);

        this.profitNumber = engine.add.text(centerX + distanceX, y, null, DefaultFontBlack)
            .setOrigin(1, 0.5)
            .setDepth(WinDefaultDepth);
        this.group.add(this.profitNumber);

        y += distanceY;
        this.totalBonus = engine.add.text(centerX - distanceX, y, null, DefaultFontBlack)
            .setOrigin(0, 0.5)
            .setDepth(WinDefaultDepth);
        this.group.add(this.totalBonus);

        this.totalNumber = engine.add.text(centerX + distanceX, y, null, DefaultFontBlack)
            .setOrigin(1, 0.5)
            .setDepth(WinDefaultDepth);
        this.group.add(this.totalNumber);

        y += 1 * distanceY;
        this.label1 = engine.add.text(centerX, y, null, DefaultFontSmallBlack)
            .setOrigin(0.5, 0)
            .setWordWrapWidth(900 * GlobalScale)
            .setDepth(WinDefaultDepth);
        this.group.add(this.label1);

        // y += distanceY;
        // this.label2 = engine.add.text(centerX, y, null, DefaultFontBlack)
        //     .setOrigin(0.5, 0.5)
        //     .setDepth(WinDefaultDepth);
        // this.group.add(this.label2);
    }
}


class MyResources {
    constructor(gui, gameInit) {
        this.gui = gui;

        gameInit.create.addListener(this.createGame.bind(this));
        gameInit.loaded.addListener(this.gameWasLoaded.bind(this));
        gameInit.onResourcesUpdated.addListener(this.resourcesUpdate.bind(this));
    }
}

class WinMain extends WinBase{
    constructor(gui, gameInit) {
        super(gui, gameInit);

        this.enableClickables = true;
        this.hudResources = new HUDResources(gameInit);
        gameInit.onWorldChanged.addListener(this.worldChanged.bind(this));
    }

    setAllButtonsVisible(visible) {
        super.setAllButtonsVisible(visible);
        if (visible)
            this.worldChanged(gameInit.selectedWorld);
    }

    setWindowVisible(visible) {
        super.setWindowVisible(visible);
        hudResources.setVisible(visible);
        this.worldChanged(gameInit.selectedWorld);
    }

    worldChanged(worldIndex) {
        if (!this.worldbtn2_Inverse)
            return;

        if (!gameInit.progress.isWorldChangeAvailable()) {
            this.worldbtn_Inverse.setForceInvisible(true);
            this.worldbtn.setForceInvisible(true);
            this.worldbtn2_Inverse.setForceInvisible(true);
            this.worldbtn2.setForceInvisible(true);
            return;
        }

        switch (parseInt(worldIndex)) {
            case 1:
                this.worldbtn_Inverse.setForceInvisible(true);
                this.worldbtn.setForceInvisible(false);

                this.worldbtn2_Inverse.setForceInvisible(true);
                this.worldbtn2.setForceInvisible(false);
                break;
            case 3:
                this.worldbtn_Inverse.setForceInvisible(false);
                this.worldbtn.setForceInvisible(true);

                this.worldbtn2_Inverse.setForceInvisible(true);
                this.worldbtn2.setForceInvisible(false);
                break;
            case 2:
                this.worldbtn_Inverse.setForceInvisible(true);
                this.worldbtn.setForceInvisible(false);

                this.worldbtn2_Inverse.setForceInvisible(false);
                this.worldbtn2.setForceInvisible(true);
                break;
        }
    }

    playOpenAnimation() {

    }

    createButtonsVertical() {
        const width = RealScreenWidth;
        const centerX = this.centerX;
        const centerY = this.centerY;
        let posY = centerY + RealScreenHeight / 2 - 150 * GlobalScale;
        const delta = width / 4;

        this.createButton('MM_Btn_Login', centerX - delta * 1.5, posY, () => this.gui.openNewWindow(WindowType.WinBossSummon));
        this.upgradeButton = this.createButton('MM_Btn_Upgrade', centerX - delta * 0.5, posY, () => this.gui.changeMode(GUIMode.UpgradeBuildings));
        this.createButton('MM_Btn_Likes', centerX + delta * 0.5, posY, () => this.gui.openNewWindow(WindowType.WinDropPuzzle));
        this.createButton('MM_Btn_Worlds', centerX + delta * 1.5, posY);

        posY = centerY - RealScreenHeight / 2 + 150 * GlobalScale;
        let posX = centerX + RealScreenWidth / 2 - 150 * GlobalScale;

        this.storeButton = this.createButton('MM_Btn_Store', posX, posY, () => this.gui.openNewWindow(WindowType.WinStore));

        posX -= 250 * GlobalScale;
        this.puzzlesButton = this.createButton('MM_Btn_Chests', posX, posY, () => this.gui.openNewWindow(WindowType.WinPuzzle));

        posX = RealScreenWidth - 100 * GlobalScale;
        posY = RealScreenHeight - 800 * GlobalScale;
        this.createButton('FortuneHUDButton', posX, posY, () => this.gui.openNewWindow(WindowType.WinFortuneWheel));

        posY += 180 * GlobalScale;
        this.questsButton = this.createButton('QuestsHUDButton', posX, posY, () => this.gui.openNewWindow(WindowType.WinQuests));

        posY += 180 * GlobalScale;
        this.dailyBonus = this.createButton('Daily_HUDButton', posX, posY, () => this.gui.openNewWindow(WindowType.WinDaily));

        //TODO temp
        posX = 100 * GlobalScale;
        posY = RealScreenHeight - 600 * GlobalScale;
        this.createButton('FortuneHUDButton', posX, posY, () => this.gui.openNewWindow(WindowType.WinFreeUpgrade));

        posY += 180 * GlobalScale;
        this.createButton('QuestsHUDButton', posX, posY, () => this.gui.openNewWindow(WindowType.WinNotEnoughGems));
    }

    createButtonsHorizontal() {
        const gameSettings = VisualData.getGameSettings();

        const distance = 250 * GlobalScale;
        const padding = 170 * GlobalScale;
        const padding2 = padding + 30 * GlobalScale;

        const centerX = this.centerX;

        if (VisualData.ALL_OBJECTS.MM_Btn_Bread)
            this.superVisorButton = this.createButton('MM_Btn_Bread', 4 * padding, padding, () => this.gui.openNewWindow(WindowType.WinSupervisor));

        // this.createButton('MM_Btn_Login', padding, RealScreenHeight - padding, () => this.gui.openNewWindow(WindowType.WinBossSummon));
        this.fortuneButton = this.createButton('FortuneHUDButton', padding, RealScreenHeight - padding, () => this.gui.openNewWindow(WindowType.WinFortuneWheel));
        this.dailyBonus = this.createButton('Daily_HUDButton', padding, RealScreenHeight - padding - distance, () => this.gui.openNewWindow(WindowType.WinDaily));
        this.upgradeButton = this.createButton('MM_Btn_Upgrade', RealScreenWidth - padding2, RealScreenHeight - padding, () => this.gui.changeMode(GUIMode.UpgradeBuildings));
        this.questsButton = this.createButton('QuestsHUDButton', RealScreenWidth - padding2, RealScreenHeight - padding - distance, () => this.gui.openNewWindow(WindowType.WinQuests));
        if (gameSettings.photos) {
            this.createButton('MM_Btn_Likes', RealScreenWidth - padding2, RealScreenHeight - padding - distance * 2, () => {
                guiManager.openNewWindow(WindowType.WinPhotosMainMenu);
            });
        }

        if (gameSettings.likes && gameSettings.likes.hasOwnProperty(AllGetParams.game_platform) && gameSettings.likes[AllGetParams.game_platform]) {
            this.createButton('MM_Btn_Likes', padding, RealScreenHeight - padding - distance * 2,() => this.gui.changeMode(GUIMode.Likes));
        }

        // if (gameSettings.share && gameSettings.share.hasOwnProperty(AllGetParams.game_platform) && gameSettings.share[AllGetParams.game_platform]) {
        //     this.createButton('MM_Btn_Likes', padding, RealScreenHeight - padding - distance * 3,() => socialManager.postMessage());
        // }

        if (!gameSettings.locations_window) {
            this.worldbtn2 = this.createButton('MM_Btn_Worlds2', RealScreenWidth - padding2, RealScreenHeight - padding - distance * 2, () => {
                gameInit.switchWorld("2");
            });
            this.worldbtn2_Inverse = this.createButton('MM_Btn_Worlds2_Inverse', RealScreenWidth - padding2, RealScreenHeight - padding - distance * 2, () => {
                gameInit.switchWorld("1");
            });
            this.worldbtn2_Inverse.setForceInvisible(true);
        }

        const paddigSmall = padding / 1.5;

        this.storeButton = this.createButton('MM_Btn_Store', centerX - distance, paddigSmall, () => this.gui.openNewWindow(WindowType.WinStore));
        this.puzzlesButton = this.createButton('MM_Btn_Chests', centerX, paddigSmall, () => this.gui.openNewWindow(WindowType.WinPuzzle));
        if (!gameSettings.locations_window) {
            this.worldbtn = this.createButton('MM_Btn_Worlds', centerX + distance, paddigSmall, () => {
                gameInit.switchWorld("3");
            });
            this.worldbtn_Inverse = this.createButton('MM_Btn_Worlds_Inverse', centerX + distance, paddigSmall, () => {
                gameInit.switchWorld("1");
            });
            this.worldbtn_Inverse.setForceInvisible(true);
        }

        if (TEST_MODE)
            this.createButton('MM_Btn_Worlds', RealScreenWidth - padding, padding, () => gameInit.progress.cheatResources());
        this.allButtons.pop();
    }

    playBreadAnimation() {
        this.hideAllButtonsForTime(BanjoDuration);
        lockGuiEverything();
        animManager.playFallingBread(this.engine, this.group, BanjoDuration, ()=>{
            unlockGUI();
            this.gui.openNewWindow(WindowType.WinBanjoPreEnd);
        });
    }

    createGroup() {
        this.createGroupNotCenter();
    }

    createGame(engine) {
        super.createGame(engine);
        if (VisualData.IsVertical())
            this.createButtonsVertical();
        else
            this.createButtonsHorizontal();
        this.hudResources.createGame(engine);

        const progress = gameInit.progress;
        this.allNotifications = [];
        this._createNotificationForButton(
            engine,
            this.storeButton,
            function (func) {
                progress.onResourcesChanges.addListener(func);
            },
            function () {
                const list = GameData.getMarketListGold();
                for (let i = 0; i < list.length; i++) {
                    if (progress.canPurchaseUpgrade(list[i])) {
                        const price = progress.getPurchasePrice(list[i]);
                        return progress.isResourcesEnough(price)
                    }
                }
                return false;
            },
            function () {
                return "!";
            }
        );

        this._createNotificationForButton(
            engine,
            this.puzzlesButton,
            function (func) {
                eventManager.onBoxPurchased.addListener(func);
                eventManager.onBoxReceived.addListener(func);
                eventManager.onBoxOpened.addListener(func);
            },
            function () {
                return progress.getChestsCount() > 0;
            },
            function () {
                return progress.getChestsCount().toString();
            }
        );

        this._createNotificationForButton(
            engine,
            this.dailyBonus,
            function (func) {
                eventManager.onDailyBonusCollected.addListener(func);
            },
            function () {
                return progress.isDailyBonusAvailable();
            },
            function () {
                return "!";
            }
        );

        this._createNotificationForButton(
            engine,
            this.questsButton,
            function (func) {
                eventManager.onQuestCompleted.addListener(func);
                eventManager.onQuestClaimed.addListener(func);
            },
            function () {
                return gameInit.questsManager && gameInit.questsManager.isAnyCompleteQuest();
            },
            function () {
                return "!";
            }
        );
    }

    _createNotificationForButton(engine, btn, subscribe, isVisible, getText) {
        this.allNotifications.push(new GUINotification({
                scene: engine,
                parent: btn,
                group: this.group,
                x: (btn.x - btn.width * 0.4) / localScale,
                y: (btn.y + btn.height * 0.4) / localScale,
                subscribe: subscribe,
                isVisible: isVisible,
                getText: getText
            })
        );
    }

    showUpgradeButton() {
        this.showButtonFromTutorial(this.upgradeButton);
    }

    showStoreButton() {
        this.showButtonFromTutorial(this.storeButton);
    }

    showSuperVisorButton() {
        this.showButtonFromTutorial(this.superVisorButton);
    }

    getUpgradeButton() {
        return this.upgradeButton;
    }

    getStoreButton() {
        return this.storeButton;
    }

    getSuperVisorButton() {
        return this.superVisorButton;
    }

    getPuzzlesButton() {
        return this.puzzlesButton;
    }

    getFortuneWheelButton() {
        return this.fortuneButton;
    }

    _updateAllNotifications() {
        for (let i in this.allNotifications)
            this.allNotifications[i].update();
    }

    hideAllButtonsForTutorial() {
        super.hideAllButtonsForTutorial();
        this._updateAllNotifications();
    }

    showAllButtonsFromTutorial() {
        super.showAllButtonsFromTutorial();
        this._updateAllNotifications();
        this.worldChanged(gameInit.selectedWorld);
    }

    showButtonFromTutorial(btn) {
        super.showButtonFromTutorial(btn);
        this._updateAllNotifications();
    }

    setAllButtonsVisible(visible) {
        super.setAllButtonsVisible(visible);
        this._updateAllNotifications();
    }

    hideAllButtonsForTime(duration) {
        super.hideAllButtonsForTime(duration);
        this._updateAllNotifications();
    }

    _showAllButtonsBack() {
        super._showAllButtonsBack();
        this._updateAllNotifications();
    }
}

class BuildingsGUI extends WinBase{
    constructor(gui, gameInit) {
        super(gui, gameInit);
        gui.onBuildingCreated.addListener(this.buildingCreated.bind(this));
        gui.onModeChanged.addListener(this.modeChanged.bind(this));

        this.worldsData = {};

        gui.onBuildingResourcesUpdated.addListener(this.resourcesUpdate.bind(this));
        gui.onBuildingUpdated.addListener(this.productionUpdate.bind(this));
        gui.onBuildingLiked.addListener(this.buildingLiked.bind(this));
        gui.onBuildingUpgraded.addListener(this.buildingUpgrade.bind(this));
        gui.onReset.addListener(this.resetAll.bind(this));
        gameInit.onWorldChanged.addListener(this.worldChanged.bind(this));

        this.enableClickables = true;
        clickController.onBuildingClicked.addListener(this.buildingWasClicked.bind(this));
        gameInit.loaded.addListener(this._progressLoaded.bind(this));

        eventManager.onBuildingUpgraded.addListener(this._updateAvailabilityForUpdrages.bind(this));
    }

    _progressLoaded(progress) {
        progress.onPuzzleCompleted.addListener(this.puzzleCompleted.bind(this));
        progress.onPuzzlePeaceReceived.addListener(this.puzzlePeaceReceived.bind(this));
    }

    setWorldVisible(worldId, visible) {
        const worldsData = this.worldsData[worldId];

        const prod = worldsData.production;
        const purc = worldsData.purchase;

        for (let key in prod) {
            if (purc.hasOwnProperty(key)) {
                SetGroupVisible(purc[key].group, visible);
            } else
                SetGroupVisible(prod[key].group, visible);
        }

        worldsData.visible = visible;
    }

    worldChanged(worldId) {
        for (let id in this.worldsData) {
            if (this.worldsData[id].visible) {
                if (id !== worldId) {
                    this.setWorldVisible(id, false);
                }
            } else {
                if (id === worldId)
                    this.setWorldVisible(id, true);
            }
        }
    }

    _sendFlyingResources(worldsData, buildingId, destination) {
        const production = worldsData.production;
        if (production.hasOwnProperty(buildingId)) {
            const groupInfo = production[buildingId];

            const icon = this.engine.add.sprite(groupInfo.icon.x / localScale, groupInfo.icon.y / localScale, 'PriceIcon').setScale(VisualData.ANIMATIONS.flyingResourcesScale).setDepth(OverlayDepth);
            const p = {
                x: destination.x / localScale,
                y: destination.y / localScale
            };
            animManager.moveToPointSin(icon, p, VisualData.ANIMATIONS.flyingResources, () => {
                icon.destroy(true);
                animManager.changeShapeOfSouls(destination);
            });
            audioManager.playBuildingClick();
        }
    }

    _setUpgradeShieledAvailable(upgradeInfo, available) {
        if (upgradeInfo.available !== available) {
            upgradeInfo.available = available;

            const color = available ? NormalTint : LockTint;

            upgradeInfo.table.tint = color;
            upgradeInfo.level.tint = color;
            upgradeInfo.price.tint = color;
            upgradeInfo.priceIcon.tint = color;
            if (upgradeInfo.loadedIcon)
                upgradeInfo.loadedIcon.tint = color;
            upgradeInfo.loader.setTint(color);
        }
    }

    _updateAvailabilityForUpdrages() {
        if (guiManager.guiMode === GUIMode.UpgradeBuildings) {
            for (let w in this.worldsData) {
                const worldsData = this.worldsData[w];
                if (!worldsData.visible)
                    continue;

                const upgradeInfo = worldsData.upgrade;
                const wIndex = parseInt(w);
                for (let b in upgradeInfo) {
                    const building = gameInit.getBuildingById(wIndex, b);
                    this._setUpgradeShieledAvailable(upgradeInfo[b], gameInit.progress.isResourcesEnough(building.getUpgradePrice()));
                }
            }
        }
    }

    buildingWasClicked(building) {
        if (building.getLevel() === 0)
            return;

        for (let w in this.worldsData) {
            const worldsData = this.worldsData[w];
            if (!worldsData.visible)
                continue;

            switch (guiManager.guiMode) {
                case GUIMode.UpgradeBuildings:
                    const upgradeInfo = worldsData.upgrade;
                    if (upgradeInfo.hasOwnProperty(building.id)) {
                        const upgrade = upgradeInfo[building.id];

                        if (!upgrade.available)// not enough resources
                            continue;

                        const smallIcon = building.getDropIcon();
                        LoadFile(this.engine, smallIcon, building.getDropIconPath(), () => {
                            const rnd = (Math.random() - 0.5);
                            const x = upgrade.x + rnd * 160 * GlobalScale;
                            const vx = -rnd * 50 * GlobalScale;
                            const sprite = this.engine.add.sprite(x, upgrade.y - 75 * GlobalScale, smallIcon).setDepth(upgrade.depth - 100);
                            animManager.randomJumpRotation(sprite, {vx: vx,
                                vy: -200 * GlobalScale,
                                g: 70 * GlobalScale,
                                angle: (Math.random() - 0.5) * 60
                            }, 0.4, ()=> {
                                sprite.destroy(true);
                            });
                        });

                        animManager.jumpShieldAnimation(upgrade.group, {height: 40 * GlobalScale, scale: 0.1}, 0.3);
                    }
                    break;
                case GUIMode.Likes:
                    gameInit.openLikesForBuilding(building);
                    break;
                case GUIMode.Normal:
                    this._sendFlyingResources(worldsData, building.id, mainResourceIcon);
                    break;
                case GUIMode.Boss:
                    this._sendFlyingResources(worldsData, building.id, visualGame.getBoss().getObject());
                    break;
            }
            break;
        }
    }

    showNormal(show, showUpgrade, showLikes, worldID) {
        if (showUpgrade)
            this._updateAvailabilityForUpdrages();

        const worldsData = this.worldsData[worldID];
        const prod = worldsData.production;
        const upgr = worldsData.upgrade;
        const likesGroup = worldsData.likes;
        const purc = worldsData.purchase;

        for (let key in prod) {
            if (purc.hasOwnProperty(key)) {
                SetGroupVisible(purc[key].group, show);
            } else
                SetGroupVisible(prod[key].group, show);

            const upgrade = upgr[key];
            if (upgrade) {
                SetGroupVisible(upgrade.group, showUpgrade);

                if (showUpgrade && !upgrade.iconLoading) {
                    upgrade.iconLoading = true;
                    const smallIcon = upgrade.building.getSmallIcon();
                    LoadFile(this.engine, smallIcon, upgrade.building.getSmallIconPath(), () => {
                        upgrade.loadedIcon = upgrade.group.create(- 90 * GlobalScale, - 135 * GlobalScale, smallIcon).setDepth(upgrade.depth + 1).setScale(0.6);
                        setLockedColor(upgrade.loadedIcon, !upgrade.available);
                    });
                }
            }

            const likes = likesGroup[key];
            if (likes) {
                SetGroupVisible(likes.group, showLikes);

                if (showLikes && !likes.iconLoading) {
                    likes.iconLoading = true;
                    const smallIcon = likes.building.getSmallIcon();
                    LoadFile(this.engine, smallIcon, likes.building.getSmallIconPath(), () => {
                        likes.loadedIcon = likes.group.create(- 90 * GlobalScale, - 135 * GlobalScale, smallIcon).setDepth(likes.depth + 1).setScale(0.6);
                        setLockedColor(likes.loadedIcon, !likes.available);
                    });
                }
            }
        }
    }

    modeChanged(newMode, worldID) {
        this.showNormal(newMode === GUIMode.Normal, newMode === GUIMode.UpgradeBuildings, newMode === GUIMode.Likes, worldID);
    }

    resetAll() {
        for (let k in this.worldsData) {
            const worldData = this.worldsData[k];
            const upgradeGroup = worldData.upgrade;
            for (let up in upgradeGroup) {
                const info = upgradeGroup[up];
                this.createPurchaseLabel(info.building, worldData, true);
                info.group.destroy(true);
            }

            const likesGroup = worldData.likes;
            for (let up in likesGroup) {
                likesGroup[up].group.destroy(true);
            }

            const productionGroup = worldData.production;
            for (let up in productionGroup) {
                const prod = worldData.production[up];
                prod.isFast = false;
                prod.loader.setFast(false);
                prod.resources.setText("0");
                SetGroupVisible(prod.group, false);
            }
            worldData.upgrade = {};
            worldData.likes = {};
        }
    }

    buildingCreated(world, building, engine) {
        let worldData;
        if (!this.worldsData.hasOwnProperty(world.id)) {
            worldData = this.worldsData[world.id] = {
                production: {},
                upgrade: {},
                purchase: {},
                likes: {},
                visible: world.isSelected()
            }
        } else
            worldData = this.worldsData[world.id];

        const productionGroup = worldData.production;
        // const purchaseGroup = worldData.purchase;

        const bInfo = VisualData.PLACED_BUILDINGS[building.slot];
        const depth = bInfo.depth + 100;
        const pos = bInfo.position;

        let x = pos.x + this.centerX;
        let y = pos.y + this.centerY;

        const bLevel = building.getLevel();
        //production
        const visProdGroup = engine.add.group();
        const progX = x;
        const progY = y + 60 * GlobalScale;
        const resources = bLevel === 0 ? ''  : this.getBuildingProducedResources(building);
        let text = engine.add.text(progX, progY + 10 * GlobalScale, resources, DefaultFontSmall).setOrigin(0.5, 0);
        const loader = new Loader(visProdGroup, 'Production_Progress_Bar_Back', 'Production_Progress_Bar', progX, progY, 1, true);

        const groupInfo = {
            resources: text,
            loader: loader,
            group: visProdGroup,
        };

        productionGroup[building.id] = groupInfo;
        visProdGroup.add(text);
        groupInfo.icon = visProdGroup.create(progX - 55 * GlobalScale, progY - 30 * GlobalScale, 'PriceIcon').setScale(0.6);
        animManager.jumpFishAnimation(groupInfo.icon, {
            height: 40 * GlobalScale,
            scale: 0.2,
        }, 0.6);

        if (bLevel === 0 || !worldData.visible)
            SetGroupVisible(visProdGroup, false);
        visProdGroup.setDepth(depth);

        groupInfo.icon.setDepth(depth + 5);
        //production...

        //upgrade && likes
        if (bLevel > 0) {
            this.createUpgradeGroup(world, building);
            this.createLikesGroup(world, building);
        }
        //upgrade...

        //purchase
        if (bLevel === 0)
            this.createPurchaseLabel(building, worldData);
        //upgrade...
    }

    puzzlePeaceReceived(info) {
        if (info.level === 0) {
            const worldId = Math.trunc((info.id - 1) / 9 + 1);
            const worldData = this.worldsData[worldId];
            const buildingId = info.id - (worldId - 1) * 9;
            const purchaseData = worldData.purchase[buildingId];

            if (purchaseData && purchaseData.needPuzzle) {
                purchaseData.price.setText(gameInit.progress.getPuzzlesCountForId(info.id - 1) + "/4");
            }
        }
    }

    puzzleCompleted(info) {
        if (info.level > 0) {
            const worldId = Math.trunc((info.id - 1) / 9 + 1);
            const worldData = this.worldsData[worldId];
            const buildingId = info.id - (worldId - 1) * 9;
            const purchaseData = worldData.purchase[buildingId];

            if (purchaseData) {
                if (purchaseData.needPuzzle) {
                    purchaseData.group.destroy(true);
                    const building = gameInit.getBuildingById(worldId, buildingId);
                    this.createPurchaseLabel(building, worldData);
                }
            }
        }
    }

    createPurchaseLabel(building, worldData, invisible) {
        const engine = this.engine;
        const bInfo = VisualData.PLACED_BUILDINGS[building.slot];
        const center = VisualData.VISUAL_BUILDINGS[bInfo.levels[0].building].objects[0];
        const depth = bInfo.depth + 100;
        const pos = bInfo.position;

        const purchaseGroup = worldData.purchase;

        let x = pos.x + this.centerX + (center.x || 0);
        let y = pos.y + this.centerY + (center.y || 0);

        const puzzleId = building.slot - 1;
        const puzzleInfo = gameInit.progress.getPuzzleInfoById(puzzleId);
        const needPuzzle = puzzleInfo.level < 1;

        const visPurchaseGroup = engine.add.group();

        let purchaseIcon;
        let purchaseLabel;
        if (!needPuzzle) {
            const bGUI = VisualData.GUI_BuildingsGUI;
            purchaseIcon = engine.add.sprite(x, y - 36 * GlobalScale, "PriceIcon").setScale(bGUI.purchaseIconScale);

            purchaseLabel = engine.add.text(x, y + 30 * GlobalScale, this.getBuildingUpgradePrice(building), DefaultFontSmall)
                .setOrigin(0.5, 0.5);
        } else {
            purchaseIcon = engine.add.sprite(x - 10, y + 10 * GlobalScale, "LockPuzzle").setOrigin(1, 0.5);
            purchaseLabel = engine.add.text(x, y + 10 * GlobalScale, gameInit.progress.getPuzzlesCountForId(puzzleId) + "/4", DefaultFontSmall).setOrigin(0, 0.5);

            const lockSprite = engine.add.sprite(x, y - 80 * GlobalScale, "LockIcon");
            visPurchaseGroup.add(lockSprite);
        }

        const purchaseInfo = {
            price: purchaseLabel,
            icon: purchaseIcon,
            group: visPurchaseGroup,
            needPuzzle: needPuzzle
        };

        purchaseGroup[building.id] = purchaseInfo;
        visPurchaseGroup.add(purchaseIcon);
        visPurchaseGroup.add(purchaseLabel);
        visPurchaseGroup.setDepth(depth);
        if (!worldData.visible || invisible)
            SetGroupVisible(visPurchaseGroup, false);

        building.onUnlockChanged.addListener(this.changeBuildingAvailability.bind(this));
        this.changeBuildingAvailability(building);
    }

    changeBuildingAvailability(building) {
        const worldId = Math.trunc((building.slot - 1) / 9 + 1);
        const worldsData = this.worldsData[worldId];
        const purchase = worldsData.purchase;
        if (purchase.hasOwnProperty(building.id)) {
            const purchaseInfo = purchase[building.id];
            if (building.unlocked) {
                if (!purchaseInfo.jumpAnimation)
                    purchaseInfo.jumpAnimation = animManager.fallFishAnimation(purchaseInfo.icon, {
                        height: 60 * GlobalScale,
                        scale: 0.2,
                    }, 0.6);
            } else {
                if (purchaseInfo.jumpAnimation) {
                    purchaseInfo.jumpAnimation.stopAnimation();
                    purchaseInfo.jumpAnimation = null;
                }
            }
        }
    }

    createUpgradeGroup(world, building) {
        const engine = this.engine;
        const worldData = this.worldsData[world.id];
        const upgradeGroup = worldData.upgrade ? worldData.upgrade : (worldData.upgrade = {});

        const bInfo = VisualData.PLACED_BUILDINGS[building.slot];
        const center = VisualData.VISUAL_BUILDINGS[bInfo.levels[0].building].objects[0];
        const depth = bInfo.depth + 100;
        const pos = bInfo.position;
        const bLevel = building.getLevel();

        let x = pos.x + this.centerX + (center.x || 0);
        let y = pos.y + this.centerY + (center.y || 0);

        const visUpgradeGroup = engine.add.container();
        visUpgradeGroup.setPosition(x, y);
        const upX = 0;
        const upY = 0 - 60 * GlobalScale;
        const table = visUpgradeGroup.create(upX, upY, 'TableUpgrade').setInteractive();
        const clearTimer = function () {
            if (table.timer) {
                clearInterval(table.timer);
                table.timer = null;
            }
        };

        const priceIcon = visUpgradeGroup.create(upX - 80 * GlobalScale, upY + 20 * GlobalScale, 'PriceIcon').setScale(0.55);
        let levelLabel = engine.add.text(upX - 0 * GlobalScale, upY - 40 * GlobalScale, bLevel, DefaultFont).setOrigin(0.5);
        let upgradePrice = engine.add.text(upX - 40 * GlobalScale, upY + 25 * GlobalScale, this.getBuildingUpgradePrice(building), DefaultFontSmall2).setOrigin(0, 0.5);
        const bGUI = VisualData.GUI_BuildingsGUI;
        const loaderUpgrade = new Loader(visUpgradeGroup, null, 'Upgrade_Progress_Bar', upX + bGUI.loaderOffsetX * GlobalScale, upY + bGUI.loaderOffsetY * GlobalScale, bGUI.loaderScale);
        loaderUpgrade.setProgress(building.getUpgradeProgress());

        const upgradeInfo = {
            priceIcon: priceIcon,
            level: levelLabel,
            price: upgradePrice,
            group: visUpgradeGroup,
            table: table,
            iconLoading: false,
            x: x,
            y: y,
            depth: depth,
            building: building,
            loader: loaderUpgrade,
            available: true
        };

        table.on('pointerdown', () => {
            if (!upgradeInfo.available)// not enough resources
                return;

            table.down = true;
            clearTimer();
            setTimeout(() => {
                if (table.down) {
                    clearTimer();
                    table.counter = 0;
                    table.timer = setInterval(() => {
                        if (!upgradeInfo.available)// not enough resources
                        {
                            clearTimer();
                            return;
                        }

                        clickController.buildingWasClicked(building);
                        table.counter++;
                        audioManager.playUpgrade(table.counter);
                    }, 100);
                }
            }, 500);
            clickController.buildingWasClicked(building);
            audioManager.playUpgrade(0);
        });

        table.on('pointerout', () => {
            table.down = false;
            clearTimer();
        });

        table.on('pointerup', () => {
            table.down = false;
            clearTimer();
        });

        // //TODO Temp
        // this.speed = engine.add.text(upX - 100, upY + 50, null, DefaultFontVerySmall);
        // this.profit = engine.add.text(upX, upY + 50, null, DefaultFontVerySmall);

        upgradeGroup[building.id] = upgradeInfo;
        visUpgradeGroup.add(levelLabel);
        visUpgradeGroup.add(upgradePrice);
        SetGroupVisible(visUpgradeGroup, false);
        visUpgradeGroup.setDepth(depth);
    }

    createLikesGroup(world, building) {
        const engine = this.engine;
        const worldData = this.worldsData[world.id];
        const likesGroup = worldData.likes ? worldData.likes : (worldData.likes = {});

        const bInfo = VisualData.PLACED_BUILDINGS[building.slot];
        const center = VisualData.VISUAL_BUILDINGS[bInfo.levels[0].building].objects[0];
        const depth = bInfo.depth + 100;
        const pos = bInfo.position;

        let x = pos.x + this.centerX + (center.x || 0);
        let y = pos.y + this.centerY + (center.y || 0);

        const visUpgradeGroup = engine.add.container();
        visUpgradeGroup.setPosition(x, y);
        const upX = 0;
        const upY = 0 - 60 * GlobalScale;
        const table = visUpgradeGroup.create(upX, upY, 'TableLike').setInteractive();

        const priceIcon = visUpgradeGroup.create(upX + 90 * GlobalScale, upY - 70 * GlobalScale, 'LikePlus');
        let levelLabel = engine.add.text(upX - 0 * GlobalScale, upY - 20 * GlobalScale, building.getLikes(), DefaultFont).setOrigin(0.5);

        const upgradeInfo = {
            priceIcon: priceIcon,
            level: levelLabel,
            group: visUpgradeGroup,
            table: table,
            iconLoading: false,
            x: x,
            y: y,
            depth: depth,
            building: building,
            available: true
        };

        table.on('pointerup', () => {
            clickController.buildingWasClicked(building);
        });

        likesGroup[building.id] = upgradeInfo;
        visUpgradeGroup.add(levelLabel);
        SetGroupVisible(visUpgradeGroup, false);
        visUpgradeGroup.setDepth(depth);


        building.onLikesReseted.addListener((b) => {
            if (levelLabel) {
                levelLabel.setText(b.getLikes());
            }
        });
    }

    localize() {
        super.localize();

        // for (let k in this.worldsData) {
        //     const worldData = this.worldsData[k];
        //     const upgradeGroup = worldData.upgrade;
        //     for (let up in upgradeGroup) {
        //         const info = upgradeGroup[up];
        //         this.createPurchaseLabel(info.building, worldData);
        //         info.group.destroy(true);
        //
        //         const prod = worldData.production[up];
        //         prod.isFast = false;
        //         prod.loader.setFast(false);
        //         prod.resources.text = "0";
        //         SetGroupVisible(prod.group, false);
        //     }
        //     worldData.upgrade = {};
        // }
    }

    getBuildingProducedResources(building) {
        return LocalizationManager.getLocalizedNumber(building.getProducedResources());
    }

    getBuildingUpgradePrice(building) {
        return LocalizationManager.getLocalizedNumber(building.getUpgradePrice());
    }

    buildingUpgrade(world, building) {
        const worldsData = this.worldsData[world.id];
        const purchaseData = worldsData.purchase;

        if (purchaseData.hasOwnProperty(building.id)){
            const b = purchaseData[building.id];
            b.group.destroy(true);
            if (b.jumpAnimation)
                b.jumpAnimation.stopAnimation();
            delete purchaseData[building.id];
            SetGroupVisible(worldsData.production[building.id].group, true);
        }

        if (!worldsData.upgrade.hasOwnProperty(building.id))
            this.createUpgradeGroup(world, building);

        if (!worldsData.likes.hasOwnProperty(building.id))
            this.createLikesGroup(world, building);

        const groupInfo = worldsData.upgrade[building.id];
        groupInfo.level.setText(building.getLevel());
        groupInfo.price.setText(this.getBuildingUpgradePrice(building));
        groupInfo.loader.setProgress(building.getUpgradeProgress());
    }

    resourcesUpdate(world, building) {
        const groupInfo = this.worldsData[world.id].production[building.id];
        groupInfo.resources.setText(this.getBuildingProducedResources(building));
    }

    buildingLiked(world, building) {
        const groupInfo = this.worldsData[world.id].likes[building.id];
        if (groupInfo)
            groupInfo.level.setText(building.getLikes());
    }

    productionUpdate(world, building) {
        if (building.getLevel() > 0) {
            const groupInfo = this.worldsData[world.id].production[building.id];
            if (!groupInfo.isFast) {
                if (building.getLoadingTime() < 1 && building.autoCollect) {
                    groupInfo.isFast = true;
                    groupInfo.loader.setFast(true);
                } else
                    groupInfo.loader.setProgress(building.getLoadingPercentage());
            }
            if (building.anyResources !== groupInfo.icon.visible) {
                groupInfo.icon.setVisible(building.anyResources && !groupInfo.group.invisible);
            }
        }
    }
}



class WinPhotosMainMenu extends WinWithBrownBack{
    constructor(gui, gameInit) {
        super(gui, gameInit);
    }

    localize() {
        super.localize();
        // this.description.setText(LocalizationManager.getLocalizization("CollectCropTipText"));
    }

    createGame(engine) {
        super.createGame(engine);
    }

    setWindowVisible(visible) {
        super.setWindowVisible(visible);

        if (visible) {
            if (!this.prepared) {
                this.prepared = true;
                this.config = VisualData.PHOTOS_MENU_SCROLL_CONFIG;
                this.config.x = this.centerX + this.config.offsetX * GlobalScale;
                this.config.y = this.centerY + this.config.offsetY * GlobalScale;

                this.scroll = new GUIScroll(this.engine, this.config, this.getCell.bind(this), this.getItems.bind(this));
            }
        }

        this.scroll.setVisible(visible);
    }

    getItems() {
        return GameData.getPhotoData();
    }

    getCell(cell) {
        const engine = this.engine;
        const config = this.config;
        const cellCenterX = config.cellWidth / 2 * GlobalScale;
        const cellCenterY= config.cellHeight / 2 * GlobalScale;
        const item = cell.item;

        const mySlotInfo = gameInit.progress.getPhotoQuestById(item.id);

        let group = engine.rexUI.add.container(0,0);
        group.unny_container = engine.add.container(cellCenterX, cellCenterY);
        group.add(group.unny_container);
        new BasicButton(group.unny_container, {
            'scene': engine,
            'key': 'QuestBack',
            'x': 0,
            'y': 0,
        }, ()=> {
            guiManager.openNewWindow(WindowType.WinPhotosQuest);
            guiManager.getWindowByType(WindowType.WinPhotosQuest).selectQuest(item);
        });

        const imageName = GameData.getPuzzleIcon(item.slot_id);
        const path = VisualData.getPuzzleFolder() + imageName + ".png";

        LoadFile(engine, imageName, path, () => {
            if (this.visible && group.active) {
                group.icon = engine.add.sprite(group.x / localScale + cellCenterX - 370 * GlobalScale, group.y / localScale + cellCenterY, imageName).setDepth(WinDefaultDepth + 100);
                group.add(group.icon.setScale(0.7));
                // this.scroll.fakeMove();
            }
        });

        const photoName = engine.add.textOld(cellCenterX + 80 * GlobalScale, cellCenterY - 120 * GlobalScale, 'Girl Name', DefaultFont).setOrigin(0.5);
        group.add(photoName);

        const photoDesc = engine.add.textOld(cellCenterX + 80 * GlobalScale, cellCenterY + 40 * GlobalScale, 'some description of the photo. short and concise!', DefaultFontBlack).setOrigin(0.5).setWordWrapWidth(600 * GlobalScale);
        group.add(photoDesc);

        const levelDesc = engine.add.textOld(cellCenterX + 400 * GlobalScale, cellCenterY - 120 * GlobalScale, mySlotInfo.level + "/" + MAX_PUZZLE_LEVEL, DefaultFontBlack).setOrigin(0.5);
        group.add(levelDesc);

        return group.setOrigin(0).setDepth(WinDefaultDepth + 100);
    }
}

class WinPhotosQuest extends WinWithBrownBack{
    constructor(gui, gameInit) {
        super(gui, gameInit);
        this.resourcesModules = {};
    }

    localize() {
        super.localize();
        if (this.buttonLabel)
            this.buttonLabel.setText(LocalizationManager.getLocalizization("UNLOCK"));//TODO localize
    }

    createGame(engine) {
        super.createGame(engine);
    }

    setWindowVisible(visible) {
        super.setWindowVisible(visible);

        if (visible) {
            if (!this.prepared) {
                this.prepared = true;
                const engine = this.engine;

                const centerX = this.centerX = 2000 * GlobalScale;

                this.photoName = engine.add.text(centerX, 400 * GlobalScale, null, DefaultFont).setOrigin(0.5);
                this.group.add(this.photoName);

                this.photoDesc = engine.add.text(centerX, 500 * GlobalScale, null, DefaultFontBlack).setOrigin(0.5, 0).setWordWrapWidth(1200 * GlobalScale);
                this.group.add(this.photoDesc);

                this.questDesc = engine.add.text(centerX, 1250 * GlobalScale, null, DefaultFontBlack).setOrigin(0.5, 0).setWordWrapWidth(1200 * GlobalScale);
                this.group.add(this.questDesc);

                const progressY = 1400 * GlobalScale;
                this.loader = new Loader(this.group, 'Quests_ProgressBar', 'Quests_ProgressFill', centerX - 60 * GlobalScale, progressY);
                this.questProgress = engine.add.text(centerX + 150 * GlobalScale, progressY, null, DefaultFontBlack).setOrigin(0, 0.5);
                this.group.add(this.questProgress);

                this.createActionButton(this.engine, ()=>{
                    const quest = gameInit.photoManager.getQuestById(this.lastItem.id);
                    if (quest) {
                        quest.claimReward();
                        this.selectQuest(this.lastItem);
                    }
                }, progressY + 200 * GlobalScale, true, 1, centerX, 800 * GlobalScale);

                this.localize();
            }
        } else {
            this._clearAnimatedObject();
        }

        hudResources.setVisible(visible);
    }

    _clearAnimatedObject() {
        if (this.animatedGroup) {
            this.animatedGroup.destroy(true);
            this.animatedObject = null;
            this.animatedGroup = null;
        }
    }

    selectQuest(item) {
        this.lastItem = item;

        const slot = item.slot_id;
        const level = 1;
        const bInfo = VisualData.PLACED_BUILDINGS[slot];
        const pos = {
            x: -600 * GlobalScale,
            y: 200 * GlobalScale
        };
        const levels = bInfo.levels;

        let bName = null;
        for (let i = 0;i < levels.length; i++){
            bName = levels[i].building;
            if (!levels[i].hasOwnProperty('maxLevel') || level <= levels[i].maxLevel)
                break;
        }

        if (bName) {
            const building = VisualData.VISUAL_BUILDINGS[bName];
            const objects = building.objects;
            PreloadObjects(this.engine, objects, ()=> {
                if (this.visible) {
                    this._clearAnimatedObject();

                    this.animatedGroup = this.engine.add.container(0, 0);
                    this.group.add(this.animatedGroup);
                    this.animatedObject = PrepareObject(objects, this.animatedGroup, this.engine, bInfo.depth, pos, this.buildingWasClicked.bind(this));
                }
            });
        }

        this.photoName.setText("Photo name");
        this.photoDesc.setText("Photo description. Photo description. Photo description. Photo description. Photo description. Photo description. Photo description. Photo description. Photo description. Photo description. Photo description. Photo description. Photo description. ");

        const mySlotInfo = gameInit.progress.getPhotoQuestById(item.id);
        console.info("item " + mySlotInfo.level, item);
        if (mySlotInfo.level < item.levels.length) {
            const questByLevel = item.levels[mySlotInfo.level];
            const price = questByLevel.price;

            for (let i in this.resourcesModules)
                this.resourcesModules[i].setVisible(false);

            const quest = gameInit.photoManager.getQuestById(item.id);

            if (quest) {
                this.activeResources = [];

                for (let i in price) {
                    const p = price[i];
                    let pGroup;
                    if (this.resourcesModules.hasOwnProperty(p.typePrice)) {
                        pGroup = this.resourcesModules[p.typePrice];
                        pGroup.setVisible(true);
                    }
                    else {
                        pGroup = this.resourcesModules[p.typePrice] = this.engine.add.container(0, 0).setDepth(WinDefaultDepth + 1000);
                        this.group.add(pGroup);
                        const sprite = this.engine.add.sprite(0, -60 * GlobalScale, GameData.getIconByType(p.typePrice));
                        pGroup.unny_text = this.engine.add.text(0, 60 * GlobalScale, null, DefaultFontBlack).setOrigin(0.5);

                        pGroup.add(sprite);
                        pGroup.add(pGroup.unny_text);
                    }

                    pGroup.unny_text.setText(LocalizationManager.getLocalizedNumberString(p.price.toString()));
                    this.activeResources.push(pGroup);
                }

                const distance = 250 * GlobalScale;

                let x = this.centerX - distance * (this.activeResources.length - 1) / 2;

                for (let i in this.activeResources) {
                    this.activeResources[i].setPosition(x, 1100 * GlobalScale);
                    x += distance;
                }

                const qText = LocalizationManager.getLocalizization(questByLevel.info).format(quest.count);
                this.questDesc.setText(qText);

                this.loader.setProgress(Math.min(1, quest.progress / quest.count));
                this.questProgress.setText(quest.progress + "/" + quest.count);

                const showBtn = quest.progress >= quest.count;
                this.actionButton.setVisible(showBtn);
                this.buttonLabel.setVisible(showBtn);
                return;
            }
        }

        this.actionButton.setVisible(false);
        this.buttonLabel.setVisible(false);
        this.loader.setVisible(false);
        this.questProgress.setVisible(false);
        this.questDesc.setText("COMPLETE THE PUZZLE TO UNLOCK THE QUEST");
    }

    buildingWasClicked() {
        if (this.animatedObject)
            this.animatedObject.playAction(true);
    }
}

const GUIMode = {
    Normal: 1,
    UpgradeBuildings: 2,
    Boss: 3,
    Likes: 4,
};

const WindowType = {
    WinMain: 0,
    WinConstruct: 1,
    WinBuildings: 2,
    WinUpgrade: 3,
    WinStore: 4,
    WinPuzzle: 5,
    WinBossSummon: 6,
    WinBossProccess: 7,
    WinHarvested: 8,
    WinFortuneWheel: 9,
    WinQuests: 10,
    WinSupervisor: 11,
    WinGuard: 12,
    WinDaily: 13,
    WinDropPuzzle: 14,
    WinNoAdd: 15,
    WinNotEnoughGems: 16,
    WinWaiting: 17,
    WinFreeUpgrade: 18,
    WinTimeTravel: 19,
    WinApples: 20,
    WinBanjoEnd: 21,
    WinBanjoPreEnd: 22,
    WinSettings: 23,
    WinAdBLock: 24,
    WinOtherWorlds: 25,
    WinPhotosMainMenu: 26,
    WinPhotosQuest: 27,
    WinPhotosAll: 28,
    WinInAppBought: 29
};

class GUIManager {

    constructor(gameInit) {
        gameInit.create.addListener(this.create.bind(this));
        gameInit.preload.addListener(this.preload.bind(this));
        gameInit.onBuildingCreated.addListener(this.buildingCreated.bind(this));
        gameInit.onBuildingUpdated.addListener(this.buildingUpdated.bind(this));
        gameInit.onBuildingLiked.addListener(this.buildingLiked.bind(this));
        gameInit.onBuildingResourcesUpdated.addListener(this.buildingResourcesUpdated.bind(this));
        gameInit.onBuildingUpgraded.addListener(this.buildingUpgraded.bind(this));
        clickController.onBuildingClicked.addListener(this.buildingClicked.bind(this));
        this.onBuildingCreated = new UnnyAction();
        this.onBuildingUpgraded = new UnnyAction();
        this.onBuildingUpdated = new UnnyAction();
        this.onBuildingLiked = new UnnyAction();
        this.onResourcesUpdated = new UnnyAction();
        this.onBuildingResourcesUpdated = new UnnyAction();
        this.onReset = new UnnyAction();

        this.onModeChanged = new UnnyAction();
        this.onCreate = new UnnyAction();
        this.guiMode = GUIMode.Normal;

        this.allWindows = [];
        this.allWindows[WindowType.WinMain] = new WinMain(this, gameInit);
        this.allWindows[WindowType.WinConstruct] = new WinConstruct(this, gameInit);
        this.allWindows[WindowType.WinBuildings] = new BuildingsGUI(this, gameInit);
        this.allWindows[WindowType.WinUpgrade] = new WinUpgrade(this, gameInit);
        this.allWindows[WindowType.WinStore] = new WinStore(this, gameInit);
        this.allWindows[WindowType.WinPuzzle] = new WinPuzzle(this, gameInit);
        this.allWindows[WindowType.WinBossSummon] = new WinBossSummon(this, gameInit, {
            header: "CollectCropTitle",
            description: "CollectCropText",
            image: "CollectCrop",
            button: "CollectCropStartButton",
            action: ()=>this.changeMode(GUIMode.Boss)
        });
        this.allWindows[WindowType.WinBossProccess] = new WinBossProccess(this, gameInit);
        this.allWindows[WindowType.WinHarvested] = new WinHarvested(this, gameInit);
        this.allWindows[WindowType.WinFortuneWheel] = new WinFortuneWheel(this, gameInit);
        this.allWindows[WindowType.WinQuests] = new WinQuests(this, gameInit);
        this.allWindows[WindowType.WinSupervisor] = new WinWithUnlockedExitButton(this, gameInit, {
            header: "BanjoTitle",
            description: "BanjoDesc",
            image: "Banjo",
            button: "BanjoButtonText",
            btn_min_width: 1700 * GlobalScale,
            icon: 'AdCam',
            action: ()=>{
                PlayRewardedAd(()=> {
                    gameAnalytics.sendEvent("Ad_Banjo");
                    gameInit.progress.activateSupervisor();
                    this.getWindowByType(WindowType.WinMain).playBreadAnimation();
                });
            }
        });
        this.allWindows[WindowType.WinGuard] = new WinGuard(this, gameInit, {
            header: "RainTitle",
            description: "RainDescFreeProSpecial",
            image: "Cloud",
            button: "RainButtonText",
            btn_min_width: 1000 * GlobalScale,
            icon: 'AdCam',
            action: ()=>{
                PlayRewardedAd(()=> {
                    gameAnalytics.sendEvent("Ad_Rain");
                    gameInit.progress.activateGuard();
                });
            }
        });
        this.allWindows[WindowType.WinDaily] = new WinDailyBonus(this, gameInit);
        this.allWindows[WindowType.WinDropPuzzle] = new WinDropPuzzle(this, gameInit);

        this.allWindows[WindowType.WinNoAdd] = new WinWithPicture(this, gameInit, {
            header: "NoAdTitle",
            description: "NoAdText",
            image: "NoAdAndRatings",
            button: "ButtonOk",
            no_exit: true,
        });

        this.allWindows[WindowType.WinAdBLock] = new WinWithPicture(this, gameInit, {
            header: "NoAdTitle",
            description: "AdBlock",
            image: "NoAdAndRatings",
            button: "ButtonOk",
            no_exit: true,
        });

        this.allWindows[WindowType.WinOtherWorlds] = new WinWithPicture(this, gameInit, {
            header: "LocationsNotOpenedWindowTitle",
            description: "LocationsNotOpenedWindowDesc",
            image: "OtherWorldsLocked",
            button: "ButtonOk",
            no_exit: true,
            smallFont: true,
            wordWrapWidth: 1000
        });

        this.allWindows[WindowType.WinInAppBought] = new WinInAppBought(this, gameInit, {
            header: "GetPuzzlePartTitle",
            description: "PopupInApp",
            image: "FortuneDevil",
            button: "ButtonOk",
            no_exit: true,
            imageX: 100,
            imageY: 70,
            scaleImage: 0.9
        });

        this.allWindows[WindowType.WinNotEnoughGems] = new WinWithPicture(this, gameInit, {
            description: "NotEnoughGemsText",
            image: "NotEnoughGems",
            button: "ButtonOk",
            imageX: 100,
            action: ()=>this.openGemsStore()
        });

        this.allWindows[WindowType.WinWaiting] = new WinWithPicture(this, gameInit, {
            description: "GiftWindowGettingInfo",
            image: "Wait",
            no_exit: true,
        });

        this.allWindows[WindowType.WinFreeUpgrade] = new WinWithPicture(this, gameInit, {
            header: 'PurchaseForAdWindowTitle',
            description: "PurchaseForAdWindowDesc",
            image: "Clockwork_icon_big",
            button: "ButtonOk",
        });

        this.allWindows[WindowType.WinTimeTravel] = new WinTimeTravel(this, gameInit, {
            description: "TimeTravelWindowText",
            image: "TimeTravel4h",
            button: "ButtonOk",
        });

        this.allWindows[WindowType.WinApples] = new WinAppleDescription(this, gameInit, {
            header: "SeedInfoTitle",
            image: "AppleInfo",
            imageY: 300
        });

        this.allWindows[WindowType.WinBanjoEnd] = new WinBanjoEnd(this, gameInit, {
            header: "BanjoEndTitle",
            description: "BanjoEndDesc",
            image: "BanjoEnd",
            button: "ButtonOk",
            no_exit: true,
        });

        this.allWindows[WindowType.WinBanjoPreEnd] = new WinBanjoPreEnd(this, gameInit, {
            header: "BanjoEndTitle",
            image: "MultiplyOnStart",
            imageX: 200,
            no_exit: true,
            descriptionX: 350,
            descriptionY: 100,
        });

        this.allWindows[WindowType.WinSettings] = new WinSettings(this, gameInit);

        if (VisualData.getGameSettings().photos) {
            this.allWindows[WindowType.WinPhotosMainMenu] = new WinPhotosMainMenu(this, gameInit);
            this.allWindows[WindowType.WinPhotosQuest] = new WinPhotosQuest(this, gameInit);
        }

        this.activeWindows = [];
        this.activeWindows.push(this.allWindows[WindowType.WinMain]);

        for (let i in this.allWindows) {
            const win = this.allWindows[i];
            win.winType = i;
            // win.setWindowVisible(false);
            win.onClose.addListener(this.onWindowsClosed.bind(this));
        }

        clickController.onFabrikaWasClicked.addListener((action)=>{
            if (action === 'down' && this.isNormalMode() && !gameInit.progress.isSupervisorActive())
                this.openNewWindow(WindowType.WinBossSummon);
        });
        clickController.onPodkovaWasClicked.addListener((action)=>{
            if (action === 'down' && this.isNormalMode() && !gameInit.progress.isSupervisorActive())
                this.openNewWindow(WindowType.WinGuard)
        });

        eventManager.onHarvestCompleted.addListener((seeds)=>{
            const win = this.openNewWindow(WindowType.WinHarvested, true);
            win.setApplesAcount(seeds);
        });
    }

    preload() {
        CalculateFonts();
    }

    _checkForNewPopup() {
        if (this.popups.length > 0) {
            const info = this.popups[0];
            this.popup.textLabel.setText(info.text);
            this.popup.setVisible(true);
            this.popups.splice(0, 1);
            audioManager.playInfo();

            let iconToDestroy = null;
            if (info.icon) {
                iconToDestroy = this.engine.add.sprite(this.popup.thumb.x, this.popup.thumb.y, info.icon);
                this.popup.add(iconToDestroy);
                this.popup.thumb.setVisible(false);
            } else
                this.popup.thumb.setVisible(true);

            this.popupTimer = setTimeout(()=>{
                this.popup.setVisible(false);

                if (iconToDestroy)
                    iconToDestroy.destroy(true);

                setTimeout(()=> {
                    this.popupTimer = null;
                    this._checkForNewPopup();
                }, 500);
            }, 2000);
        }
    }

    showPopup(text, icon) {
        this.popups.push({
            text: text,
            icon: icon
        });

        if (!this.popupTimer)
            this._checkForNewPopup();
    }

    createPopup(engine) {
        this.popups = [];
        this.popup = engine.add.container();
        const back = engine.add.sprite(0, 0, 'Popup').setOrigin(0, 0.5);
        this.popup.thumb = engine.add.sprite(-10 * GlobalScale, -20 * GlobalScale, 'PopupThumbsUp');
        this.popup.textLabel = engine.add.text(50 * GlobalScale, 0, '+100%', DefaultFontSmall2).setOrigin(0, 0.5);
        this.popup.add(back);
        this.popup.add(this.popup.thumb);
        this.popup.add(this.popup.textLabel);

        this.popup.setPosition(RealScreenWidth - back.width * imagesDeltaScale - 100 * GlobalScale, RealScreenHeight * 0.4);
        this.popup.setDepth(WinDefaultDepth + 1000);
        this.popup.setVisible(false);

        eventManager.onUpgradePurchased.addListener(()=>{
            this.showPopup(LocalizationManager.getLocalizization("PopupMarketUpgrade"));
        });
        eventManager.onMacroUpgraded.addListener((building, bonus)=>{
            let text = "Unknown";
            switch (bonus.upgradeType) {
                case 'SpeedUp':
                    text = LocalizationManager.getLocalizization("PopupSpeedUpMacro");
                    break;
                case 'MultiProfit':
                    text = LocalizationManager.getLocalizization("PopupMultiprofitMacro").format(bonus.parameter);
                    break;
            }
            this.showPopup(text, building.getSmallIcon());
        });
    }

    onWindowsClosed(window) {
        const wins = this.activeWindows;
        if (wins[wins.length - 1] === window) {
            wins.pop();
            wins[wins.length - 1].setWindowVisible(true);
        } else {
            for (let i in wins) {
                if (wins[i] === window) {
                    wins.splice(i, 1);
                    break;
                }
            }
        }

        this._checkForProduction();
    }

    _checkForProduction() {
        const wins = this.activeWindows;
        const type = this.getActiveWindow().winType;
        const showGUI = wins.length === 1;
        const show = showGUI || type == WindowType.WinBossProccess;

        visualGame.setBuildingsProductionVisible(gameInit.selectedWorld, show);
        visualGame.setGameObjectsVisible(showGUI);

        if (type != WindowType.WinUpgrade)
            this.allWindows[WindowType.WinBuildings].showNormal(showGUI, false, false, gameInit.selectedWorld);

        if (type === WindowType.WinMain) {
            this.checkForTutorialPhrase();
        } else
            this.hideTutorialText();
    }

    showTimeTravel(minutes, image) {
        const windowType = WindowType.WinTimeTravel;
        const win = this.allWindows[windowType];
        win.setTravelTime(minutes, image);
        this.openNewWindow(windowType);
    }

    openGemsStore() {
        const windowType = WindowType.WinStore;
        const win = this.allWindows[windowType];
        win.setGemsPage();
        this.openNewWindow(windowType);
    }

    getWinTypeAtTheTop() {
        return this.activeWindows[this.activeWindows.length - 1].winType;
    }

    getActiveWindow() {
        return this.activeWindows[this.activeWindows.length - 1];
    }

    getWindowByType(windowType) {
        return this.allWindows[windowType];
    }

    openNewWindow(windowType, closePrevious) {
        const wins = this.activeWindows;
        const win = this.allWindows[windowType];

        if (win === wins[wins.length - 1])
            return win;

        if (closePrevious) {
            wins[wins.length - 1].closeWindow();
            return this.openNewWindow(windowType, false);
        }
        else
            wins[wins.length - 1].setWindowVisible(false);

        win.setWindowVisible(true);
        wins.push(win);

        this._checkForProduction();
        return win;
    }

    isNormalMode() {
        return this.guiMode === GUIMode.Normal;
    }

    changeMode(newMode) {
        const worldID = gameInit.selectedWorld;
        this.guiMode = newMode;
        this.onModeChanged.callListeners(this.guiMode, worldID);

        // visualGame.setBuildingsProductionVisible(worldID, this.guiMode !== GUIMode.UpgradeBuildings);

        switch (newMode) {
            case GUIMode.UpgradeBuildings:
            case GUIMode.Likes:
                this.openNewWindow(WindowType.WinUpgrade);
                break;
            case GUIMode.Boss:
                audioManager.playWorldMusic(0);
                gameInit.progress.harvestStarted();
                this.createHarvestAnimation();
                this.openNewWindow(WindowType.WinBossProccess);
                this.harvestBuildings = visualGame.prepareForHarvest();
                break;
        }
    }

    createHarvestAnimation() {
        PrepareAndCreateObject(VisualData.FACTORY_WORKING, null, this.engine, OverlayDepth + WinDefaultDepth, (splitAnimation) => {
            this.harvesting = splitAnimation;
            if (this.guiMode !== GUIMode.Boss)
                this.stopHarvestingAnimation();
            else
                this.harvesting.obj.setPosition(this.harvesting.obj.x / localScale, this.harvesting.obj.y / localScale + 774 * GlobalScale);
        });
    }

    stopHarvestingAnimation() {
        if (this.harvesting) {
            this.harvesting.destroy(true);
            this.harvesting = null;
        }
    }

    localize() {
        for (let i in this.allWindows)
            this.allWindows[i].localize();
    }

    create(engine) {
        this.engine = engine;
        this.onCreate.callListeners(engine);

        for (let i in this.allWindows)
            this.allWindows[i].localize();

        this.activeWindows[0].setWindowVisible(true);

        gameInit.progress.onPuzzlePeaceReceived.addListener(this.puzzleReceived.bind(this));
        gameInit.progress.onUpgradePurchased.addListener(this.upgradePurchased.bind(this));

        this.tutorialLabel = engine.add.text(VisualData.MAP_PARAMS.center.x, RealScreenHeight - 60 * GlobalScale, null, DefaultFontBig).setOrigin(0.5, 0.5).setDepth(WinDefaultDepth - 2000);
        this.hideTutorialText();

        this.createPopup(engine);
    }

    checkForTutorialPhrase() {
        if (this.tutorialLabel.text)
            this.tutorialLabel.setVisible(true);
    }

    setTutorialPhrase(text) {
        this.tutorialLabel.setText(text);
        this.tutorialLabel.setVisible(text != null && this.getActiveWindow().winType == WindowType.WinMain);
    }

    hideTutorialText(){
        this.tutorialLabel.setVisible(false);
    }

    upgradePurchased(bonus) {
        switch (bonus.upgradeType) {
            case 'TimeTravel':
                this.showTimeTravel(bonus.parameter / 60, WinStore.getImageName(bonus));
                break;
        }
    }

    puzzleReceived(prevImg, imageId, piece, duplicate, normal){
        const win = this.openNewWindow(WindowType.WinDropPuzzle);
        win.dropPuzzle(prevImg, imageId, piece, duplicate, normal);
    }

    buildingUpgraded(world, building) {
        this.onBuildingUpgraded.callListeners(world, building, this.engine);
    }

    buildingCreated(world, building) {
        this.onBuildingCreated.callListeners(world, building, this.engine);
    }

    buildingLiked(world, building) {
        this.onBuildingLiked.callListeners(world, building, this.engine);
    }

    buildingUpdated(world, building) {
        this.onBuildingUpdated.callListeners(world, building, this.engine);
    }

    buildingResourcesUpdated(world, building) {
        this.onBuildingResourcesUpdated.callListeners(world, building);
    }

    tryToUpgradeBuilding(buildingInterface) {
        if (gameInit.progress.isResourcesEnough(buildingInterface.getUpgradePrice())) {
            buildingInterface.upgradeBuilding();
        }
    }

    tryToConstructBuilding(buildingInterface) {
        if (gameInit.progress.isSupervisorActive())
            return;

        if (gameInit.progress.isResourcesEnoughForConstruction(buildingInterface)) {
            const win = this.openNewWindow(WindowType.WinConstruct);
            win.setInfo(buildingInterface);
        }
    }

    buildingClicked(buildingInterface) {
        // console.log("buildingClicked " + this.guiMode + " : " + buildingInterface.harvest);
        switch (this.guiMode) {
            case GUIMode.Normal: {
                if (buildingInterface.getLevel() === 0)
                    this.tryToConstructBuilding(buildingInterface);
                else
                    buildingInterface.buildingWasClicked();
                break;
            }
            case GUIMode.UpgradeBuildings:
                if (buildingInterface.getLevel() > 0)
                    this.tryToUpgradeBuilding(buildingInterface);
                break;
            case GUIMode.Boss:
                if (!buildingInterface.harvest) {
                    this.harvestBuildings--;
                    if (!this.harvestBuildings) {
                        this.changeMode(GUIMode.Normal);

                        gameInit.harvestCompleted();
                        this.stopHarvestingAnimation();
                        this.onReset.callListeners();
                        audioManager.playWorldMusic(1);
                    }
                }
                break;
        }
    }
}

const guiManager = new GUIManager(gameInit);

class Tutorial {
    constructor() {
        this.depth = WinDefaultDepth + 900;
        this.guardShown = false;
        this.supervisorShown = false;
        this.fortuneShown = false;
    }

    loaded(progress) {
        const phase = progress.getTutorialPhase();
        if (phase !== TutPhases.TutorialEnd) {
            this.newMethod = tutorial.update.bind(tutorial);
            gameInit.update.addListener(this.newMethod);

            if (phase >= TutPhases.FortuneWheel && phase <= TutPhases.FortuneWheel) {
                for (let i = 0; i <= TutPhases.WaitForSummonToEnd; i++)
                    this.preparePhase(i);
                for (let i = TutPhases.FortuneWheel; i <= phase; i++)
                    this.preparePhase(i);
            } else {
                for (let i = 0; i <= phase; i++)
                    this.preparePhase(i);
            }
        }
    }

    stopTutorial(){
        gameInit.update.removeListener(this.newMethod);
        guiManager.setTutorialPhrase(null);
        this.finger.destroy(true);
        this.circle.destroy(true);
    }

    pointAtPosition(pos, center, useScale) {
        this.finger.setVisible(true);
        const x = (useScale ? pos.x / localScale : pos.x) + (center ? 0 : VisualData.MAP_PARAMS.center.x);
        const y = (useScale ? pos.y / localScale : pos.y) + (center ? 0 : VisualData.MAP_PARAMS.center.y);
        this.finger.setPosition(x, y);
        this.circle.setPosition(x, y);

        // console.log("Point " + x + " > " + y + " > " + pos.x + " > center " + center);

        if (!this.animation) {
            setTimeout(() => {
                if (this.finger.visible && !this.animation) {
                    this.animation = 1;
                    this.circle.setVisible(true);
                    this.animation = animManager.scaleAlphaInfinite(this.circle, 0.833);
                }
            }, 600);
        } else
            this.circle.setVisible(true);
    }

    _isWindow(winType) {
        return this.lastWindow == winType;
    }

    _lockAtButton(btn, center) {
        lockGuiAtButton(btn);
        if (btn.getParentObject) {
            const p = btn.getParentObject();
            this.pointAtPosition({
                x: p.x / localScale,
                y: p.y / localScale + (0.5 - btn.originY) * btn.height
            }, center);
        } else
        if (btn.originY && btn.originY !== 0.5) {
            this.pointAtPosition({
                x: btn.x,
                y: btn.y + (0.5 - btn.originY) * btn.height
            }, center);
        } else {
            this.pointAtPosition(btn, center);
        }
    }

    _hideFinger() {
        this.finger.setVisible(false);
        this.circle.setVisible(false);
    }

    _getFirstSlotPosition() {
        const pos = VisualData.PLACED_BUILDINGS[1].position;
        const key = VisualData.PLACED_BUILDINGS[1].levels[0].building;
        const offset = VisualData.VISUAL_BUILDINGS[key].objects[0];
        return {
            x: pos.x + offset.x,
            y: pos.y + offset.y,
        };
    }

    preparePhase(phase) {
        this.phase = phase;
        this.lastWindow = guiManager.getWinTypeAtTheTop();
        this.lastTab = 0;
        guiManager.setTutorialPhrase(this.getPhaseLocalization());

        switch (this.phase) {
            case TutPhases.BuildSlot1:
                if (this._isWindow(WindowType.WinMain)) {
                    this.pointAtPosition(this._getFirstSlotPosition());
                    lockGuiEverything();
                    guiManager.getActiveWindow().hideAllButtonsForTutorial();
                } else {
                    if (this._isWindow(WindowType.WinConstruct)) {
                        this._lockAtButton(guiManager.getActiveWindow().getTutorialButton());
                    }
                }
                break;
            case TutPhases.Collect1:
                this._hideFinger();
                lockGuiEverything();
                break;
            case TutPhases.UpgradeBuilding:
            case TutPhases.UpgradeBuilding5:
                if (this._isWindow(WindowType.WinMain)) {
                    const win = guiManager.getActiveWindow();
                    win.showUpgradeButton();
                    lockAtOneAnimatedObject(win);
                    this._lockAtButton(win.getUpgradeButton(), true);
                } else {
                    if (this._isWindow(WindowType.WinUpgrade)) {
                        lockGuiEverything();
                        unlockAnimatedObject();
                        this.pointAtPosition(this._getFirstSlotPosition());
                    }
                }
                break;
            case TutPhases.Collect1k:
            case TutPhases.Collect10k:
                unlockAnimatedObject();
                this._hideFinger();
                unlockGUI();
                break;
            case TutPhases.BuyAutoCollect:
                if (this._isWindow(WindowType.WinMain)) {
                    GlobalInputLocked = true;
                    const win = guiManager.getActiveWindow();
                    win.showStoreButton();
                    this._lockAtButton(win.getStoreButton(), true);
                } else {
                    if (this._isWindow(WindowType.WinStore)) {
                        GlobalInputLocked = false;
                        const win = guiManager.getActiveWindow();
                        this._lockAtButton(win.getFirstUpgradeSlot(), true);
                        win.scroll.setScrollerEnable(false);
                    }
                }
                break;
            case TutPhases.Boost4h:
                if (this._isWindow(WindowType.WinMain)) {
                    if (this.guardShown)
                        this.moveToNextPhase();
                    else {
                        lockAtOneAnimatedObject(visualGame.getGuard());
                        GlobalInputLocked = false;
                        lockGuiEverything();
                        visualGame.showGuard();
                        this.pointAtPosition(visualGame.getGuard().obj, true, true);
                    }
                } else {
                    if (this._isWindow(WindowType.WinGuard) || this._isWindow(WindowType.WinNoAdd)) {
                        this._lockAtButton(guiManager.getActiveWindow().getTutorialButton());
                        this.guardShown = true;
                    }
                }
                break;
            case TutPhases.Boost6s:
                if (this._isWindow(WindowType.WinMain)) {
                    if (this.supervisorShown)
                        this.moveToNextPhase();
                    else {
                        unlockAnimatedObject();
                        GlobalInputLocked = true;
                        const win = guiManager.getActiveWindow();
                        win.showSuperVisorButton();
                        this._lockAtButton(win.getSuperVisorButton(), true);
                    }
                } else {
                    if (this._isWindow(WindowType.WinSupervisor) || this._isWindow(WindowType.WinNoAdd)) {
                        this._lockAtButton(guiManager.getActiveWindow().getTutorialButton());
                        this.supervisorShown = true;
                    }
                }
                break;
            case TutPhases.FortuneWheel:
                if (this._isWindow(WindowType.WinMain)) {
                    if (this.fortuneShown) {
                        this.moveToNextPhase();
                    }
                    else {
                        unlockAnimatedObject();
                        GlobalInputLocked = true;
                        const win = guiManager.getActiveWindow();
                        this._lockAtButton(win.getFortuneWheelButton(), true);
                    }
                } else {
                    if (this._isWindow(WindowType.WinFortuneWheel) || this._isWindow(WindowType.WinNoAdd)) {
                        this._lockAtButton(guiManager.getActiveWindow().getTutorialButton());
                        this.fortuneShown = true;
                    }
                }
                break;
            case TutPhases.FortuneWheelEnded: {
                if (this._isWindow(WindowType.WinMain))
                    this.moveToNextPhase();
                break;
            }
            case TutPhases.BuildSlots6:
            case TutPhases.BuildSlots9:
                this._hideFinger();
                unlockAnimatedObject();
                unlockGUI();
                break;
            case TutPhases.SummonBoss:
                lockGuiEverything();
                lockAtOneAnimatedObject(visualGame.getBoss());
                if (this._isWindow(WindowType.WinMain)) {
                    visualGame.updateBossState();
                    this.pointAtPosition(visualGame.getBoss().obj, true, true);
                } else {
                    if (this._isWindow(WindowType.WinBossSummon)) {
                        this._lockAtButton(guiManager.getActiveWindow().getTutorialButton());
                    } else {
                        if (this._isWindow(WindowType.WinBossProccess)) {
                            this._hideFinger();
                            unlockGUI();
                            unlockAnimatedObject();
                        }
                    }
                }
                break;
            case TutPhases.WaitForSummonToEnd:
                unlockAnimatedObject();
                unlockGUI();
                guiManager.getWindowByType(WindowType.WinMain).showAllButtonsFromTutorial();
                break;
            case TutPhases.PuzzlesAvailable:
                GlobalInputLocked = true;
                if (this._isWindow(WindowType.WinMain)) {
                    const win = guiManager.getActiveWindow();
                    this._lockAtButton(win.getPuzzlesButton(), true);
                } else {
                    if (this._isWindow(WindowType.WinPuzzle)) {
                        const win = guiManager.getActiveWindow();
                        this.lastTab = win.getSelectedTab();
                        if (this.lastTab === 0)
                            this._lockAtButton(win.getBoxesTab(), true);
                        else
                            this._lockAtButton(win.getPuzzleOpenBox(), true);

                        win.scroll[1].setScrollerEnable(false);
                    }
                }
                break;
            case TutPhases.TutorialEnd:
                GlobalInputLocked = false;
                this.stopTutorial();
                break;
        }
    }
    
    getPhaseLocalization() {
        let local = null;
        switch (this.phase) {
            case TutPhases.Collect20:
            case TutPhases.Collect1k:
            case TutPhases.Collect10k:
                return LocalizationManager.getLocalizization("CollectGold").format(this._getRequiredResourcesForUI());
            case TutPhases.Boost4h:
                local = "Step9";
                break;
            case TutPhases.PuzzlesAvailable:
            case TutPhases.BuildSlots9:
                local = "Step" + (this.phase);
                break;
            case TutPhases.WaitForSummonToEnd:
            case TutPhases.FortuneWheel:
            case TutPhases.FortuneWheelEnded:
                return null;
            default:
                local = "Step" + (this.phase + 1);
                break;
        }

        return LocalizationManager.getLocalizization(local);
    }

    onCreated(engine) {
        this.engine = engine;

        const name = "Tut_Finger";
        const allObj = VisualData.ALL_OBJECTS[name];
        this.finger = this.engine.add.spine(0, 0, name, allObj.animations.idle, true).setDepth(this.depth).setScale(1);
                // this.finger = this.engine.add.sprite(0, 0, "Tut_Finger").setDepth(this.depth).setOrigin(0.4, 0);
        this.circle = this.engine.add.sprite(0, 0, "Tut_Circle").setDepth(this.depth - 1);
        this._hideFinger();
    }

    moveToNextPhase() {
        switch (this.phase) {
            case TutPhases.FortuneWheelEnded:
                this.phase = TutPhases.PuzzlesAvailable;
                break;
            case TutPhases.WaitForSummonToEnd:
                this.phase = TutPhases.FortuneWheel;
                break;
            default:
                this.phase++;
                break;
        }

        gameInit.progress.setTutorialPhase(this.phase);
        // console.log("MOVE to " + this.phase);
        gameAnalytics.sendEvent("Tutorial", {
            "phase": this.phase
        });
        this.preparePhase(this.phase);
    }

    _getRequiredResourcesForUI() {
        switch (this.phase) {
            case TutPhases.Collect1: return 1;
            case TutPhases.Collect20: return 20;
            case TutPhases.Collect1k: return 1000;
            case TutPhases.Collect10k: return 10000;
        }
        return 0;
    }

    _getRequiredResources() {
        return this._getRequiredResourcesForUI() * RESOURCES_SCALE;
    }

    _getRequiredUpgrades() {
        switch (this.phase) {
            case TutPhases.UpgradeBuilding: return 1;
            case TutPhases.UpgradeBuilding5: return 4;
        }
        return 0;
    }

    update() {
        const win = guiManager.getActiveWindow();
        if (this.lastWindow != guiManager.getWinTypeAtTheTop() || (win.selectedTab && win.selectedTab !== this.lastTab)) {
            if (this.phase !== TutPhases.WaitForSummonToEnd)
                this.preparePhase(this.phase);
        }

        switch (this.phase) {
            case TutPhases.BuildSlot1:
                if (gameInit.progress.isBuildingConstructed(1, 1))
                    this.moveToNextPhase();
                break;
            case TutPhases.Collect1:
            case TutPhases.Collect20:
                if (!this.fingerAnimation && gameInit.getBuildingById(1, 1).anyResources) {
                    this.pointAtPosition(this._getFirstSlotPosition());
                    this.fingerAnimation = animManager.swipeInfinite(this.finger, 1);
                    this.circle.setVisible(false);
                }
                if (gameInit.progress.getTotalResources().compare(this._getRequiredResources()) >= 0) {
                    if (this.phase === TutPhases.Collect20) {
                        if (this.fingerAnimation) {
                            this.fingerAnimation.stopAnimation();
                            this.fingerAnimation = null;
                        }
                        this._hideFinger();
                    }
                    this.moveToNextPhase();
                }
                break;
            case TutPhases.Collect1k:
            case TutPhases.Collect10k:
                if (gameInit.progress.getTotalResources().compare(this._getRequiredResources()) >= 0)
                    this.moveToNextPhase();
                break;
            case TutPhases.UpgradeBuilding:
            case TutPhases.UpgradeBuilding5:
                const b = gameInit.getBuildingById(1, 1);
                if (b.getLevel() > this._getRequiredUpgrades()) {
                    if (this.phase === TutPhases.UpgradeBuilding5) {
                        this._hideFinger();
                    }
                    this.moveToNextPhase();
                }
                break;
            case TutPhases.BuyAutoCollect:
                 const id = VisualData.getAutoClickSlot1Id();
                 if (gameInit.progress.isUpgradePurchased(id)) {
                     const win = guiManager.getWindowByType(WindowType.WinStore);
                     win.scroll.setScrollerEnable(true);
                     unlockGUI();
                     this._hideFinger();
                     this.moveToNextPhase();
                 }
                break;
            case TutPhases.Boost4h:
                if (gameInit.progress.isGuardActive()) {
                    this._hideFinger();
                    this.moveToNextPhase();
                }
                break;
            case TutPhases.Boost6s:
                if (gameInit.progress.isSupervisorActive()) {
                    GlobalInputLocked = false;
                    this._hideFinger();
                    this.moveToNextPhase();
                }
                break;
            case TutPhases.BuildSlots6:
                if (gameInit.progress.getConstructedBuildingsCount() >= 6) {
                    this._hideFinger();
                    this.moveToNextPhase();
                }
                break;
            case TutPhases.BuildSlots9:
                if (gameInit.progress.getConstructedBuildingsCount() >= 7) {
                    this._hideFinger();
                    this.moveToNextPhase();
                }
                break;
            case TutPhases.SummonBoss: {
                if (gameInit.progress.getHarvestsCount() >= 1) {
                    this._hideFinger();
                    this.moveToNextPhase();
                }
                break;
            }
            case TutPhases.WaitForSummonToEnd: {
                if (guiManager.getWinTypeAtTheTop() == WindowType.WinMain)
                    this.moveToNextPhase();
                break;
            }
            case TutPhases.PuzzlesAvailable: {
                if (gameInit.progress.getOpenedBoxes() > 0) {
                    this._hideFinger();
                    this.moveToNextPhase();

                    const win = guiManager.getWindowByType(WindowType.WinPuzzle);
                    if (win.scroll)
                        win.scroll[1].setScrollerEnable(true);
                }
                break;
            }

        }
    }

    onAdStarted() {
        switch (this.phase) {
            case TutPhases.FortuneWheel:
                this._hideFinger();
                this.moveToNextPhase();
                break;
        }
    }
}

const tutorial = new Tutorial();
if (!VisualData.getGameSettings().no_tutorial) {
    eventManager.onAdStarted.addListener(tutorial.onAdStarted.bind(tutorial));
    eventManager.onFortuneWheelUsed.addListener(tutorial.onAdStarted.bind(tutorial));
    gameInit.create.addListener(tutorial.onCreated.bind(tutorial));
    gameInit.loaded.addListener((progress) => tutorial.loaded(progress));
}

'use strict';

VisualData.MAP_PARAMS.center = {
    x: RealScreenWidth /2,
    y: RealScreenHeight /2,
};

const useNewScale = true;

let gameW, gameH;
let dpi = useNewScale ? (window.devicePixelRatio || 1) : 1;

function UpdateNumbers() {
    if (useNewScale) {
        localScale = Math.min(window.innerWidth / RealScreenWidth, window.innerHeight / RealScreenHeight);
        localScale *= dpi;

        const minValue = 0.5;
        if (localScale < minValue) {
            dpi *= minValue / localScale;
            localScale = minValue;
        }

        if (localScale < 0.6) {
            imagesDeltaScale = 2;
            use2ximages = false;
        } else {
            imagesDeltaScale = 1;
            use2ximages = true;
        }
        imageSizeLocalScale = imagesDeltaScale * localScale;
    } else
        localScale = 1;
    gameW = RealScreenWidth * localScale;
    gameH = RealScreenHeight * localScale;
}
UpdateNumbers();

const renderType = Phaser.WEBGL;
// const renderType = Phaser.CANVAS;

let config = {
    type: renderType,
    parent: 'phaser-app',

    audio: {
        disableWebAudio: true
    },

    width: gameW,
    height: gameH,
    // autoRound: false,
    // fps: {
    //     target: 30,
    //     min: 2,
    //     max: 30,
    //     forceSetTimeOut: true
    // },
    // render: {
    //     antialias: true
    // },

    autoRound: false,
    scale: {
        // parent: 'phaser-app',
        // mode: Phaser.DOM.NONE,
        // mode: Phaser.Scale.FIT,
        // autoCenter: Phaser.Scale.CENTER_BOTH,
        width: gameW,
        height: gameH,
        zoom: 1 / dpi,
    },
    plugins: {
        // global: [ NineSlice.Plugin.DefaultCfg ]
        global: [ NineSlice.Plugin.DefaultCfg ]
    },
    scene: {
        preload: preload,
        create: create,
        update: update,
        pack: {
            files: [
                {
                    type: 'scenePlugin',
                    key: renderType === Phaser.WEBGL ? 'SpineWebGLPlugin' : 'SpineCanvasPlugin',
                    url: renderType === Phaser.WEBGL ? 'plugins/SpineWebGLPlugin.js' : 'plugins/SpineCanvasPlugin.js',
                    sceneKey: 'spine'
                },
                {
                    type: 'scenePlugin',
                    key: 'rexuiplugin',
                    // url: 'plugins/rexuiplugin.min.js',
                    url: 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/plugins/dist/rexuiplugin.min.js',
                    sceneKey: 'rexUI'
                }
            ]
        },
    }
};

function preload1() {

}

function create1() {
console.warn("1111122");
}

function update1() {

}

let gBase = null;

const loadingImage = window.document.getElementById("progress-fill");
let lastVal = 0;
const loadingSplash = window.document.getElementById("loading-div");
const ScreenSize = {
    width: gameW / dpi,
    height: gameH / dpi
};

loadingSplash.style.width = ScreenSize.width + 'px';
loadingSplash.style.height = ScreenSize.height + 'px';

if (!useNewScale)
    config.scale.zoom = Math.min(window.innerHeight / RealScreenHeight, window.innerWidth / RealScreenWidth);

let game = null;
// let game = new Phaser.Game({
//     type: Phaser.WEBGL,
//     parent: 'phaser-example',
//     scene1: {
//         preload: preload,
//         create: create,
//         update: update
//     }
// });

readTextFile(VisualData.getAtlasFullPath(), (json) => {
    if (!game) {
        GameData.prepareAtlases(json ? JSON.parse(json) : null);
        game = new Phaser.Game(config);
    }
});

function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.status == "200") {
            if (rawFile.readyState === 4) {
                callback(rawFile.responseText);
            }
        }else {
            // console.error(rawFile);
            callback(null);
        }
    };
    rawFile.send(null);
}

function preload () {
    this.load.on('progress', function (value) {
        if (value > lastVal) {
            loadingImage.style.width = (value * 30) + '%';
            lastVal = value;
        }
    });

    gameInit.GamePreload(this);
}

function PlayRewardedAd(doneCallback) {
    if (!socialManager)
        return;

    function onNoAds() {
        guiManager.openNewWindow(WindowType.WinNoAdd);
    }

    function onAdBlock() {
        guiManager.openNewWindow(WindowType.WinAdBLock);
    }

    function onCompleted() {
        audioManager.unMuteSounds();
        unlockAnimatedObject();
        unlockGUI();
        doneCallback();
    }

    function onStarted() {
        eventManager.adStarted();
        audioManager.muteSounds();
        GlobalInputLocked = true;
        lockGuiEverything();
    }

    const tutCompleted = gameInit.progress.isTutorialCompleted();

    const callbacks = {
        onCompleted: onCompleted,
        onNoAds: tutCompleted ? onNoAds : onCompleted,
        onAdBlock: tutCompleted ? onAdBlock : onCompleted,
        onStarted: onStarted
    };

    socialManager.playRewardedAd(callbacks);
}

const DefaultWidth = 500;

function UpdateTextPosition(text) {
    if (!text.newText)
        return;

    if (text.newText.style.display === 'none' || divElementForLabels.style.display === 'none') {
        text.needToUpdate = true;
        return;
    }

    const style = text.newText.style;
    let x = text.x;
    let y = text.y;
    if (text.parent) {
        x += text.parent.x;
        y += text.parent.y;
    }
    style.left = (x / dpi - text.newText.clientWidth * text.originX) + "px";
    style.top = (y / dpi - text.newText.clientHeight * (text.originY)) + "px";
}

var divElementForLabels;

function prepareTextToHtml(engine) {

    const divElement = document.createElement("div");
    divElement.className = "loading-img";
    document.body.appendChild(divElement);
    divElementForLabels = divElement;

    //Text
    const oldTextPosition = Phaser.GameObjects.Text.prototype.setPosition;
    function newTextPosition(x, y) {
        oldTextPosition.call(this, x * localScale, y * localScale);
        UpdateTextPosition(this);
        return this;
    }

    const oldTextWrap = Phaser.GameObjects.Text.prototype.setWordWrapWidth;
    function newTextWrap(width) {
        if (this.newText)
            this.newText.style.maxWidth = (width * localScale / dpi) + "px";
        return oldTextWrap.call(this, width * localScale);
    }

    const oldSetVisible = Phaser.GameObjects.Text.prototype.setVisible;
    function newSetVisible(visible) {
        if (this.newText) {
            if (visible) {
                if (!this.newText.timer) {
                    this.newText.timer = setTimeout(() => {
                        this.newText.style.display = 'inherit';
                        if (this.needToUpdate) {
                            UpdateTextPosition(this);
                            this.needToUpdate = false;
                        }
                        this.newText.timer = null;
                    }, 200);
                }
            }
            else {
                this.newText.style.display = 'none';
                if (this.newText.timer) {
                    clearInterval(this.newText.timer);
                    this.newText.timer = null;
                }
            }
        }
        return oldSetVisible.call(this, visible);
    }

    function newIsVisible() {
        if (this.newText)
            return this.newText.style.display === 'inherit';
        return this.visible;
    }

    const oldTest = engine.add.text;
    function newText(x, y, name, style) {
        const t = oldTest.call(this, x, y, null).setScale(1);
        const element = document.createElement("p");
        element.innerText = name;
        element.className = "myp";
        // element.style.font = style.font2;
        element.style.fontSize = style.font2;
        element.style.color = style.fill;
        // element.style.fontWeight = "bolder";
        element.style.webkitTextStrokeColor = style.stroke;
        element.style.webkitTextStrokeWidth = style.strokeThickness / 3 + "px";
        if (style.align)
            element.style.textAlign = style.align;
        divElement.appendChild(element);

        t.newText = element;
        t.renderFlags = 0;
        UpdateTextPosition(t);
        return t;
    }

    const oldSetText = Phaser.GameObjects.Text.prototype.setText;
    Phaser.GameObjects.Text.prototype.setText = function(text) {
        if (text === this.text)
            return this;
        if (this.newText) {
            this.newText.innerText = text;
            UpdateTextPosition(this);
        }
        return oldSetText.call(this, text);
    };

    const oldSetOrigin = Phaser.GameObjects.Text.prototype.setOrigin;
    function newSetOrigin(x, y) {
        oldSetOrigin.call(this, x, y);
        UpdateTextPosition(this);
        return this;
    }

    engine.add.text = newText.bind(engine.add);
    Phaser.GameObjects.Text.prototype.setPosition = newTextPosition;
    Phaser.GameObjects.Text.prototype.setWordWrapWidth = newTextWrap;
    Phaser.GameObjects.Text.prototype.setVisible = newSetVisible;
    Phaser.GameObjects.Text.prototype.setOrigin = newSetOrigin;
    Phaser.GameObjects.Text.prototype.getWidth = function() {
        return this.newText? this.newText.clientWidth : this.width;
    };
    Phaser.GameObjects.Text.prototype.isVisible = newIsVisible;
    engine.add.textOld = oldTest.bind(engine.add);
}

function overloadSetVisible(object) {
    const oldSetVisible = object.setVisible;
    function newSetVisible(visible) {
        if (!this.clickable)
            this.setActive(visible);
        return oldSetVisible.call(this, visible);
    }
    object.setVisible = newSetVisible;
}

function create ()
{
    const engine = this;
    const cachedAdd = this.add;

    const oldContainerPosition = Phaser.GameObjects.Container.prototype.setPosition;
    function newContainerPosition(x, y) {
        oldContainerPosition.call(this, x ? x * localScale : x, y ? y * localScale : y);
        for (let i = 0; i < this.list.length; i++)
            UpdateTextPosition(this.list[i]);
        return this;
    }
    Phaser.GameObjects.Container.prototype.setPosition = newContainerPosition;

    Phaser.GameObjects.Container.prototype.setPositionX = function(x) {
        this.x = x * localScale;
        for (let i = 0; i < this.list.length; i++)
            UpdateTextPosition(this.list[i]);
        return this;
    };

    Phaser.GameObjects.Container.prototype.setPositionY = function(y) {
        this.y = y * localScale;
        for (let i = 0; i < this.list.length; i++)
            UpdateTextPosition(this.list[i]);
        return this;
    };

    const oldSetVisible = Phaser.GameObjects.Container.prototype.setVisible;
    function newSetVisible(visible) {
        for (let i = 0; i < this.list.length; i++) {
            if (!this.list[i].forceInvisible)
                this.list[i].setVisible(visible);
        }
        return oldSetVisible.call(this, visible);
    }
    Phaser.GameObjects.Container.prototype.setVisible = newSetVisible;

    const oldAddChild = Phaser.GameObjects.Container.prototype.add;
    function newAddChild(obj) {
        if (obj.type === 'Text') {
            if (!this.visible)
                obj.setVisible(this.visible);
            obj.parent = this;
            UpdateTextPosition(obj);
        }
        return oldAddChild.call(this, obj);
    }
    Phaser.GameObjects.Container.prototype.add = newAddChild;

    // const oldContainerScale = Phaser.GameObjects.Container.prototype.setScale;
    // function newContainerScale(x, y) {
    //     return oldContainerScale.call(this, x ? x * localScale : x, y ? y * localScale : y);
    // }
    // Phaser.GameObjects.Container.prototype.setScale = newContainerScale;

    Phaser.GameObjects.Container.prototype.create = function (x, y, name) {
        const image = engine.add.sprite(x, y, name);
        this.add(image);
        return image;
    };

    Phaser.GameObjects.Group.prototype.create = function (x, y, name) {
        const image = engine.add.sprite(x, y, name);
        this.add(image);
        return image;
    };

    Phaser.GameObjects.Group.prototype.setVisible = function (visible) {
        this.visible = visible;
        return this;
    };

    engine.add.myNineSlice = function (x, y, info) {
        const width = info.width * GlobalScale / imagesDeltaScale;
        const height = info.height * GlobalScale / imagesDeltaScale;
        const nineSliceInfo = VisualData.ALL_OBJECTS[info.name];
        const paddingX = nineSliceInfo.paddingX * GlobalScale / imagesDeltaScale;
        const paddingY = nineSliceInfo.paddingY * GlobalScale / imagesDeltaScale;
        const dy = (info.y || 0) * GlobalScale;
        const obj = engine.add.nineslice(
            x * localScale, (y + dy) * localScale,             // this is the starting x/y location
            width, height,         // the width and height of your object
            info.name,             // a key to an already loaded image
            paddingX,              // the width and height to offset for a corner slice
            paddingY               // (optional) pixels to offset when computing the safe usage area
        );

        const prot = obj.constructor.prototype;
        if (!prot.scalePrepared) {
            prot.scalePrepared = true;

            overloadSetVisible(prot);

            // const oldPosition1 = prot.setPosition;
            // function newPosition1(x, y) {
            //     return oldPosition1.call(this, x ? x * localScale : x, y ? y * localScale : y);
            // }

            const oldScale1 = prot.setScale;
            function newScale1(x, y) {
                return oldScale1.call(this, x * imageSizeLocalScale, y ? y * imageSizeLocalScale : y);
            }

            // prot.setPosition = newPosition1;
            prot.setScale = newScale1;
        }

        obj.setScale(1);

        return obj;
    };

    if (useNewScale) {
        //Sprites
        const oldSetPosition = Phaser.GameObjects.Sprite.prototype.setPosition;
        function newSetPosition(x, y) {
            return oldSetPosition.call(this, x * localScale, y * localScale);
        }

        const oldSetScale = Phaser.GameObjects.Sprite.prototype.setScale;
        function newSetScale(x, y) {
            return oldSetScale.call(this, x * imageSizeLocalScale, y ? y * imageSizeLocalScale : y);
        }

        const oldSprite = this.add.sprite;
        let spritesCount = 0;
        function newSprite(x, y, name) {
            // spritesCount++;
            // console.log("spritesCount " + spritesCount + " > " + name);
            const obj = VisualData.ALL_OBJECTS[name];
            if (obj) {
                if (GameData.getAtlasName(obj))
                    return oldSprite.call(cachedAdd, x, y, 'atlas_sprites', obj.file).setScale(1);
            }
            return oldSprite.call(cachedAdd, x, y, name).setScale(1);
            // return oldSprite.call(cachedAdd, x, y, "MM_Btn_Login").setScale(1);
        }

        this.add.sprite = newSprite.bind(this.add);
        Phaser.GameObjects.Sprite.prototype.setPosition = newSetPosition;
        Phaser.GameObjects.Sprite.prototype.setPositionX = function(x) {
            return this.x = x * localScale;
        };
        Phaser.GameObjects.Sprite.prototype.setPositionY = function(y) {
            return this.y = y * localScale;
        };
        Phaser.GameObjects.Sprite.prototype.setScale = newSetScale;
        Phaser.GameObjects.Sprite.prototype.setScale2 = newSetScale;
        Phaser.GameObjects.Sprite.prototype.setForceInvisible = function(invisible) {
            this.forceInvisible = invisible;
            this.visible = !invisible;
        };

        overloadSetVisible(Phaser.GameObjects.Text.prototype);//Old text

        prepareTextToHtml(engine);

        overloadSetVisible(Phaser.GameObjects.Sprite.prototype);
        // overloadSetVisible(Phaser.GameObjects.Group.prototype);
        overloadSetVisible(Phaser.GameObjects.Container.prototype);
        overloadSetVisible(Phaser.GameObjects.Text.prototype);//New text
    }

    gameInit.GameCreate(this, () => {
        loadingSplash.style.display = 'none';

        setInterval(()=>{
            gBase.userInputBeenDone();
        }, 60000);
    });

    gameTrail = new GameTrail(gameInit);

    window.addEventListener('wheel',function(event){
        event.preventDefault();
        eventManager.mouseWheel(event.deltaX, event.deltaY);
        return false;
    }, { passive: false });
}

function update () {
    gameInit.GameUpdate(this);
}


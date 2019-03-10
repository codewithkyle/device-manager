"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DeviceManager = /** @class */ (function () {
    function DeviceManager(debug, setStatusClasses) {
        var _this = this;
        this.handleMouseEvent = function (e) {
            _this._body.removeEventListener('mouseover', _this.handleMouseEvent);
            _this._html.classList.add('is-pointer-device');
            _this._html.classList.remove('is-not-pointer-device');
            if (_this._isDebug) {
                console.log('%c[Device Manager] ' + "%cUser is using a pointer device", 'color:#35ffb8', 'color:#eee');
            }
        };
        this.handleTouchEvent = function (e) {
            _this._body.removeEventListener('touchstart', _this.handleTouchEvent);
            _this._html.classList.add('has-touched');
            if (_this._isDebug) {
                console.log('%c[Device Manager] ' + "%cUser has touched their device", 'color:#35ffb8', 'color:#eee');
            }
        };
        this._isDebug = (debug) ? debug : false;
        this._html = document.documentElement;
        this._body = document.body;
        if (setStatusClasses) {
            this.setStatusClasses();
        }
    }
    /**
     * Sets custom status classes on the HTML Document.
     */
    DeviceManager.prototype.setStatusClasses = function () {
        this._html.classList.add('has-js');
        this._html.classList.remove('has-no-js');
        if (this._isDebug) {
            console.log('%c[Device Manager] ' + "%cSetting status classes", 'color:#35ffb8', 'color:#eee');
        }
        this._body.addEventListener('mouseover', this.handleMouseEvent);
        this._body.addEventListener('touchstart', this.handleTouchEvent);
        if (DeviceManager.supportsTouch) {
            this._html.classList.add('is-touch-device');
            this._html.classList.remove('is-not-touch-device');
            if (this._isDebug) {
                console.log('%c[Device Manager] ' + ("%cSupports Touch: %c" + DeviceManager.supportsTouch), 'color:#35ffb8', 'color:#eee', 'color:#68e5ff');
            }
        }
        if (DeviceManager.isBlinkEngine) {
            this._html.classList.add('is-blink');
            if (this._isDebug) {
                console.log('%c[Device Manager] ' + ("%cUsing Blink Engine: %c" + DeviceManager.isBlinkEngine), 'color:#35ffb8', 'color:#eee', 'color:#68e5ff');
            }
        }
        if (DeviceManager.isChrome) {
            this._html.classList.add('is-chrome');
            if (this._isDebug) {
                console.log('%c[Device Manager] ' + ("%cChrome: %c" + DeviceManager.isChrome), 'color:#35ffb8', 'color:#eee', 'color:#68e5ff');
            }
        }
        if (DeviceManager.isIE) {
            this._html.classList.add('is-ie');
            if (this._isDebug) {
                console.log('%c[Device Manager] ' + ("%cInternet Explorer: %c" + DeviceManager.isIE), 'color:#35ffb8', 'color:#eee', 'color:#68e5ff');
            }
        }
        if (DeviceManager.isEdge) {
            this._html.classList.add('is-edge');
            if (this._isDebug) {
                console.log('%c[Device Manager] ' + ("%cEdge: %c" + DeviceManager.isEdge), 'color:#35ffb8', 'color:#eee', 'color:#68e5ff');
            }
        }
        if (DeviceManager.isFirefox) {
            this._html.classList.add('is-firefox');
            if (this._isDebug) {
                console.log('%c[Device Manager] ' + ("%cFirefox: %c" + DeviceManager.isFirefox), 'color:#35ffb8', 'color:#eee', 'color:#68e5ff');
            }
        }
        if (DeviceManager.isSafari) {
            this._html.classList.add('is-safari');
            if (this._isDebug) {
                console.log('%c[Device Manager] ' + ("%cSafari: %c" + DeviceManager.isSafari), 'color:#35ffb8', 'color:#eee', 'color:#68e5ff');
            }
        }
        if (DeviceManager.isOpera) {
            this._html.classList.add('is-opera');
            if (this._isDebug) {
                console.log('%c[Device Manager] ' + ("%cOpera: %c" + DeviceManager.isOpera), 'color:#35ffb8', 'color:#eee', 'color:#68e5ff');
            }
        }
    };
    /**
     * Checks if the browser is Chrome 1 - 71.
     * @returns `boolean`
     */
    DeviceManager.isChrome = (function () {
        var isChrome = false;
        // @ts-ignore
        if (!!window.chrome && (window.StyleMedia === undefined)) {
            isChrome = true;
        }
        return isChrome;
    })();
    /**
     * Checks if the browser is Edge 20+.
     * @returns `boolean`
     */
    DeviceManager.isEdge = (function () {
        var isEdge = false;
        // @ts-ignore
        if (!!window.StyleMedia && !!window.chrome) {
            isEdge = true;
        }
        return isEdge;
    })();
    /**
     * Checks if the browser is Internet Explorer 6 - 11.
     * @returns `boolean`
     */
    DeviceManager.isIE = (function () {
        var isIE = false;
        // @ts-ignore
        if (!!window.MSInputMethodContext && !!document.documentMode && (window.chrome === undefined)) {
            isIE = true;
        }
        return isIE;
    })();
    /**
     * Checks if the browser is Firefox 1+.
     * @returns `boolean`
     */
    DeviceManager.isFirefox = (function () {
        var isFirefox = false;
        // @ts-ignore
        if (typeof InstallTrigger !== 'undefined') {
            isFirefox = true;
        }
        return isFirefox;
    })();
    /**
     * Checks if the browser is Safari 3+.
     * @returns `boolean`
     */
    DeviceManager.isSafari = (function () {
        var isSafari = false;
        // @ts-ignore
        if (/constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification))) {
            isSafari = true;
        }
        return isSafari;
    })();
    /**
     * Checks if the browser is Opera 8+.
     * @returns `boolean`
     */
    DeviceManager.isOpera = (function () {
        var isOpera = false;
        // @ts-ignore
        if ((!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0) {
            isOpera = true;
        }
        return isOpera;
    })();
    /**
     * Checks if the browser is using the Blink Engine.
     * @see https://en.wikipedia.org/wiki/Blink_(browser_engine)
     * @returns `boolean`
     */
    DeviceManager.isBlinkEngine = (function () {
        var isBlink = false;
        // @ts-ignore
        if ((DeviceManager.isChrome || DeviceManager.isOpera) && !!window.CSS) {
            isBlink = true;
        }
        return isBlink;
    })();
    /**
     * Checks if the browser supports touch input.
     * @returns `boolean`
     */
    DeviceManager.supportsTouch = (function () {
        var isTouchSupported = false;
        if (('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0)) {
            isTouchSupported = true;
        }
        return isTouchSupported;
    })();
    return DeviceManager;
}());
exports.default = DeviceManager;
//# sourceMappingURL=DeviceManager.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetKeyedMap = void 0;
var SetKeyedMap = /** @class */ (function () {
    function SetKeyedMap() {
        this._keysCache = {};
        this.mapInstance = new Map();
        this.mapInstance = new Map();
    }
    SetKeyedMap.prototype.set = function (key, value) {
        var mapKey = this._getCachedKey(key);
        if (!mapKey) {
            this._keysCache[this._parseKey(key)] = key;
            mapKey = key;
        }
        this.mapInstance.set(mapKey, value);
    };
    SetKeyedMap.prototype.get = function (key) {
        var mapKey = this._getCachedKey(key);
        return this.mapInstance.get(mapKey);
    };
    SetKeyedMap.prototype.entries = function () {
        return this.mapInstance.entries();
    };
    SetKeyedMap.prototype.has = function (key) {
        return Boolean(this._getCachedKey(key));
    };
    SetKeyedMap.prototype.delete = function (key) {
        this.mapInstance.delete(key);
    };
    SetKeyedMap.prototype._parseKey = function (key) {
        return JSON.stringify(key.sort());
    };
    SetKeyedMap.prototype._getCachedKey = function (key) {
        return this._keysCache[this._parseKey(key)];
    };
    SetKeyedMap.prototype.toString = function () {
        return this.mapInstance;
    };
    return SetKeyedMap;
}());
exports.SetKeyedMap = SetKeyedMap;

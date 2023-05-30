"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BidirectionalSetKeyedMap = void 0;
var SetKeyedMap_1 = require("./SetKeyedMap");
var BidirectionalSetKeyedMap = /** @class */ (function () {
    function BidirectionalSetKeyedMap() {
        this.setKeyedMap = new SetKeyedMap_1.SetKeyedMap();
        this.valueMap = {};
    }
    BidirectionalSetKeyedMap.prototype.set = function (key, value) {
        this.setKeyedMap.set(key, value);
        this.valueMap[value] = key;
    };
    BidirectionalSetKeyedMap.prototype.get = function (key) {
        return this.setKeyedMap.get(key);
    };
    BidirectionalSetKeyedMap.prototype.getByValue = function (value) {
        return this.valueMap[value];
    };
    BidirectionalSetKeyedMap.prototype.entries = function () {
        return this.setKeyedMap.entries();
    };
    BidirectionalSetKeyedMap.prototype.has = function (key) {
        return this.setKeyedMap.has(key);
    };
    BidirectionalSetKeyedMap.prototype.delete = function (key) {
        this.setKeyedMap.delete(key);
    };
    BidirectionalSetKeyedMap.prototype.toString = function () {
        return this.setKeyedMap.toString();
    };
    return BidirectionalSetKeyedMap;
}());
exports.BidirectionalSetKeyedMap = BidirectionalSetKeyedMap;

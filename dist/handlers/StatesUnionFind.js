"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatesUnionFind = void 0;
var ExtendedUnionFind_1 = require("./ExtendedUnionFind");
var BidirectionalSetKeyedMap_1 = require("./BidirectionalSetKeyedMap");
var StatesUnionFind = /** @class */ (function () {
    function StatesUnionFind(count) {
        this.unionFind = new ExtendedUnionFind_1.ExtendedUnionFind(count);
        this.stateIdMapping = new BidirectionalSetKeyedMap_1.BidirectionalSetKeyedMap();
    }
    StatesUnionFind.prototype.make = function (stateGroup) {
        var setIdentifier = this.unionFind.make();
        this.stateIdMapping.set(stateGroup, setIdentifier);
        return setIdentifier;
    };
    StatesUnionFind.prototype.union = function (stateGroup1, stateGroup2) {
        var stateGroup1Id = this.stateIdMapping.get(stateGroup1);
        var stateGroup2Id = this.stateIdMapping.get(stateGroup2);
        if (!(stateGroup1Id && stateGroup2Id))
            throw new Error("States not found on union find");
        this.unionFind.union(stateGroup1Id, stateGroup2Id);
    };
    StatesUnionFind.prototype.find = function (stateGroup) {
        var stateGroupId = this.stateIdMapping.get(stateGroup);
        if (!stateGroupId) {
            stateGroupId = this.unionFind.make();
            this.stateIdMapping.set(stateGroup, stateGroupId);
        }
        var a = this.unionFind.find(stateGroupId);
        return this.getStateBySetId(a);
    };
    StatesUnionFind.prototype.getStateBySetId = function (setId) {
        return this.stateIdMapping.getByValue(setId);
    };
    return StatesUnionFind;
}());
exports.StatesUnionFind = StatesUnionFind;

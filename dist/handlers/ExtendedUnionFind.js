"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtendedUnionFind = void 0;
// @ts-ignore
var union_find_1 = __importDefault(require("union-find"));
var ExtendedUnionFind = /** @class */ (function () {
    function ExtendedUnionFind(count) {
        this.unionFind = new union_find_1.default(count);
    }
    ExtendedUnionFind.prototype.make = function () {
        return this.unionFind.makeSet();
    };
    ExtendedUnionFind.prototype.find = function (v) {
        var setIdentifier = this.unionFind.find(v);
        if (!setIdentifier) {
            setIdentifier = this.make();
        }
        return setIdentifier;
    };
    ExtendedUnionFind.prototype.union = function (s, t) {
        return this.unionFind.link(s, t);
    };
    return ExtendedUnionFind;
}());
exports.ExtendedUnionFind = ExtendedUnionFind;

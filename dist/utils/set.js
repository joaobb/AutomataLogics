"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setsAreEqual = void 0;
function setsAreEqual(a, b) {
    if (a.size !== b.size) {
        return false;
    }
    return Array.from(a).every(function (element) {
        return b.has(element);
    });
}
exports.setsAreEqual = setsAreEqual;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lesson = void 0;
var Lesson = /** @class */ (function () {
    function Lesson(name) {
        this._name = name;
    }
    Object.defineProperty(Lesson.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: false,
        configurable: true
    });
    return Lesson;
}());
exports.Lesson = Lesson;

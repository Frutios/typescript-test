"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Trainer = void 0;
var Person_1 = require("./Person");
var Trainer = /** @class */ (function (_super) {
    __extends(Trainer, _super);
    function Trainer(lastname, firstname, gender, size, weight, lessons) {
        var _this = _super.call(this, lastname, firstname, gender, size, weight) || this;
        _this._lessons = lessons;
        return _this;
    }
    Object.defineProperty(Trainer.prototype, "lessons", {
        get: function () {
            return this._lessons;
        },
        set: function (lessons) {
            this._lessons = lessons;
        },
        enumerable: false,
        configurable: true
    });
    return Trainer;
}(Person_1.Person));
exports.Trainer = Trainer;

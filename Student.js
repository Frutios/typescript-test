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
exports.Student = void 0;
var Person_1 = require("./Person");
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(lastname, firstname, gender, size, weight, promotion) {
        var _this = _super.call(this, lastname, firstname, gender, size, weight) || this;
        _this._promotion = promotion;
        return _this;
    }
    Object.defineProperty(Student.prototype, "promotion", {
        get: function () {
            return this._promotion;
        },
        set: function (promotion) {
            this._promotion = promotion;
        },
        enumerable: false,
        configurable: true
    });
    return Student;
}(Person_1.Person));
exports.Student = Student;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(lastname, firstname, gender, size, weight) {
        this._lastname = lastname;
        this._firstname = firstname;
        this._gender = gender;
        this._size = size;
        this._weight = weight;
    }
    Object.defineProperty(Person.prototype, "lastname", {
        get: function () {
            return this._lastname;
        },
        set: function (lastname) {
            this._lastname = lastname;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "firstname", {
        get: function () {
            return this._firstname;
        },
        set: function (firstname) {
            this._firstname = firstname;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "gender", {
        get: function () {
            return this._gender;
        },
        set: function (gender) {
            this._gender = gender;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "size", {
        get: function () {
            return this._size;
        },
        set: function (size) {
            this._size = size;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "weight", {
        get: function () {
            return this._weight;
        },
        set: function (weight) {
            this._weight = weight;
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
exports.Person = Person;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Lesson_1 = require("./Lesson");
var Trainer_1 = require("./Trainer");
var Student_1 = require("./Student");
var formator = new Trainer_1.Trainer("Garcia", "José", "H", 180, 70, [new Lesson_1.Lesson("Angular"), new Lesson_1.Lesson("Node")]);
var student = new Student_1.Student("Doe", "John", "H", 120, 40, "Java");
console.log(formator.firstname + " " + formator.lastname + " enseigne " + formator.lessons[0].name + " mais aussi " + formator.lessons[1].name + " à " + student.firstname + " " + student.lastname + " qui est dans la promo " + student.promotion);

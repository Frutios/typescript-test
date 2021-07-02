import { Lesson } from './Lesson';
import { Trainer } from './Trainer';
import { Student } from './Student';

let formator = new Trainer("Garcia", "José", "H", 180, 70, [new Lesson("Angular"), new Lesson("Node")])
let student = new Student("Doe", "John", "H", 120, 40,"Java")


console.log(formator.firstname + " " + formator.lastname + " enseigne " + formator.lessons[0].name + " mais aussi " + formator.lessons[1].name + " à " + student.firstname + " " + student.lastname + " qui est dans la promo " + student.promotion) 
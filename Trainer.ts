import { Person } from "./Person";
import { Lesson } from "./Lesson";

export class Trainer extends Person{
    private _lessons : Array<Lesson>

    constructor(lastname : string, firstname : string, gender : string, size : number, weight : number, lessons : Array<Lesson>){
        super(lastname, firstname, gender, size, weight);
        this._lessons = lessons;
    }

    public get lessons() {
		return this._lessons;
	}

	public set lessons(lessons : Array<Lesson>) {
		this._lessons = lessons;
	}
}
import { Person } from "./Person";

export class Student extends Person{
    private _promotion : string

    constructor(lastname : string, firstname : string, gender : string, size : number, weight : number, promotion : string){
        super(lastname, firstname, gender, size, weight);
        this._promotion = promotion;
    }

    public get promotion() {
		return this._promotion;
	}

	public set promotion(promotion : string) {
		this._promotion = promotion;
	}
}
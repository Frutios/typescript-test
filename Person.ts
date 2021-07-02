export class Person {
    private _lastname : string
    private _firstname : string
    private _gender : string
    private _size : number
    private _weight : number



    constructor(lastname : string, firstname : string, gender : string, size : number, weight : number){
        this._lastname = lastname;
        this._firstname = firstname;
        this._gender = gender;
        this._size = size;
        this._weight = weight;
    }
    
    public get lastname() {
		return this._lastname;
	}

	public set lastname(lastname : string) {
		this._lastname = lastname ;
	}

    public get firstname() {
		return this._firstname;
	}

	public set firstname(firstname : string) {
		this._firstname = firstname;
	}
    public get gender() {
		return this._gender;
	}

	public set gender(gender : string) {
		this._gender = gender;
	}

    public get size() {
		return this._size;
	}

	public set size(size : number) {
		this._size = size;
	}

    public get weight() {
		return this._weight;
	}

	public set weight(weight : number) {
		this._weight = weight;
	}
    
    
}
export class Task{

    constructor(public _id:number,public name:string, public description:string, public date:string){}

    toString(): string {
        return this._id + " " + this.name + " " + this.description + " " + this.date ; 
    }
}
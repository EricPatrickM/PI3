export default class Card{
    private suite: number
    private number : number
    constructor(suite:number, number:number){
        this.suite = suite
        this.number = number
    }
    get Suite() : number{
        return this.suite
    }
    set Suite(value : number){
        this.suite = value
    }

    get Number(){
        return this.number
    }
    set Number(value : number){
        this.number = value
    }
}
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
    get Number(){
        return this.number
    }
}
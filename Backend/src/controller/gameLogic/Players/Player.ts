export default class Player{
    public deck : any[] = []
    public name = null
    public precision = null

    public lifes :number = 5
    public roundGuess : number = 0
    constructor(){//pegar os dados no banco
        this.name = null
        this.precision = null
    }
}
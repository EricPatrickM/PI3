import Card from "../Card/Card"

export default class SuperPlayer{
    protected deck : Card[]
    protected name : string
    protected precision : number
    protected winRate : number
    protected lifes :number = 5
    protected roundGuess : number = 0
    protected roundDid : number = 0


    protected sessionID : string //session ID
    constructor(){
        this.deck = []
        this.name='Eric'
        this.precision=0
        this.lifes = 5
        this.roundGuess = 0
        this.sessionID = "0"
        this.winRate = 22
    }

    private ResetAll(){
        this.deck = []
        this.name='Eric'
        this.precision=0
        this.lifes = 5
        this.roundGuess = 0
    }

    public PhaseFinished(){
        this.roundDid += 1
    }

    public RoundFinished(){
        this.lifes-= Math.abs(this.roundDid-this.roundGuess)
    }

    public updateVictory(){
        
    }
    public updatePrecision(){

    }

    public set Deck(value : Card[]){
        this.deck = value
    }
    public get Deck(){
        return this.deck
    }
    public set RoundGuess(value : number){
        this.roundGuess = value
    }
    public get RoundGuess() : number{
        return this.roundGuess
    }
}
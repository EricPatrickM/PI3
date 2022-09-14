import SuperPlayer from "./SuperPlayer"

export default class Bot extends SuperPlayer{
    public checkSpotEmpty(): boolean {
        return true;
    }
    
    constructor(){//pegar os dados no banco
        super()
        this.name  = "BOT"
        this.precision  = 0
        this.winRate  = 0
        this.lifes = 5
        this.roundGuess = 0
    }
}
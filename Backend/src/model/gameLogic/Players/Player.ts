import Card from "../Card/Card"
import SuperPlayer from "./SuperPlayer"

export default class Player extends SuperPlayer{
    public checkSpotEmpty(): boolean {
        return false;
    }

    private userID : string
    constructor(userID : string, sessionID : string){//pegar os dados no banco
        super()
        this.sessionID = sessionID//session ID
        this.userID = userID
        try{
            //pegar do banco
            this.GetUserData(userID)
            this.deck = []
        }catch(e){
            this.name = ''
            this.precision = 50
        }
    }
    
    GetUserData(id:string){ // consultar no banco
        this.name='Eric'
        this.precision=0
    }
}
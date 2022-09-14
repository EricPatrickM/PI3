import Card from "../Card/Card"
import SuperPlayer from "./SuperPlayer"

export default class Player extends SuperPlayer{
    public changePlayerType(): SuperPlayer {
        
    }
    private userId : string = "";

constructor(socketId : string){//pegar os dados no banco
    super()
        this.socketId = socketId//session ID
        try{
            //pegar do banco
            this.deck = []
        }catch(e){
            this.name = ''
            this.precision = 50
        }
    }
    
    public checkSpotEmpty(): boolean {
        return false;
    }
    GetUserData(id:string){ // consultar no banco
        this.name='Eric'
        this.precision=0
    }
}
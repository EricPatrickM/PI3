import Game from "./Game/game"
import Bot from "./Players/Bot";
import SuperPlayer from "./Players/SuperPlayer";

export default class Room{
    private game : Game[] = [];
    private numRoom : number = 12;
    constructor(){
        for(let x=0;x < this.numRoom;x++){
            this.game[x] = new Game(5);
        }
    }

    joinRoom(room:number, socketId:string){
        room-=1;
        const spot = this.checkRoomEmptySpot(room);
        if(spot != -1){
            this.game[room].insertNewPlayer(spot, socketId)
        }
    }

    leaveRoom(room:number, socketId:string){
        room-=1
        const players : SuperPlayer[] = this.game[room].getAllPlayers()
        const tempPlayer : Bot = new Bot()
        for(let x=0;x < 5;x++){
            if(players[x].socketId  == socketId){
                tempPlayer.Deck=players[x].changePlayerType()
            }
        }

    }

    checkRoomEmptySpot(room : number) : number{
        if(room >= 0 && room < this.numRoom){
            const players : SuperPlayer[] = this.game[room].getAllPlayers()
            
            for(let x=0;x < 5;x++){
                if(!players[x].checkSpotEmpty()){
                    return x;
                }
            }
        }
        return -1;
    }

    /*createRoom(){//criar salas customizadas

    }
    deleteRoom(){//deletar salas customizadas

    }
    leaveRoom(){//tirar um jogador da sala e acionar a IA

    }
    checkEmptyRoom(){//Excluir salas que estiverem vazias

    }
    pauseRoom(){//pausar as salas publicas

    }*/
}
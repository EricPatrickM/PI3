import Game from "../gameLogic/Game/game"
import Player from "../gameLogic/Players/Player"
import SuperPlayer from "../gameLogic/Players/SuperPlayer"

export default class WSEvents{
    checkRoomSpot(room : Game) : boolean{
        const players : SuperPlayer[]= room.getAllPlayers()
        for(let x=0;x < players.length;x++){
            if(players[x].checkSpotEmpty()){
                const tempPlayer : SuperPlayer = new Player("x", "5");
                return true;
            }
        }
        return false;
    }
}
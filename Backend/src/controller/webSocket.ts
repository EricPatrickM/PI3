import {io} from "./http"
import Game from '../model/gameLogic/Game/game'

interface RoomUser{
    socketId : string,
    room: string,
}

const users : RoomUser[] = []
/*const game : Game[] = []

for(let i=0;i <= 15;i++){
    game.push(new Game(5))
}*/


io.on("connection", (socket)=>{
    /*COLOCANDO O USUARIO EM UMA SALA*/
    socket.on("joinRoom", (data) => {
        socket.join(data.room);

        users.push({
            socketId:socket.id,
            room:data.room,
        })
    });

    /*USUARIO JOGOU UMA CARTA DO SEU BARALHO*/
    socket.on("sendCardSelect", data => {
        io.to(data.room).emit("sendCardSelect", data)
    });

    /*DECLARANDO VEZ DE UM JOGADOR*/

    /*DECLARANDO GUESS DE UM JOGADOR*/

    /*USUARIO SAIU DA SALA*/

    /*DISTRIBUIR CARTAS AOS JOGADORES*/

    /*FIM DA RODADA*/
});
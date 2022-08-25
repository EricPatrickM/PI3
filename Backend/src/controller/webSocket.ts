import {io} from "./http"
import Game from '../model/gameLogic/Game/game'
import WSEvents from "../model/Events/WSEvents";

interface RoomUser{
    socketId : string,
    room: string,
}

const users : RoomUser[] = []
let teste : any;
const wsEvents : WSEvents

io.on("connection", (socket)=>{
    /*COLOCANDO O USUARIO EM UMA SALA*/
    socket.on("joinRoom", (data) => {
        if(wsEvents.checkRoomSpot(data.room)){
            socket.join(data.room);
            users.push({
                socketId:socket.id,
                room:data.room,
            })
            teste = socket.id
        }
    });
    
    /*DISTRIBUI AS CARTAS*/
    //setInterval(()=>sendPlayersCards(teste,0), 2000);
    function sendPlayersCards(userID : string, cards:any){
        io.to(userID).emit('recieveCards', {cards})
    }

    /*USUARIO JOGOU UMA CARTA DO SEU BARALHO*/
    socket.on("sendCardSelect", data => {
        /*
        Logica de jogar a carta
        */
       console.log('usuario: ' + socket.id + " JOGOU "
        + data.number + " e " + data.suite)
        const userIndex = 0/*users.indexOf(socket.id)*/;
        const userNumber = data.number;
        const userSuite = data.suite;
        const dataUpd = {
            userIndex,
            userNumber,
            userSuite,
        }
        console.log(dataUpd)
        io.to(data.room).emit("sendCardSelect", dataUpd)
    });
    
    /*DECLARANDO VEZ DE UM JOGADOR*/
    function playerRound(room : string, userIndex : number){
        console.log('enviando')
        io.to(room).emit("playerRound", {userIndex});
    }
    //setInterval(()=>playerRound('1',0), 2000);
    
    /*DECLARANDO GUESS DE UM JOGADOR*/
    //setInterval(()=>playerGuess(), 5000);
    function playerGuess(){
        io.emit("roundGuess", ()=>{
        });
    }

    socket.on("roundGuess", (data)=>{
        console.log("GUESS: " + data.round)
    })

    /*USUARIO SAIU DA SALA*/
    socket.on("disconnect", ()=>{
        for(let x in users){
            if(users[x].socketId == socket.id){
                users.splice(parseInt(x),1)
            }
        }
    })

    /*FIM DA RODADA*/
    
});
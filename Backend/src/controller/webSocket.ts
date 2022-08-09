import {io} from "./http"

interface RoomUser{
    socketId : string,
    room: string,
}

const users : RoomUser[] = []

io.on("connection", (socket)=>{
    //console.log(socket.id)
    socket.on("joinRoom", (data) => {
        socket.join(data.room);

        console.log(data)
        users.push({
            socketId:socket.id,
            room:data.room,
        })
    });
});

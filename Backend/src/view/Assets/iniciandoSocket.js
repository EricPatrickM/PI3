const socket = io()

//const urlSearch = new URLSearchParams(window.location.search)
//const room = url.urlSearch.get("room")
const room = "teste"
const card = 4

socket.emit("joinRoom", {
    room,
});

socket.on("sendCardSelect", data => {
    console.log('escutando')
    console.log(data)
})

/*ENVIAR CARTA*/
document.getElementById("Carta1").addEventListener("click", (event)=>{
    const number = event.target.value
    const suite = 0
    console.log(event.target)
    const data = {
        room,
        message,
    }
    socket.emit("sendCardSelect", data)
    event.target.value=""
});

/*FECHANDO*/
socket.addEventListener('close', ()=>{
    const att = "suario sauindo"
    socket.emit("closeGame", att)
})
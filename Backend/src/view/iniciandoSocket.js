const socket = io()

//const urlSearch = new URLSearchParams(window.location.search)
//const room = url.urlSearch.get("room")
const room = "teste"
const card = 4

socket.emit("joinRoom", {
    room,
});
const socket = io()

const username = "ola"

socket.emit('Jogado', {
    username,
})
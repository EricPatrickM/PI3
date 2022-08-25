const socket = io()

//const urlSearch = new URLSearchParams(window.location.search)
//const room = url.urlSearch.get("room")
const room = '1'
var round = 2 //tirar

/*QUANDO O USUARIO ENTRA NA SALA*/
socket.emit("joinRoom", {
    room,
});

/*OUTRO JOGADOR JOGOU UMA CARTA*/
socket.on("sendCardSelect", data => {
    /*
    Se a posicao(userIndex) for a do jogador precisa
    retirar a carta da tela dele e jogar na mesa,
    se nao for basta jogar na mesa a carta jogada.
    */
    console.log("jogador: " + data.userIndex + " jogou a carta " +
    data.userNumber + " " +data.userSuite)
});


/*
MANDA PARA TODOS OS JOGADORES QUE É A VEZ DE ALGUM
JOGADOR
*/
socket.on("playerRound", (data)=>{
    /*
        Se for a vez do jogador(userIndex) faca um efeito
        com um timer de 7 segundos e um efeito que 
        mostre que é a vez dele, se nao a vez do jogador
        entao so mostre o timer. 
    */
   console.log(data.userIndex)
})

/*ENTREGA AS CARTAS*/
socket.on('recieveCards', data =>{
    /* AQUI CADA USUARIO RECEBERA A SUA.
    entrega uma lista de objetos,
    cada objeto possui um number e um suite
    number vai de 1 a 13, sem 7,8 e 9
    os naipes(suite) vao de 1 a 4, seguindo a
    ordem do baralho, respectivamente:
    ouro, espada, copa, paus
    cria cartas na tela do usuario.
    */
    console.log('CARTAS ENTREGUES: sera em data.cards' + data.cards)
})

/*INICIO DA RODADA, FAZ QUANTOS??*/
socket.on('roundGuess', ()=>{
    console.log('FAZ QUANTOS??')
    sendRoundGuess()
})

function sendRoundGuess(){
    socket.emit('roundGuess',{round})
}

/*FECHANDO*/
socket.addEventListener('close', ()=>{
    const att = "suario sauindo"
    socket.emit("closeGame", att)
})
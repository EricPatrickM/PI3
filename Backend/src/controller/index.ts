import App from "./App"; 
import http from "http"
import { Server } from "socket.io";
import path from "path";

let app : App = new App()
app.server.get("/", (req,res) => {//tela inicial
    res.send('teste')
})

app.server.get("/", (req,res) => {//pegar informacoes do jogador(estatisticas)
    res.send('teste')
})


/*
app.server.use(express.static(path.join(__dirname,'..','view')));

const httpServer = http.createServer(app);
const io = new Server(httpServer,{});

io.on('connection', (socket) => {
    console.log(socket.id)
    socket.on('Jogado', data => {
        console.log(data)
    })
})
*/

//httpServer.listen(3000, () => console.log('RODANDO'));
app.server.listen(3000, () => console.log('RODANDO'));
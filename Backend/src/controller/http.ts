import express from "express"
import http from "http"
import path from "path"
import {Server} from "socket.io"

const app = express()
const serverHttp = http.createServer(app)

app.get('/',(req,res)=>{
    console.log('CONECTOU!!')
})

const io = new Server(serverHttp)

app.use(express.static(path.join(__dirname, "../view")))
export {serverHttp, io}
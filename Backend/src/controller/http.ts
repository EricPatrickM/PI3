import express from "express"
import http from "http"
import path from "path"
import {Server} from "socket.io"

const app = express()
const serverHttp = http.createServer(app)

/*PATH PARA TESTES*/
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, "../viewteste"))


//ROTAS PARA TESTE
import Home from './Router/Home'
import Assets from './Router/Assets'
app.use('/', Home)
app.use('/Assets', Assets)

import Login from './Router/Login'
import Register from './Router/Register'

app.use('/Login', Login)
app.use('/Register', Register)

const io = new Server(serverHttp)

export {serverHttp, io}
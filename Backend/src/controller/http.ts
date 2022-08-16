import express from "express"
import http from "http"
import path from "path"
import {Server} from "socket.io"

const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, "../view"))

const serverHttp = http.createServer(app)

//ROTAS
import Home from './Router/Home'
import Rules from './Router/Rules'
import Ranking from './Router/Rules'
import Assets from './Router/Assets'
import Login from './Router/Login'
import Register from './Router/Register'

app.use('/', Home)
app.use('/Rules', Rules)
app.use('/Ranking', Ranking)
app.use('/Assets', Assets)
app.use('/Login', Login)
app.use('/Register', Register)

const io = new Server(serverHttp)

export {serverHttp, io}
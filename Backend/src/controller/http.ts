//PRONTA
import express from "express"
import http from "http"
import {Server} from "socket.io"

import Assets from './Router/Assets'
import Login from './Router/Login'
import Register from './Router/Register'
import User from './Router/User'

const app = express()
const serverHttp = http.createServer(app)

app.use('/Assets', Assets)
app.use('/User', User)
app.use('/Login', Login)
app.use('/Register', Register)

const io = new Server(serverHttp)

export {serverHttp, io}
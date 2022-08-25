import express from "express"
let app = express.Router()
import path from "path"

app.get('/websocket',(req, res)=>{
    res.sendFile(path.join(__dirname + "../../../view/resources/iniciandoSocket.js"))
});

export default app
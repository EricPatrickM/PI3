import express from "express"
let app = express.Router()
import path from "path"

app.get('/webSocket',(req, res)=>{
    res.sendFile(path.join(__dirname + "../../../view/Assets/iniciandoSocket.js"))
});

export default app
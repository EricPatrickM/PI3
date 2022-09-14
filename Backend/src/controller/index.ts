import {serverHttp} from "./http"
import "./webSocket"
import Room from "../model/gameLogic/Room"

const game = new Room();

serverHttp.listen(3000, () =>{console.log('RODANDO')})
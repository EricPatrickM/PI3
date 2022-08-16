import {serverHttp} from "./http"
import "./webSocket"

import Game from "../model/gameLogic/Game/game"
const game = new Game(5)


serverHttp.listen(3000, () =>{console.log('RODANDO')})
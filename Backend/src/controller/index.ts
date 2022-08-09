import {serverHttp} from "./http"
import "./webSocket"

serverHttp.listen(3000, () =>{console.log('RODANDO')})
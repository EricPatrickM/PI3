import express from "express"
let app = express.Router()

app.get('/',(req, res)=>{
    res.render('Rules')
})

export default app
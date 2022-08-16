import express from "express"
let app = express.Router()

app.get('/',(req, res)=>{
    res.render('Index')
})

export default app
import express from "express"
let app = express.Router()

app.get('/:id',(req, res)=>{
    res.render('teste')
})

export default app
import express from 'express'
let app = express.Router()

app.get('/',(req,res)=>{
    res.render('Ranking')
});

export default app;
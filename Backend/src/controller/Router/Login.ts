import express from "express"
let app = express.Router()

app.get('/',(req,res)=>{
    res.render('Login')
})

app.post('/',(req, res)=>{
    //XSS e HTMLI
    const Email = req.body.Email
    const Password = req.body.Password
    res.send('Sucess')
})

export default app
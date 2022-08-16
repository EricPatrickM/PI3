import express from "express"
let app = express.Router()

app.post('/',(req, res)=>{
    //XSS e HTMLI
    const Email = req.body.Email
    const Password = req.body.Password
    const NickName = req.body.NickName
    res.send('Sucess')
})

export default app
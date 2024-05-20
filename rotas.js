const express = require('express')
const app = express()

const AlunoBD = require('./app2')

app.get('/usuarios', function(req,res){
    res.type("usuarios.html")
})

//iniciar servidor
let server = app.listen(3000, function(){
    let host = server.address().address
    let port = server.address().port
    console.log("servidor iniciado em http://%s:%s", host, port)
})
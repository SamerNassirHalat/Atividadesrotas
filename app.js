const express = require("express")
const app = express()

app.listen(8081, function(req, res){
    console.log("servidor ativo")
})

app.get("/", function(req, res){
    console.log("pagina principal")
    res.send("pagina principal")
})

app.get("/cadastro", function(req , res){
    console.log("pagina cadastro")
    res.send("pagina cadastro")
})

app.get("/produtos:/item/:quantidade", function(req, res){
    res.send("item:"+ req.params.item + "quantidade:"+ req.params.quantidade)
})
app.get("/contato", function(req, res){
    console.log("pagina contato")
    res.send("pagina contato")
})


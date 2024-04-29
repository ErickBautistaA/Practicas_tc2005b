import express, { request, response } from 'express'
import http from "http"
// const express = require('express')

const app = express()

app.use(express.urlencoded ({ extended: true }))
app.use(express.json())

app.get('/',(request, response) =>{
    response.send("pagina de inicio")
})

app.get('/test', (request, response) => {
    response.send("hola")
})

app.get('/wow', (request, response) => {
    response.send("aqui esta por quien lloraban")
})

app.get('/side', (request, response)=>{
    response.send("Vota, por quien no importa pero vota")
})

app.get("*",(request,response) => {
    response.send("error 404")
})


const server = http.createServer(app);
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

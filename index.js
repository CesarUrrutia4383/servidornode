const http = require ('http')
const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req,res)=>{
    res.statusCode= 200;
    res.setHeader('ContentType','text-plain')
    res.end('Servidor funcionando en node \n ')

});

    server.listen(port,hostname,()=>{
        console.log('El servidor esta corriendo en http://127.0.0.1:3000')
    })

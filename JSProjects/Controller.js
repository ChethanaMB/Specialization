const http = require('http');
const fs = require('fs');

/*
http.createServer((req, res) =>{
    res.write("Hello world");
    res.end();
}).listen(8080, () => console.log("The server is started"));
*/

http.createServer((req, res) =>{
    res.writeHead(200, {'Content-type': 'text/html'});
    if(req.url === '/home' || req.url === '/'){
        let data = fs.readFileSync('Static/index.html');
        res.write(data);
    }
    else if(req.url === '/home/signin'){
        let data = fs.readFileSync('Static/Signin.html');
        res.write(data);
    } 
    else if(req.url === '/home/menu'){
        let data = fs.readFileSync('Static/Menu.html');
        res.write(data);
    } 
    else if(req.url === '/home/contact'){
        let data = fs.readFileSync('Static/Contact.html');
        res.write(data);
    }
    else if(req.url === '/home/about'){
        let data = fs.readFileSync('Static/about.html');
        res.write(data);
    }else{
        let data = fs.readFileSync('Static/error.html');
        res.write(data);
    }
    //res.write("Hello world");
    res.end();
}).listen(8082, () => console.log("The server is started"));
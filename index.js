let http = require("http");


let server = http.createServer((req,res)=>{
       
     
   
     if(req.url == "/"){
        res.end(" Welcome to Home Page")
     }
     else if(req.url == "/aboutus"){
        res.end("<h3>Welcome to About Page</h3>")
     }
     else if(req.url == "/contactus"){
        res.end("<a>Welcome to masai school</a>")
     }

     else{
        res.end("404 Not Found")
     }
     
     
})

server.listen(8080,()=>{
    console.log("sever start now http://localhost:8080")
})
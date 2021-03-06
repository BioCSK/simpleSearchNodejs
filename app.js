let express = require('express');
let bodyParser = require('body-parser');
let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));


app.listen(3000,function(){
    console.log(__dirname)
    console.log("server executed on 3000 port ")
})

app.get("/",function(req,res){
    res.sendFile( __dirname + "/public/hello.html");
})

app.post("/api/search",function(req,res){
    searchDto = req.body;
    result = { 
        "status" : "200",
        "description" : "ok",
        "response_time" : Date.now(),
        "data" : searchDto
    }
   result = JSON.stringify(result);
   res.send(result);
})
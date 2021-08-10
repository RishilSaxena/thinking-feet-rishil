const express = require("express");
const PORT = process.env.PORT || 5000
const app = express();
app.use(express.json());

app.post("/api/form", function(req, res){
    console.log(req.body);
})

app.listen(PORT, function(){
    console.log("App listening on port " + PORT)
})
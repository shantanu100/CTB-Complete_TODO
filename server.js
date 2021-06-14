const express = require("express")
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

//connect to mongoose
const url = 'mongodb://localhost/NotesDb'
mongoose.connect(url,{useNewUrlParser:true,  useUnifiedTopology: true })
mongoose.set('useFindAndModify', false);


app.use("/",require("./routes/noteRoute"))

//require route

app.listen(4000,function(){
    console.log("expresss server is running on port 4000")
})
const express = require("express");
const Note = require("../models/noteModel");
const router = express.Router();


router.route("/create").post((req,res)=>{
    const title = req.body.title;
    const content = req.body.content;
    const newNote = new Note({
        title,
        content
    });

    console.log("this is new note",newNote);
    newNote.save();
    
})

router.route("/notes").get((req,res)=>{
    Note.find()
       .then(foundNotes=>res.json(foundNotes))
})

router.route("/delete/:id").delete((req,res)=>{
    const id = req.params.id;
    Note.findByIdAndDelete({_id:id},(req,res,err)=>{
        if(!err){
            console.log("Item deleted");
        }
        else{
            console.log("there is an error",err)
        }
    })
})

router.route("/update/:id").put((req,res)=>{
    console.log("in put");
    console.log(req.body);

    const id = req.params.id;
        Note.findByIdAndUpdate({_id:id},{
            title: req.body.title,
            content:req.body.content,
            
        },function(err,Note){
            if(err){
                console.log(err)
                res.send("error",err)
            }else{
                console.log("updated user",Note)
                res.send("success")
            }
        })
 
})

module.exports=router;
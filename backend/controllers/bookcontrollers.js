const express=require ('express');
var router=express.Router();
var ObjectId=require('mongoose').Types.ObjectId;

var{Books}=require('../models/books')

router.get('/',(req,res)=>{
    Books.find((err,docs)=>{
        if(!err){
            res.send(docs);
        }
        else{
            console.log("Error to find book data"+JSON.stringify(err,undefined,2));;
        }
    })
});

router.get('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No Record with given id: ${req.params.id}`)

    Books.findById(req.params.id,(err,docs)=>{
        if(!err){
                res.send(docs);
        }
        else{
                console.log("Error to find book data"+JSON.stringify(err,undefined,2));;
            }
        })
});

router.post('/',(req,res)=>{

    var book=new Books({
        Book_Title:req.body.Book_Title,
        Author:req.body.Author,
        ISBN:req.body.ISBN
    });
    book.save((err,docs)=>{
        if(!err){
            res.send(docs);
        }
        else{
            console.log("Error to save book data"+JSON.stringify(err,undefined,2));;
        }
    })
});

router.put('/:id',(req,res)=>{
    var book={
        Book_Title:req.body.Book_Title,
        Author:req.body.Author,
        ISBN:req.body.ISBN
        
    }
    Books.findByIdAndUpdate(req.params.id,{$set:book},{new:true},(err,doc)=>{
        if(!err){
            res.send(doc);
        }
        else{
            console.log("Error in Book Update: "+JSON.stringify(err,undefined,2))
        }
    })

})

router.delete('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No Record with given id: ${req.params.id}`)

    Books.findByIdAndRemove(req.params.id,(err,doc)=>{
        if(!err){
            res.send(doc);
        }
        else{
            console.log("Error in Book Delete: "+JSON.stringify(err,undefined,2))
        }

    });

})

module.exports=router;
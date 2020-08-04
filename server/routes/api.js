const express = require('express')
const User = require('../models/user')
const router = express.Router()
const mongoose = require('mongoose')
const db = "mongodb+srv://masoom:arkham@cluster0.aedf2.mongodb.net/EventsDB?retryWrites=true&w=majority"



router.get('/',(req,res)=>{
 res.send("From api route")
})

mongoose.connect(db,err=>{
    if(err)
    {
        console.log(err)
    }else{
        console.log("connection successful")
    }
})

router.post('/register',(req,res)=>{
    let userData = req.body
    let user = new User(userData)
    user.save((error,registeredUser)=>{
        if(error)
        {
            console.log(error)
        }else{
            res.status(200).send(registeredUser)
        }
    })

})
router.post('/login',(req,res)=>{
    let userData =req.body
    User.findOne({email:userData.email},(err,user)=>{
        if(err){
            console.log(err)
        }else{
            if(!user){
                res.status(401).send("invalid email")
            }else
            if(user.password != userData.password)
            {
                res.status(401).send('Invalid password')
            }else{
                res.status(200).send(user)
            }
        }
    })
})

router.get('/events',(req,res)=>{
    let events = [
        {
            "id": "1",
            "name" : "tony" ,
            "identity" : "iron man",
        },
        {
            "id": "1",
            "name" : "bruce" ,
            "identity" : "hulk",
        },
        {
            "id": "1",
            "name" : "steeve" ,
            "identity" : "captain america",
        },
        {
            "id": "1",
            "name" : "peter" ,
            "identity" : "spiderman",
        },
        {
            "id": "1",
            "name" : "natasha" ,
            "identity" : "black widow",
        }
    ]
    res.json(events)
})
router.get('/special',(req,res)=>{
    let events = [
        {
            "id": "1",
            "name" : "tony" ,
            "identity" : "iron man",
        },
        {
            "id": "1",
            "name" : "bruce" ,
            "identity" : "hulk",
        },
        {
            "id": "1",
            "name" : "steeve" ,
            "identity" : "captain america",
        },
        {
            "id": "1",
            "name" : "peter" ,
            "identity" : "spiderman",
        },
        {
            "id": "1",
            "name" : "natasha" ,
            "identity" : "black widow",
        }
    ]
    res.json(events)
})

module.exports = router
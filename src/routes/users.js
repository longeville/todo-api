const express = require("express");
const {nanoid} = require('nanoid');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

router.get('/', (req,res) => {
    let users = req.app.db.get('users').value();
    return res.send(users);
});

router.get('/:id', (req,res) => {
    let user = req.app.db.get('users').find({ 
        id: req.params.id
    }).value();

    if(!user){
        res.sendStatus(404);
        return res.send({
            message: "user cannot be found",
            internal_code: "Invalid id"
        });
    };

    return res.send(user);
});

router.post('/', (req,res) => {
    let user = {
        id:uuidv4(),
        ...req.body
    };

    try {
        req.app.db.get("users").push(user).write();
        return res.sendStatus(201).send("user created");
    } catch(error){
        return res.sendStatus(500).send(error);
    }
});

router.put('/:id', (req,res) => {
    let user = req.app.db.get("users").find({
        id: req.params.id
    }).value();
    
    if(!user){
        return res.sendStatus(404);
    };
    
    try {
        req.app.db.get("users").find({
            id:req.params.id
        })
        .assign({ email: req.body.email, name: req.body.name, statistics: req.body.statistics })
        .write();

        return res.send("user updated");

    } catch(error) {
        res.sendStatus(500);
        return res.send(error);
    };

});

router.delete('/:id', (req,res) => {

    //find user.
    let user = req.app.db.get("users").find({
        id:req.params.id
    }).value();

    if(!user){

        return res.sendStatus(404);

    };

    // delete the user.
    try {
        req.app.db.get("users").remove({
            id:req.params.id
        })
        .write();

        return res.send("user deleted");

    } catch(error) {

        return res.sendStatus(500);

    }

});

module.exports = router;
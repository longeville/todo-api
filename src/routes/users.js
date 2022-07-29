const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const { checkIfValidId, checkIfValidUser, checkIfValidUserUpdate } = require("../validation");

router.get("/", (req, res) => {
    let users = req.app.db.get("users").value();
    return res.send(users);
});

router.get("/:id", (req, res) => {
    const idIsValid = checkIfValidId(req.params.id);

    let user = req.app.db
        .get("users")
        .find({
            id: req.params.id,
        })
        .value();

    if (!idIsValid) {
        res.sendStatus(400);
        return res.send({
            message: "bad input - invalid id",
            internal_code: "bad input - invalid id",
        });
    } else if (!user) {
        res.sendStatus(404);
        return res.send({
            message: "not found",
            internal_code: "Invalid id",
        });
    }

    return res.send(user);
});

router.post("/getByEmail", (req, res) => {
    const email = req.body.email;
    const emailIsValid = !!email && email.length > 0;

    if (!emailIsValid) {
        res.sendStatus(400);
        return res.send({
            message: "bad input - invalid email",
            internal_code: "bad input - invalid email",
        });
    } else {
        let user = req.app.db
            .get("users")
            .find({email: email})
            .value();

        if (!user) {
            res.sendStatus(404);
            return res.send({
                message: "not found",
                internal_code: "Invalid id",
            });
        }
        return res.send(user);
    }
});

router.post("/", (req, res) => {
    const isUserValid = checkIfValidUser(req.body);

    if (!isUserValid) {
        res.sendStatus(400);
        return res.send({
            message: "bad input - invalid user",
            internal_code: "bad input - invalid user",
        });
    } else {
        let user = {
            ...req.body,
            id: uuidv4(),
        };

        try {
            req.app.db.get("users").push(user).write();
            return res.send(user);
        } catch (error) {
            return res.sendStatus(500).send(error);
        }
    }
});

router.put("/:id", (req, res) => {
    const isUserValid = checkIfValidUserUpdate(req.body);
    const isIdValid = checkIfValidId(req.params.id);

    if (!isIdValid) {
        res.sendStatus(400);
        return res.send({
            message: "invalid id",
            internal_code: "bad input - invalid id",
        });
    } else if (!isUserValid) {
        res.sendStatus(400);
        return res.send({
            message: "bad input - invalid user",
            internal_code: "bad input - invalid user",
        });
    } else {
        let user = req.app.db
            .get("users")
            .find({
                id: req.params.id,
            })
            .value();

        if (!user) {
            return res.sendStatus(404);
        }

        try {
            req.app.db
                .get("users")
                .find({
                    id: req.params.id,
                })
                .assign({
                    email: req.body.email,
                    name: req.body.name,
                    statistics: req.body.statistics,
                    todos: req.body.todos
                })
                .write();

            return res.send("user updated");
        } catch (error) {
            res.sendStatus(500);
            return res.send(error);
        }
    }
});

router.delete("/:id", (req, res) => {
    const idIsValid = checkIfValidId(req.params.id);

    let user = req.app.db
        .get("users")
        .find({
            id: req.params.id,
        })
        .value();

    if (!user) {
        return res.sendStatus(404);
    } else if (!idIsValid) {
        res.sendStatus(400);
        return res.send({
            message: "invalid id",
            internal_code: "bad input - invalid id",
        });
    }

    try {
        req.app.db
            .get("users")
            .remove({
                id: req.params.id,
            })
            .write();

        return res.send("user deleted");
    } catch (error) {
        return res.sendStatus(500);
    }
});

module.exports = router;

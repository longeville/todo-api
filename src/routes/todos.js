const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const { checkIfValidId, checkIfValidTodo } = require("../validation");

router.get("/", (req, res) => {
    let todos = req.app.db.get("todos").value();
    return res.send(todos);
});

router.get("/:id", (req, res) => {
    const idIsValid = checkIfValidId(req.params.id);

    let todo = req.app.db
        .get("todos")
        .find({
            id: req.params.id,
        })
        .value();

    if (!idIsValid) {
        res.sendStatus(400);
        return res.send({
            message: "invalid id",
            internal_code: "bad input - invalid id",
        });
    } else if (!todo) {
        res.sendStatus(404);
        return res.send({
            message: "not found",
            internal_code: "not found",
        });
    }

    return res.send(todo);
});

router.post("/", (req, res) => {
    let todo = {
        id: uuidv4(),
        ...req.body,
    };

    try {
        req.app.db.get("todos").push(todo).write();
        return res.sendStatus(201).send("success");
    } catch (error) {
        return res.sendStatus(500).send(error);
    }
});

router.post("/todo-for-user", (req, res) => {
    const isIdValid = checkIfValidId(req.body.id);
    const isToDoValid = checkIfValidTodo(req.body.todo);

    let todo = {
        ...req.body.todo,
        id: uuidv4(),
    };

    if (!isIdValid) {
        res.sendStatus(400);
        return res.send({
            message: "invalid id",
            internal_code: "bad input - invalid id",
        });
    } else if (!isToDoValid) {
        res.sendStatus(400);
        return res.send({
            message: "invalid to do",
            internal_code: "bad input - invalid to do",
        });
    } else {
        // find user
        let user = req.app.db
            .get("users")
            .find({
                id: req.body.id,
            })
            .value();

        if (!user) {
            return res.sendStatus(404);
        } else {
            // write todo
            try {
                const updatedUser = { ...user, todos: [...user.todos, todo] };

                req.app.db
                    .get("users")
                    .find({
                        id: req.body.id,
                    })
                    .assign(updatedUser)
                    .write();
                return res.send("success");
            } catch (error) {
                res.sendStatus(500);
                return res.send(error);
            }
        }
    }
});

router.put("/:id", (req, res) => {
    const idIsValid = checkIfValidId(req.params.id);
    const todoIsValid = checkIfValidTodo(req.body);
    let todo = req.app.db
        .get("todos")
        .find({
            id: req.params.id,
        })
        .value();

    if (!idIsValid) {
        res.sendStatus(400);
        return res.send({
            message: "invalid id",
            internal_code: "bad input - invalid id",
        });
    } else if (!todoIsValid) {
        res.sendStatus(400);
        return res.send({
            message: "invalid todo",
            internal_code: "bad input - invalid todo",
        });
    } else if (!todo) {
        res.sendStatus(404);
        return res.send({
            message: "not found",
            internal_code: "not found",
        });
    } else {
        try {
            req.app.db
                .get("todos")
                .find({
                    id: req.params.id,
                })
                .assign(req.body)
                .write();

            return res.send("success");
        } catch (error) {
            res.sendStatus(500);
            return res.send(error);
        }
    }
});

router.delete("/:id", (req, res) => {
    const idIsValid = checkIfValidId(req.params.id);

    let todo = req.app.db
        .get("todos")
        .find({
            id: req.params.id,
        })
        .value();

    if (!idIsValid) {
        res.sendStatus(400);
        return res.send({
            message: "invalid id",
            internal_code: "bad input - invalid id",
        });
    } else if (!todo) {
        res.sendStatus(404);
        return res.send({
            message: "not found",
            internal_code: "not found",
        });
    } else {
        try {
            req.app.db
                .get("todos")
                .remove({
                    id: req.params.id,
                })
                .write();

            return res.send("Todo deleted");
        } catch (error) {
            return res.sendStatus(500);
        }
    }
});

module.exports = router;

const getTodos = require('./get-todos');
const getTodo = require('./get-todo');
const createTodo = require('./create-todo');
const updateTodo = require('./update-todo');
const deleteTodo = require('./delete-todo');

const getUsers = require('./get-users');
const getUser = require('./get-user');
const createUser = require('./create-user');
const updateUser = require('./update-user');
const deleteUser = require('./delete-user');

module.exports = {
    paths:{
        '/api/todos':{
            ...getTodos,
            ...createTodo
        },
        '/api/todos/{id}':{
            ...getTodo,
            ...updateTodo,
            ...deleteTodo
        },
        '/api/users':{
            ...getUsers,
            ...createUser
        },
        '/api/users/{id}':{
            ...getUser,
            ...updateUser,
            ...deleteUser
        }
    }
}
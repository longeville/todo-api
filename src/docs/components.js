module.exports = {
    components: {
        schemas: {
            // "3cce86c0-f2ac-4514-beef-2cd6fd3fa631"
            id: {
                type: "string",
                description: "An id of a todo",
                example: "3cce86c0-f2ac-4514-beef-2cd6fd3fa631",
            },

            // {email: "jane@doe.com"}
            emailInput: {
                type: "object",
                properties: {
                    email: {
                        type: "string",
                        description: "An e-mail address",
                        example: "mi@email.com",
                    },
                },
            },

            // {
            //     name: "Pick up Elif",
            //     category: "cat-01",
            //     isDone: true,
            // },
            Todo: {
                type: "object",
                properties: {
                    id: {
                        type: "string",
                        description: "Todo identification number",
                        example: "3cce86c0-f2ac-4514-beef-2cd6fd3fa631",
                    },
                    name: {
                        type: "string",
                        description: "Todo's description",
                        example: "Pick up Elif",
                    },
                    isDone: {
                        type: "boolean",
                        description: "The status of the todo",
                        example: false,
                    },
                    category: {
                        type: "string",
                        description: "Todo's category",
                        example: "cat-01",
                    },
                },
            },

            // Todo input model
            TodoInput: {
                type: "object",
                properties: {
                    name: {
                        type: "string",
                        description: "Todo's name",
                        example: "Pick up Elif",
                    },
                    isDone: {
                        type: "boolean",
                        description: "The status of the todo",
                        example: false,
                    },
                    category: {
                        type: "string",
                        description: "Todo's category",
                        example: "cat-01",
                    },
                },
            },

            TodoForUserInput: {
                type: "object",
                properties: {
                    id: {
                        type: "string",
                        description: "User identification number",
                        example: "04df2f9a-13a9-4263-97a3-4e382a70311e",
                    },
                    todo: {
                        type: "object",
                        properties: {
                            name: {
                                type: "string",
                                description: "Todo's name",
                                example: "Nieuwe to do",
                            },
                            isDone: {
                                type: "boolean",
                                description: "The status of the todo",
                                example: false,
                            },
                            category: {
                                type: "string",
                                description: "Todo's category",
                                example: "cat-01",
                            },
                        },
                    },
                },
            },

            // User model
            // {
            //     email: "jane@email.com",
            //     id: createUniqueID(),
            //     name: "Jane Doe",
            //     statistics: {
            //         registrationDate: "05.07.2022",
            //         totalOnlineTime: 0,
            //    },
            //     todos: []
            // }
            User: {
                type: "object",
                properties: {
                    id: {
                        type: "string",
                        description: "User identification number",
                        example: "04df2f9a-13a9-4263-97a3-4e382a70311e",
                    },
                    name: {
                        type: "string",
                        description: "User's name",
                        example: "Jane Doe",
                    },
                    email: {
                        type: "string",
                        description: "The e-mail address of the user",
                        example: "jane@email.com",
                    },
                    statistics: {
                        type: "object",
                        description: "statistics of the user",
                        properties: {
                            registrationDate: {
                                type: "string",
                                description:
                                    "the date on which the user has registered",
                                example: "05.07.2022",
                            },
                            totalOnlineTime: {
                                type: "number",
                                description:
                                    "amount of time (in hours) the user has spent on todoobiedoempie",
                                example: "5",
                            },
                        },
                    },
                    todos: {
                        type: 'array',
                        description: "todos linked to this user",
                        items: {
                            name: {
                                type: "string",
                                description: "Todo's name",
                                example: "Pick up Elif",
                            },
                            isDone: {
                                type: "boolean",
                                description: "The status of the todo",
                                example: false,
                            },
                            category: {
                                type: "string",
                                description: "Todo's category",
                                example: "cat-01",
                            },
                            id: {
                                type: "number",
                                description: "id of the to do",
                                example: "07c8e0c9-529f-45d2-94c8-583a0973f94b"
                            }
                        }
                    }
                },
            },

            // User input model
            UserInput: {
                type: "object",
                properties: {
                    name: {
                        type: "string",
                        description: "User's name",
                        example: "Jane Doe",
                    },
                    email: {
                        type: "string",
                        description: "The e-mail address of the user",
                        example: "jane@email.com",
                    },
                    statistics: {
                        type: "object",
                        description: "statistics of the user",
                        properties: {
                            registrationDate: {
                                type: "string",
                                description:
                                    "the date on which the user has registered",
                                example: "05.07.2022",
                            },
                            totalOnlineTime: {
                                type: "number",
                                description:
                                    "amount of time (in hours) the user has spent on todoobiedoempie",
                                example: "5",
                            },
                        },
                    },
                    todos: {
                        type: 'array',
                        description: "todos linked to this user",
                        items: {
                            name: {
                                type: "string",
                                description: "Todo's name",
                                example: "Pick up Elif",
                            },
                            isDone: {
                                type: "boolean",
                                description: "The status of the todo",
                                example: false,
                            },
                            category: {
                                type: "string",
                                description: "Todo's category",
                                example: "cat-01",
                            },
                            id: {
                                type: "number",
                                description: "id of the to do",
                                example: "07c8e0c9-529f-45d2-94c8-583a0973f94b"
                            }
                        }
                    }
                },
            },

            // error model
            Error: {
                type: "object", //data type
                properties: {
                    message: {
                        type: "string",
                        description: "Error message",
                        example: "Not found",
                    },
                    internal_code: {
                        type: "string",
                        description: "Error internal code",
                        example: "Invalid parameters",
                    },
                },
            },
        },
    },
};

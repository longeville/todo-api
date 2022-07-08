module.exports = {
    components: {
        schemas: {
            // id model
            // "3cce86c0-f2ac-4514-beef-2cd6fd3fa631"
            id: {
                type: "string", // data type
                description: "An id of a todo", // desc
                example: "3cce86c0-f2ac-4514-beef-2cd6fd3fa631", // example of an id
            },

            // todo model
            // {
            //     name: "Pick up Elif",
            //     category: "cat-01",
            //     isDone: true,
            // },
            Todo: {
                type: "object", // data type
                properties: {
                    id: {
                        type: "string", // data-type
                        description: "Todo identification number", // desc
                        example: "3cce86c0-f2ac-4514-beef-2cd6fd3fa631", // example of an id
                    },
                    name: {
                        type: "string", // data-type
                        description: "Todo's name", // desc
                        example: "Pick up Elif", // example of a name
                    },
                    isDone: {
                        type: "boolean", // data type
                        description: "The status of the todo", // desc
                        example: false, // example of a completed value
                    },
                    category: {
                        type: "string", // data-type
                        description: "Todo's category", // desc
                        example: "cat-01", // example of a category
                    },
                },
            },

            // Todo input model
            TodoInput: {
                type: "object", // data type
                properties: {
                    name: {
                        type: "string", // data type
                        description: "Todo's name", // desc
                        example: "Pick up Elif", // example of a name
                    },
                    isDone: {
                        type: "boolean", // data type
                        description: "The status of the todo", // desc
                        example: false, // example of a completed value
                    },
                    category: {
                        type: "string", // data-type
                        description: "Todo's category", // desc
                        example: "cat-01", // example of a category
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
            //     }
            User: {
                type: "object", // data type
                properties: {
                    id: {
                        type: "string", // data-type
                        description: "User identification number", // desc
                        example: "04df2f9a-13a9-4263-97a3-4e382a70311e", // example of an id
                    },
                    name: {
                        type: "string", // data-type
                        description: "User's name", // desc
                        example: "Jane Doe", // example of a name
                    },
                    email: {
                        type: "string", // data type
                        description: "The e-mail address of the user", // desc
                        example: "jane@email.com", // example of a completed value
                    },
                    statistics: {
                        type: "object", // data-type
                        description: "statistics of the user", // desc
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
                },
            },

            // User input model
            UserInput: {
                type: "object", // data type
                properties: {
                    name: {
                        type: "string", // data-type
                        description: "User's name", // desc
                        example: "Jane Doe", // example of a name
                    },
                    email: {
                        type: "string", // data type
                        description: "The e-mail address of the user", // desc
                        example: "jane@email.com", // example of a completed value
                    },
                    statistics: {
                        type: "object", // data-type
                        description: "statistics of the user", // desc
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
                },
            },

            // error model
            Error: {
                type: "object", //data type
                properties: {
                    message: {
                        type: "string", // data type
                        description: "Error message", // desc
                        example: "Not found", // example of an error message
                    },
                    internal_code: {
                        type: "string", // data type
                        description: "Error internal code", // desc
                        example: "Invalid parameters", // example of an error internal code
                    },
                },
            },
        },
    },
};

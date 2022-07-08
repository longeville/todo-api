module.exports = {
    components: {
        schemas: {
            // id model
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

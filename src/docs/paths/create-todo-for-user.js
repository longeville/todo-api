module.exports = {
    post: {
        tags: ["todos"],
        description: "Create a new to do for a user",
        operationId: "createTodoForUser",
        parameters: [],
        requestBody: {
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/TodoForUserInput",
                    },
                },
            },
        },

        responses: {
            201: {
                description: "Todo created successfully",
            },

            500: {
                description: "Server error",
            },
        },
    },
};

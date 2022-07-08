module.exports = {
    // operation's method
    post: {
        tags: ["users"], // operation's tag
        description: "Create user", // short desc
        operationId: "createUser", // unique operation id
        parameters: [], // expected params
        requestBody: {
            // expected request body
            content: {
                // content-type
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/UserInput", // user input data model
                    },
                },
            },
        },
        // expected responses
        responses: {
            // response code
            201: {
                description: "User created successfully", // response desc
            },
            // response code
            500: {
                description: "Server error", // response desc
            },
        },
    },
};

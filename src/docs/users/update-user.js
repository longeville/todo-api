module.exports = {
    // operation's method
    put: {
        tags: ["Users CRUD operations"], // operation's tag
        description: "Update user", // short desc
        operationId: "updateUser", // unique operation id
        parameters: [
            // expected params
            {
                name: "id", // name of param
                in: "path", // location of param
                schema: {
                    $ref: "#/components/schemas/id", // id model
                },
                required: true, // mandatory
                description: "Id of user to be updated", // short desc.
            }
        ],
        requestBody: {
            content: {
                'application/json': {
                    schema: {
                        $ref: '#/components/schemas/UserInput'
                    }
                }
            }
        },
        // expected responses
        responses: {
            // response code
            200: {
                description: "User updated successfully", // response desc.
            },
            // response code
            404: {
                description: "User not found", // response desc.
            },
            // response code
            500: {
                description: "Server error", // response desc.
            },
        },
    },
};

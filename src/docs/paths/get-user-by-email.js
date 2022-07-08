module.exports = {
    post: {
        tags: ["users"],
        description: "Get a user by e-mail",
        operationId: "getUserByEmail",
        requestBody: {
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/emailInput",
                    },
                },
            },
        },
        responses: {
            200: {
                description: "User is obtained",
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/User",
                        },
                    },
                },
            },
            404: {
                description: "User is not found",
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/Error",
                        },
                    },
                },
            },
        },
    },
};

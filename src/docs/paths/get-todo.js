module.exports = {
    get: {
        tags: ["todos"],
        description: "Get a todo",
        operationId: "getTodo",
        parameters: [
            {
                name: "id",
                in: "path",
                schema: {
                    $ref: "#/components/schemas/id",
                },
                required: true,
                description: "A single todo id",
            },
        ],
        responses: {
            200: {
                description: "succes",
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/Todo",
                        },
                    },
                },
            },
            400: {
                description: "bad input: id not valid",
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/Error",
                        },
                    },
                },
            },
            404: {
                description: "not found",
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

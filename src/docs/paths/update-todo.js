module.exports = {
    put: {
        tags: ["todos"],
        description: "Update todo",
        operationId: "updateTodo",
        parameters: [
            {
                name: "id",
                in: "path",
                schema: {
                    $ref: "#/components/schemas/id",
                },
                required: true,
                description: "Id of todo to be updated",
            },
        ],
        requestBody: {
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/TodoInput",
                    },
                },
            },
        },
        responses: {
            200: {
                description: "Todo updated successfully",
            },
            404: {
                description: "Todo not found",
            },
            500: {
                description: "Server error",
            },
        },
    },
};

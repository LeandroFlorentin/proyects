export default {
  decoded_token: {
    get: {
      security: [
        {
          bearerAuth: [],
        },
      ],
      tags: ["JWT"],
      responses: {
        200: {
          description: "Succes",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  info: {
                    type: "boolean",
                    example: true,
                  },
                  msg: {
                    type: "string",
                    example: "Token decoded with successfully",
                  },
                  content: {
                    type: "object",
                    example: {
                      idusername: {
                        type: "number",
                        example: 14,
                      },
                    },
                  },
                },
                example: {
                  info: true,
                  msg: "Token decoded with successfully",
                  content: {
                    idusername: 12,
                  },
                },
              },
            },
          },
        },
        500: {
          description: "Error internal server",
        },
      },
    },
  },
};

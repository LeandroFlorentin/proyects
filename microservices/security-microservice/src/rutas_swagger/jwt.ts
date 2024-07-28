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
        401: {
          description: "Error",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  info: {
                    type: "boolean",
                    example: false,
                  },
                  msg: {
                    type: "string",
                    example: "Invalid token.",
                  },
                  content: {
                    type: "object",
                    example: {
                      name: {
                        type: "stirng",
                        example: "JsonWebTokenError",
                      },
                      message: {
                        type: "string",
                        example: "invalid signature",
                      },
                    },
                  },
                },
                example: {
                  info: false,
                  msg: "Invalid token.",
                  content: {
                    name: "JsonWebTokenError",
                    message: "invalid signature",
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};

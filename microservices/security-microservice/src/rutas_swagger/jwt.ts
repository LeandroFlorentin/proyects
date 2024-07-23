export default {
  get_token: {
    get: {
      tags: ["JWT"],
      parameters: [
        {
          name: "idusername",
          in: "query",
          required: true,
          type: "string",
        },
      ],
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
                    example: "Username John Doe created successfully",
                  },
                  content: {
                    type: "string",
                    example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
                  },
                },
                example: {
                  info: true,
                  msg: "Token created with successfully",
                  content: {
                    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
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

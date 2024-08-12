export default {
  get_usernames: {
    get: {
      parameters: [
        {
          name: "idusername",
          in: "query",
          required: true,
        },
      ],
      security: [
        {
          bearerAuth: [],
        },
      ],
      tags: ["USERS"],
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
                    example: "Info OK",
                  },
                  content: {
                    type: "object",
                    properties: {
                      idusername: {
                        type: "number",
                        example: 17,
                      },
                      username: {
                        type: "string",
                        example: "John doe",
                      },
                      email: {
                        type: "string",
                        example: "example@gmail.com.ar",
                      },
                      name: {
                        type: "string",
                        example: "John",
                      },
                      lastname: {
                        type: "string",
                        example: "Doe",
                      },
                      phone: {
                        type: "string",
                        example: "1165789435",
                      },
                    },
                  },
                },
                example: {
                  info: true,
                  msg: "Info OK",
                  content: [
                    {
                      idusername: 17,
                      username: "John Doe",
                      email: "example@gmail.com.ar",
                      name: "John",
                      lastname: "Doe",
                      phone: "1165789435",
                    },
                  ],
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
                    properties: {
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

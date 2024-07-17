import moment from "moment-timezone";
export default {
  singup: {
    post: {
      tags: ["SECURITY"],
      parameters: [
        /*             {
              name: "token",
              in: "query",
              required: true,
              type: "string",
            }, */
      ],
      requestBody: {
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                username: {
                  type: "string",
                  example: "John Doe",
                },
                email: {
                  type: "string",
                  format: "email",
                  example: "example@gmail.com.ar",
                },
                password: {
                  type: "string",
                  example: "123456",
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
              required: ["username", "email", "password", "name", "lastname"],
              example: {
                username: "John Doe",
                email: "example@gmail.com.ar",
                password: "123456",
                name: "John",
                lastname: "Doe",
                phone: "1165789435",
              },
            },
          },
        },
      },
      responses: {
        200: {
          description: "Succes",
          content: {
            "application/json": {
              schema: {
                type: "object",
                example: {
                  info: "boolean",
                  msg: "string",
                  content: {
                    resumen: {
                      codigoOperacion: "string",
                      fechaIngreso: "string",
                      mailUsuario: "string",
                      origen: "string",
                      cantidadRegistros: "string",
                      cantidadIngresados: "string",
                      cantidadRechazados: "string",
                    },
                    detalleIngresos: {
                      operativa: "string",
                      ordenRetiro: "string",
                      numeroEnvio: "string",
                      remito: "string",
                      estado: "string",
                      sucursalDestino: "string",
                    },
                  },
                },
                items: {
                  type: "object",
                  content: {
                    "application/json": {
                      schema: {
                        type: "object",
                        items: {
                          idnotificacion: {
                            type: "integer",
                            description: "id generado automaticamente",
                          },
                          idusuario: {
                            type: "integer",
                            description: "id del usuario",
                          },
                          subject: {
                            type: "string",
                            description: "subject del usuario",
                          },
                          mensaje: {
                            type: "string",
                            description: "mensaje del usuario",
                          },
                          procesado: {
                            type: "boolean",
                            description: "procesado del usuario",
                          },
                        },
                      },
                    },
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

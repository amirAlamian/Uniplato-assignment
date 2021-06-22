import swaggerJSDoc from 'swagger-jsdoc';
import { config } from 'config';

const options = {
  definition: {
    openapi: '3.0.3',
    info: {
      title: 'Uniplato assignment',
      description: 'This is Uniplato assignment API for Amir Alamian project. <br>',
      version: '1.0.0',
    },
    servers: [
      {
        url: `http://localhost:${config.exposePort}${config.apiPrefix} `,
      },
    ],
  },
  // Path to the API docs
  apis: [
    'src/interface/rest/modules/v1/router.js',
    'src/interface/rest/modules/v1/*/*/router.js',
  ],
};

export const swaggerSpec = swaggerJSDoc(options);


export const swaggerOptions = {
  swaggerOptions: {
    docExpansion: 'none',
  },
};

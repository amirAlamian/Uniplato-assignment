export const config = {
  port: process.env.PORT,
  apiPrefix: process.env.API_PREFIX,
  exposePort: process.env.EXPOSE_PORT,
};

export interface ConfigType{
  port: string;
  apiPrefix: string;
  exposePort: number
}

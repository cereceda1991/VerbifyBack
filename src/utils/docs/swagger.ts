import { Application, Request, Response } from "express";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express"
import YAML from 'yamljs'



const swaggerOP = YAML.load("./src/utils/docs/openapi.yaml")



const swaggerDocs = (app: Application, port: string|number) => {
  app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerOP));
  app.get("/api/docs.json", (req: Request, res: Response) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerOP);
    console.log(
      `Docs are available at http://localhost:${port}/api/docs`
    );
  });
};

export { swaggerDocs };

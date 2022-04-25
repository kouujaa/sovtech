import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { createServer } from "http";
import morgan from "morgan";
import { createApolloServer } from "./graphql";
import path from "path";
import restRouter from "./rest";
dotenv.config();

const base = "/api/v1";
const app = express();
console.log({ base });
const httpServer = createServer(app);
(async () => {
  /*********************
   * MIDDLEWARES
   * *******************/
  app.use(express.json());
  app.use(
    express.urlencoded({
      extended: true,
    })
  );

  app.use(morgan("tiny"));
  app.use(
    cors({
      credentials: false,
      methods: ["DELETE", "GET", "POST", "PUT"],
      optionsSuccessStatus: 200,
      exposedHeaders: ["Authorization"],
    })
  );
  if (process.env.NODE_ENV === "development") {
    app.use(express.static("client/build"));
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
  }
  /*********************
   * AUTHENTICATION -- IF YOU WANT TO IMPLEMENT IT
   * *******************/
  const authMiddleWare = (req, res, next) => {
    next();
  };

  /*********************
   * REST -- IF YOU WANT TO IMPLEMENT IT
   * *******************/
  app.use(`${base}/rest`, restRouter());

  /*********************
   * GQL
   * *******************/
  const gqlPath = `${base}/graphql`;
  console.log({ gqlPath });
  const apolloServer = await createApolloServer();
  await apolloServer.start();
  app.use(authMiddleWare, apolloServer.getMiddleware({ path: gqlPath }));
})();

export default httpServer;

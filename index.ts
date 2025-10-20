import express, { Express } from "express";
import dotenv from "dotenv";
import { connect } from "./config/database";
import mainV1Routes from "./api/v1/routes/index.route";

dotenv.config();

connect();

const app: Express = express();
const port: number | string = process.env.PORT || 3000;

mainV1Routes(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

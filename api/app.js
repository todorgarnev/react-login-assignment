import express, { json, urlencoded } from "express";
import cors from "cors";
import logger from "morgan";
import { join } from "path";

const app = express();
const __dirname = import.meta.dirname;

app.use(cors());
app.use(logger("dev"));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(express.static(join(__dirname, "build")));

app.listen("3000", () => {
  console.log("Server is ready on port 3000");
});

app.use("/api/login", (req, res) => {
  return res.json({
    data: "test data",
  });
});

export default app;

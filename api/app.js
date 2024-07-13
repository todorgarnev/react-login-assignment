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

app.post("/api/login", (req, res) => {
  const { email, password } = req.body;
  const users = [
    {
      email: "email@abv.bg",
      password: "12345",
    },
    {
      email: "email@gmail.com",
      password: "12345",
    },
    {
      email: "email@yahoo.com",
      password: "12345",
    },
    {
      email: "email@email.com",
      password: "12345",
    },
  ];
  let isValid = false;

  for (const user of users) {
    if (user.email === email && user.password === password) {
      isValid = true;
    }
  }

  setTimeout(() => {
    if (isValid) {
      return res.status(200).end();
    } else {
      return res.status(401).end();
    }
  }, 1000);
});

export default app;

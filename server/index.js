import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./configs/mongoose.js";
import cookieParser from "cookie-parser";
import auth from "./routes/auth.js";

dotenv.config();

connectDB();


const app = express();
const port = process.env.PORT;

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", auth);

app.use("*", (_, res) => res.status(522).send("route not found"));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

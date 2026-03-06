import express from "express"
import indexRouter from './routes/index.js'
import CustomError from './errors/CustomError.js'
import path from 'path'
import newRouter from "./routes/new.js"
import { messages } from "./db.js";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use("/index", indexRouter);
app.use("/new", newRouter);
app.get("/", (req, res) => {
  res.render("index", { messages: messages });
});

app.use((req, res, next) => {
  console.log(`${req.method} request to ${req.url}`);
  const error = new CustomError("Route not defined");
  next(error);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  const status = err.statusCode || 500;
  res.status(status).json({
    error: err.name,
    message: err.message
  });
});
app.listen(3000, () => console.log("Server running on port 3000"));
import express from "express";
import router from "./router";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  }),
);

app.use(router);

process.on("uncaughtException", (err) => {
  console.log(err.message);
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`API Listening at port: ${PORT}`);
});

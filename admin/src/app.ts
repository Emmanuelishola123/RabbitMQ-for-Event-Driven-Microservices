import * as express from "express";
import * as cors from "cors";



const app = express();

// Cors Middleware
app.use(
  cors({
    origin: ["*"],
  }),
);

app.use(express())



app.listen(8000, () => console.log("Admin server is fired at port:8000"));

import app from "./app";
import "./database";

import { PORT } from "./config";

require("dotenv").config();

const port = PORT;
app.listen(port, console.log("Conectado al puerto ", port));

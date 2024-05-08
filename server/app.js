const express = require("express");
const cors = require("cors");
const authRoute = require("./routes/authRouter");
const taskRoute = require("./routes/taskRouter");
const projectRoute = require("./routes/projectRouter");

require("dotenv").config();
require("./config/db");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/auth", authRoute);
app.use("/project", projectRoute);
app.use("/task", taskRoute);

app.listen(process.env.PORT, () => {
  console.log("Listening to PORT: ", process.env.PORT);
});

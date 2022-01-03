const express = require("express");
const cors = require("cors");
const routes = require("./routes");


const app = express();

const apiRouter = express.Router();

// expose routes here
apiRouter.use(routes());
app.disable("x-powered-by");

// global middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use('/', apiRouter);


module.exports = app;

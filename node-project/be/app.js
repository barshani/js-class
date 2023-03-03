const express = require("express"); 
const server = express();
const userRouter = require("./routers/userRouter.js"); 
const visitCardRouter = require("./routers/visitCardRouter"); 
const cors = require('cors');
require("./dal/dal"); 
const verify_logged_in = require("./middleware/verify_logged_in");

server.use(express.json());
server.use(cors());
server.use("/api/users", userRouter); 
server.use("/api/visitCard", visitCardRouter);

server.listen(3000, () => console.log("Server started."));
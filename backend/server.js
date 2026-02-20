const express = require("express");
const cors = require("cors");

const { getRouter } = require('./routers/getRouter');
const postRouter = require('./routers/postRouter');
const putRouter = require('./routers/putRouter');
const deleteRouter = require('./routers/deleteRouter');

const app = express();
const PORT = 4000;

app.use(cors());           // allow React to talk to server
app.use(express.json());  // parse JSON




app.use('/list', getRouter);
app.use('/list', postRouter);
app.use('/list', putRouter);
app.use('/list', deleteRouter);




app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
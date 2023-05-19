const express = require('express');
const app = express();
const userRoutes = require("./routers/user.routes");
app.use(express.json());
const port = 3001;

app.use(userRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
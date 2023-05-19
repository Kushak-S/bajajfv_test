const express = require('express');
const app = express();
const userRoutes = require("./routers/user.routes");
app.use(express.json());
const port = 3001;

app.get('/',async (req,res)=>{res.status(200).send('SERVER IS RUNNING....')})
app.use(userRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

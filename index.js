const express = require('express');
const app = express();
const userRoutes = require("./routers/user.routes");
app.use(express.json());
const port = 3001;

app.get('/',async (req,res)=>{res.status(200).send('<html><body><h1>Server Running ...</h1><h2>Github link: https://github.com/Kushak-S/bajajfv_test</h2><h2>API Link: https://determined-foal-sari.cyclic.app/bghl</h2></body></html>')})
app.use(userRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

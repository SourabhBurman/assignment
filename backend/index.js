const express = require('express');
const cors = require("cors");
const port = 5000;

const app = express();
app.use(express.json);
app.use(cors());

app.listen(port, async ()=> {
    console.log(`server is running at http://localhost:${port}`)
})
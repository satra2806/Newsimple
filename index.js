const express = require('express')
const app = express()
const port = process.env.PORT ||8080
const product = require("./src/product");

app.use(express.json({ extended: false }));

app.use("/api/product", product);
app.use("/", product);


app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
  });

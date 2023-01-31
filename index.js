// const express = require("express");
// const app = express();
// const product = require("./api/product");

// app.use(express.json({ extended: false }));
// app.use("/api/product", product);

// const PORT = process.env.PORT || 8080;
// app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
const express = require("express");
const { connectToDb } = require("./database");
const router = require("./routers");
const cors = require('cors')

const app = express();
app.use(
    cors({
        origin: "*"
    })
);
app.use(express.json());

app.use(router);

connectToDb();
const port = process.env.PORT || 5001;
app.listen(port, () => {
    console.log('App is running at ' + port);
});
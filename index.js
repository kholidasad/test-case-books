const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res)=>{
    res.status(200).json({
        status : "app is running good",
        time : new Date().toLocaleString()
    })
});

app.use('/api/v1', router);

app.listen(port);

module.exports = app;

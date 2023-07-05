const express = require('express');

const app = express();

app.get('/',(req, res) => {
    res.send("Hi Chris");
});



app.listen(8080, () => {
    console.log("hey im on port 8080")
});
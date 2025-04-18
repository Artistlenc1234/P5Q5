const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello from Node.js app inside Docker!');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${3000}`);
});

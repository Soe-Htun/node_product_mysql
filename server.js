const express = require('express');
const cors = require('cors');

const app = express();
app.use( express.urlencoded({extended: true}));
app.use( express.json() ,cors());
app.use('/', require('./app/routes/routes'))
// app.get('/', (req, res) => {
//     res.json({ message: 'Welcome' })
// })

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port 8000`);
})

'use strict';
const express     = require('express');
const bodyParser  = require('body-parser');
const fccTesting  = require('./freeCodeCamp/fcctesting.js');
const app         = express();
const bcrypt     = require('bcrypt');
fccTesting(app);
const saltRounds = 12;
const myPlaintextPassword = 'sUperpassw0rd!';
const someOtherPlaintextPassword = 'pass123';

app.get('/', (req, res) => {
  res.send('Hello World');
});


//START_ASYNC -do not remove notes, place code between correct pair of notes.



//END_ASYNC
app.post('/api/hash', (req, res) => {
    const password = req.body.password || myPlaintextPassword;
    bcrypt.hash(password, saltRounds, (err, hash) => {
        if (err) return res.status(500).json({ error: 'Hashing failed' });
        res.json({ hash });
    });
});


//START_SYNC



//END_SYNC





























const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
    console.log("Listening on port:", PORT)
});
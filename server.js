const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
app.use('/', express.static(path.join(__dirname, 'static')));
app.use(bodyParser.json());

const pool = require("./db");

app.listen(3000);


app.post('/register', async (req, res) => {
    try {
        const new_user = await pool.query(
            "INSERT INTO user_data(first_name, last_name, email) VALUES($1, $2, $3)", [req.body.first_name, req.body.last_name, req.body.email]
        );
        
    } catch (error) {
        if (error.code == 23505) {
            return res.json({ status: 'error', error: 'Email already exists'});
        }
        return res.json({ status: 'error', error: 'Something went wrong' });
    }

    res.json({status : 'ok' });
})
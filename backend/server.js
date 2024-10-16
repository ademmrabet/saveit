const express = require ('express');
const mysql = require ('mysql');
const cors = require ('cors');
const bodyParser = require('body-parser');
const crypto = require('crypto');


const app = express ();
const PORT = process.env.PORT || 5000;

//Middleware for parsing JSON
app.use(cors());
app.use(bodyParser.json());

//create MySQL Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'rdgn_database',
    insecureAuth: true
});

// database connection

db.connect((err) => {
    if (err) {
        console.error('Database connection failed: ', err.message);
    } else {
        console.log('Connected to MySQL database successfully!');
    }
});

//create a hashing function
function hasPassword(password, salt = crypto.randomBytes(16).toString('hex')) {
    const hashedPassword = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
    return { salt, hashedPassword};
}

//Endpoint to create a new user
app.post('/api/users', (req, res) => {
    const { NumPer, Name, LastName, email, password, role } = req.body;
    const {salt, hashedPassword} = hashPassword(password);

    const sql = 'INSERT INTO users (NumPer, Name, LastName, email, password, role) VALUES(?,?,?,?,?,?)';

    db.query(sql, [NumPer, Name, LastName, email, password, role], (err, result)=> {
        if (err) {
            console.error('Error inserting user: ', err);
            return res.status(500).send('Server error');
        }
        res.status(201).send('User created successfully');
    });
    
})

/*app.post('/api/users', (req, res)=>{
    const {NumPer, Name, LastName, email, password, role} = req.body;
    
});*/

//a simple route
app.get('/', (req, res) => {
    res.send('Hello from the server!');
});

//start the server 
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})
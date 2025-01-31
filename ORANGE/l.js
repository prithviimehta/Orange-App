// Assuming you have Express installed
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// Fake user data (replace with your authentication logic)
const users = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' }
];

// Login route handler
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    
    // Check if username and password match
    const user = users.find(u => u.username === username && u.password === password);
    
    if (user) {
        // Successful login
        res.send('Login successful');
    } else {
        // Failed login
        res.status(401).send('Invalid username or password');
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://Krish:Krish2655@cluster0.wkhqdfx.mongodb.net/ecommerce", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error(err));

const userSchema = new mongoose.Schema({
//   username: {type:String},
//   email:{type: String},
//   password:{type: String}
username:String,
email:String,
password:String

});

const User = mongoose.model('User', userSchema);

app.get('/reg', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/register', async (req, res) => {
    try {
      const { username, email, password } = req.body; 
      const newUser = new User({ username, email, password }); 
      await newUser.save(); 
      res.status(201).send('User registered successfully');
    } catch (error) {
      console.error('Error registering user:', error); 
      res.status(500).send('Failed to register user');
    }
  });
  

const PORT = 3002;
app.listen(PORT, () => {
  console.log(Server running at http://localhost:${PORT});
});
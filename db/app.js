const express = require('express');
const cors = require('cors'); 
const app = express();
const jwt = require('jsonwebtoken');
const port = 8080; 

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.post('/login', (req, res) => {

    const user = {
        email: "test@test.com",
        password: "test123"
    }

  if(req.body.email === user.email && req.body.password === user.password){
    const token = jwt.sign(req.body, 'secret-key', {expiresIn: '1h'})
    return res.status(200).json({
      email: req.body.email,
      token
    });
  }else {
    return res.status(404).json();
  }
});

app.post('/login')

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});


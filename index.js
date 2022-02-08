/*== Droidnex Heroku Social API Application=*/
const express = require('express')
const app = express()

const PORT = process.env.PORT || 4000

app.get('/', (req, res) => {
    res.send('Welcome to Droidnex !')
});

app.get('/api/v1/instagram', (req, res) => {
   const instagram = {
       username : 'insta@droidnex',
       followers : 1021,
       follow : 452,
       date : new Date()
   }
   res.status(200).send(instagram)
});

app.get('/api/v1/facebook', (req, res) => {
    const facebook = {
        username : 'fb@droidnex',
        followers : 721,
        follow : 152,
        date : new Date()
    }
    res.status(200).send(facebook)
 });

 app.get('/api/v1/linkedin', (req, res) => {
    const linkedin = {
        username : 'link@droidnex',
        followers : 2761,
        follow : 1452,
        date : new Date()
    }
    res.status(200).send(linkedin)
 });

 app.get("/api/v1/:token", (req, res) => {
    console.log(req.params.token);
    res.status(200).json({ param: req.params.token });
  });

app.listen(PORT, () => {
  console.log(`Server listning to PORT ${PORT}`)
});
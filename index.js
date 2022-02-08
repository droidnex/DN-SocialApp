const express = require('express')
const app = express()

const PORT = 4000 || process.env.PORT

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

app.listen(PORT, () => {
  console.log(`Server listning to PORT ${PORT}`)
});
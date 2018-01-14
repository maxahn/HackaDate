const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const url = "http://5e345aee.ngrok.io/";
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', (req, res) => {
   res.status(200).send("Hello from APIAI Webhook Integration.");
});

app.get('/user', (req, res) => {
  console.log('reached /user');
   res.status(200).send("Hello from APIAI Webhook Integration.");
});
app.post('/user', (req, res) => {
  console.log(req.body);
  console.log(req.body.result.parameters["phone-number"]);
  console.log(req.body.result.parameters["body-part"]);

  res.status(200).json({
    speech: "Sweet, I'll send you a text when I find you a hot date! Happy Hacking $name! Thanks for swinging by, you're a rock start!", 
    displayText: "Sweet, I'll send you a text when I find you a hot date! Happy Hacking $name! Thanks for swinging by, you're a rock start!" 
  });
});
 // speech: "Sweet, I'll send you a text when I find you a hot date! Happy Hacking $name! Thanks for swinging by, you're a rockstar!",

app.listen(3000, () => console.log('Example app listening on port 3000!'))
//let actionMap = new Map();

// actionMap.set(app.StandardIntents.MAIN, mainIntent);
// actionMap.set(app.StandardIntents.TEXT, respond);

//add more intents to the map
  

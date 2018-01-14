const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const url = "http://5e345aee.ngrok.io/";
const User = require('./data/user.js');
const sendMessage = require('../twilio/send-message.js');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const oldUser = undefined;
const users = [];

app.get('/', (req, res) => {
   res.status(200).send("Hello from APIAI Webhook Integration.");
});

app.get('/user', (req, res) => {
  console.log('reached /user');
   res.status(200).send("Hello from APIAI Webhook Integration.");
});
app.post('/user', (req, res) => {
  console.log(req.body);
// var user = new User({

// }); 
  var currUser = new User(req.body);
  if (oldUser == undefined) {
    olderUser = new User(req.body);
  } else {
    var body = `HackaDate: Hey Hot stuff! We found you an awesome date! Meet ${currUser.profile['name']} at our booth!`;
    sendMessage(olderUser['phoneNumber'], body);
    body = `HackaDate: Hey Hot stuff! We found a match! Meet ${oldUser.profile['name']} at our booth!`;
    sendMessage(currUser['phoneNumber'], body)
    oldUser = undefined;
  }
  res.status(200).json({
    speech: `Sweet, I'll send you a text when I find you a hot date! Happy Hacking${currUser.profile["name"]}! Thanks for swinging by, you're a rock star!`, 
    displayText: `Sweet, I'll send you a text when I find you a hot date! Happy Hacking${currUser.profile["name"]}! Thanks for swinging by, you're a rock star!` 
  });
});
 // speech: "Sweet, I'll send you a text when I find you a hot date! Happy Hacking $name! Thanks for swinging by, you're a rockstar!",

app.listen(3000, () => console.log('Example app listening on port 3000!'))
//let actionMap = new Map();

// actionMap.set(app.StandardIntents.MAIN, mainIntent);
// actionMap.set(app.StandardIntents.TEXT, respond);

//add more intents to the map
  

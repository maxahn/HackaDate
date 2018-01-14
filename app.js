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
    speech: "Great, you'll get a text shortly of your match!", 
    displayText: "Great, you'll get a text shortly of your match!",
  });
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))
//let actionMap = new Map();

// actionMap.set(app.StandardIntents.MAIN, mainIntent);
// actionMap.set(app.StandardIntents.TEXT, respond);

//add more intents to the map
  

const User = require('./data/user.js')
const testJson = require('./test.js');
const test2Json = require('./test2.js');
const UserTracker = require('./user-tracker.js');
const sendMessage = require('./../twilio/send-message.js');

const oldUser = new User(testJson);
const currUser = new User(test2Json);


var body = `HackaDate: Hey Hot stuff! We found you an awesome date! Meet ${currUser.profile['name']} at our booth!`;

sendMessage(oldUser['phoneNumber'].toString(), body);
body = `HackaDate: Hey Hot stuff! We found a match! Meet ${oldUser.profile['name']} at our booth!`;
sendMessage(currUser['phoneNumber'].toString(), body)



//userTracker.addUser(testUser, userTracker.incrementGroupStats);


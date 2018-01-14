const User = require('./data/user.js')
const testJson = require('./test.js');
const UserTracker = require('./user-tracker.js');

const testUser = new User(testJson);
var groupSize = 6;

var userTracker = new UserTracker();

console.log(userTracker.currentGroupID);

//for (let i = 6; i < 12; i++) {
//  testUser.phoneNumber+= i;
//  testUser.profile["body-part"] = (Math.random() >= 0.5) ? "arm" : "leg";
//  testUser.profile["like-school"] = (Math.random() >= 0.5) ?  "yes" : "no";
//  userTracker.addUser(testUser);
//}

const User = require('./data/user.js')
const testJson = require('./test.js');
const UserTracker = require('./user-tracker.js');

const testUser = new User(testJson);
var userTracker = new UserTracker();

//userTracker.addUser(testUser, userTracker.incrementGroupStats);

//keeps track of db user groups 
const DbHelper = require('./db-helper.js'); //opens user db
const maxGroupSize = 6;

class UserTracker {
  constructor() {
    this.updateGroupStats();
  }

  get currentGroupID() {
    return this._currentGroupID;
  }
  set currentGroupID(id) {
    this._currentGroupID = id;
  }
  get groupMemberNum() {
    return this._groupMemberNum;
  }

  set groupMemberNum(num) {
    this._groupMemberNum = num;
  }

  updateGroupStats() { //test
    var result = new Array(); 
    let dbHelper = new DbHelper();
    dbHelper.db.serialize(function() {
      dbHelper.db.all(`SELECT * FROM users ORDER BY groupID desc LIMIT ${maxGroupSize}`, (err, rows) => {
        if (err) {
          return console.log(err.message)
        }
        let lastId = (rows == undefined || rows.length == 0) ? 0: rows[rows.length - 1]["groupID"];
        this.currentGroupID = lastId; 
        let count = 0; 
        if (rows != undefined && rows.length != 0) {
          while (rows[count]["groupID"] != lastId || count >= maxGroupSize) { 
            count++;
          }
        }
        this.groupMemberNum = count; //starts at 0 
      });
    });
    dbHelper.closeDB();
  }
  addUser(user) {
  // open database 
    let dbHelper = new DbHelper();
    dbHelper.db.serialize(function() {
    var newUser = dbHelper.db.prepare("INSERT INTO users VALUES (?,?,?,?)").run(0, user.phoneNumber, user.profile["bodyPart"], 
      user.profile["likesSchool"], function(err) { 
        if (err) {
          console.log(err.message); 
        } else {
          console.log("groupMemberNum: " + this.groupMemberNum++);
          if (this.groupMemberNum >= maxGroupSize) {
            groupMemberNum++;
            if (groupMemberNum >= 6) {
              currentGroupID++;
              groupMemberNum = 0;
              console.log("sending match texts, currentGroupID now " + this.currentGroupID);
            //TODO: SEND MATCH texts! 
            } 
          }
        }
      });
    newUser.finalize();
    dbHelper.closeDB();
    });
    //console.log('number of users: ' + db.run('COUNT * FROM users'));

  //db.each("SELECT phoneNumber, bodyPart FROM users", function(err, row) {  
  //   console.log("phoneNumber: "+row.phoneNumber, row.bodyPart);  
  //}); 

  // close the database connection
  }
}
module.exports = UserTracker;

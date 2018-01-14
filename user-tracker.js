//keeps track of db user groups 
const DbHelper = require('./db-helper.js'); //opens user db
const User = require('./data/user.js');
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

  currentGroup(callback) {
    let dbHelper = new DbHelper();
    dbHelper.db.serialize(function() {
      dbHelper.db.all(`SELECT * FROM users ORDER BY groupID desc LIMIT ${maxGroupSize}`, (err, rows) => {
        callback(err, rows);
      });
    dbHelper.closeDB();
    });
  }

  updateGroupStats() { //test
    this.currentGroup((err, rows) => {
      let lastId = (rows == undefined || rows.length == 0) ? 0: rows[0]["groupID"];
      this.currentGroupID = lastId; 
      let count = 0; 
      if (rows != undefined && rows.length != 0) {
        while (rows[count]["groupID"] != lastId || count >= maxGroupSize) { 
          count++;
        }
      }
      this.groupMemberNum = count; //starts at 0 
//    console.log("currentGroupID: " + this.currentGroupID + ", groupMemberNum: " + this.groupMemberNum);
    });
  }
  incrementGroupStats(err, callback) {
    if (err) {
      return console.log(err.message); 
    } 
    console.log("!!!:" + groupMemberNum);
    this.groupMemberNum++;
    console.log("incrementing group member Num to " + this.groupMemberNum);
    if (this.groupMemberNum >= maxGroupSize) {
      this.currentGroupID++;
      this.groupMemberNum = 0;
      console.log("sending match texts, currentGroupID now " + this.currentGroupID);
    //TODO: SEND MATCH texts! 
    }; 
  }

  addUser(user, callback) {
  // open database 
    if (user != null) {
      let dbHelper = new DbHelper();
      dbHelper.db.serialize((err) => {
        if (err)
          return console.log(err.message);
        var newUser = dbHelper.db.prepare("INSERT INTO users VALUES (?,?,?,?)").run(0, user.phoneNumber, user.profile["bodyPart"], 
          user.profile["likesSchool"], (err)=> {
            if (err) {
              return console.log(err.message)
            }
        });
        newUser.finalize((err) => {
          if (err)
            return console.log(err.message);
          callback(err) 
        });
      });
      dbHelper.closeDB();
    }
  };

  getUsers(groupID, callback) {
    let dbHelper = new DbHelper() 
    dbHelper.db.serialize((err,)=> {
      if (err)
        return console.log(err.message);
      dbHelper.db.all(`SELECT * FROM users WHERE groupID=${groupID}`, (err, rows) => {
        var users = new Array();
        rows.forEach((row) => {
          var json = {
            "result": {
              "parameters": {
                "phone-number": row["phoneNumber"],
                "body-part": row["bodyPart"],
                "likes-school": row["likesSchool"]
              }
            }, 
            "status": {
              "code": 200
            }
          };
          users.push(new User(json));
        });
        callback(err, users);
      });
    });
    dbHelper.closeDB();
  }
}
module.exports = UserTracker;

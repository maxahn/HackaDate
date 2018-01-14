//TODO: abstract for more dbs if necessarry
//currently only for users db
const sqlite3 = require('sqlite3').verbose();
const dbPath = './db/test.db';

class DbHelper {
  constructor() {
    this.db = this.openDB();
  }

  openDB() {
    let db = new sqlite3.Database(dbPath, (err) => {
      if (err) {
        return console.error(err.message);
      }
      console.log('Connected to the local user SQlite database: ' + dbPath);
    });

      db.run('CREATE TABLE if not exists users(groupID int NOT NULL,  phoneNumber int NOT NULL UNIQUE, bodyPart text NOT NULL, likesSchool text NOT NULL)', (err) => {
        if (err)
          return console.error(err.message);
      });
      return db;
  }

  closeDB() {
    this.db.close((err) => {
      if (err) {
        return console.error(err.message);
      }
      console.log('Closed the database connection.');
    });
    delete this.db;
  }
}
module.exports = DbHelper;

const UserTracker = require('./user-tracker.js');
//block of size n
//creates n users before comparing users answers and creating a list of best matches
//
//
//Hi, I'm your matchmaker
//what's your name? 
//record
//confirmation
//for each question in set 
//  ask(question)
//  receive, match and record answer
//  
// 
// user 
// name: cauliflower
// number: 1232133123
// questions: {
//   qId1: yes
//   qId2: blockchain 
//   qId3: no
//   question: answer
// }

function matchScoreSimilar(user1, user2) { //returns a percentage of how many answers matched
  var sameAnswers = 0;
  let len = 0;
  console.log(user1.profile);
  for (let prop in user1.profile) {
    len++;
    console.log('len: ' + len + 'user1 prop: ' + prop + ': ' + user1.profile[prop] + ', user2 prop: ' + user2.profile[prop]);
    if (user1.profile[prop] == user2.profile[prop]) {
      sameAnswers++;
    }
  }
  return (len == 0) ? 0 : sameAnswers / len; 
}

function matchPeople(groupID, callback) {
  let userTracker = new UserTracker();
  userTracker.getUsers(groupID, callback);
}

matchPeople(0, (err, rows) => {
  if (err)
    return console.log(err.message);
  var matchMap = new Map();
  for (let i = 0; i < rows.length - 1; i++) {
    let iUser = rows[i];
    console.log('iUser: ' + iUser);
    if (iUser == undefined) { continue; }
    for (let j = i; j < rows.length; j++) {
      let jUser = rows[j];
      if (jUser == undefined) { continue; }
      if (matchMap.has(iUser['phoneNumber'])) {
        let iMapValue = matchMap.get(iUser['phoneNumber']);
        var score = matchScoreSimilar(iUser, jUser);
        if (score > iMapValue["matchScore"]) { //switch if jScore > last match's score
          let temp = iMapValue["match"];
          iMapValue.set(iUser['phoneNumber'], {
            'match': jUser, 
            'matchScore': score 
          }); 
          rows[j] = temp; 
          iMapValue.set("matchScore", score);
        }
      } else {
        var score = matchScoreSimilar(iUser, jUser);
        matchMap.set(iUser['phoneNumber'], {
          "match": jUser,
          "matchScore": score
        });
        delete rows[j];
      } 
    }
  }
  console.log(matchMap);
  for (prop in matchMap) {
    console.log(prop + ': ' + matchMap[prop]['match']);
  }
});

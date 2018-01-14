const Question = require('./data/question.js');
const ActiveQuestions = require('./active-questions.js');
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
  for (let qID in user1.questions) {
    if (user1.profile[qID] == user2.profile[qID]) {
      sameAnswers++;
    }
  }
  return sameAnswers / Object.keys(user1.questions).length;
}

function matchPeople(people) {

}

const Question = require('./data/question.js');

const ActiveQuestions = [
  new Question("Would you prefer to lose an arm or leg?", ["arm", "leg"]), 
  new Question("Do you like coffee?", ["yes", "no"]), 
  new Question("Do you like school?", ["yes", "no"]), 
];

module.exports = ActiveQuestions;

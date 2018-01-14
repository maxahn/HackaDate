const uniqid = require('uniqid');

class Question {
  constructor(question, answers) { 
    //id = createid
    this._id = uniqid();
    this._question = question;
    this._answers = answers; //an array of possible answers
  }

  get id() {
    return this._id;
  }

  set id(id) {
    if (this._id == undefined) {
      this._id = id;
    }
  }

  get question() {
    return this._question;
  }
  get answers() {
    return this._answers;
  }
  compareQuestions(q2) { //returns true if question is the same
    return this._id == q2._id;
  }
}

module.exports = Question;

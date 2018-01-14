class User {
  constructor(jsonResponse) {
    //let jR = JSON.parse(jsonResponse);
    if (jsonResponse["status"]["code"] == 200) {
      //profile is an object with question ids as keys and answers as content
      const result = jsonResponse["result"]["parameters"];
//    this._name = result["name"];
      this._phoneNumber = result["phone-number"]; //uniqueID
      this._profile = {
        "bodyPart": result["body-part"], 
        "likesSchool": result["likes-school"], 
      };
    } else {
      console.log("Error: response code not 200");
    }
  }
  
  get firstName() {
    return this._firstName;
  }

  set firstName(fName) {
    if (fName != null)
      this._firstName = fName;
  }

  get phoneNumber() {
    return this._phoneNumber;
  }

  set phoneNumber(pNumber) {
    if (pNumber != null)
      this._phoneNumber = pNumber;
  }

  get profile() {
    return this._profile;
  }

  set profile(profile) {
    if (profile != null)
      this._profile = profile;
  }
}

module.exports = User;

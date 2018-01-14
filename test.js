const testJson = {
  "id": "327a988f-03b5-4ea6-8886-4b4c8383028c",
  "timestamp": "2018-01-14T04:41:33.346Z",
  "lang": "en",
  "result": {
      "source": "agent",
      "resolvedQuery": "778 123 4567",
      "action": "getPhoneNumber",
      "actionIncomplete": true,
      "parameters": 
        {
          "name": "Daniel", 
          "phone-number": "523113932",
          "body-part": "arm", 
          "likes-school": "yes"
        },
      "contexts": [
         {
           "name": "givephonenumber_dialog_context",
           "parameters": 
           {
             "phone-number": "1231231231",
             "bodypart.original": "",
             "phone-number.original": "778 123 4567",
             "bodypart": "arm",
             "likes-school": "yes"
           },
           "lifespan": 2
         },
          {
                    "name": "3d63a658-68dc-44eb-8045-0cd26b6ee15d_id_dialog_context",
                    "parameters": {
                              "phone-number": "7781234567",
                              "bodypart.original": "",
                              "phone-number.original": "778 123 4567",
                              "bodypart": ""
                            },
                    "lifespan": 2
                  },
            {
                    "name": "givephonenumber_dialog_params_bodypart",
                    "parameters": {
                              "phone-number": "7781234567",
                              "bodypart.original": "",
                              "phone-number.original": "778 123 4567",
                              "bodypart": ""
                            },
                    "lifespan": 1
                  }
          ],
      "metadata": {
            "intentId": "3d63a658-68dc-44eb-8045-0cd26b6ee15d",
            "webhookUsed": "true",
            "webhookForSlotFillingUsed": "false",
            "intentName": "GivePhoneNumber"
          },
      "fulfillment": {
            "speech": "Would you rather lose an arm or leg?",
            "messages": [
                    {
                              "type": 0,
                              "speech": "Would you rather lose an arm or leg?"
                            }
                  ]
          },
      "score": 1
    },
  "status": {
      "code": 200,
      "errorType": "success",
      "webhookTimedOut": false
    },
  "sessionId": "30618397-4518-4c59-86de-4e0af2aeddbc"
}
module.exports = testJson;

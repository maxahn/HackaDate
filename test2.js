const testJson = { originalRequest:
   { source: 'google',
        version: '2',
        data:
         { isInSandbox: true,
                 surface: [Object],
                 inputs: [Array],
                 user: [Object],
                 conversation: [Object],
                 availableSurfaces: [Array] } },
  id: '53be37fc-3fa1-47bd-bfba-ae87c6f3baee',
  timestamp: '2018-01-14T20:17:51.698Z',
  lang: 'en-ca',
  result:
   { source: 'agent',
        resolvedQuery: '1 2 3 4 5 6 7 8 9',
        speech: '',
        action: 'getPhoneNumber',
        actionIncomplete: false,
        parameters:
         { 'phone-number': '6042194234',
                 phone_type: 'iPhone',
                 flavour: 'sweet',
                 name: 'Janet',
                 media: 'netflix' },
        contexts: [ [Object], [Object], [Object] ],
        metadata:
         { matchedParameters: [Array],
                 intentName: 'GetPhoneNumber',
                 intentId: '3d63a658-68dc-44eb-8045-0cd26b6ee15d',
                 webhookUsed: 'true',
                 webhookForSlotFillingUsed: 'false',
                 nluResponseTime: 44 },
        fulfillment: { speech: 'could not connect to webhook', messages: [Array] },
        score: 1 },
  status: { code: 200, errorType: 'success', webhookTimedOut: false },
  sessionId: '1515961014806' }
module.exports = testJson;

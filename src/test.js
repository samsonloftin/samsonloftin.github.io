require('dotenv').config()

const api = process.env.formAPI;
const apiPass = process.env.formPass;
const postKey = process.env.postKey;
const user = 'https://samsonloftin.wufoo.com/api/v3/forms/z15lm0o70p8t972/entries.json';
const request = require("request");

request({
  uri: user,
  method: "POST",
  auth: {
      'username': api,
      'password': apiPass,
      'sendImmediately': false
  },
  form: {
      'Field1' : 'Wufoo',
      'Field2' : 'Test@ga.da',
      'Field3' : 'API-Test',
  }
}, function(error, response, body) {
console.log(body);
});
require('dotenv').config()

//const api = process.env.formAPI;
//const apiPass = process.env.formPass;
const user = `https://samsonloftin.wufoo.com/api/v3/forms/z15lm0o70p8t972/fields.json`;
const postKey = process.env.postKey;

export const post = (formData) =>
  fetch(user, {
    method: 'POST',
    headers: {
      Authorization: 'Basic ' + postKey,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: JSON.stringify(
      formData
    )}).then(res => res.json())
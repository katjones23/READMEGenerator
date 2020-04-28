require('dotenv').config();
const axios = require('axios')

const api = async function getUser(username) {
  const queryUrl = `https://api.github.com/users/${username}`;

  try {
    const response = await axios.get(queryUrl, {
      headers: {
        'Authorization': `token ${process.env.TOKEN}`
      }
    });

    let email = response.data.email
    let picture = response.data.avatar_url

    return { email, picture };
  } catch (error) {
    throw error;
  }
};

module.exports = api;

const express = require('express');
const axios = require('axios');

module.exports = (req, res) => {
  // Make an HTTP request to SWAPI to get the character data.
  axios
    .get('https://swapi.dev/api/people')
    .then((response) => {
      // Send the character data back to the client.
      let htmlUsers = '';
      let arr = response.data.results;

      arr.forEach((people) => {
        htmlUsers += `<li> ${people.name} </li>`;
      });

      const element = `
      <h1>Hello, SW</h1>
      <ul>
      ${htmlUsers}
      </ul>
  `;
      res.send(element);
    })
    .catch((error) => {
      // Handle the error.
      res.send(error);
    });
};

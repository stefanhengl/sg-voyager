const express = require("express");
const path = require("path");
const fetch = require("node-fetch");
const bodyParser = require("body-parser");

const app = express();
const jsonParser = bodyParser.json();

require('dotenv').config()

const port = process.env.PORT || 21140;

if (!process.env.TOKEN) {
    console.error('Could not find a Sourcegraph token in the environment')
    return
}
const token = process.env.TOKEN

app.get("/", function (_, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});

async function fetchSchema(introspectionQuery) {
  const response = await fetch("https://sourcegraph.com/.api/graphql", {
    method: "post",
    headers: {
      Authorization: "token " + token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query: introspectionQuery }),
  });
  return response.json();
}

app.post("/.api/graphql", jsonParser, function (req, res) {
  fetchSchema(req.body.query).then(response => res.send(response));
});

console.log(`🛰  voyager is ready at: http://localhost:${port}`);
app.listen(port);

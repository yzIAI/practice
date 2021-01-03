# Node201: [Express] Simple Request

## Task
- Run the `index.js`
- Send a GET request to `http://localhost:3000/hello?name=world` to see the plain-text response
- Send a POST request to `http://localhost:3000/body` to see the response
- Send a POST request to `http://localhost:3000/body` with body `{ "content": "anything there?"}` using JSON format to see the response
- Send a POST request with different body value to see the response
- Send a PUT request to `http://localhost:3000/params/hahaha` to see the response, and try to send it again with a JSON body `{ "content": "anything there?"}`.
- Send a DELETE request to `http://localhost:3000/bye?name=IAI` with headers key value pair token (key), anything(value)
- Try to understand `index.js`, you can modify the code and play with it.

## Question
- In all the four methods mentioned above (Get, Post, Put, Delete), which methods allow http body?

## Guide

- Install dependency `npm i`
- Run `node index.js` or `node .`
- Use postman or other api testing tools to send the requests

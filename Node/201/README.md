# Node201: [Express] Simple Request

## Task
- Run the example
- Send a GET request to `http://localhost:3000/hello` to see the plain-text response
- Send a POST request to `http://localhost:3000/body` to see the response
- Send a POST request to `http://localhost:3000/body` with body `{ "content": "anything here"}` using json format to see the response
- Send a POST request with different body value to see the response
- Send a PUT request to `http://localhost:3000/params/anythinghere` to see the response, can you find something interesting
- Send a DELETE request to `http://localhost:3000/del`
- Try to understand `index.js`, you can modify the code and run it again.

## Questions
1. For all the four methods mentioned above (i.e. Get, Post, Put, Delete), which methods can have JSON body when sending the request?
2. There is a limit of JSON body, can you figure out how to change it?

## Guide

- Install dependency `npm i`
- Run `node index.js` or `node .`
- Use postman or other api testing tools to send the requests

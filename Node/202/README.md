# Node202: [Express] Write a simple controller

## Task
- Finish the controller file to meet the following requirements
- Get request should be able to get 'token' from header and return an error message if 'token' is not set
- Post request should has json body with field 'name' and 'age', error messahe should be returned if age is invalid or either of them is not passed in.
- Put request should return the 'id' passed in by params
- Delete request could return any arbitrary string
- \* Can you store the ids together with the name and age passed in by post request, modify the name and age through post and delete the id via delete? If you don't know how to achieve this, can you think that what properties should be considered? (i.e. post request with same id but different name or age value.)

## Question
It is very inconvenient to rerun the program every time after modification, there is a package called 'nodemon', reruning the program automatically after saving, can you figure out how to use it?
Tip: ask google:)

## Guide

- Install dependency `npm i`
- Run `node index.js` or `node .`
- Each time you modify the file, you have to rerun `node index.js`

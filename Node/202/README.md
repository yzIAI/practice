# Node202: [Express] Books Management System

## Task
Finish the controller file to meet the following requirements
- Tim has to make a simple book management system and ask you for help. It is a very simple system which does not require persistence and you only have to store the name and id of a book.
- `id` is a string of length 6 and `name` is a string with length greater than 0.
- There is a global variable called `books`, this is where you store all your books. ***Do not change the type of this variable.***
- You have to implement the POST (adding a book), DELETE (delete a book), GET (get the name of a book by providing an id) and PUT (modify the name of a book by providing an id).
- You can modify anything in the controller file but the code style should be consistent and clear, meeting IAI standard.
_ You have to handle all possible cases you come up with, returning reasonable error messages or suitable output.

## Question
It is very inconvenient to rerun the program every time after modification, there is a package called 'nodemon', reruning the program automatically after saving, can you figure out how to use it?
Tip: ask google:)

## Guide

- Install dependency `npm i`
- Run `node index.js` or `node .`
- Each time you modify the file, you have to rerun `node index.js`

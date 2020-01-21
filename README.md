Express REST API application using node.js
created by: John Fruscella

overview:
1. We are creating a web server api application
2. The web server will listen for connections on a port that we define (eg port 3000)




git init // created a git repository
code README.md 

git add -A // What does this do?
git commit -m "inital commit"

npm init -y // creates package.json file
npm install express nodemon //

//npm is like the app store for node js applications
// after npm install runs, it creates node_modules directory

git checkout -b 0151_create_app.js // Creates branch and goes into it. Filename is an argument.

code app.js
const express = require('express'); //calling the express 49 mins  "Express is a web application framework for Node. It provides various features that make web application development fast and easy which otherwise takes more time using only Node."

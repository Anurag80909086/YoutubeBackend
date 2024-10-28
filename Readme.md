Youtube Backend

                     # Project and Folder Structure Setup

1.  npm init - 'For initialzation of project and to create pakage.json';
2.  git init - 'To push the project on git for the first time';
3.  create pblic folder - 'To add images and videos and any data'
4.  crete .gitignore - 'To add all files which should not be pushed on git';
5.  create .env - 'To add environment variable files like PORT, Mongoose Url';
6.  create src folder - 'To add all Main code files like index.js, app.js';
7.  create app.js, constants.js, index.js - 'Create these files in src folder'
8.  add script command and type as module in pakage.json;
9.  install nodemon - 'to restart the backend server when any change occur';
10. create folders in src folder as controllers, db, middlewares, models, routes, utils;

                          # Project Pakage Installation

11. npm i express mongoose dotenv

                        # Project Database Connection Setup

12. Goto mongodb atlas and create account.
13. Create project on mongodb.
14. Create Cluster in project and create user and password
15. Choose a connection method eg Compass and Copy the string of database.
16. Edit IP from Security > Network Access && Security > Database Acess for User Acess
17. Add Mongodb URL to .env file;
18. Go to SRC > Constants.js and export database name;
19. Got to SRC > db and create a script.js file to write database connection script;
20. Configure script.js file in db folder and also import DB_NAME from connstants, Create a databaseConnect function using async function and try catch to avoid errors and export that function;
21. Goto Main index.js file and import db connection function and dotenv/config;
22. Execute DatabaseConnection function in index.js;

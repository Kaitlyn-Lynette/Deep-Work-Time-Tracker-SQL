# Deep-Work-Time-Tracker-SQL
Created an application that uses SQL instead of local storage. For the forms and buttons used Bulma. 

The user can enter what they have been working on and the entry will be saved to a database. For the purposes of the project, entries are referred to as logs. The logs for the day will show on the landing page and the following day the entries will show on the historical logs page. 

# Idea Generation 

The idea for this project came from my own pencil and paper recordings of my coding work. I keep notes of what I'm working on and also record the time to keep track of what I'm working on and how long I spend working on something. 

# How it was built

Back-End: 

Sequelize: Used the following commands to setup a database 
npx sequelize-cli init
npx sequelize-cli db:create
Used model:generate to generate my own model
npx sequelize-cli db:migrate to migrate the model to the database
npx sequelize-cli seed:generate --name to seed the database
npx sequelize-cli db:seed:all


Front-End: 
Bulma: https://bulma.io/



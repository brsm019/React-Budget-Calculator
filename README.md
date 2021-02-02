# Currency Counter / Budget Calculator

## Tech Stack

### Design
Initial designs for application were created with Figma to give a clear goal of the aesthetics and functionality of the app.

### Desktop View
![Screenshot 2021-02-02 at 17 03 28](https://user-images.githubusercontent.com/70659641/106635980-5cf5e880-6579-11eb-9e13-36e9d9b9f0eb.png)
### Mobile View
![App_image](https://user-images.githubusercontent.com/70659641/106635590-f244ad00-6578-11eb-999f-169d5407fba9.png)


### Frontend
The frontend was created with the framework React, utilising hooks, more specifically useReducer and context api to pass functionality to components without prop drilling. CSS was isolated with module.css and the application has been designed with responsiveness in mind, using media queries to create the Progressive Web App. The application was deployed with Firebase and can be viewed here: [Budget-Calculator](https://budget-app-c059f.web.app/)
### Backend
The backend and REST API were written in Nodejs, with the database being made using PostgreSQL and the server with Express. Extensive use of Postman to test the functionality of the REST API and database before connecting to the frontend and the installation of CORS dependencies to limit CORS errors when connecting both ends. Backend was deployed to Heroku.

## How to Use
Either navigate to the site here: [Budget-Calculator](https://budget-app-c059f.web.app/). 

Alternatively.. 

Clone down both the frontend and backend. With the frontend you will need to initialise the repo using `npm i` and then run using the command `npm start`.

In terms of the backend, you will have to create your own Heroku App by signing up and getting credentials to use within the database pool connection, remember to place these in a `.env` file and place this in .gitignore if you plan on pushing to GitHub.

Again, you will have to initialise the repo with `npm i` and install nodemon to automatically update.

To run the backend, run the following command in the terminal `nodemon app.js`



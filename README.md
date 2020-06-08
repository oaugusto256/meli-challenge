## meli-challenge

An application used to search items from mercadolibre, built with javascript, react, redux, node, express, tailwind, jest and cypress.

## Installation and setup instructions

Clone down this repository. You will need `node` and `npm` installed globally on your machine or using `npx`.

### backend

Go to backend directory:

`cd backend`

Install all project dependencies:

`npm install`

To start backend:

`npm start`

### frontend

Go to frontend directory:

`cd frontend`

Install all project dependencies:

`npm install`

To run test suite:

`npm test`

To run end to end tests:

`npm run test:e2e`

- PS: Make sure the backend is running

To start frontend:

`npm start`

To visit app:

`https://localhost:3000`

## Reflection

This is a 1 week challenge project to *mercadolibre* to get in a frontend position.

Project goals inclues using technologies to show knowledge and fluency on javascript, as well as be able to put required requirements and ideas on a real project.

I started this project by using the `create-react-app` boilerplate on the frontend, it minimizes initial setup and with that, I could invest more time in diving into features, then adding `tailwind`, `react-router-4.0` and `redux`. The frontend application is tested using `jest` and `cypress`, some unit tests were created and the user happy path as tested on end to end tests.

The backend was projected using `express`, `nodemon`, `node-fetch` and `joi`.

Both frontend and backend have a ESLint configuration.

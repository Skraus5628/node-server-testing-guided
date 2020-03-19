# Node Server Testing Guided Project

Guided project for **Node Server Testing** Module.

## Prerequisites

- [DB Browser for SQLite](https://sqlitebrowser.org) installed.

## Project Setup

- [ ] fork and clone this repository.
- [ ] **CD into the folder** where you cloned **your fork**.
- [ ] type `npm install` to download dependencies.
- [ ] type `npm run server` to start the API.

Please follow along as the instructor adds automated tests to the API.


<!-- super test library lets us make requests to server w/o running server

npm install supertest --save-dev -->

<!-- main things to check in testing

1. does it return the expected status code?
2. does it return the expected data format?
3. does it return the expected data? -->


<!-- changing environment using knex migrate/seed command
example
npx knex seed:run --env=test
npx knex seed:run --env=dev -->

<!-- middleware to set env variables direclty in package.json 
this also sets it cross-environment (between windows, mac, linux etc for us)
cross-env -->
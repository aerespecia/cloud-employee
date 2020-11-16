# Cloud Employee Coding Challenge
by Adulfo Emmanuel Respecia

## Summary

The solution for this test is a simple GET Api of user search filters using TypeOrm as a mapper that conects to a prebuilt postgres Docker Image. The app also has a seeder script to populate the DB with the given dummy user dataset

Endpoints:

GET user/ 
 - this will return all users
 
GET user/filter

Query Params/Filters:
   - email
   - first_name
   - last_name
   - pet_experience
   - state

## Running the app

Before running the app, you should make sure you have Docker installed and pull the latest pre-built Postgres Docker Image found here:
https://hub.docker.com/_/postgres

```bash
# command to pull pre-built postgre docker image
$ docker pull postgres
```
Please execute the commands in order

```bash
# initialize postgre docker image with database
$ npm run start:dev:db

# generate migration file
$ npm run typeorm:migration:generate

# run migration file
$ npm run typeorm:migration:run

# start API
$ npm run start:dev
```

Things that could be done to make this better:
  - Staging and production environment configs
  - Add unit tests for core business logic
  - Improved Docker steps without having to rely on pre built Docker image
  - Enhance queries for smarter results


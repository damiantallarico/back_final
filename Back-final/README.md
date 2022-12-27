# API Rest - Users

## What is about?

This project consists of a simple "Rest API" to manage users, with the basic options of "get, post, put and delete"

## Technology stack

-Node.js
-Express
-Mongoose

## How to run this proyect?

1. Clone the project: git clone https://github.com/damiantallarico/back_final
2. Open folder and create and config your environment variables in a `.env` file.
3. Install packages and run the project: npm install, npm start
4. Open the url of the localhost with your assigned port in ".env". Ex: localhost:9999

## API Specification
### Get users
`GET /users/`

### Get user by id
`GET /users/:usersId`

### Add or modify user 

Add: POST /users/
Modify: PUT /users/:usersId

To add or modify users you need the following fields:

{
    "name": "Damian",
    "lastName": "Tallarico",
    "telephone": "1112334455",
    "direction": "Rosario 6677",
    "dni" : "88991122"
}

### Delete user

`DELETE /users/:usersId`
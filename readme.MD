# Restaurant API

## Instructions

1. Install NodeJS https://nodejs.org/en/download/
2. Install MongoDB https://docs.mongodb.com/manual/administration/install-community/
3. Start the database service and import the Restaurants database from the `backend_provision_db.json` file https://docs.mongodb.com/guides/server/import/
4. Clone this repository and navigate in to it
5. run `node app.js`

## Features

- Create a new restaurant
  - `POST "http://localhost:3000/routes/restaurant/"`
- List all existing restaurants
  - `GET "http://localhost:3000/routes/restaurant/"`
- Get information about a specific restaurant
  - `GET "http://localhost:3000/routes/restaurant/<id>"`
- Update information about an existing restaurant
  - `PUT "http://localhost:3000/routes/restaurant/<id>"`
- Delete an existing restaurant
  - `DELETE "http://localhost:3000/routes/restaurant/<id>"`

## Improvements

- The "list all restaurants" endpoint could receieve a parameter that specifies the way that the result will be sorted.

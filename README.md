This is a base node js project template with most project management recommendations.

`src` - Inside src folder all actual source code resides. This will not include tests.

Inside `src` folder

- `config` 
    : In this folder everything regarding any configurations or setup of a library or module will be done.
    : setting up `dotenv` so that we can use env variables anywhere in clean way. This is done in `server-config.js` file.
    : setup of logging library that helps in preparing meaningful logs.
- `routes` 
    : In this folder register a route and corresponding middlewares, controllers to it.
- `middlewares`
    : They just intercept incoming requests where we write validation, authentication etc.
- `controllers`
    : They receive incoming requests, data and then pass it to business layer, and once business layer returns an output structure the API response and send the output.
- `repositories`
    : This folder contains all the logic using which we interact DB by writing queries, all raw queries or ORM queries go here.
- `services`
    : Contains the business logic and interact with repositories for the data from DB.
- `utils`
    : contains helper methods etc.


### Setup the project

- Download this template 
- In root directory create a `.env` file and following variables
    ```
        PORT=<port number>
    ```
    ex:
    ```
        PORT=5000
    ```
- Inside the `src/config` folder create a file `config.json` and write following code:
    ```
    {
  "development": {
    "username": "root",
    "password": null,
    "database": "database_development",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
    ```

- In `dialect` mention whatever DB you are using.
- In `test` and `prod` environment add correct DB hosted urls.
# Sample RESTful API - Freelancer

Author : Houssem Hajlaoui (@venatoria) <br>
Freelancer ID : houcemh

## Purpose

This is a sample Node JS RESTful API.

## Routes

This simple API will have the following endpoints :

-   **GET 'localhost:8080/api/query:DeviceID'**<br>
    the endpoint return a json with list of entries associated with the device identified with DeviceID.

-   **POST 'localhost:8080/api/store/:DeviceID/:DeviceName/:BatteryStatus/:Longitude/:Latitude'**<br>
    Gets the information about a Device and store it into the db with the related timestamp.<br>
    Alternatively (using an API client like PostMan) the info can sent directly as json following this format :<br>
```
     localhost:8080/api/store     
     {
         DeviceID,
         DeviceName,
         BatteryStatus,
         Longitude,
         Latitude
     }
```

## Structure

This simple Node JS' API is structured around these files :

-   **index.js** (main app file). The api routes are defined there
-   **packages.json** (definition of the node dependencies)
-   **db.js** handles all the db-related functions and schemas
-   **test.js** has the test units code
-   **config/default.js** and **config/test.js** has the db uris for the app and the test

## Components/Packages

Our API uses the following Node JS packages :

-   Express
-   Mongoose
-   Config
-   bodyParser

## The DB

To facilitate executing this code, the DB links to an instance in MongoDB Atlas, no installation is required.

## Launching and testing

To test the app, cd into the folder and and execute the test script
```
     npm install
     npm test
```

To launch the app, cd into the folder and and execute the main script
```
     npm install
     npm start
```

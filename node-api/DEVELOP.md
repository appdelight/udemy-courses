## To write an API, follow these steps:
1. design Collection Schema in `./modals`
2. create a file `<api_name>.controller.js` in `./controllers`
3. Design all CRUD methods & all in controller.js file and export them
4. create another file for route `<api_name>.route.js` in `./routes` 
5. import controller and write code for router management & export router
5. add this router file to `./router/index.js` file to use it in api router.

:: Now you are ready to test the api 
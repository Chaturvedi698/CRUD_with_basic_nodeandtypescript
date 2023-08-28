import http from "http";
import { handleRequest } from "./route/user.route";
// import { connection } from './databae/dbConfig';
import { connection } from "./config/db";

const server = http.createServer(handleRequest);

connection();

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// For get all the user data --> Make GET Request with the url     -------    http://localhost:3000/show
// For creating the user --> Make POST Request with the url  ------ http://localhost:3000/create
// For updating the user --> Make PUT Request with the url ----- http://localhost:3000/update/:id
// For deleting the user --> Make DELETE Request with the url ---- http://localhost:3000/delete/:id
// For search the user --> Make GET Request with the url ---- http://localhost:3000/search/:id

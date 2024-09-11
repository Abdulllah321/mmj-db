const jsonServer = require("json-server");
const express = require("express");
const path = require("path");

const server = express();
const router = jsonServer.router("data.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 5000; // chose port from here like 8080, 3001

// Use default middlewares (e.g., logger, static, cors)
server.use(middlewares);

// Serve static files from the 'public/images' directory
server.use(
  "/images",
  express.static(path.join(__dirname, "public/images"))
);

// Use the json-server router
server.use(router);

// Start the server
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});

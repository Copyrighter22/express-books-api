const express = require("express");

const app = express();
const PORT = 8000;
const router = require("./config/routes.config");

app.use(express.json());

app.use(router);

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`),
);

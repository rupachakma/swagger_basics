const express = require("express");
const app = express();
const swaggerUi = require("swagger-ui-express");
const fs = require("fs");
const YAML = require("yaml");
const cors = require("cors");

const file = fs.readFileSync("./swagger.yaml", "utf8");
const swaggerDocument = YAML.parse(file);

app.use(cors());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//dum data
let courses = [
  {
    id: "11",
    name: "React for next gen.",
    price: 499,
  },
  {
    id: "22",
    name: "Database design",
    price: 199,
  },
  {
    id: "33",
    name: "Backend backbone",
    price: 999,
  },
];

//routes
app.get("/", (_, res) => res.send("Hello from LCO"));

app.get("/api/v1/lco", (req, res) => {
  res.send("Hello hello LCO");
});

app.get("/api/v1/lcoobject", (req, res) => {
  res.json({ id: "55", name: "Django 101", price: 999 });
});

app.get("/api/v1/courses", (req, res) => {
  res.json(courses);
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () =>
  console.log(`server running at: http://127.0.0.1:${PORT}`)
);

// ======================================================
//                  Dependencies
// ======================================================
const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({
  path: "/Users/AlexanderKoh_1/Documents/GitHub/StockFolio-Redux/.env",
});
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ======================================================
//                      Database
// ======================================================
const connectToDatabase = require("./models/Database");
const mongoURI = process.env.MONGO_URI;

connectToDatabase(mongoURI);

// ======================================================
//                      Routes
// ======================================================

const allRoutes = require("./routes/Router");
app.use(allRoutes);

// ======================================================
//                  Listener
// ======================================================
app.listen(PORT, () => {
  console.log(`App is running and listening on ${PORT}`);
  return `App is running and listening on ${PORT}`;
});

module.exports = app;

/*
Creating Sessions

const store = new MongoDBStore({
  uri: mongoURI,
  collection: "currentSessions",
});

app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    store: store,
    maxAge: 24 * 60 * 60 * 1000,
  })
);
*/

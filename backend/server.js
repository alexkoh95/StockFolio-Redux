// ======================================================
//                  Dependencies
// ======================================================
const express = require("express");
const app = express();
const cors = require("cors");

const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ======================================================
//                      Database
// ======================================================
const connectToDatabase = require("./models/Database");

const mongoURI =
  "mongodb+srv://alexkoh95:mbZaJK4VqPAwjac@cluster0.fsopz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
connectToDatabase(mongoURI);

// ======================================================
//                      Routes
// ======================================================

const signupUser = require("./routes/Router");
app.use(signupUser);

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

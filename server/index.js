const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

app.use(cors());
app.use(express.json());

// API Endpoints

/*
GETs list of users.
Returns JSON object of relevant user information
  [
      {
          "user_id": ...,
          "user_last_name": ...,
          "user_first_name": ...
      },
      ...
  ]
*/
app.get("/users", async (req, res) => {
  const users = await pool.query(
    "SELECT user_id, user_last_name, user_first_name FROM users"
  );
  res.json(users.rows);
})

/*
GETs likes from the user with :id
Returns JSON object with groups that the given user likes
  [
      {
          "fan_of_music_group": ...
      },
      ...
  ]
*/
app.get("/likes/:id", async (req, res) => {
  const {id} = req.params;
  const likes = await pool.query(
    "SELECT fan_of_music_group FROM User_likes where user_id = $1", [id]
  );
  res.json(likes.rows);
})

app.listen(8000, () => {
  console.log("Server starting on port 8000");
})

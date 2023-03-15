const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

router.get("/", (req, res) => {
  console.log("in the server GET toys");
  let queryText = 'SELECT * from "toy" WHERE "user_id" = $1 ORDER BY "id" ASC;';
  pool
    .query(queryText, [req.user.id])
    .then((result) => {
      // console.log(result.rows);
      res.send(result.rows);
    })
    .catch((error) => {
      console.log("error with toy get", error);
      res.sendStatus(500);
    });
});

router.get("/communityentries", (req, res) => {
  console.log("in the server GET toys");
  let queryText = `SELECT * FROM "toy"
JOIN "user_toy" ON "toy"."id"="user_toy"."toy_id";`;
  pool
    .query(queryText)
    .then((result) => {
      console.log(result.rows);
      res.send(result.rows);
    })
    .catch((error) => {
      console.log("error with toy get", error);
      res.sendStatus(500);
    });
});

router.delete("/:id", (req, res) => {
  if (req.isAuthenticated()) {
    let id = req.params.id;
    const queryText = `DELETE FROM "toy" WHERE "id" = $1;`;
    pool
      .query(queryText, [id])
      .then((result) => {
        res.sendStatus(204);
      })
      .catch((error) => {
        res.sendStatus(500);
      });
  } else {
    res.sendStatus(403);
  }
});

router.put("/", (req, res) => {
  // console.log("PUT favorite", req.body);
  if (req.isAuthenticated()) {
    let id = req.body.clickedId;
    let favoriteStatus = req.body.favorite;
    const queryText = `UPDATE "toy" SET "favorite" = $2 WHERE "id" = $1 `;

    pool
      .query(queryText, [id, favoriteStatus])
      .then((result) => {
        // console.log("PUT favorite result: ", result);
        res.sendStatus(204);
      })
      .catch((error) => {
        // console.log("PUT favorite error", error);
        res.sendStatus(500);
      });
  } else {
    res.sendStatus(403);
  }
});

module.exports = router;

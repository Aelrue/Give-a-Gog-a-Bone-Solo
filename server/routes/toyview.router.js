const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

/**
 * GET route template
 */
router.get("/", (req, res) => {
  // GET route code here
  console.log("in the server GET toys");
  let queryText = 'SELECT * from "toy" WHERE "user_id" = $1;';
  pool
    .query(queryText, [req.user.id])
    .then((result) => {
      console.log(result.rows);
      res.send(result.rows);
    })
    .catch((error) => {
      console.log("error with toy get", error);
      res.sendStatus(500);
    });
});

/**
 * POST route template
 */
router.post("/", (req, res) => {
  // POST route code here
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

module.exports = router;

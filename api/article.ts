import express from "express";

const router = express.Router();

router.post("/article", (req, res) => {
  console.log(req, res);
});

module.exports = router;

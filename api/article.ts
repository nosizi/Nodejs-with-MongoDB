const express = require('express')

const router = express.Router();

router.post("/article", () => {
  console.log('post article now');
});

router.get('/', (req, res) => {
  res.send('this is article data.')
})

module.exports = router;

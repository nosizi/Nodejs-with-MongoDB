import * as express from 'express'
const router = express.Router();

router.post("/article", () => {
  console.log('post article now');
});

router.get('/', (req: express.Request, res: express.Response) => {
  res.send('this is article data.')
})

export default router;

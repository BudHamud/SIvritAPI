import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.json({ message: 'Protected route accessed successfully' });
});

export default router;
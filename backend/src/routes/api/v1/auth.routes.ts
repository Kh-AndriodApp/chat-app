import { Router, Request, Response } from 'express';

const router = Router();

router.post('/login', (req: Request, res: Response) => {
  const { username } = req.body;
  if (!username) return res.status(400).json({ error: 'username required' });
  return res.json({ token: 'dummy-token', user: { id: 'u1', username } });
});

export default router;

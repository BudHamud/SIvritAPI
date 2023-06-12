import jwt from 'jsonwebtoken';

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: 'Invalid token' });
      }

      req.userId = decoded.userId;
      next();
    });
  } else {
    res.status(401).json({ message: 'Missing token' });
  }
};

export default authMiddleware;

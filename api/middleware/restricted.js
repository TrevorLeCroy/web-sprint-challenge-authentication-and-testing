const jwt     = require('jsonwebtoken');
const secrets = require('../secrets');

module.exports = (req, res, next) => {
  /* 
    IMPLEMENT

    1- On valid token in the Authorization header, call next.

    2- On missing token in the Authorization header,
      the response body should include a string exactly as follows: "token required".

    3- On invalid or expired token in the Authorization header,
      the response body should include a string exactly as follows: "token invalid".
  */
  const token = req.headers.authorization;
  console.log(token);
  if(!token) {
    res.status(401).send('token required');
  } else {
    jwt.verify(token, secrets.jwtSecret, (err, decoded) => {
      if(err) {
        res.status(401).send('token invalid');
      } else {
        req.decodedToken = decoded;
        next();
      }
    });
  }
};

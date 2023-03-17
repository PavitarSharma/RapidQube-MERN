const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization || req.headers.Authorization;

    if (!authHeader) {
      return res.status(401).json("Unauthorized");
    }

    const token = authHeader.split(" ")[1];

    jwt.verify(token, process.env.JWT_TOKEN_SECRET, (err, payload) => {
      if (err) {
        return res.status(403).json("Forbidden");
      }
      req.user = payload;
      next();
    });
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = auth;

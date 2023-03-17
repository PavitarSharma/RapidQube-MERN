const jwt = require("jsonwebtoken");

const generateToken = (payload) => {
  return new Promise((resolve, reject) => {
    const user = {
      id: payload._id,
      email: payload.email,
    };

    const secret = process.env.JWT_TOKEN_SECRET;

    const options = {
      expiresIn: "1d",
    };

    jwt.sign(user, secret, options, (error, token) => {
      if (error) {
        reject(error);
      }
      resolve(token);
    });
  });
};

module.exports = generateToken;

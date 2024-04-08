const jwt = require("jsonwebtoken");

const CreateToken = (username, email, role) => {
  return jwt.sign(
    {
      username,
      email,
      role,
    },
    process.env.JWT_SECRET_KEY
  );
};

module.exports = CreateToken; 
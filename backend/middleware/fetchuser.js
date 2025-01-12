var jwt = require("jsonwebtoken");

const JWT_SECRET = "itashi";

const fetchuser = (req, res, next) => {
  //GET the user from the jwt web token and add the id to the request object

  const token = req.header("auth-token");
  if (!token) {
    res.status(401).send({ error: "Please authenticate the valid token" });
  }
  try {
    const data = jwt.verify(token, JWT_SECRET);
    req.user = data.user;
    next();
  } catch (error) {
    res.status(401).send({ error: "Please authenticate the valid token" });
  }
};

module.exports = fetchuser;

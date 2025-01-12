const express = require("express");
const { body, validationResult } = require("express-validator");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");

var jwt = require("jsonwebtoken");
const fetchuser = require("../middleware/fetchuser");
const JWT_SECRET = "itashi";
//not with get it will show detals in logs
//ROute1
//Create a user using :POST 'api/auth/createuser ' .No login required
router.post(
  "/createuser",
  [
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("email", "Enter a valid email").isEmail(),
    body("password", "ENter a valid password ").isLength({ min: 5 }),
  ],
  async (req, res) => {
    //   obj = {
    //     a: "thios",
    //     number: 34,
    //   };
    // console.log(req.body);
    // const user = User(req.body);
    // user.save();

    // Finds the validation errors in this request and wraps them in an object with handy functions
    //if  there are errors return bad request and errors

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    //Check whether user with same email exists already
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ error: "User with this email already exists." });
      }
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);
      //Create a new user
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      });

      //   .then((user) => res.json(user))
      //   .catch((err) => {
      //     console.log(err);
      //     res.json({
      //       error: "Please enter a unique value for email",
      //       message: err.message,
      //     });
      //});
      //res.send(req.body);
      const data = {
        user: {
          id: user.id,
        },
      };
      const authtoken = jwt.sign(data, JWT_SECRET);
      console.log(authtoken);

      //res.json(user);
      res.json({ authtoken });
    } catch (err) {
      console.log(err.message);
      res.status(500).send("some error occurred");
    }
  }
);

//Route 2
//Authenticate a user:

router.post(
  "/login",
  [
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password cannot be blank").exists(),
  ],
  async (req, res) => {
    //If there are any errors return the Bad Request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({ error: "Please try to login with correct credentials" });
      }
      const passwordcompare = await bcrypt.compare(password, user.password);

      if (!passwordcompare) {
        return res
          .status(400)
          .json({ error: "Please try to login with correct credentials" });
      }
      const data = {
        user: {
          id: user.id,
        },
      };
      const authtoken = jwt.sign(data, JWT_SECRET);
      res.json({ authtoken });
    } catch (err) {
      console.log(err.message);
      res.status(500).send("Internal server error occurred");
    }
  }
);

//ROute 3: GET Logged i  user details :POST "/api/auth/getuser"==>Login required
router.post("/getuser", fetchuser, async (req, res) => {
  try {
    userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    res.send(user);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Internal server error occurred");
  }
});

module.exports = router;

//Notes
//Whenever some one will login we will return them the token
//again and again user will not enter user and password
//JWT basically makes secure communication between the client and the server

//We will use jsonwebtoken in this course. -->special token jwt.io
// algo and type ,what we want to send ,signature  -->3 things in json web token

//middleware is a function which is called everytime when any of the login functionality is called

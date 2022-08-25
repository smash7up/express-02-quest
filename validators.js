const { body, validationResult } = require('express-validator');

const validateUser = [
  body("email").isEmail(),
  body("firstname").isLength({ max: 255 }),
  body("lastname").isLength({ max: 255 }),
  body("city").isLength({ max: 255 }),
  body("language").isLength({ max: 255 }),
  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(422).json({ validationErrors: errors.array() });
    } else {
      next();
    }
  },
];

const validateMovie = [
  body("title").isLength({ max: 255 }),
  body("director").isLength({ max: 255 }),
  body("year").isLength({ max: 255 }),
  body("color").isLength({ max: 255 }),
  body("duration").isInt(),
  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(422).json({ validationErrors: errors.array() });
    } else {
      next();
    }
  },
];
  
  module.exports = {
    validateMovie,
    validateUser,
  };
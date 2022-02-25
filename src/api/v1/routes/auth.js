const express = require("express");
const router = express.Router();

const bcrypt = require("bcryptjs");

const uuid = require("uuid");
const jwt = require("jsonwebtoken");

const userMiddleware = require("../../../middleware/users.js");

const { sequelize } = require("../../../database/models/index.js");
const Users = sequelize.models.users;

router.get("/", (req, res) => {
  res.send("Hello World! from API service :)");
});

router.post("/sign-up", userMiddleware.validateRegister, (req, res, next) => {
  Users.findAll({
    where: {
      username: req.body.username,
    },
  })
    .then((user) => {
      if (user.length == 0) {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            return res.status(500).send({
              msg: err,
            });
          } else {
            Users.create({
              id: uuid.v4(),
              username: req.body.username,
              password: hash,
              money: 1000.0,
              registered: Date.now(),
            })
              .then(() => {
                return res.status(201).send({
                  msg: "You can login now",
                });
              })
              .catch((err) => {
                return res.status(400).send({
                  msg: err,
                });
              });
          }
        });
      } else {
        return res.status(409).send({
          msg: "This username is already in use!",
        });
      }
    })
    .catch((err) => {
      return res.status(400).send({
        msg: err,
      });
    });
});

router.post("/login", (req, res, next) => {
  Users.findAll({
    where: {
      username: req.body.username,
    },
  })
    .then((user) => {
      if (user.length > 0) {
        bcrypt.compare(req.body.password, user[0].password, (bErr, bRes) => {
          if (bErr) {
            return res.status(401).send({
              msg: "User password is incorrect!",
            });
          }

          if (bRes) {
            const token = jwt.sign(
              {
                username: user[0].username,
                userId: user[0].id,
              },
              "SECRETKEY",
              {
                expiresIn: "7d",
              }
            );

            Users.update(
              {
                last_login: Date.now(),
              },
              {
                where: {
                  id: user[0].id,
                },
              }
            );

            return res.status(200).send({
              msg: "Logged in!",
              token,
              user: user[0],
            });
          } else {
            return res.status(401).send({
              msg: "Username or password is incorrect!",
            });
          }
        });
      } else {
        return res.status(401).send({
          msg: "Username is incorrect!",
        });
      }
    })
    .catch((err) => {
      return res.status(400).send({
        msg: err,
      });
    });
});

router.get("/secret-route", userMiddleware.isLoggedIn, (req, res, next) => {
  res.send("This is the secret content. Only logged in users can see that!");
});

module.exports = router;

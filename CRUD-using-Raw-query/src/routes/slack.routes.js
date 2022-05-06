const express = require("express");
const router = express.Router();

const slackController = require("./../controllers/slack.controller");

//create employee
router.post('/post', slackController.create);

module.exports = router;
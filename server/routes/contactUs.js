const express = require('express');
const router = express.Router();
const ContactUsController = require('../controller/ContactUs');

router.post('/', ContactUsController.createContactUs)

module.exports = router;
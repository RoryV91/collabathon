const express = require('express');
const router = express.Router();
const profilesCTRL = require('../../controllers/api/profiles');
const ensureLoggedIn = require('../../config/ensureLoggedIn');


router.put('/update', profilesCTRL.update);
router.get('/', profilesCTRL.getProfile);

module.exports = router;

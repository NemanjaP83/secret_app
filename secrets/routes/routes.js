const express = require('express');
const router = express.Router();
const { getHome, getLogin, getRegister, createUser, getSecrets, loginCheck } = require('../controllers/controllers');

router.get('/', getHome);

router.get("/login", getLogin);
router.post("/login", loginCheck);

router.get("/register", getRegister);
router.post("/register", createUser);

router.get('/secrets', getSecrets);


module.exports = router;
const express = require('express');
const router = express.Router();
const ctrl = require('../../cotrollers/users-controllers');
const validateBody = require('../../decorators/decorators');
const Authorization = require('../../decorators/authorization');
const upload = require('../../decorators/upload')
const { schemas } = require('../../models/user');

router.post('/register', validateBody(schemas.registerSchema), ctrl.register);

router.post("/login", validateBody(schemas.loginSchema), ctrl.login);

router.get("/verify/:verificationToken", ctrl.verify);

router.post("/verify", validateBody(schemas.emailSchema), ctrl.sendVerifyEmail);

router.get("/current", Authorization, ctrl.getCurrent);

router.post("/logout", Authorization, ctrl.logout);

router.patch("/avatars", Authorization, upload.single("avatar"), ctrl.updateAvatar)

module.exports = router;
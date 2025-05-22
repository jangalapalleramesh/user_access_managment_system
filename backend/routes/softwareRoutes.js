const express = require('express');
const { createSoftware, listSoftware } = require('../controllers/softwareController');
const { authenticateJWT, authorizeRoles } = require('../middlewares/auth');
const router = express.Router();

router.post('/', authenticateJWT, authorizeRoles('Admin'), createSoftware);
router.get('/', authenticateJWT, listSoftware);

module.exports = router;

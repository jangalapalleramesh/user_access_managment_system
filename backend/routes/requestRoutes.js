const express = require('express');
const {
  createRequest,
  getPendingRequests,
  updateRequestStatus,
} = require('../controllers/requestController');
const { authenticateJWT, authorizeRoles } = require('../middlewares/auth');
const router = express.Router();

router.post('/', authenticateJWT, authorizeRoles('Employee'), createRequest);
router.get('/pending', authenticateJWT, authorizeRoles('Manager'), getPendingRequests);
router.patch('/:id', authenticateJWT, authorizeRoles('Manager'), updateRequestStatus);

module.exports = router;

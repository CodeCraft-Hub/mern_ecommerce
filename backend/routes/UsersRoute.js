const express =  require('express');
const router = express.Router();
const {authController,getUserProfile,registerUser,updateUserProfile} = require('../controllers/usersController')
const {protect} = require('../middlewares/authMiddleware')

// user registration
router.route("/").post(registerUser);

// POST EMAIL AND PASSWORD auth
router.post("/login",authController);

// get user profile
router.route('/profile').get(protect,getUserProfile).put(protect,updateUserProfile);

module.exports = router;
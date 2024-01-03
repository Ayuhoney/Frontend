import express from  'express';
const router = express.Router();


import { userSignUp, userLogIn } from '../controller/user-controller.js';
import {getProducts} from '../controller/product-controller.js'

//login & signup
router.post('/signup', userSignUp);
router.post('/login', userLogIn);

router.get('/products',getProducts);

export default router;
import express from  'express';
const router = express.Router();


import { userSignUp, userLogIn } from '../controller/user-controller.js';
import {getProductById,getProducts} from '../controller/product-controller.js'

//login & signup
router.post('/signup', userSignUp);
router.post('/login', userLogIn);

router.get('/products',getProducts);
router.get('/product/:id', getProductById);

export default router;
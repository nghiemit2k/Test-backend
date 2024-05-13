import express from 'express';
import { accessController } from '../../controller/index.js';

const accessRoute = express.Router()

accessRoute.post('/signup',accessController.signUp)
accessRoute.post('/login',accessController.login)
export default accessRoute;
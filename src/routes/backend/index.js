import express from 'express';

import accessRoute from './access.js';

const backendRoute = express.Router();
backendRoute.use('/access', accessRoute);
export default backendRoute;
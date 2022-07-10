import express from 'express';
import { getAllDocuments } from './controllers.js';
const Router = express.Router();

Router.route('/').get(getAllDocuments);

export default Router;

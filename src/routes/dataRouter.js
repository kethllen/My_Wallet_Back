import { Router } from 'express';
import { getData, postData } from '../controllers/dataController.js';
import dataSchema  from '../schemas/dataSchema.js';
import validSchema from '../middlewares/validSchema.js'
import validateToken from '../middlewares/validaTokenMiddleware.js';

const dataRouter = Router();
dataRouter.get("/extract",validateToken, getData);
dataRouter.post("/extract",validateToken, validSchema(dataSchema), postData);

export default dataRouter;
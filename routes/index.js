import {Router} from 'express'
import { getMsgId } from '../controllers/index_Controller';

const indexRouter = Router();
indexRouter.get("/:Msgid", getMsgId);
export default indexRouter;
import {Router} from 'express'
import { send_msg } from '../controllers/new_Controller.js';


const newRouter = Router();
newRouter.get("/", (req, res) => {
  res.render("form");
});
newRouter.post("/", send_msg);

export default newRouter;


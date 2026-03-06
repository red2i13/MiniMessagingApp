import { messages, getMsgById } from '../db.js';
import CustomError from '../errors/CustomError.js';

export async function getMsgId(req, res, next){
    try {
        const MsgId = req?.params.Msgid;
        const message = await getMsgById(Number(MsgId));
        
        if(!message) {
            throw new CustomError("Message not found");
        }
        
        res.render("detail", { message: message });
    } catch(err) {
        next(err);
    }
}


import { messages } from '../db.js';
import CustomError from '../errors/CustomError.js';

export async function send_msg(req, res) {
    const name_user = req.body.name;
    const msg_user = req.body.msg;

    messages.push({ text: msg_user, user: name_user, added: new Date() });
    res.redirect("/");
}
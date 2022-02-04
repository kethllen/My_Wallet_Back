import db from '../db.js';
import dayjs from 'dayjs';
import { ObjectId } from 'mongodb';

export async function postData(req, res){
    try{
    const user = res.locals.user;

    await db.collection("data").insertOne({...req.body,
                data: dayjs().format('DD/MM'), 
				userId: user._id	
			})

    res.send(201);
        }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
     }
}
export async function getData(req, res){
    try{
    const user = res.locals.user;

    const extract = await db.collection("data").find({ userId: user._id}).toArray();
    res.send(extract);
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
     }
}
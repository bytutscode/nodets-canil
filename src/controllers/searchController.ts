import {Request, Response} from 'express';
import { pet } from '../models/pet';

const search = (req: Request, res: Response)=>{
    let list = pet.getByName(req.query.q as string);
    res.render('pages/mainPage',{
        petList:list
    })
}

export {
    search
}
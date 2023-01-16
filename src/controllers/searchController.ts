import {Request, Response} from 'express';
import { pet } from '../models/pet';
import { createMenuObject } from '../helpers/createMenuObject';

const search = (req: Request, res: Response)=>{
    let query:string = req.query.q as string;
    if(!query){
        res.redirect('/')
        return;
    }

    let list = pet.getByName(req.query.q as string);
    res.render('pages/mainPage',{
        menu:createMenuObject(''),
        petList:list,
        searchParam: query
    })
}

export {
    search
}
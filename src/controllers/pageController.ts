import {Request,Response} from 'express';

import { createMenuObject } from '../helpers/createMenuObject';


const home = (req: Request, res: Response)=>{
    res.render('pages/mainPage',{menu:createMenuObject('all'),
        banner:{
            title:'Todos animais',
            background:'allanimals.jpg'
        }
    });
}
const dogs = (req: Request, res: Response)=>{
    res.render('pages/mainPage',{menu:createMenuObject('dog'),
        banner:{
            title:'Todos cachorros',
            background:'banner_dog.jpg'
        }
    });
}
const cats = (req: Request, res: Response)=>{
    res.render('pages/mainPage',{menu:createMenuObject('cat'),
        banner:{
            title:'Todos gatos',
            background:'banner_cat.jpg'
        }
    });
}
const fishes = (req: Request, res: Response)=>{
    res.render('pages/mainPage',{menu:createMenuObject('fish'),
        banner:{
            title:'Todos peixes',
            background:'banner_fish.jpg'
        }
    });
}

const err404 = (req:Request,res:Response)=>{
    res.send('404 página não encontrada')
}

export default {
    home,
    dogs,
    cats,
    fishes,
    err404
}
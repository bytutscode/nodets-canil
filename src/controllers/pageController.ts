import {Request,Response} from 'express';

import { createMenuObject } from '../helpers/createMenuObject';

import { pet } from '../models/pet';


const home = (req: Request, res: Response)=>{
    res.render('pages/mainPage',{
        menu:createMenuObject('all'),
        banner:{
            title:'Todos animais',
            background:'allanimals.jpg'
        },
        petList:pet.getAll()
    });
}
const dogs = (req: Request, res: Response)=>{
    res.render('pages/mainPage',
    {menu:createMenuObject('dog'),
        banner:{
            title:'Todos cachorros',
            background:'banner_dog.jpg'
        },
        petList:pet.getAllTypeOf('dog')
    });
}
const cats = (req: Request, res: Response)=>{
    res.render('pages/mainPage',{
        menu:createMenuObject('cat'),
        banner:{
            title:'Todos gatos',
            background:'banner_cat.jpg'
        },
        petList:pet.getAllTypeOf('cat')
    });
}
const fishes = (req: Request, res: Response)=>{
    res.render('pages/mainPage',{
        menu:createMenuObject('fish'),
        banner:{
            title:'Todos peixes',
            background:'banner_fish.jpg'
        },
        petList:pet.getAllTypeOf('fish')
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
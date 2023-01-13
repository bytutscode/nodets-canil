import {Request,Response} from 'express';


const home = (req: Request, res: Response)=>{
    res.send('Página home');
}
const dogs = (req: Request, res: Response)=>{
    res.send('Página Cachorros');
}
const cats = (req: Request, res: Response)=>{
    res.send('Página gatos');
}
const fishes = (req: Request, res: Response)=>{
    res.send('Página peixes');
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
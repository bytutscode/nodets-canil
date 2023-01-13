import {Request, Response} from 'express';

const search = (req: Request, res: Response)=>{
    res.send('Página de busca');
}

export {
    search
}
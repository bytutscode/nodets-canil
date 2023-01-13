import { Router } from "express";
import * as pagController from '../controllers/pageController';
import * as searchController from '../controllers/searchController';

const router = Router();

router.get('/',pagController.default.home);
router.get('/cachorros',pagController.default.dogs);
router.get('/gatos',pagController.default.cats);
router.get('/peixes',pagController.default.fishes);
router.get('/search',searchController.search);



router.use(pagController.default.err404);


export default router;
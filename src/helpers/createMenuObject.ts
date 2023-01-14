type MenuObject = ''| 'all'| 'cat' | 'dog' | 'fish';

export const createMenuObject = (menuActive:MenuObject)=>{
    let objectOfReturn = {
        all:false,
        dog:false,
        cat:false,
        fish:false
    }
    menuActive!==''?objectOfReturn[menuActive] = true:false;
    
    return objectOfReturn;
}
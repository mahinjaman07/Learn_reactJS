import { func } from "prop-types";

function getToLS(){
    const getDataStr = localStorage.getItem('cart');
    if(getDataStr){
        const getData = JSON.parse(getDataStr);
        return getData;
    }
    return ([]);
}

function setToLs(carts){
    const dataStr = JSON.stringify(carts);
    localStorage.setItem('cart', dataStr)
}

function addToLs(id){
    const oldData = getToLS();
    oldData.push(id);
    setToLs(oldData);

}

function removeFromLs(id){
    const oldData = getToLS();
    const newData = oldData.filter(data => data !== id);
    setToLs(newData);
}

export {getToLS, addToLs, removeFromLs}
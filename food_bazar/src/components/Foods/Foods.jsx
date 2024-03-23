import { useEffect } from "react";
import { useState } from "react";
import Food from "../Food/Food";
import './Foods.css'
import { addToLs, getToLS , removeFromLs} from "../../utilitis/localStorage";
import Cart from "../Cart/Cart";

const Foods = () => {
    const [foods, setFoods] = useState([]);
    const [carts, setCart] = useState([]);
    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=chicken')
        .then(res=> res.json())
        .then( data => setFoods(data.meals));
    }, []);

    useEffect(()=>{
        console.log('Use effect After' , foods.length);
        if(foods.length){
            const storedCart = getToLS();
            console.log(storedCart);
            const saveCart = [];
            for(let id of storedCart){
                const cart = foods.find(food => food.idMeal === id);
                if(cart){
                    saveCart.push(cart);
                }
            }
            setCart(saveCart);
        }
        
    }, [foods])
    const handlePurchase = (item) =>{
        const newCart = [...carts, item];
        setCart(newCart);
        addToLs(item.idMeal);
    }

    const handleRemoveCart = (item) =>{
        const newCart = carts.filter(cart => cart.idMeal!== item.idMeal);
        setCart(newCart);
        removeFromLs(item.idMeal);
    }
    return (
        <div>

            <div>
                <h1>Carts:- {carts.length}</h1>
                <div className="cartContainer">
                    {
                        carts.map((c, idx) => <Cart key={idx} cart={c} handleRemoveCart={handleRemoveCart}></Cart>)
                    }
                </div>
            </div>
            <h3>Our Foods Item :- {foods.length}</h3>
            <div className="foodContainer">
                {
                    foods.map(food=> <Food key={food.idMeal} food={food} handlePurchase={handlePurchase}></Food>)
                }
            </div>
        </div>
    );
};

export default Foods;
import PropTypes from "prop-types";
import './Cart.css'
const Cart = ({ cart, handleRemoveCart }) => {
    const { strMeal, strMealThumb} = cart;
    return (
        <div className="cart">
            <img src={strMealThumb} alt={strMeal} />
            <h5>Name:- {strMeal}</h5>
            <button onClick={()=> handleRemoveCart(cart)}>Remove</button>
        </div>
    );
};

Cart.propTypes={
    cart: PropTypes.object.isRequired,
    handleRemoveCart: PropTypes.func.isRequired,
}

export default Cart;
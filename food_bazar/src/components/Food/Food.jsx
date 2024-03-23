import PropTypes from 'prop-types';
import './Food.css'
const Food = ({food, handlePurchase}) => {
    const { idMeal, strMeal, strMealThumb } = food;
    return (
        <div className='food'>
            <img src={strMealThumb} alt={strMeal} />
            <h3>Name:- {strMeal}</h3>
            <p>Code:- {idMeal}</p>
            <button onClick={() => handlePurchase(food)}>Purchase</button>
        </div>
    );
};

Food.propTypes ={
    food: PropTypes.object.isRequired,
    handlePurchase: PropTypes.func.isRequired,
}
export default Food;
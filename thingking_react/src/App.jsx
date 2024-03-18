import Search from './search'
import './App.css'
import Items from './Data';
import Fruit from './Fruits';
import './productStyle.css';
import Vegetables from './Vegetables';


const Products = Items();
const fruits = Products.filter(product => product.category === "Fruits");
const vegetables = Products.filter(product => product.category === "Vegetables");

function App() {
  

  return (
    <>
      <div className='container'>
        <Search data={Products}></Search>
          <table className='table'>
            <thead>
              <tr className='tableData'>
                <td>Name</td>
                <td>Price</td>
              </tr>
            </thead>

            <tbody>
            <h3 className='category'>Fruits</h3>
              <div id='fruitsContainer'>
                {
                  fruits.map(fruit => <Fruit fruit={fruit}></Fruit>)
                }
              </div>
            <h3 className='category'>Vegetables</h3>
              <div id='vegetablesContainer'>
                {
                  vegetables.map(vegetable => <Vegetables vegetables={vegetable}></Vegetables>)
                }
              </div>
            </tbody>
          </table>
        
      </div>

    </>
  )
}

export default App

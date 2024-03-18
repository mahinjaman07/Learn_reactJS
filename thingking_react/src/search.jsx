export default function Search({data}) {
    const checkStock = ()=> {
        const stockCheckBox = document.getElementById('checkStockProduct');
        if(stockCheckBox.checked) {
            console.log(true);
        } 
        else {
            console.log(false);
        }
    }
    return (
        <div>
            <input style={{ display: "block", padding: "5px 10px", margin:"10px 0px"}} type="text" name="" id="searchField" placeholder="Search..."  />
            <input  type="checkbox" name="" id="checkStockProduct" onClick={checkStock} />
            <label htmlFor="stockProduct">Only Show Products in Stock</label>
            
        </div>
        
    );
}


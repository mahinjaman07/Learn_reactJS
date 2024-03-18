export default function Fruit({fruit}){

    return(
    
                fruit?.stocked === true ?
                    <tr className="tableData">
                        <td>{fruit?.name}</td>
                        <td>{fruit?.price}</td>
                 </tr> : 
                    <tr style={{ color: "red" }} className="tableData">
                        <td>{fruit?.name}</td>
                        <td>{fruit?.price}</td>
                </tr>
    )
}
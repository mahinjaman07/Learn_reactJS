import './productStyle.css';
export default function Vegetables({ vegetables }) {
    return (
                vegetables?.stocked === true ?
            <tr className='tableData'>
                        <td>{vegetables?.name}</td>
                        <td>{vegetables?.price}</td>
                    </tr> :
            <tr style={{ color: "red" }} className='tableData'>
                        <td>{vegetables?.name}</td>
                        <td>{vegetables?.price}</td>
                    </tr>
    )
}
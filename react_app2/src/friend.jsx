import './Friend.css';
export default function Friend({friend}){
    return(
        <div className='box'>
            <h3>Name:- {friend.name}</h3>
            <h5>Email:- {friend.email}</h5>
        </div>
    )
}
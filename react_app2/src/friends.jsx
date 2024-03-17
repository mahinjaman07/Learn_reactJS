import { useEffect } from "react";
import { useState } from "react";
import Friend from "./friend";

export default function Friends(){
    const [friends, SetFriends] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => SetFriends(data))
    },[])
    return(
        <div>
        <h1>Friends:- {friends.length}</h1>
        {
            friends.map(friend =><Friend friend={friend}></Friend>)
        }
        </div>
    )
}
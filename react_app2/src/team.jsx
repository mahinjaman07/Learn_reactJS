import { useState } from "react"

export default function TeamMembers(){
    const [member, setMember] = useState(11);
    const addMember = ()=>{
        const newMember = member + 1;
        setMember(newMember);
    }
    const reduceMember = () =>{
        const newMember = member - 1;
        setMember(newMember);
    }
    return(
        <div>
            <h3>Member:- {member}</h3>
            <button onClick={addMember}>Add Member</button>
            <button onClick={reduceMember}>Reduce Member</button>
        </div>
    )
}
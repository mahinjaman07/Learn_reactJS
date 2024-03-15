// conditional rendering option 1
// export default function Todo({task, isDone}){
//     if(isDone){
//         return(
//             <li>Finished :- {task}</li>
//         )
//     }
//     else{
//         return(
//             <li>work On :- {task}</li>
//         )
//     }
// }


// conditional rendering option 2
// export default function Todo({task, isDone}){
//     if(isDone){
//         return(
//             <li>Finished :- {task}</li>
//         )
//     }
//         return(
//             <li>work On :- {task}</li>
//         )
// }

// conditional rendering option 3
// export default function Todo({task, isDone}){
//    return(
//     <li>{isDone ? 'Finished Task:-' : 'Work On:-'} {task}</li>
//    )
// }


// conditional rendering option 4
// export default function Todo({task, isDone}){
//    return(
//     <li>{task} {isDone && 'Done'}</li>
//    )
// }



// conditional rendering option 5
// export default function Todo({task, isDone}){
//    return(
//     <li>{task} {isDone || 'Do It'}</li>
//    )
// }


// conditional rendering option 5
export default function Todo({task, isDone}){
    let myList ;
   if(isDone){
       myList = <li>{task} Complete</li>
   }
   else{
    myList = <li>{task} Do It</li>
   }
   return(
       myList
   )
}
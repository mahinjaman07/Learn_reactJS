import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './todo'
import Actor from './actor'
import Singers from './singer'
import BooksShore from './bookStore'

function App() {
  const Actors = ['Bappa raj', 'Salman Khan', 'Sulaiman Khan', 'Amir Khan'];
  const singers = [
    {name: 'Eva Rahman', age: 35},
    {name: 'Rana Ahmed', age: 18},
    {name: 'Tasrif Khan', age: 25},
    {name: 'Arman Alif', age: 28},
  ]

  const books = [
    {bookName: 'Bangla', bookPrice: 150},
    {bookName: 'English', bookPrice: 200},
    {bookName: 'Math', bookPrice: 100},
    {bookName: 'physics', bookPrice: 500},

  ]

  return (
    <>
      
      <h1>Vite + React</h1>
      <Actor name={"Sakib Khan"}></Actor>
      {Actors.map(actor => <Actor name={actor}></Actor> )}
      {singers.map(singer => <Singers name={singer.name} age={singer.age}></Singers>)}
      <BooksShore books={books}></BooksShore>
      {/* <Todo task="To Something" isDone = {true}></Todo>
      <Todo task="You will complete the course" isDone={false}></Todo>
      <Todo task="learn ReactJS" isDone={true}></Todo>
      <Todo task="Try JSX" isDone={false}></Todo> */}
    </>
  )
}

// function Student(){
//   const studentStyle = {
//     margin : '20px',
//     padding : '20px',
//     border : '2px solid red',
//     backgroundColor: 'rgba(255, 255, 255',
//     color: 'black',
//     borderRadius : '20px'
//   }
//   return (
//     <div style={studentStyle}>
//       <h1>Name:- Mahin Jaman</h1>
//       <p>I am a student</p>
//       <p>I Am in Class 11</p>
//       <p>My Roll No: Is 20</p>
//       <p>I am 20 years Old</p>
      
//     </div>
//   )
// }
// const defaultStyle = {
//   padding: '20px',
//   border: '2px solid red',
//   color: 'white',
//   borderRadius: '20px'
// }
// const name = "Mahin Jaman";
// const age = 20;
// const gender = 'Male';
// const email = 'mahinjaman@gmail.com';
// function Person(){
  
//   return(
//     <div style={defaultStyle}>
//       <h3>I am {name}, I am {age} Years Old, My email :-{email}</h3>
//     </div>
//   )
// }

// function Phone(datas){
//   const myData = datas;
//   return (
//     <div style={defaultStyle}>
//       <h1>Name:- {myData.name}</h1>
//       <h1>Price:- {myData.price}</h1>
//       <h1>Ram:- {myData.ram}</h1>
//     </div>
//   )
// }

export default App

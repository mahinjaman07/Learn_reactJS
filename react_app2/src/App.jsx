import './App.css'
import Counter from './count'
import Friends from './friends'
import TeamMembers from './team'
import User from './user'


function App() {
  
  function clickHandler(){
    confirm('Are you sure you want to')
  }

  const clickHandler2 = ()=>{
    alert('Click handler 2')
  }

  const sum = (num1, num2)=>{
    alert(num1 + num2)
  }

  return (
    <>
      <h1>Vite + React</h1>
      <Friends></Friends>
      <User></User>
      <TeamMembers></TeamMembers>
      <Counter></Counter>
      <button onClick={clickHandler}>Click Me</button>
      <button onClick={clickHandler2}>Click Me 2</button>
      <button onClick={()=>{alert('Click Handler 3')}}>Click Me 3</button>
      <button onClick={()=>{sum(5, 10)}}>Click Me 4</button>
    </>
  )
}



export default App

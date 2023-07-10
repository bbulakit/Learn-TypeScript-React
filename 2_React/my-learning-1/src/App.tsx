import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import InputField from './assets/components/InputField'

const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("");
// const [first, setFirst] = useState(second)
  // console.log(todo);

  return (
  <div className="App">
    <span className = "heading">Taskify</span>
    <InputField todo={todo} setTodo={setTodo}/>
  </div>
  )
};


export default App

import { useState } from 'react'

import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';
// import { i } from 'vite/dist/node/types.d-jgA8ss1A';




function App() {
const [todo, settodo] = useState('')
const [todos, settodos] = useState([])

  const handleAdd=() => { 
    settodos([...todos,{id:uuidv4(),todo,isCompleted:false}])
    settodo("")
    console.log(todos)
   }
  const handleEdit=(e,id) => { 
    let t=todos.filter(i=>i.id===id)
    settodo(t[0].todo)
    let newTodos=todos.filter((item) => { 
      return item.id!==id
     })
    settodos(newTodos)

    
   }
  const handleDelete=(e,id) => { 
      let newTodos=todos.filter((item) => { 
        return item.id!==id
       })
      settodos(newTodos)

   
   }

   const handleChange=(e) => { 
    settodo(e.target.value)
    }
    
   const handleCheckbox=(e) => { 
    let id=e.target.name;
    console.log(id)
    let index=todos.findIndex(item=>
      {
        return item.id===id;
      })
      console.log(index)
      let newTodos=[...todos];
      newTodos[index].isCompleted=!newTodos[index].isCompleted;
      settodos(newTodos)
    }
  
  return (
    <>
    <Navbar/> 
     <div className="container bg-purple-200 p-5 font-bold my-5 rounded-xl mx-auto min-h-[80vh]">
      <div className="addTodo my-5">
        <h1 className='text-lg font-bold'>Add a Todo</h1>
      <input type="text" className='w-80 outline-none' onChange={handleChange} value={todo} />
      <button onClick={handleAdd} className='bg-purple-700 text-white p-1 rounded-md text-sm mx-3 cursor-pointer hover:bg-purple-900'>Save</button>
      </div>
      <h1 className='text-xl font-bold'>YOUR TODOS</h1>

      <div className="todos">
        {todos.length ===0 && <div className='m-5'>No Todos to Display</div>}
        {todos.map(item=>{
        return<div key={item.id} className="todo flex w-1/2  my-3 justify-between">

        <div className='flex gap-5'>
          <input onChange={handleCheckbox} type="checkbox"  value={item.isCompleted} name={item.id} id=''/>
          <div className={item.isCompleted? "line-through":""}>
            <div className='text-xl'>
            {item.todo}
            </div>

            </div>
          </div>
          <div className="buttons">
            <button onClick={(e) =>{ handleEdit(e,item.id) }} className='bg-purple-700 text-white p-2 rounded-md text-sm mx-2 cursor-pointer hover:bg-purple-900'>Edit</button>
            <button onClick={(e)=>{handleDelete(e,item.id)}} className='bg-purple-700 text-white p-2 rounded-md text-sm mx-2 cursor-pointer hover:bg-purple-900'>Delete</button>
          </div>

        </div>
        })}
      </div>
     </div>
    </>
  )
}

export default App

import { useEffect, useState } from 'react'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';
// import { i } from 'vite/dist/node/types.d-jgA8ss1A';




function App() {
const [todo, settodo] = useState('')
const [todos, settodos] = useState([])

const [showfinished, setshowfinished] = useState(true)


  useEffect(() => { 
   let todostring=localStorage.getItem("todo")
   if(todostring){

     let todos=JSON.parse(localStorage.getItem("todos"))
     settodos(todos)
   }
   },[])

  const saveTodo=(params) => { 
    localStorage.setItem("todos",JSON.stringify(todos))
   }

   const togglefinish=() => { 
      setshowfinished(!showfinished)
    }

  const handleAdd=() => { 
    settodos([...todos,{id:uuidv4(),todo,isCompleted:false}])
    settodo("")
    console.log(todos)
    saveTodo()
   }
  const handleEdit=(e,id) => { 
    let t=todos.filter(i=>i.id===id)
    settodo(t[0].todo)
    let newTodos=todos.filter((item) => { 
      return item.id!==id
     })
    settodos(newTodos)
    saveTodo()

    
   }
  const handleDelete=(e,id) => { 
      let newTodos=todos.filter((item) => { 
        return item.id!==id
       })
      settodos(newTodos)
      saveTodo()
   
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
      saveTodo()
    }
  
  return (
    <>
    <Navbar/> 
     <div className="md:container bg-purple-200 p-5 font-bold my-5 rounded-xl mx-auto min-h-[80vh] md:w-[35%]">
      <h1 className='text-center text-xl font-serif'>MY TODO - Manage Your todo at one place</h1>
      <div className="addTodo my-5 flex flex-col gap-3">
        <h1 className='text-lg font-bold '>Add Your Todo</h1>
      <input type="text" className='w-full outline-none p-3 rounded-lg' onChange={handleChange} value={todo} />
      <div className='flex justify-center'>

        <button onClick={handleAdd} disabled={todo.length<=3}  className='bg-purple-700 text-white p-1 rounded-md text-sm mx-3 cursor-pointer hover:bg-purple-900 w-[90%] '>Save</button>
      </div>
      </div>
      <input type="checkbox" id='show' checked={showfinished} onChange={togglefinish} /> <label htmlFor="show" className='text-lg' >Show Finished</label>
      <div className='h-[3px] opacity-40 bg-black w-[75%] mx-auto m-3'></div>
      <h1 className='text-xl font-bold mt-5'>YOUR TODOS</h1>

      <div className="todos">
        {todos.length ===0 && <div className='m-5'>No Todos to Display</div>}
        {todos.map(item=>{
        return (showfinished || !item.isCompleted) && <div key={item.id} className="todo flex md:w-full  my-3 justify-between">

        <div className='flex gap-5'>
          <input onChange={handleCheckbox} type="checkbox"  checked={item.isCompleted} name={item.id} id=''/>
          <div className={item.isCompleted? "line-through":""}>
            <div className='text-xl'>
            {item.todo}
            </div>

            </div>
          </div>
          <div className="buttons flex h-full ">
            <button onClick={(e) =>{ handleEdit(e,item.id) }} className='bg-purple-700 text-white p-2 rounded-md text-sm mx-2 cursor-pointer hover:bg-purple-900'><FaEdit style={{fontSize:'17px'}} /></button>
            <button onClick={(e)=>{handleDelete(e,item.id)}} className='bg-purple-700 text-white p-2 rounded-md text-sm mx-2 cursor-pointer hover:bg-purple-900'><MdDelete style={{fontSize:'17px'}} /></button>
          </div>

        </div>
        })}
      </div>
     </div>
    </>
  )
}

export default App

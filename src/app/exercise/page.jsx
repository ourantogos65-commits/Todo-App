"use client";

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [filter, setFilter] = useState("all"); // all, active, completed

  // Filter logic
  const filteredTodos = todos.filter(todo => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true; // all
  });

  // Add new todo
  const handleAdd = () => {
    if (inputValue.trim() === "") return;
    const newTodo = { id: uuidv4(), text: inputValue, completed: false };
    setTodos([...todos, newTodo]);
    setInputValue("");
  };

  // Remove todo
  const handleRemove = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Toggle completed
  const toggleCompleted = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="w-[420px] bg-white rounded-2xl p-8 flex flex-col gap-4 shadow-2xl">
        <h1 className="text-4xl text-gray-800 mb-4">Todo List</h1>

        {/* Input + Add */}
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Enter a task"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg"
          />
          <button
            onClick={handleAdd}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Add
          </button>
        </div>

        {/* Filter buttons */}
        <div className="flex gap-2">
          <button
            onClick={() => setFilter("all")}
            className={`px-3 py-1 rounded-lg ${
              filter === "all" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter("active")}
            className={`px-3 py-1 rounded-lg ${
              filter === "active" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            Active
          </button>
          <button
            onClick={() => setFilter("completed")}
            className={`px-3 py-1 rounded-lg ${
              filter === "completed" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            Completed
          </button>
        </div>

        {/* Todo list */}
        <ul className="flex flex-col gap-2 max-h-60 overflow-auto">
          {filteredTodos.map(todo => (
            <li
              key={todo.id}
              className="flex items-center justify-between px-3 py-2 border rounded-lg"
            >
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleCompleted(todo.id)}
                />
                <span className={todo.completed ? "line-through text-gray-400" : ""}>
                  {todo.text}
                </span>
              </div>
              <button
                onClick={() => handleRemove(todo.id)}
                className="text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>

        <p className="text-gray-400 mt-4">Manage your tasks efficiently</p>
        <p className="text-gray-400">Powered by Pinecone Academy</p>
      </div>
    </div>
  );
}




// "use client"

// import { useState } from "react"

// const home=()=>{
//     const[todos,setTodos] =useState([
//         { id: 1, text: "HTML ", completed: false },
//         { id: 2, text: "CSS ", completed: true },
//         { id: 3, text: "React ", completed: false }
//     ])
//         const [filter,setfilter]=useState("All")

// const filteredTodos=todos.filter(todo=> {
//     if(filter==="active") return!todo.completed;
//     if (filter === "completed") return todo.completed;
//     return true;

// })
// console.log("Filtered Todos:", filteredTodos);
// return(
//     <div>
//     <button onClick={() => setfilter("all")}>All</button>
//     <button onClick={() => setfilter("active")}>Active</button>
//     <button onClick={() => setfilter("completed")}>Completed</button>

//     <ul>
//       {filteredTodos.map(todo => (
//         <li key={todo.id}>
//           {todo.text} {todo.completed ? "(Done)" : "(Not Done)"}
//         </li>
//       ))}
//     </ul>
//   </div>
// )
// }
// export default home;
// "use client"
// import { useState } from "react"
// import { v4 as uuidv4 } from 'uuid';

// const home=()=>{
//     const[number,setNumber]=useState(["todo-1", "todo-2","todo-3"])
//     const [count,setCount]=useState(0)
//     const [text,setText]=useState([])
//     const [inputVal,setinputVal]=useState("")
     
//     const handleRemove=(index)=>{
//     const newText=number((todo,i)=>{
// return i !==index
//     })
//     setNumber(newText)
   
//     }
//     const handleOnClick=()=>{
//         if(inputVal.trim()==="")return ;
//         const testArray={id:uuidv4(),text:inputVal}
//         setText([...text,testArray])
//         setinputVal('')
//     }
//     return(
//         <div className="p-6 space-y-6">

//             {number.map((todo,index)=>(
//                  <p className="gap-3 flex items-center" key={index}>{todo}
//                 <button  className="px-2 py-1 bg-red-500 text-white rounded" onClick={()=>handleRemove(index)}>x</button>
//                 </p>
   
//             ))}
//   <div>
//       <p>Tooluur{count} </p>
//             <button  className="px-3 py-1 bg-blue-500 text-white rounded" onClick={()=>setCount(count+1)}>nemeh</button>
//   </div>
          
//            <input 
//            type="text"
//            placeholder="enter name"
//            className="border px-3 py-1 rounded mr-2"
//            value={inputVal}
//            onChange={(e)=>setinputVal(e.target.value)}
           

//             />
//            <button className="px-3 py-1 bg-green-500 text-white rounded" onClick={handleOnClick}>add</button>
           

          



//         <div></div>
//         </div>
//     )
// }




// export default home



// const handleDelete=(index)=>{
//     const testArray=todos.map((todo,i)=>{
//     if( i ===index){
//   todo="hello"
//     }
//     return todo
//     })
//     setTodos(testArray)
//     }





























// "use client"
//    import  {useState} from "react";
// const home=()=>{
//  const [todos,setTodos]=useState(["hero-1","hero-2","hero-3"])


// // const handleDelete=(index)=>{
// // const testArray=todos.filter((todo,i)=>{
// // return i !==index

// // })
// // setTodos(testArray)
// // }

// const handleDelete=(index)=>{
//     const testArray=todos.map((todo,i)=>{
//     if( i ===index){
//   todo="hello"
//     }
//     return todo
//     })
//     setTodos(testArray)
//     }
    
//     return(
//         <div>  
//         {todos.map((todo,index)=>{
//         return <p 
//         className="flex gap-2"
//         key={index}>{todo}
//         <button onClick={()=>handleDelete(index)}>x</button>
//         </p>
//     })}

//         </div>
   
//     )
// }
// export default home
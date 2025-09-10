// "use client";
// import { useState } from "react";

// export default function Home() {
//   const [tasks, setTasks] = useState([]);
//   const [input, setInput] = useState("");

//   const handleAdd = () => {
//     if (input.trim() === "") return;
//     setTasks([...tasks, input]);
//     setInput("");
//   };

//   const handleDelete = (index) => {
//     setTasks(tasks.filter((_, i) => i !== index));
//   };

//   return (
//     <div className="w-full h-screen flex items-center justify-center bg-gray-100 p-6">
//       <div className="w-[420px] bg-white rounded-3xl p-8 flex flex-col items-center shadow-[0_0_25px_rgba(0,0,0,0.1)]">
//         <h1 className="text-3xl font-bold text-gray-800 drop-shadow-md">
//           ✅ To Do List
//         </h1>

//         {/* Input + Add */}
//         <div className="mt-6 w-full flex items-center gap-3">
//           <input
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             className="flex-1 px-4 py-2 rounded-xl border border-gray-300 shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-400"
//             placeholder="Enter task..."
//           />
//           <button
//             onClick={handleAdd}
//             className="px-4 py-2 rounded-xl bg-blue-500 text-white font-semibold shadow hover:bg-blue-600 transition"
//           >
//             Add
//           </button>
//         </div>

//         {/* Task list */}
//         <div className="mt-8 w-full flex flex-col gap-4">
//           {tasks.length === 0 && (
//             <p className="text-gray-400 text-center">No tasks yet 😴</p>
//           )}
//           {tasks.map((task, index) => (
//             <div
//               key={index}
//               className="w-full px-4 py-3 bg-gray-50 rounded-2xl shadow flex justify-between items-center hover:shadow-md transition"
//             >
//               <span className="text-gray-700">{task}</span>
//               <button
//                 onClick={() => handleDelete(index)}
//                 className="px-3 py-1 rounded-lg bg-red-500 text-white text-sm shadow hover:bg-red-600 transition"
//               >
//                 Delete
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
import { useState } from "react";
import { Todo } from "@/components/Todo";

export default function Home() {
  const [number, setNumber] = useState(0);
  const [journal, setJournal] = useState("");

  const savetasks = () => setJournal(`${number}`);

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-100 gap-10">
      <div className="w-[420px] bg-white rounded-sm p-8 flex flex-col items-center shadow-[0_0_25px_rgba(0,0,0,0.1)]">
        <h1 className="text-3xl  text-black">To-Do List</h1>

        <div className="mt-6 w-full flex items-center gap-3">
          <div className="flex  w-100 h-10  rounded-sm  border border-gray-300 shadow-inner ">
            <input
              type="text"
              placeholder="Enter a tasks"
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>

          <button
            onClick={savetasks}
            className="w-20 h-10 rounded-xl bg-blue-600 text-gray-700  shadow active:bg-blue-600 hover:text-white transition duration-200"
          >
            Add
          </button>
        </div>

        <div className="flex gap-4 mt-6 h-10">
          <Todo text="All"></Todo>
          <Todo text="active"></Todo>
          <Todo text="completed"></Todo>
        </div>

        <div className="bg-gray-100 flex w-full h-20 mt-5 rounded-lg justify-between">
          <div className="flex gap-2 p-6">
            <button className="border border-gray-800 rounded-sm  w-5 h-5"></button>
            <p className=" text-gray-500">{journal}</p>
          </div>

          <button className="text-red-500 mt-5 mr-2 bg-red-100  h-8 w-20 rounded-2xl">
            Delete
          </button>
        </div>

        <p className="mt-12 text-gray-500 ">No tasks yet. Add one above!</p>
        <p className="mt-6 text-sm text-gray-400">
          Powered by Pinecone Academy
        </p>
      </div>
    </div>
  );
}

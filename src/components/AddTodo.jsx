// import React from 'react'
// import { useState } from 'react'
// import {useDispatch} from 'react-redux'
// import { addTodo } from '../features/todo/todoSlice'

// function AddTodo() {

//     const [input, setInput] = useState('')
//     const dispatch = useDispatch()

//     const addTodoHandler = (e) => {
//         e.preventDefault()
//         dispatch(addTodo(input))
//         setInput('')

  
//     return (
//         <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
//           <input
//             type="text"
//             className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//             placeholder="Enter a Todo..."
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//           />
//           <button
//             type="submit"
//             className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
//           >
//             Add Todo
//           </button>
//         </form>
//       )
//     }
//   }

// export default AddTodo

import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from '../features/todo/todoSlice' 

function AddTodo() {

    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }

  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        // className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter your task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-1 px-5 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent shadow-md transition-all duration-300 ease-in-out"
        
      />
      <button
        type="submit"
        // className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        className="w-full sm:w-auto bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:from-indigo-600 hover:to-purple-600 transform hover:-translate-y-1 transition-transform duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-400"
      >
        Add
      </button>
    </form>
  )
}

export default AddTodo

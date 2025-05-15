import React, { useContext, useEffect } from 'react'
import { TodoContext } from './TodoContext'

export function TodoList() {
   const { todos, dispatch } = useContext(TodoContext);
  

    return (
        <>
            <div className='w-[60%] px-7 mx-auto py-4'>
                <ul>
                    {
                        todos.length===0 ?(
                             <p className='text-center text-red-500'>No tasks added</p>
                        ):(
                         todos.map((todo)=>(
                        <li className='flex justify-between mt-2 bg-white rounded-lg p-2' key={todo.id}>
                        <div>
                            {todo.text}
                        </div>
                        <div>
                             <button className='bg-amber-400 px-4 py-1 rounded-lg font-bold text-white cursor-pointer hover:bg-amber-500'
                             onClick={()=>dispatch({type:"SET_EDIT_ID",payload:todo.id})}
                             >
                              ✏️ Edit
                             </button>
                             <button className='bg-red-500 px-2 py-1 rounded-lg font-bold text-white cursor-pointer hover:bg-red-700'
                              onClick={()=>dispatch({type:"DELETE_TO_DO",payload:todo.id})}
                             >
                              🗑️ Delete
                             </button>
                        </div>
                        </li>
                         ))
                        )
                    }
                    
                </ul>
            </div>
        </>
    )
}

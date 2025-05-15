import React, { useContext, useEffect, useState } from 'react'
import { TodoContext } from './TodoContext';


export function TodoForm() {

    const[text,setText] = useState('');
    const { dispatch, editId, todos } = useContext(TodoContext);

    useEffect(()=>{
       if(editId!==null){
        const todo =todos.find(t => t.id === editId)
        if (todo) setText(todo.text);
       }
    },[editId,todos]);

    const handlesubmit=(event)=>{
      event.preventDefault();
      if(text.trim()===""){
        alert("please enter some value");
        return;
      }
      if(editId !==null){
        dispatch({type:"UPDATE_TO_DO",payload:text})
      }
      else{
        dispatch({type:"ADD_TODO",payload:text})
      }
      setText('');
    }
    
    return (
        <>
            <div className='p-8 flex justify-center'>
                <form action="#" className='flex gap-x-6' onSubmit={handlesubmit} >
                    <input type="text"
                    placeholder='Enter Your Task here'
                    name='task'
                    className='px-2 py-2 rounded-lg bg-white w-[600px]'
                     value={text}
                     onChange={(e)=> setText(e.target.value)}
                    />
                    <button className='bg-green-500 text-white font-bold px-6 py-2 rounded-lg cursor-pointer hover:bg-green-600'>
                      {editId !== null ? "update":"Add"}
                    </button>
                </form>
            </div>
        </>
    )
}

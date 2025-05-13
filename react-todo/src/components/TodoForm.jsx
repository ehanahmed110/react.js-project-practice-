import React, { useContext, useState,useEffect } from 'react'
import { TodoContext } from './TodoContext';

export function TodoForm() {
    const [text,setText] = useState('');
    // const {
    //     addTodo,
    //     updateTodo,
    //     editId,
    //     todos,
    //     setEditId
    // }
    const { dispatch, editId, todos }=useContext(TodoContext);

        useEffect(() => {
            if (editId !== null) {
                const todo = todos.find(t => t.id === editId);
                if (todo) setText(todo.text);
            }
        }, [editId,todos]);

    const HandleSubmit =(event)=>{
     event.preventDefault();
     if(text.trim() === ''){
        alert('please enter some values');
        return;
     };
     if(editId !== null){
        // updateTodo(editId,text);
        dispatch({ type: "UPDATE_TODO", payload: text });
     }else{
        // addTodo(text);
        dispatch({ type: "ADD_TODO", payload: text });
     };
     setText('');
    }

    return (
        <>
            <div className='p-8 flex justify-center'>
                <form action="#" className='flex gap-x-6' onSubmit={HandleSubmit}>
                    <input type="text" 
                    name='task'
                    placeholder='Enter you task here'
                    className='px-2 py-2 rounded-lg bg-white w-[600px]'
                    value={text}
                    onChange={(e)=>setText(e.target.value)}
                    />
                    <button className='bg-green-500 text-white font-bold px-6 py-2 rounded-lg cursor-pointer hover:bg-green-600'>
                       {editId !== null ? "update":"Add"}
                    </button>
                </form>
            </div>
        </>
    )
}

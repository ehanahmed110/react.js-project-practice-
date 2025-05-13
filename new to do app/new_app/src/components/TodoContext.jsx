import React , { createContext, useReducer } from "react";
const InitialState={
    todos : [],
    editId : null
}
function TodoReducer(state,action){
   switch(action.type){
    case "ADD_TODO":
        return{
            ...state,
            todos: [...state.todos, {id:Date.now(), text: action.payload}]
        };
    case "DELETE_TO_DO":
        return{
            ...state,
            todos: state.todos.filter(todo => todo.id !== action.payload)
        }    
    case "SET_EDIT_ID":
       return {
         ...state,
         editId: action.payload
       };
       case "UPDATE_TO_DO":
        return{
            ...state,
                todos: state.todos.map(todo =>
                todo.id === state.editId ? { ...todo, text: action.payload } : todo
                ),
               editId:null
        };
        default:
            return state;
   }
}

export const TodoContext = createContext();

export function TodoProvider({ children }) {
  const[state,dispatch] = useReducer(TodoReducer,InitialState);
  return(
    <TodoContext.Provider value={{
        todos: state.todos,
        editId: state.editId,
        dispatch
    }}>
        {children}
    </TodoContext.Provider>
  );
}
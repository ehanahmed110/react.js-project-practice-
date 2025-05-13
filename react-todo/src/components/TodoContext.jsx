import React, { createContext,useReducer } from 'react'
//initail states............
const initialState = {
    todos:[],
    editId:null
}
//reducer functions............
function todoReducer(state,action){
  switch(action.type){
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, { id: Date.now(), text: action.payload }]
      };
      case "DELETE_TODO":
        return {
          ...state,
          todos: state.todos.filter(todo => todo.id !== action.payload)
        };
        case "SET_EDIT_ID":
            return {
              ...state,
              editId: action.payload
            };
            case "UPDATE_TODO":
          return {
        ...state,
          todos: state.todos.map(todo =>
          todo.id === state.editId ? { ...todo, text: action.payload } : todo
        ),
        editId: null
      };
      default:
      return state;
}
}
export const TodoContext=createContext();
export function TodoProvider({ children }) {
 // Use the useReducer hook to manage state
 const [state, dispatch] = useReducer(todoReducer, initialState);
    // const [todos,setTodos] = useState([]);
    // const [editId,setEditId] = useState(null);

    // const addTodo = (text)=>{
    //     setTodos([...todos, { id: Date.now(), text }]);
    // };
    // const deleteTodo = (id)=>{
    //     setTodos(todos.filter((todo) => todo.id !== id));
    // };
    // const updateTodo = (id, newText) => {
    //     setTodos(todos.map((todo) =>
    //         todo.id === id ? { ...todo, text: newText } : todo
    //     ));
    //     setEditId(null);
    // };

      return (
            <TodoContext.Provider value={{
                // todos,
                // addTodo,
                // deleteTodo,
                // updateTodo,
                // editId,
                // setEditId
                 todos: state.todos,
                editId: state.editId,
                dispatch
            }}>
                {children}
            </TodoContext.Provider>
        );
}


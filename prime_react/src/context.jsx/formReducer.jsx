export function FormReduce(state,action){
 switch(action.type){
    case "ADD_ROW":
      return [...state, { country: "", district: "", city: "" }];
      case "REMOVE_ROW":
        return  state.filter((_,index) =>index !==Accordion.index);
      case "UPDATE_FIELD":
      return state.map((row, i) =>
        i === action.index
          ? { ...row, [action.field]: action.value }
          : row
      );
    default:
      return state;  
 }
}
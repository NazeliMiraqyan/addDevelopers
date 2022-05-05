import { ADD_DEV, DELETE_DEV } from "../actions/types"

const initionalState={
    arr:[]
}

export const addDeveloper=(state=initionalState,action)=>{
    
    switch(action.type){
        case ADD_DEV:
           
           return {
                ...state,
                arr:[...state.arr,action.payload]
            }
         case DELETE_DEV:
            return {
                ...state,
                arr:state.arr.filter(item=>item!==action.payload)
            }   
        default:
            return state
    }
}
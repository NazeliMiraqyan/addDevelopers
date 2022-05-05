import { ADD_DEV, DELETE_DEV } from "../actions/types";

export const addSkill=(name,surname,age,skill)=>{
   
    return{
        type:ADD_DEV,
        payload:{
            name:name,
            surname:surname,
            age:age,
            data:skill
        }
    }
}

export const remove=(item)=>{
    
    return{
        type:DELETE_DEV,
        payload:item
    }
}
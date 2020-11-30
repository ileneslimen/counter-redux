import {INCREMENT, DECREMENT} from  '../Actiontypes/Actiontypes'


export const inc = ()=>{
    return {
        type:INCREMENT
    }
}
export const dec = ()=>{
    return {
        type:DECREMENT
    }
}

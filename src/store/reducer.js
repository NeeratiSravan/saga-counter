const inititalState = {
    count: 10
}
const reducer = (state=inititalState,action)=>{
    if(action.type==="INC"){
        return {...state,count:state.count+1}
    }
    if(action.type==="DEC"){
        return {...state,count:state.count-1}
    }
    return state
}
export default reducer
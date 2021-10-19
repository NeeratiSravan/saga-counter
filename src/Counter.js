import React from 'react';
import {connect} from 'react-redux';
const Counter = (props)=>{
  return (
    <div style={{border:'1px solid',margin:'5px',padding:'5px'}}>
      <h3>Counter</h3>
      <h1>{props.count}</h1>
      <button onClick = {props.incCount}>inc</button>
      <button onClick = {props.decCount}>dec</button>
    </div>
  )
}
function mapstatetoprops(state){
  return state
}
function mapdispatchtoprops(dispatch){
  return {
    incCount:()=>{dispatch({type:'INC_S'})},
    decCount:()=>{dispatch({type:'DEC_S'})}
  }
}
export default connect (mapstatetoprops,mapdispatchtoprops) (Counter)
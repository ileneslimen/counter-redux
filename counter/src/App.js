import React from 'react';
import './App.css';
import {connect} from 'react-redux'
import {inc,dec} from './Actions'

function App(props) {
  return (
    <div className="App">
     <button onClick={()=>props.inc()}>+</button>
  <span> {props.count}</span>
     <button  onClick={()=>props.dec()}>-</button>
    </div>
  );
}
const mapStatetoProps =(state)=>{
return {
  count: state.count
}}
const mapDispatchtoProps =(dispatch)=>{
  return {
    inc :() => dispatch(inc()),
    dec :() => dispatch(dec())
  }
} 
export default connect(mapStatetoProps, mapDispatchtoProps) (App);

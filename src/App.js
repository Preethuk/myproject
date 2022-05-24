import React,{useState,useEffect,useContext,useReducer,useRef,useMemo, useCallback} from 'react'
import Button from './components/Button';
import {UserContex} from './index'
import Reducer from './reducer'
import DebugLogger from './DebugLogger';
 function Component(){
  useEffect(()=>{
    console.log("component mounted");
    return()=>{
      console.log("useeffect worked as componentWillUnmount")
    }
  },[])
  return <h1>I am ComponentOne</h1>;
}


export default function App(props) {
  // const [name,setName]=useState()
  // const [age,setAge]=useState()
  // const [place,setPlace]=useState()
  const nameRef=useRef();
  const ageRef=useRef();
  const placeRef=useRef();
  const ButtonRef=useRef();
const [state,dispach]=useReducer(Reducer,useContext(UserContex))
const [count1,setCount1]=useState(0)
const [count2,setCount2]=useState(0)
DebugLogger(count1)
// const [unmount,setUnmount]=useState(false)
// useEffect(()=>{
//   // console.log("useeffect worked as componentdidmount");
//   console.log("useeffect worked as componentdid update")
//   console.log(state);
// },[state])
console.log("App started")

// const HandleCounter1=useMemo(()=>{
//   // setCount1(count1+1)
// },[count1])

// const HandleCounter2=useMemo(()=>{
//   // setCount2(count2+1)
// },[count2])

const HandleCounter1=useCallback(()=>{
  setCount1(count1+1)
},[count1])

const HandleCounter2=useCallback(()=>{
  setCount2(count2+1)
},[count2])



  // const text="welcome"
  // var count=0
  return (
    <div>
    {/* <div>{console.log("return executed")}</div>
    {
     unmount?"":<div><Component/></div>
    } 
    <Button onClick={()=>setUnmount(!unmount)}>{unmount?"Mount":"Unmount"}</Button> */}
    <div>count1  :  {count1} And count2  :  {count2}</div>
    <Button name="count1"  onClick={HandleCounter1}>count1 increment</Button>
    <Button name="count2" onClick={HandleCounter2}>count2 increment</Button>
    {/* <div>name:{state.name}</div>
    <div>age:{state.age}</div>
    <div>place:{state.place}</div> */}
    {/* <input onChange={(e)=>setName(e.target.value)} placeholder='name'></input>
    <input onChange={(e)=>setAge(e.target.value)} placeholder='age'></input>
    <input onChange={(e)=>setPlace(e.target.value)} placeholder='place'></input> */}
    {/* <button onClick={()=>dispach({type:'update',payload:{name:name,age:age,place:place}})}>submit</button> */}
    {/* <input  ref={nameRef} placeholder='name' ></input>
    <input ref={ageRef} placeholder='age'></input>
    <input ref={placeRef} placeholder='place'></input>
    <Button ref={ButtonRef} onClick={()=>dispach({type:'update',payload:{name:nameRef.current.value,age:ageRef.current.value,place:placeRef.current.value}})}><div>Button</div></Button>
    <button onClick={()=>console.log(nameRef,ageRef,placeRef,ButtonRef.current.HandleClick())}>log</button>  */}
    </div>
  )
}

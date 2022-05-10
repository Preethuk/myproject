import React, { useEffect, useState } from 'react'
 function Component(){
  useEffect(()=>{
    console.log("component unmount");
  })
  return<h1>iam componentOne</h1>
}
export default function App(props) {
  const [count1,setcount1]=useState(0)
  const [count2,setcount2]=useState(0)
  const [unmount,setUnmount]=useState(0)
  useEffect(()=>{
    console.log("useeffect works as componentdidmount");
  },[count1])
  console.log("App started");
  const text="futura"
  // var count=0
  return (
    <div>
      <div>{console.log("return executed")}</div>
      {unmount?"":<div><Component/></div>}
    <div>{text}</div>
    <div>{props.value}</div>
    {/* <div><Component/></div> */}
    <div>count1:{count1}And count2:{count2}</div>
    <button onClick={()=>setcount1(count1+1)}>count1 increment</button>
    <button onClick={()=>setcount2(count2+1)}>count2 increment</button>
    <button onClick={()=>setUnmount(true)}>unmount</button>
    <button onClick={()=>console.log("cliked")}>click</button>
    </div>

  )
}

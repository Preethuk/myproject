import React,{useDebugValue,useEffect} from 'react'

export default function DebugLogger(value) {
    useDebugValue(value)
    useEffect(()=>{
        console.log("debug",value);
    },[value])
  
}

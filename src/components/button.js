import React, { useImperativeHandle,forwardRef, memo } from 'react'

 const Button =forwardRef((props,ref) =>{
    console.log("Button ",props.name);
    useImperativeHandle(ref,()=>({
       HandleClick
    }),[])
  
    const HandleClick=()=>{
        return console.log('hgvmjjhk')
    }
    
    
  return (
        <button ref={ref} {...props} >{props.children}</button>
  )
})


export default memo(Button)
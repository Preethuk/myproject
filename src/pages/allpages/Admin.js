import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
export default function Admin() {
  const page=useParams();
  const [param,setparam]=useSearchParams();
  const age=param.get('age');
  const name=param.entries();
  for(const entry of param.entries()){
    const [details,value]=entry;
    console.log(details,value);
  }
  // const add=preethu;
  // const encode=encodeURIComponent(add)
  // const decode=deodeURIComponent(add)
  console.log("age",param);
  console.log("pages",page);
  // console.log("encode",encode);
  // console.log("decode",decode);
  return (
    <div>
      admin
    <button onClick={()=>{setparam("?name=john&age=50")}}>setsearch</button>
    </div>
  )
}

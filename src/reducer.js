import React from 'react'

export default function Reducer(state,action) {

    switch(action.type){
        case  'age-inc':
            return {...state,age:state.age+1}
        case  'update':
            return action.payload
        
        default:
            return state

        
    }
 
}
import NGOContext from './NGOContext'
import { useState } from 'react'

export default function NGOState(props) {
  const host = 'http://localhost:5000'
  const NGOInitial = []

  const [NGO, setNGO] = useState(NGOInitial)
  //Add a note

  const getNGO=async()=>{
    const response = await fetch(`${host}/api/auth/ngo/fetchallngo`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },  
    });
    const json = await response.json();
    setNGO(json)
  }


  return (
    <NGOContext.Provider value={{ getNGO ,NGO}}>
      {props.children}
    </NGOContext.Provider>
  )
}
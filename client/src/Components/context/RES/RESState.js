import RESContext from './RESContext'
import { useState } from 'react'

export default function RESState(props) {
  const host = 'http://localhost:5000'
  const notesInitial = []

  const [RES, setRES] = useState(notesInitial)
  //Add a note

  const getRES=async()=>{
    const response = await fetch(`${host}/api/auth/res/fetchallres`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
       


      },

     
    });
    const json = await response.json();
    console.log(json)
    setRES(json)
  }
//   const addNote = async (title, description, tag) => {
//     const response = await fetch(`${host}/api/notes/addnote`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         'auth-token': localStorage.getItem('token')


//       },

//       body: JSON.stringify({ title, description, tag }),
//     });
//     const json = response.json();

//     const note = {
//       "_id": "652000b85d79fc3d1b655f1y",
//       "user": "651fff175d79fc3d1b655f18",
//       "title": title,
//       "description": description,
//       "tag": tag,
//       "date": "2023-10-06T12:42:32.253Z",
//       "__v": 0
//     };
//     setNotes(notes.concat(note))
//   }

  //Delete a note
//   const deleteNote = async (id) => {
//     const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
//       method: "DELETE",
//       headers: {
//         "Content-Type": "application/json",
//         'auth-token': localStorage.getItem('token')


//       },

      
//     });
    
//     const newNote = notes.filter((note) => { return note._id !== id })
//     setNotes(newNote)

//   }


//   //Edit a note
//   const editNote = async (id, title, description, tag) => {


    // Default options are marked with *
//     const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//         'auth-token': localStorage.getItem('token')


//       },

//       body: JSON.stringify({ title, description, tag }),
//     });
//     const json = response.json();



//     for (let index = 0; index < notes.length; index++) {
//       const element = notes[index];
//       if (element._id === id) {
//         element.title = title;
//         element.description = description;
//         element.tag = tag;
//       }
//     }

//   }


  return (
    <RESContext.Provider value={{ getRES ,RES}}>
      {props.children}
    </RESContext.Provider>
  )
}
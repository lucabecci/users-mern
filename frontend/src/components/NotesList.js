import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {format} from 'timeago.js'
export const NotesList = () => {

    const [notes, setNotes] = useState([])

    useEffect(() => {
        async function getData(){
            const resp = await axios.get('http://localhost:4000/api/notes')
            setNotes(resp.data.data)
        }
        getData()
    }, [notes])

    const deleteNote = (id) => {
        axios.delete(`http://localhost:4000/api/notes/${id}`)
    }
    return (
        <div className="row">
            {
                notes.map( note => (
                    <div className="col-md-4 p-2" key={note._id}>
                        <div className="card">
                            <div className="card-header">
                                <h5>{note.title}    </h5>
                            </div>
                            <div className="card-body">
                                <p>{note.content}</p>
                                <p>Author: {note.author}</p>
                                <p>{format(note.date)}</p>
                            </div>
                            <div className="card-footer">
                                <button className='btn btn-danger' onClick={() => deleteNote(note._id)}>
                                    DELETE
                                </button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

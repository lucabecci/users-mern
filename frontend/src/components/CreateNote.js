import React, {useEffect, useState} from 'react'
import axios from 'axios'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export const CreateNote = () => {
    const [users, setUsers] = useState([])
    const [date, setDate] = useState(new Date())
    const [form, setform] = useState({
        userSelected: '',
        title: '',
        content: ''
    })

    useEffect( () => {
        const getData = async() => {
            const resp = await axios.get('http://localhost:4000/api/users')
            setUsers(resp.data.data)
            setform({
                ...form ,
                userSelected: resp.data.data[0].username
            })
        }
        getData()  
    }, [form])

    const onSubmit = async (e) => {
        e.preventDefault()
        const newNote = { 
            title: form.title,
            content: form.content,
            date: date,
            author: form.userSelected
        }
        await axios.post('http://localhost:4000/api/notes', newNote)
        window.location.href= '/'
    }

    const onInputChange = (e) => {
        // setUserSelected(e.target.value)
        setform({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const onChangeDate = (date) => {
        setDate(date)
    }

    return (
        <div className='col-md-6 offset-md-3'>
            <div className="card card-body">
                <h4>Create a note</h4>

                {/* SELECT USER */}
                <div className="form-group">
                    <select className='form-control' name='userSelected' onChange={onInputChange}>
                        {
                            users.map(user => 
                                <option key={user._id} value={user.username}>
                                    {user.username}
                                </option>
                            )
                        }
                    </select>
                </div>

                <div className="form-group">
                    <input type="text" className='form-control' placeholder='title' name='title' required onChange={onInputChange}/>
                </div>
                <div className="form-group">
                    <textarea name="content" className='form-control' placeholder='content' required onChange={onInputChange}></textarea>
                </div>
                <div className="form-group">
                    <DatePicker className='form-control' selected={date} onChange={onChangeDate}/>
                </div>
                <form onSubmit={onSubmit}>
                    <button type='submit' className='btn btn-primary'>
                        SAVE
                    </button>
                </form>
            </div>
        </div>
    )
}

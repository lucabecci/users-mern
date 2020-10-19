import React, { useEffect, useState } from 'react'
import axios from 'axios';
export const CreateUser = () => {
    const [newUser, setNewUser] = useState('')
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect( () => {
        async function getData(){
            const resp = await axios.get('http://localhost:4000/api/users')
            setUsers(resp.data.data)
        }
        getData()
        setLoading(true)
        
    }, [users])

   
    const onChangeUser = e => {
        setNewUser(e.target.value)
    }

    const onSubmit = async e => {
        e.preventDefault();
        await axios.post('http://localhost:4000/api/users', {
            username: newUser
        })
        setNewUser('')
    }

    const deleteUser = (id) => {
        axios.delete(`http://localhost:4000/api/users/${id}`)
    }
    return (
        <div className='row'>
            <div className="col-md-4">
                    <div className="card card-body">
                        <h3>Create New User</h3>
                        <form onSubmit={onSubmit}>
                            <div className="form-group">
                                <input type="text" 
                                className='form-control'
                                value={newUser} 
                                onChange={onChangeUser}
                                />
                            </div>
                            <button type='submit' className='btn btn-primary'>SEND</button>
                        </form>
                    </div>
            </div>
            <div className="col-md-8">
                <h4 className='text-center'>Double click in the user for delete</h4>
                <ul className='list-group'>
                    {
                        loading ? (
                            users.map(user => (
                                    <li className='list-group-item list-group-item-action' 
                                    key={user._id}
                                    onDoubleClick={() => deleteUser(user._id)}
                                    > 
                                    {user.username}
                                    </li>
                            ))
                        ): null
                    }
                </ul>
             </div>
        </div>
    )
}

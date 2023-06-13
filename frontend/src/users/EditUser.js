import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

export default function EditUser() {
// Create a navigate object to navigate to a different page
    let navigate = useNavigate()
// Get the user id from the URL 
    const { id } = useParams()
// Initialize the state for user information
    const [user, setUser] = useState({
        first_name: "",
        last_name: "",
        username: '',
        email: '',
        role: '',
        country: '',
        city: '',
        bio: '',
        twitter: '',
        github: '',
        linkedin: ''
    })
// Function to update the state when an option is selected
    const [selection, setSelection] = useState('');
// fonction pour mettre à jour l'état lorsqu'une option est sélectionnée
    const handleChange = event => { 
        setSelection(event.target.value);}
// Destructure the user object for easier access to its properties
    const { first_name, last_name, username, email, role, country, city, bio, twitter, github, linkedin } = user
// Function to update the user state when an input value changes
    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
// Load the user data from the server using an effect hook
    useEffect(() => {
        loadUser()
    }, [])
// Function to submit the updated user data to the server
    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://127.0.0.1:8000/update_user/${id}`, user)
        navigate("/");
    }
// Function to load the user data from the server
    const loadUser = async () => {
        const result = await axios.get(`http://127.0.0.1:8000/get_user/${id}`)
        setUser(result.data)
    }
    return (
        <>
            <div>
                <div className='row'>
                    <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                        <h2 className='text centre m-4'>@About</h2>
                        <form onSubmit={(e) => onSubmit(e)}>
                            <div className='mb-3'>
                                <label htmlFor='First Name' className='input-label'>First Name</label>
                                <input
                                    type={'text'}
                                    className='form-control'
                                    placeholder='Enter your first name'
                                    name="First Name"
                                    value={first_name}
                                    onChange={(e) => onInputChange(e)} />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='Last Name' className='input-label'>Last Name</label>
                                <input
                                    type={'text'}
                                    className='form-control'
                                    placeholder='Enter your last name'
                                    name="Last Name"
                                    value={last_name}
                                    onChange={(e) => onInputChange(e)} />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='UserName' className='input-label'>UserName</label>
                                <input
                                    type={'text'}
                                    className='form-control'
                                    placeholder='Enter your username'
                                    name="username"
                                    value={username}
                                    onChange={(e) => onInputChange(e)} />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='Email' className='input-label'>Email</label>
                                <input
                                    type={'text'}
                                    className='form-control'
                                    placeholder='Enter your email'
                                    name="email"
                                    value={email}
                                    onChange={(e) => onInputChange(e)} />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='Role' className='input-label'>Role</label>
                                <select className="form-control" name="Role" value={selection} onChange={handleChange}>
                                    <option selected hidden>Sélectionnez une option</option>
                                    <option value="option1">Learning</option>
                                    <option value="option2">Teaching</option>
                                    <option value="option3">Administrating</option>
                                </select>
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='Country' className='input-label'>Country</label>
                                <input
                                    type={'text'}
                                    className='form-control'
                                    placeholder='Where are you from ?'
                                    name="Country"
                                    value={country}
                                    onChange={(e) => onInputChange(e)} />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='City' className='input-label'>City</label>
                                <input
                                    type={'text'}
                                    className='form-control'
                                    placeholder='e.g. Casablanca, Rabat, ...'
                                    name="City"
                                    value={city}
                                    onChange={(e) => onInputChange(e)} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                        <h2 className='text centre m-4'>@Socials</h2>
                        <form onSubmit={(e) => onSubmit(e)}>
                            <div className='mb-3'>
                                <label htmlFor='Twitter' className='input-label'>Twitter</label>
                                <input
                                    type={'text'}
                                    className='form-control'
                                    placeholder='@username'
                                    name="Twitter"
                                    value={twitter}
                                    onChange={(e) => onInputChange(e)} />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='Github' className='input-label'>Github</label>
                                <input
                                    type={'text'}
                                    className='form-control'
                                    placeholder='@username'
                                    name="Github"
                                    value={github}
                                    onChange={(e) => onInputChange(e)} />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='LinkedIn' className='input-label'>LinkedIn</label>
                                <input
                                    type={'text'}
                                    className='form-control'
                                    placeholder='@username'
                                    name="Linkedin"
                                    value={linkedin}
                                    onChange={(e) => onInputChange(e)} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <button type='submit' className='btn btn-outline-primary mt-3'>Save</button>
            <Link className='btn btn-outline-light btn-danger mx-2 mt-3' to="/">Cancel</Link>
        </>
    )
}

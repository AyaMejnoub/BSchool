import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function UserEdit() {
  const [data, setData] = useState([]);

  const {id}=useParams()

  useEffect(() => {
    loadUsers();
    },[]);
  const loadUsers = async () => {
    const result = await axios.get('http://127.0.0.1:8000/get_all')
      .then(Response => {const data = Response.data; setData(data);})
      };

  const deleteUser = async (id)=>
  {
      await axios.delete(`http://127.0.0.1:8000/delete_user/${id}`)
      loadUsers();
  };
  return (
    <div className='container'>
      <div className='py-4'>
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">UserName</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{item.username}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>
                  <Link className='btn btn-primary mx-2'
                    to={`/view-user/${item.id}`}>View</Link>
                  <Link className='btn btn-outline-primary mx-2'
                    to={`/edit_user/${item.id}`}> Edit</Link>
                  <button className='btn btn-danger mx-2'
                    onClick={()=>deleteUser(item.id)}>
                    Delete</button>

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

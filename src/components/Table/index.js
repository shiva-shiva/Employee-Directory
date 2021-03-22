import React from 'react'
import './style.css'
function Table(props){

    return (
        <div className="table-responsive">
        <table className="table table-striped table-hover text-center">
            <thead>
                <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Phone Number <button className='filter' onClick={props.sortNumber}><i className="fas fa-sort-up"></i></button></th>
                <th>Email <button className='filter' onClick={props.sortEmail}><i className="fas fa-sort-up"></i></button></th>
                <th>Location</th>
                </tr>
            </thead>
            <tbody>
                {props.list.map(user => 
                <tr>
                <td>
                    <img src={user.picture.thumbnail} alt="profile"/>
                </td>
                <td>{user.name.first} {user.name.last}</td>
                <td>{user.phone}</td>
                <td>{user.email}</td>
                <td>{user.location.state}, {user.location.country}</td>
                </tr>
                )}
            </tbody>
        </table>
        </div>
    )
}

export default Table
import React from 'react'
import './styles/userCard.css'

const UserCard = ({ user, deleteUserById, setupdateInfo, handleOpen }) => {

    const handleDelete = () => {
        deleteUserById(user.id)
    }

    const handleUpdate = () => {
        setupdateInfo(user)
        handleOpen()
    }

    return (
        <article className='card'>
                <h2 className='card__title'>{`${user.first_name} ${user.last_name}`}</h2>
                <ul className='card__ul'>
                    <li className='card__item'><span className='card__span'>Email :  </span>{user.email}</li>
                    <li className='card__item'><span className='card__span'>Birthday :  </span>{user.birthday}</li>
                    <div className='card__icon'>
                        <i className='btn__delete bx bx-trash' onClick={handleDelete}></i>
                        <i className='btn__update bx bx-edit-alt' onClick={handleUpdate} ></i>
                    </div>
                    
                </ul>
        </article>
    )
}

export default UserCard
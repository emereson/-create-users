import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import defaultValues from '../utils/defaultValues'
import './styles/formstyles.css'

const FormUser = ({createNewUser,updateInfo , updateUserById ,handleClose ,setupdateInfo}) => {

    const {reset, register,handleSubmit} = useForm ()

    const [showPassword, setshowPassword] = useState(false)

    useEffect(() => {
        if (updateInfo) {
            reset(updateInfo)
        }
    }, [updateInfo])

    const submit = data => {
        if (updateInfo) {
            updateUserById(updateInfo.id,data)
        }else{
            createNewUser(data)
        }
        handleClose()
        reset(defaultValues)
    }

    const handlex = () => {
        reset(defaultValues)
        setupdateInfo()
        handleClose()
    }

    const handlePassword = () =>{
        setshowPassword(!showPassword)
    }
    console.log(showPassword);


    return (
        <form className='form' onSubmit={handleSubmit(submit)}>
        <div className='form__div'>
        <h2 className='form__title'>Form User</h2>
            <div onClick={handlex} className='form__x'>x</div>
            <div className='form__item'>
                <label className='form__label' htmlFor="email">Email</label>
                <input required className='form__input' {...register('email')} type="email" id='email' placeholder='example@gmail.com' />
            </div>
            <div className='form__item'>
                <label className='form__label' htmlFor="password">Password</label>     
                <div className='form__item-password'>
                    {showPassword?
                    <input required className='form__input' {...register('password')} type= 'text'
                    id='password' 
                    placeholder= '*********' 
                    />
                    :
                    <input required className='form__input' {...register('password')} type='password'
                    id='password' 
                    placeholder= '*********' 
                    />
                    }
                    <i onClick={handlePassword}  className={`${showPassword ?`bx bx-low-vision `:'bx bx-show-alt' } `}></i>
                </div>
            </div>
            <div className='form__item'>
                <label className='form__label' htmlFor="firstName">First name</label>
                <input required className='form__input' {...register('first_name')} type="text" id='firstName'
                placeholder='Name'
                />
            </div>
            <div className='form__item'>
                <label className='form__label' htmlFor="lastName">Last name</label>
                <input  required className='form__input' {...register('last_name')} type="text" id='lastName' 
                placeholder='Last Name'
                />
            </div>
            <div className='form__item'>
                <label className='form__label' htmlFor="birthday">Birthday</label>
                <input required className='form__input' {...register('birthday')} type="date" id='birthday' />
            </div>
            <button className='form__btn'>
                {
                    updateInfo?'Update' : 'Create'
                }
            </button>
        </div>
        </form>
    )
}

export default FormUser
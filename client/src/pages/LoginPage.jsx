import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify';
import { checkIsAuth, loginUser } from '../redux/features/auth/authSlice';

export const LoginPage = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const {status} = useSelector((state) => state.auth)
  const isAuth = useSelector(checkIsAuth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if(status) {
      toast(status)
    }
    if(isAuth) {
      navigate('/')
    }
  }, [status, isAuth, navigate])

  const handleSubmit = () => {
    try {
      dispatch(loginUser({username, password}))
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form onSubmit={e => e.preventDefault()} className='w-1/4 h-60 mx-auto mt-40'>
      <h1 className="text-lg text-white text-center">Авторизация</h1>
      <label className="text-xs text-gray-400">
        Ваш Логин:
        <input value={username} onChange={e => setUsername(e.target.value)} type="text" placeholder='Логин'
        className='mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 text-xs outline-none placeholder:text-gray-700' />
      </label>
      <label className="text-xs text-gray-400">
        Пароль:
        <input onChange={e => setPassword(e.target.value)} value={password} type="passsword" placeholder='Пароль'
        className='mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 text-xs outline-none placeholder:text-gray-700' />
      </label>

      <div className="flex gap-8 justify-center mt-4">
        <button onClick={handleSubmit} type='submit' className="flex justify-center bg-gray-700 items-center text-xs text-white rounded-sm py-2 px-4">Войти</button>
        <Link to="/register" className="flex justify-center items-center text-xs text-white">Нет аккаунта?</Link>
      </div>
    </form>
  )
}
import React, { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault();
        console.log('Email is' , email);
        console.log('Password is' , password);

        setEmail("");
        setPassword("");
    }
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 border-emerald-600 p-20 rounded-xl'>
            <form 
            onSubmit={(e)=>{
                submitHandler(e)
            }}
            className='flex flex-col items-center justify-center'>
                <input 
               value={email} 
                onChange={(e)=>{
                    setEmail(e.target.value)
                }} required className=' outline-none bg-transparent border-2 border-emerald-600 rounded-full py-3 px-5 text-xl placeholder:text-gray-400' type="email" name="" id="" placeholder='Enter your email' />
                <input
                value={password}
                onChange={(e)=>{
                    setPassword(e.target.value)
                }}
                required className=' outline-none bg-transparent border-2 border-emerald-600 rounded-full py-3 px-5 text-xl mt-8 placeholder:text-gray-400' type="password" name="" id="" placeholder='Enter password' />
                <button className='text-white mt-5 outline-none border-none border-2 bg-emerald-600 rounded-full py-3 px-5 text-xl placeholder:text-gray-400'>Log In</button>
            </form>
        </div>
    </div>
  )
}

export default Login
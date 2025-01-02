"use client";
import Link from 'next/link';
import React, { useState } from 'react';

const Register = () => {
    const [user, setUser] = useState({
        fullName: "",
        username: "",
        password: "",
        confirmPassword: "",
        gender: "",
    })
    const handleSubmitForm = (e) => {
        e.preventDefault();

        setUser({
            fullName: "",
            username: "",
            password: "",
            confirmPassword: "",
            gender: "",
        })
    }
    console.log(user)
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='w-96 border rounded-md p-5'>
                <h2 className='text-center text-2xl font-semibold mb-7'>Register User</h2>
                <form onSubmit={handleSubmitForm} action="#">
                    <div className='flex flex-col gap-1 mb-4'>
                        <label htmlFor='fullname' className='text-sm '>Full Name</label>
                        <input type="text" placeholder="Enter full name" id="fullname" name="fullname" value={user.fullName} onChange={(e) => setUser({ ...user, fullName: e.target.value })} className='outline-none border rounded-md p-2 text-sm' required />
                    </div>
                    <div className='flex flex-col gap-1 mb-4'>
                        <label htmlFor='username' className='text-sm '>Username</label>
                        <input type="text" placeholder="Enter full name" id="username" name="username" value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })} className='outline-none border rounded-md p-2 text-sm' required />
                    </div>
                    <div className='flex flex-col gap-1 mb-4'>
                        <label htmlFor='password' className='text-sm '>Password</label>
                        <input type="password" placeholder="Enter full name" id="password" name="password" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} className='outline-none border rounded-md p-2 text-sm' required />
                    </div>
                    <div className='flex flex-col gap-1 mb-4'>
                        <label htmlFor='cpassword' className='text-sm '>Confirm Password</label>
                        <input type="password" placeholder="Enter full name" id="cpassword" name="cpassword" value={user.confirmPassword} onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })} className='outline-none border rounded-md p-2 text-sm' required />
                    </div>
                    <p className='text-sm text-center '>Already have an account? <Link href="/login" className='underline'>Login</Link></p>
                    <button type="submit" className='mt-4 bg-teal-400 rounded-md w-full h-11 text-white font-semibold'>Register</button>
                </form>
            </div>
        </div>
    );
};

export default Register;
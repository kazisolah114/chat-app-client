"use client";
import { setAuthUser } from '@/redux/features/userSlice';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const Login = () => {
    const router = useRouter();
    const [user, setUser] = useState({
        username: "",
        password: "",
    })
    const dispatch = useDispatch();
    const handleSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8000/api/user/login", user, {
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: true
            })
            if (response.status === 200) {
                dispatch(setAuthUser(response.data.userData));
                alert(response.data.message);
                router.push("/")
            }
        } catch (error) {
            console.log(error);
        }
        setUser({
            username: "",
            password: "",
        })
    }
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='w-96 border rounded-md p-5'>
                <h2 className='text-center text-2xl font-semibold mb-7'>Login User</h2>
                <form onSubmit={handleSubmitForm} action="#">
                    <div className='flex flex-col gap-1 mb-4'>
                        <label htmlFor='username' className='text-sm '>Username</label>
                        <input type="text" placeholder="Enter username" id="username" name="username" value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })} className='outline-none border rounded-md p-2 text-sm' required />
                    </div>
                    <div className='flex flex-col gap-1 mb-4'>
                        <label htmlFor='password' className='text-sm '>Password</label>
                        <input type="password" placeholder="Enter password" id="password" name="password" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} className='outline-none border rounded-md p-2 text-sm' required />
                    </div>
                    <p className='text-sm text-center '>Don&apos;t have an account? <Link href="/register" className='underline'>Register</Link></p>
                    <button type="submit" className='mt-4 bg-teal-400 rounded-md w-full h-11 text-white font-semibold'>Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
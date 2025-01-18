import React from 'react';
import SearchUser from './SearchUser';
import OtherUsers from './OtherUsers';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const Sidebar = () => {
    const router = useRouter();
    const handleLogout = async () => {
        try {
            const res = await axios.get(`http://localhost:8000/api/user/logout`, {
                withCredentials: true,
            })
            if(res.status === 200) {
                router.push("/login")
            }
        } catch(error) {
            console.log(error)
        }
    }
    return (
        <div className='overflow-auto p-3'>
            <SearchUser />
            <OtherUsers />
            <div className='mt-4'>
                <button onClick={handleLogout} className='w-full bg-red-400 rounded py-2 text-white'>Logout</button>
            </div>
        </div>
    );
};

export default Sidebar;
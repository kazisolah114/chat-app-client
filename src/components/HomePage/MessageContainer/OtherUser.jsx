import React from 'react';
import Status from '../Sidebar/Status';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { HiArrowLeft } from 'react-icons/hi2';
import { setSelectedUser } from '@/redux/features/userSlice';

const OtherUser = ({ selectedUser }) => {
    const { onlineUsers } = useSelector((state) => state.persistedReducer.user)
    const dispatch = useDispatch();
    const isOnline = onlineUsers?.includes(selectedUser?._id);
    return (
        <div className='flex items-center gap-3 p-2 bg-gray-700 duration-150 '>
            <button onClick={() => dispatch(setSelectedUser(null))}><HiArrowLeft /></button>
            <div className='relative'>
                <Image src={selectedUser.profilePhoto || "/images/profile-girl.webp"} alt={`${selectedUser.fullName}-photo`} width={50} height={50} className='rounded-full w-10 h-10 max-sm:w-8 max-sm:h-8' />
                <Status status={isOnline} />
            </div>
            <h4 className='text-gray-100 font-medium'>{selectedUser.fullName}</h4>
        </div>
    );
};

export default OtherUser;
import React from 'react';
import Status from '../Sidebar/Status';
import Image from 'next/image';
import { useSelector } from 'react-redux';

const OtherUser = ({ selectedUser }) => {
    const { onlineUsers } = useSelector((state) => state.persistedReducer.user)
    const isOnline = onlineUsers?.includes(selectedUser?._id);
    return (
        <div className='flex items-center gap-3 p-2 bg-gray-700 duration-150 '>
            <div className='relative'>
                <Image src={selectedUser.profilePhoto || "/images/profile-girl.webp"} alt={`${selectedUser.fullName}-photo`} width={50} height={50} className='rounded-full w-10 h-10 ' />
                <Status status={isOnline} />
            </div>
            <h4 className='text-gray-100 font-medium'>{selectedUser.fullName}</h4>
        </div>
    );
};

export default OtherUser;
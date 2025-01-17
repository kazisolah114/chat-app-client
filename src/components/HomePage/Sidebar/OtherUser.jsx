import Image from 'next/image';
import React from 'react';
import Status from './Status';

const OtherUser = ({ user }) => {
    const status = true;
    return (
        <div className='flex items-center gap-3 p-1 hover:bg-gray-200 duration-150 rounded cursor-pointer'>
            <div className='relative'>
                <Image src={user.profilePhoto || '/images/profile-girl.webp'} alt={`${user.fullName}-profile`} width={50} height={50} className='rounded-full w-10 h-10 ' />
                <Status status={status} />
            </div>
            <h4 className='text-gray-700 font-medium'>{user.fullName}</h4>
        </div>
    );
};

export default OtherUser;
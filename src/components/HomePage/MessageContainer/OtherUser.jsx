import React from 'react';
import Status from '../Sidebar/Status';
import Image from 'next/image';

const OtherUser = () => {
    const status = true;
    return (
        <div className='flex items-center gap-3 p-2 bg-gray-700 duration-150 '>
            <div className='relative'>
                <Image src="/images/profile-girl.webp" alt="user-photo" width={50} height={50} className='rounded-full w-10 h-10 ' />
                <Status status={status} />
            </div>
            <h4 className='text-gray-100 font-medium'>Lillian Anderson</h4>
        </div>
    );
};

export default OtherUser;
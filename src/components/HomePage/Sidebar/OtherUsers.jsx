import React from 'react';
import OtherUser from './OtherUser';
import useGetOtherUsers from '@/hooks/useGetOtherUsers';
import { useSelector } from 'react-redux';

const OtherUsers = () => {
    useGetOtherUsers();
    const otherUsers = useSelector((store) => store.user.otherUsers);
    console.log(otherUsers)
    if (!otherUsers) {
        return <div>No user found!</div>
    };
    return (
        <div className='flex flex-col gap-1'>
            {otherUsers?.map(user => {
                return (
                    <OtherUser key={user._id} user={user} />
                )
            })}
        </div>
    );
};

export default OtherUsers;
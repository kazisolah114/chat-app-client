import React from 'react';
import OtherUser from './OtherUser';
import useGetOtherUsers from '@/hooks/useGetOtherUsers';
import { useSelector } from 'react-redux';

const OtherUsers = () => {
    useGetOtherUsers();
    const { otherUsers, searchedUsers } = useSelector((store) => store.persistedReducer.user);

    if (!otherUsers) {
        return <div>No user found!</div>
    };
    
    return (
        <>
            {searchedUsers && searchedUsers.length > 0 ?
                <div className='flex flex-col gap-1'>
                    {searchedUsers.map(user => {
                        return (
                            <OtherUser key={user._id} user={user} />
                        )
                    })}
                </div>
                :
                <div className='flex flex-col gap-1'>
                    {otherUsers?.map(user => {
                        return (
                            <OtherUser key={user._id} user={user} />
                        )
                    })}
                </div>
            }
        </>
    );
};

export default OtherUsers;
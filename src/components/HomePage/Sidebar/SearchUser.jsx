import { setSearchedUsers } from '@/redux/features/userSlice';
import React, { useState } from 'react';
import { HiMagnifyingGlass } from "react-icons/hi2";
import { useDispatch, useSelector } from 'react-redux';

const SearchUser = () => {
    const dispatch = useDispatch();
    const { otherUsers } = useSelector((state) => state.persistedReducer.user);
    const [userSearch, setUserSearch] = useState("");

    const handleUserSearch = (event) => {
        const searchQuery = event.target.value;
        setUserSearch(searchQuery);
        if (searchQuery.trim() === "") {
            dispatch(setSearchedUsers([]));
        } else {
            const conversationUsers = otherUsers?.filter(user => user.fullName.toLowerCase().includes(userSearch.toLowerCase()));
            if(conversationUsers && conversationUsers.length > 0) {
                dispatch(setSearchedUsers(conversationUsers));
            }
        }
    }
    return (
        <div className='border-b pb-3 mb-3'>
            <form className='flex items-center gap-2'>
                <input type="text" placeholder='Name' className='px-2 py-2 rounded outline-none text-gray-800 bg-white'
                    name="name"
                    value={userSearch}
                    onChange={handleUserSearch}
                />
                <button className='bg-white flex items-center justify-center p-3 rounded-md text-gray-800'><HiMagnifyingGlass className='text-lg' /></button>
            </form>
        </div>
    );
};

export default SearchUser;
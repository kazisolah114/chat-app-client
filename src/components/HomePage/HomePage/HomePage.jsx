import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import MessageContainer from '../MessageContainer/MessageContainer';
import { useSelector } from 'react-redux';

const HomePage = () => {
    const { selectedUser } = useSelector((state) => state.persistedReducer.user);
    return (
        <div className='grid md:grid-cols-12 h-full w-full bg-gray-100 rounded '>
            <div className='max-md:hidden md:col-span-3 md:max-h-screen overflow-auto'>
                <Sidebar />
            </div>
            <MessageContainer selectedUser={selectedUser} />
        </div>
    );
};

export default HomePage;
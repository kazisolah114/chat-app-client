import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import MessageContainer from '../MessageContainer/MessageContainer';

const HomePage = () => {
    
    return (
        <div className='w-full flex items-center justify-center'>
            <div className='flex justify-center h-[33rem] bg-gray-100 rounded '>
                <Sidebar />
                <MessageContainer />
            </div>
        </div>
    );
};

export default HomePage;
import React, { useEffect } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import MessageContainer from '../MessageContainer/MessageContainer';

const HomePage = () => {
    return (
        <div className='grid grid-cols-12 h-full w-full bg-gray-100 rounded '>
            <Sidebar />
            <MessageContainer />
        </div>
    );
};

export default HomePage;
import React from 'react';
import SearchUser from './SearchUser';
import OtherUsers from './OtherUsers';

const Sidebar = () => {
    return (
        <div className='overflow-auto p-3'>
            <SearchUser />
            <OtherUsers />
        </div>
    );
};

export default Sidebar;
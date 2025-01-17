import React from 'react';

const Status = ({ status }) => {
    return (
        <div className='absolute top-0 right-0'>
            {status ? <div className='w-3 h-3 rounded-full bg-green-400 border'></div> : <div className='w-3 h-3 rounded-full bg-red-400 border'></div>}
        </div>
    );
};

export default Status;
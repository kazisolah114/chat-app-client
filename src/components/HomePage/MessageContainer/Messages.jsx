import React from 'react';
import Message from './Message';
import useGetMessages from '@/hooks/useGetMessages';

const Messages = () => {
    useGetMessages();
    return (
        <div className='overflow-auto'>
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
        </div>
    );
};

export default Messages;
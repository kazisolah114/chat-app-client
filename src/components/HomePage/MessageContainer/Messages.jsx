import React from 'react';
import Message from './Message';
import useGetMessages from '@/hooks/useGetMessages';
import { useSelector } from 'react-redux';

const Messages = () => {
    useGetMessages();
    const messages = useSelector((state) => state.message.messages);
    const { selectedUser, authState } = useSelector((state) => state.persistedReducer.user)
    if(!messages) return ;
    return (
        <div className='overflow-auto'>
            {messages?.map((message) => {
                return (
                    <Message key={message._id} message={message} selectedUser={selectedUser} authState={authState} />
                )
            })}
        </div>
    );
};

export default Messages;
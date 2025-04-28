import React from 'react';
import Message from './Message';
import useGetMessages from '@/hooks/useGetMessages';
import { useSelector } from 'react-redux';
import useGetRealTimeMessage from '@/hooks/useGetRealTimeMessage';

const Messages = () => {
    useGetRealTimeMessage();
    useGetMessages();
    const messages = useSelector((state) => state.message.messages);
    console.log("Messages:", messages);
    const { selectedUser, authState } = useSelector((state) => state.persistedReducer.user)
    if (messages.length < 1) return <div>No conversatin found!</div>;
    return (
        <div className='overflow-auto'>
            {messages.map((message, index) => {
                return (
                    <Message key={index} message={message} selectedUser={selectedUser} authState={authState} />
                )
            })}
        </div>
    );
};

export default Messages;
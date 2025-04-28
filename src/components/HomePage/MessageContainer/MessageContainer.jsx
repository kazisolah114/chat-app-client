import React from 'react';
import OtherUser from './OtherUser';
import SendMessage from './SendMessage';
import Messages from './Messages';
import { useSelector } from 'react-redux';

const MessageContainer = () => {
    const { selectedUser } = useSelector((state) => state.persistedReducer.user)
    return (
        <div className='col-span-9 max-h-screen'>
            {selectedUser ?
                <div className='h-full flex flex-col'>
                    <OtherUser selectedUser={selectedUser} />
                    <Messages />
                    <SendMessage selectedUser={selectedUser} />
                </div>
                :
                <div className='text-center flex items-center justify-center h-full'>
                    <h2 className='text-2xl font-bold text-slate-800'>Risala Messenger</h2>
                </div>
            }

        </div>
    );
};

export default MessageContainer;
import React from 'react';
import OtherUser from './OtherUser';
import SendMessage from './SendMessage';
import Messages from './Messages';
import { useSelector } from 'react-redux';

const MessageContainer = () => {
    const { selectedUser } = useSelector((state) => state.user)
    return (
        <div className=''>
            {selectedUser ?
                <div className='w-[40rem] h-full flex flex-col'>
                    <OtherUser selectedUser={selectedUser} />
                    <Messages />
                    <SendMessage />
                </div>
                :
                <div className='w-[40rem] text-center flex items-center justify-center h-full'>
                    <h2>Risala Messenger</h2>
                </div>
            }

        </div>
    );
};

export default MessageContainer;
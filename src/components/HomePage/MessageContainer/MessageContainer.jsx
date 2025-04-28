import React from 'react';
import OtherUser from './OtherUser';
import SendMessage from './SendMessage';
import Messages from './Messages';
import Sidebar from '../Sidebar/Sidebar';

const MessageContainer = ({ selectedUser }) => {
    return (
        <div className='md:col-span-9 max-h-screen max-md:h-full'>
            {selectedUser ?
                <div className='h-full flex flex-col'>
                    <OtherUser selectedUser={selectedUser} />
                    <Messages />
                    <SendMessage selectedUser={selectedUser} />
                </div>
                :
                <>
                    <div className='text-center flex items-center justify-center h-full max-md:hidden'>
                        <h2 className='text-2xl font-bold text-slate-800'>Risala Messenger</h2>
                    </div>
                    <div className='md:hidden max-h-screen overflow-auto'>
                        <Sidebar />
                    </div>
                </>
            }

        </div>
    );
};

export default MessageContainer;
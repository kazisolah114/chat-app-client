import React from 'react';
import OtherUser from './OtherUser';
import SendMessage from './SendMessage';
import Messages from './Messages';

const MessageContainer = () => {
    return (
        <div className=' w-[40rem] flex flex-col'>
            <OtherUser />
            <Messages />
            <SendMessage />
        </div>
    );
};

export default MessageContainer;
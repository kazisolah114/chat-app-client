import { setMessage } from '@/redux/features/messageSlice';
import axios from 'axios';
import React, { useState } from 'react';
import { HiOutlinePaperAirplane } from 'react-icons/hi2';
import { useDispatch } from 'react-redux';

const SendMessage = ({ selectedUser }) => {
    const dispatch = useDispatch();
    const [message, set_message] = useState("");
    const handleSendMessage = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`http://localhost:8000/api/message/send/${selectedUser?._id}`, { message }, {
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: true
            })
            console.log("send message response:",response.data);
            dispatch(setMessage(response.data.newMessage))
        } catch (error) {
            console.log(error);
        }
        set_message("");
    }
    return (
        <div className='mt-auto p-3'>
            <form onSubmit={handleSendMessage}>
                <div className='relative flex items-center justify-between'>
                    <input type="text" placeholder='Type message' className='p-3 rounded outline-none w-full bg-gray-700 text-white'
                        value={message}
                        onChange={(e) => set_message(e.target.value)}
                        required
                    />
                    <button type="submit" className='absolute top-[13px] right-2 text-white '><HiOutlinePaperAirplane className='text-xl' /></button>
                </div>
            </form>
        </div>
    );
};

export default SendMessage;
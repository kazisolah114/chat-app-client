import React from 'react';
import { HiOutlinePaperAirplane } from 'react-icons/hi2';

const SendMessage = () => {
    return (
        <div className='mt-auto p-3'>
            <form>
                <div className='relative flex items-center justify-between'>
                    <input type="text" placeholder='Type message' className='p-3 rounded outline-none w-full bg-gray-700 text-white ' />
                    <button type="submit" className='absolute top-[13px] right-2 text-white '><HiOutlinePaperAirplane className='text-xl' /></button>
                </div>
            </form>
        </div>
    );
};

export default SendMessage;
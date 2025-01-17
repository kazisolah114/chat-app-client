import React from 'react';
import { HiMagnifyingGlass } from "react-icons/hi2";

const SearchUser = () => {
    return (
        <div className='border-b pb-3 mb-3'>
            <form>
                <div className='flex items-center gap-2'>
                    <input type="text" placeholder='Name' required className='px-2 py-2 rounded outline-none text-gray-800 bg-white' />
                    <button type="submit" className='bg-white flex items-center justify-center p-3 rounded-md text-gray-800'><HiMagnifyingGlass className='text-lg' /></button>
                </div>
            </form>
        </div>
    );
};

export default SearchUser;
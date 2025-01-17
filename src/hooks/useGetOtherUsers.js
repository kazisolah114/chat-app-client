import axios from 'axios';
import { useEffect } from 'react';

const useGetOtherUsers = () => {
    useEffect(() => {
        const getOtherUsers = async () => {
            const response = await axios.get(`http://localhost:8000/api/user/others`, {
                withCredentials: true,
            })
            console.log(response);
        }
        getOtherUsers();
    }, [])
}

export default useGetOtherUsers;
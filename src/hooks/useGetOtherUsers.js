import { setOtherUsers } from '@/redux/features/userSlice';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const useGetOtherUsers = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const getOtherUsers = async () => {
            const response = await axios.get(`http://localhost:8000/api/user/others`, {
                withCredentials: true,
            })
            dispatch(setOtherUsers(response.data))
        }
        getOtherUsers();
    }, [])
}

export default useGetOtherUsers;
import axios from "axios";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const useGetMessages = () => {
    const { selectedUser } = useSelector((state) => state.user)
    useEffect(() => {
        const handleGetMessages = async () => {
            try {
                axios.defaults.withCredentials = true;
                const res = await axios.get(`http://localhost:8000/api/message/${selectedUser?._id}`)
                console.log(res);
            } catch (error) {
                console.log(error);
            }
        }
        handleGetMessages();
    }, [selectedUser])
};

export default useGetMessages;
import { setMessage } from "@/redux/features/messageSlice";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const useGetMessages = () => {
    const { selectedUser } = useSelector((state) => state.user)
    const messages = useSelector((state) => state.message.messages);
    const dispatch = useDispatch();
    useEffect(() => {
        const handleGetMessages = async () => {
            try {
                axios.defaults.withCredentials = true;
                const res = await axios.get(`http://localhost:8000/api/message/${selectedUser?._id}`)
                dispatch(setMessage(res.data))
            } catch (error) {
                console.log(error);
            }
        }
        handleGetMessages();
    }, [selectedUser, messages])
};

export default useGetMessages;
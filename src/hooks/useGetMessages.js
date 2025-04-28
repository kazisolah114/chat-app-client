import { clearMessages, setMessage } from "@/redux/features/messageSlice";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const useGetMessages = () => {
    const { selectedUser } = useSelector((state) => state.persistedReducer.user)
    const messages = useSelector((state) => state.message.messages);
    const dispatch = useDispatch();
    useEffect(() => {
        const handleGetMessages = async () => {
            try {
                dispatch(clearMessages())
                axios.defaults.withCredentials = true;
                const res = await axios.get(`http://localhost:8000/api/message/${selectedUser?._id}`)
                res.data.forEach((message) => {
                    dispatch(setMessage(message))
                })
            } catch (error) {
                console.log(error);
            }
        }
        if (selectedUser?._id) {
            handleGetMessages(); // Fetch messages only if there's a selectedUser
        }
    }, [selectedUser, dispatch])
};

export default useGetMessages;
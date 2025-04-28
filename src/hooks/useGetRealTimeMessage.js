import { setMessage } from "@/redux/features/messageSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const useGetRealTimeMessage = () => {
    const { socket } = useSelector((state) => state.socket);
    const { messages } = useSelector((state) => state.message);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!socket) return;

        const handleNewMessage = (newMessage) => {
            dispatch(setMessage(newMessage));
        };

        socket.on("newMessage", handleNewMessage);

        return () => {
            socket.off("newMessage", handleNewMessage); // CLEANUP
        };
    }, [socket, dispatch]); // <-- ADD messages & dispatch in deps
};

export default useGetRealTimeMessage;

"use client";
import React, { useEffect, useState } from 'react';
import { Provider, useDispatch } from 'react-redux';
import store, { persistor } from '@/redux/store/store';
import { io } from 'socket.io-client';
import { useSelector } from 'react-redux';
import { setOnlineUsers } from '@/redux/features/userSlice';
import { PersistGate } from 'redux-persist/integration/react';

const InnerApp = ({ children }) => {
    const { authState } = useSelector((state) => state.persistedReducer.user);

    const [socket, setSocket] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        if (authState) {
            const newSocket = io('http://localhost:8000', {
                query: {
                    userId: authState._id
                }
            });
            setSocket(newSocket);
            newSocket.on('connect', () => {
                console.log("Socket connected", newSocket.id);
            })
            newSocket.on('getOnlineUsers', (onlineUsers) => {
                console.log("Online users:", onlineUsers);
                dispatch(setOnlineUsers(onlineUsers));
            })
            return () => {
                console.log("Disconnecting socket...");
                newSocket.disconnect();
            }
        }
    }, [authState, dispatch]);
    return <>{children}</>;
};

const StoreProvider = ({ children }) => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <InnerApp>
                    {children}
                </InnerApp>
            </PersistGate>
        </Provider>
    );
};

export default StoreProvider;

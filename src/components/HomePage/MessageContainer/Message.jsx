import React from 'react';

const Message = ({ message, selectedUser, authState }) => {
    const isReceiver = message.senderId === selectedUser._id;
    return (
        <div>
            {isReceiver ? (
                // Message from the receiver
                <div className="chat chat-start">
                    <div className="chat-image avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Receiver Avatar"
                                src={selectedUser?.profilePhoto || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}
                            />
                        </div>
                    </div>
                    <div className="chat-header">
                        <time className="text-xs opacity-50">
                            {new Date(message.createdAt).toLocaleTimeString()}
                        </time>
                    </div>
                    <div className="chat-bubble">{message.message}</div>
                    <div className="chat-footer opacity-50">Delivered</div>
                </div>
            ) : (
                // Message from the sender (current user)
                <div className="chat chat-end">
                    <div className="chat-image avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Sender Avatar"
                                src={authState?.profilePhoto || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}
                            />
                        </div>
                    </div>
                    <div className="chat-header">
                        <time className="text-xs opacity-50">
                            {new Date(message.createdAt).toLocaleTimeString()}
                        </time>
                    </div>
                    <div className="chat-bubble">{message.message}</div>
                    <div className="chat-footer opacity-50">
                        Seen at {new Date(message.updatedAt).toLocaleTimeString()}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Message;

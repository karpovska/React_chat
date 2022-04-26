import React from 'react';
import Search from './Search';
import ChatList from './ChatList';
import ChatTitle from './ChatTitle';
import MessageList from './MessageList';
import ChatInput from './ChatInput';

function Container() {
    return (
        <div id="chat-container">
            <Search />
            <ChatList />
            <ChatTitle />
            <MessageList />
            <ChatInput />
        </div>
    );
}

export default Container;
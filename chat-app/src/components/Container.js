import React from 'react';
import Search from './Search';
import ChatList from './ChatList';
import ChatTitle from './ChatTitle';

function Container() {
    return (
        <div id="chat-container">
            <Search />
            <ChatList />
            <ChatTitle />
        </div>
    );
}

export default Container;
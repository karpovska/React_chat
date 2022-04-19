import React from 'react';
import Search from './Search';
import ChatList from './ChatList';

function Container() {
    return (
        <div id="chat-container">
            <Search />
            <ChatList />
        </div>
    );
}

export default Container;
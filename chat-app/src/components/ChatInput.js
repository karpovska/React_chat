import React from "react";

function ChatInput() {
    return (
        <div id="chat-form">            
            <input type="text" placeholder="type a message" />
            <img src={require("../images/icon-sent.png")} alt="Add Attachment" />
        </div>
    )
}

export default ChatInput;
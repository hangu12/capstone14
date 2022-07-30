import React, { useState, useEffect } from 'react';

export const ChatMessage = (props) => {
  console.log("ChatMessage rendering", props);
  // const [wish, setWish] = useState(false);
  // const [item, setItem] = useState(null);

  const meClass = () => props.me ? "me" : ""


  return (
    <li className={`chat-message-wrap ${meClass()}`}>
      <div className="chat-message">
        <div className="fl">
          <p>{ props.user }</p>
          <p className="desc sm">{ props.created_at}</p>
        </div>
        <div className="content">
          <p>{ props.content}</p>
        </div>
      </div>
    </li>   
  );
}

export default ChatMessage;

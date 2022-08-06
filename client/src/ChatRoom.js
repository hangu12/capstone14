import React, { useState, useEffect } from 'react';
import ChatMessage from "./ChatMessage";
import Utils from "./utils";

export const ChatRoom = (props) => {
  const [messages, setMessages] = useState(null);
  const [curMessage, setCurMessage] = useState('');

  useEffect(() => {

    setMessages([
      {
        user: 'hangu',
        me: true,
        content: "Hello, I'm interested in your trek bike",
        created_at: '2022-07-30 2:00 pm'
      },
      {
        user: 'baljit',
        content: "Sure, it's available.",
        created_at: '2022-07-30 2:10 pm'
      },
      {
        user: 'hangu',
        me: true,
        content: "Okay, can we meet today?",
        created_at: '2022-07-30 2:20 pm'
      }
    ])


    return () => {
      console.log("ChatRoom unmounted");
    }
  }, [])

  const loadMessages = () => {
    console.log("loadMessages");
  }

  const onEnterKeyUp = (e) => {
    e.preventDefault();
    if (e.key == "Enter"){
      setMessages([...messages, {
        user: props.username,
        me: true,
        content: curMessage,
        created_at: Utils.now()
      }])
      setCurMessage('');
    }
    
  }

  return (
    <div className="chatroom">
      <div className="chatroom-info">
        Baljit
      </div>
      <div className="controls">
        <div className="btn-load-wrap"> 
          <button 
            className="control btn-load"
            onClick={ loadMessages }>
              Load more messages
          </button>
        </div>
      </div>
      <ul className="messages">
      {
        messages && messages.map((msg, idx) => (
          <ChatMessage 
            key={idx}
            {...msg}
          />
        ))
      }
      </ul>
      <div className="controls">
        <div className="type-wrap">
          <input
            type="text"
            autoFocus
            className="control"
            value={ curMessage }
            onChange={ (e)=> (setCurMessage(e.target.value)) }
            onKeyUp={ onEnterKeyUp }
            placeholder={ 'Type a message' }
          />
        </div>
      </div>
    </div>   
  );
}

export default ChatRoom;

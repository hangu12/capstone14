import React, { useState, useCallback, useEffect } from 'react';
import useWebSocket, { ReadyState } from 'react-use-websocket';

import ChatMessage from "./ChatMessage";
import Utils from "./utils";
import LoginCtl from "./login_ctl";
import { WS_HOST } from "./conf";

export const ChatRoom = (props) => {

  let roomId = '';
  let myname = '';
  const user = LoginCtl.getUser();
  if (user){
    roomId = '090';
    // roomId = user._id;
    myname = user.username;
  }

  const [socketUrl, setSocketUrl] = useState(WS_HOST);
  const [messages, setMessages] = useState([]);

  const { sendJsonMessage, lastMessage, readyState } = useWebSocket(socketUrl);

  useEffect(() => {
    if (lastMessage !== null) {
      const json = JSON.parse(lastMessage.data);
      if (json.type == 'init'){
        return;
      }
      const { username, msg } = json;

      setMessages((prev) => {
        return prev.concat({
          user: username,
          me: (username == myname),
          content: msg,
          created_at: Utils.now()
        })
      });
    }
  }, [lastMessage, setMessages, myname]);

  const handleSendMessage = useCallback((curMessage) => {
    sendJsonMessage({ roomId: roomId, username: myname, msg: curMessage })
  }, [curMessage]);

  const handleInitialMessage = useCallback(() => {
    sendJsonMessage({ roomId: roomId, type: 'init' })
  }, [roomId]);

  const connectionStatus = {
    [ReadyState.CONNECTING]: 'Connecting',
    [ReadyState.OPEN]: 'Open',
    [ReadyState.CLOSING]: 'Closing',
    [ReadyState.CLOSED]: 'Closed',
    [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
  }[readyState];

  const [curMessage, setCurMessage] = useState('');

  useEffect(() => {
    handleInitialMessage();
  }, [roomId] )
  useEffect(() => {

    // setMessages([
    //   {
    //     user: 'hangu',
    //     me: true,
    //     content: "Hello, I'm interested in your trek bike",
    //     created_at: '2022-07-30 2:00 pm'
    //   },
    //   {
    //     user: 'baljit',
    //     content: "Sure, it's available.",
    //     created_at: '2022-07-30 2:10 pm'
    //   },
    //   {
    //     user: 'hangu',
    //     me: true,
    //     content: "Okay, can we meet today?",
    //     created_at: '2022-07-30 2:20 pm'
    //   }
    // ])

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
      handleSendMessage(curMessage);
      setCurMessage('');
    }
    
  }

  return (
    <div className="chatroom">
      <div className="chatroom-info">
        Baljit
      </div>
      <div className="controls">
        {/*
        <div className="btn-load-wrap"> 
          <button 
            className="control btn-load"
            onClick={ loadMessages }>
              Load more messages
          </button>
        </div>
         */}
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

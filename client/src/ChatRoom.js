import React, { useState, useCallback, useEffect } from 'react';
import useWebSocket, { ReadyState } from 'react-use-websocket';
import { Link, useParams, useSearchParams } from "react-router-dom";

import ChatMessage from "./ChatMessage";
import Utils from "./utils";
import LoginCtl from "./login_ctl";
import { WS_HOST } from "./conf";
import API from "./api";
import { API_BASE, CATEGORIES, CATEGORY_MAP } from "./conf";

export const ChatRoom = () => {
  const { userId } = useParams();  // chat partner id

  let myId = '';
  let myName = '';
  const user = LoginCtl.getUser();
  if (user){
    myId = user._id;
    myName = user.username;
  }

  const [socketUrl, setSocketUrl] = useState(WS_HOST);
  const [partnerName, setPartnerName] = useState(null);
  const [roomId, setRoomId] = useState(null);
  const [messages, setMessages] = useState([]);

  const { sendJsonMessage, lastMessage, readyState } = useWebSocket(socketUrl);

  useEffect(() => {
    let url = `${API_BASE}/chatrooms/${userId}`;
    API.get(url)
    .then((data) => {
      
      setRoomId(data.roomId);
      const partnerName = data.participants.filter(p => p.username != myName)[0].username;
      setPartnerName(partnerName);
      
      setMessages(data.messages.map(m => { 
        return {
          ...m,
          ...{ me: (m.userId == myId) }
        }
      }));

      handleInitialMessage(data.roomId);
    });
  
    return () => {
    }
  }, [])

  useEffect(() => {
    if (lastMessage !== null) {
      const json = JSON.parse(lastMessage.data);
      if (json.type == 'init'){
        console.log("got lastMessagelastMessage init ");
        return;
      }
      console.log("got lastMessagelastMessage", json);
      const { userId, userName, content } = json;

      setMessages((prev) => {
        return prev.concat({
          userName: userName,
          me: (userId == myId),
          content: content,
          createdAt: Utils.now()
        })
      });
    }
  }, [lastMessage, setMessages, myId, myName]);

  const handleSendMessage = useCallback((curMessage) => {
    sendJsonMessage({ roomId: roomId, userId: myId, userName: myName, content: curMessage })
  }, [roomId, curMessage]);

  const handleInitialMessage = useCallback((roomId) => {
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


  const createMessage = (curMessage) => {
    console.log("createMessage");

    const url = `${API_BASE}/chatrooms/${roomId}`;
    API.post(url, { roomId: roomId, userId: myId, userName: myName, content: curMessage })
    .then((data) => {
      if (data.error){
        console.log("errr", data.error);
        return;
      }

      console.log("dataaaa", data);
    });
  }

  const onEnterKeyUp = (e) => {
    e.preventDefault();
    if (e.key == "Enter"){
      handleSendMessage(curMessage);
      createMessage(curMessage);
      setCurMessage('');
    }
    
  }

  return (
    <div className="chatroom">
      <div className="chatroom-info">
        { partnerName }
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

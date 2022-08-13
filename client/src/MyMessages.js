import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import LoginCtl from './login_ctl';
import ItemImage from "./ItemImage";
import API from "./api";
import { API_BASE, CATEGORIES, CATEGORY_MAP } from "./conf";
import Utils from "./utils";

export const MyMessages = () => {
  LoginCtl.loginRequired();
  let myId = '';
  let myName = '';
  const user = LoginCtl.getUser();
  if (user){
    myId = user._id;
    myName = user.username;
  }

  const [simpleItems, setSimpleItems] = useState([]);

  useEffect(()=>{
    let url = `${API_BASE}/chatrooms`;
    API.get(url)
    .then((data) => {
      console.log("datadata", data);
      setSimpleItems(data.map(r => {
        let partnerId;
        if (r.userAId == myId){
          partnerId = r.userBId
        }else{
          partnerId = r.userAId
        }
        const partnerName = r.participants.filter(p => p.username != myName)[0].username;

        return {
          ...r,
          ...{ 
            partnerId: partnerId, 
            partnerName: partnerName 
          }
        }
        
      }));
    });
  },[])

  return (
    <div className="wrapper">
      <main>
        <div className="my-items">  
          <h1>My Messages</h1>
          <ul className="">
          {
            simpleItems.map((room, idx) => (
              <li key={idx} className="my-item item">
                <Link to={ `/chatrooms/${room.partnerId}` }>
                  <div className="fl">
                    <div className="">
                      <h3>{ room.partnerName }</h3>
                      <div className="desc sm">
                        <p>{ Utils.elipsised(room.description, 50)}</p>
                      </div>
                    </div>    
                  </div>
                </Link>
              </li>
            ))
          }
          </ul>
        </div>   
      </main>
    </div>
  );
}

export default MyMessages;


    
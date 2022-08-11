import React from "react";
import { ContactData } from "../../data/data";
import { useParams } from "react-router-dom";
import Messages from "./Messages";
import SendMessage from "./SendMessage";
import "./rightInfo.css";

function RightInfo() {
  const { id } = useParams();
  const { name, profilImg, messages } = ContactData[id - 1];
  return (
    <div className="right-info">
      <header>
        <div className="profil-img">
          <img src={profilImg} alt="" width={40} height={40} />
        </div>
        <div className="profil-name">
          <h3>{name}</h3>
          <p>Online</p>
        </div>
      </header>
      <Messages data={id} />
      <SendMessage messages={messages} id={id} />
    </div>
  );
}

export default RightInfo;

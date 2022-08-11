import React, { useState } from "react";
import { BiSend } from "react-icons/bi";
import "./sendMessage.css";
import { ContactData } from "../../data/data";

function SendMessage({ id }) {
  const [message, setMessage] = useState("");
  const [sendMessage, sendSetMessage] = useState(ContactData);

  const sendMessages = () => {
    sendSetMessage(
      sendMessage[id - 1].messages.push({
        message: message,
        id: 5,
        isMessage: false,
      })
    );
    console.log(
      sendMessage[id - 1].messages.push({
        message: message,
        id: 1,
        isMessage: false,
      })
    );
    setMessage("");
  };
  const MessaheInput = (e) => {
    setMessage(e.target.value);
  };
  return (
    <div className="send-message">
      <div className="send-message-left">
        <div className="send-file">
          <i className="fas fa-paperclip"></i>
        </div>
        <input
          type="text"
          placeholder="Message"
          value={message}
          onChange={MessaheInput}
        />
      </div>
      <button className="send-btn" type="button" onClick={sendMessages}>
        <BiSend />
      </button>
    </div>
  );
}

export default SendMessage;

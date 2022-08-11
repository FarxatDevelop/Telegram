import React, { useState } from "react";
import { ContactData } from "../../data/data";
import "./messages.css";

function Messages(props) {
  const { data } = props;
  const [Data] = useState(ContactData);
  return (
    <main>
      {Data[data - 1].messages.map((item, index) => {
        return (
          <div key={index} className={item.isMessage ? "ME" : "TO"}>
            <h4 className={item.isMessage ? "me" : "to"} key={item.id}>
              {item.message}
            </h4>
          </div>
        );
      })}
    </main>
  );
}

export default Messages;

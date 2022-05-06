import "./Message.sass";
import React, { useEffect, useState } from "react";

function MessageItem({ isReceived, msg }) {
  return isReceived ? (
    <div class="row message-body">
      <div class="col-sm-12 message-main-receiver">
        <div class="receiver px-3">
          <div class="message-text">{msg}</div>
          <span class="message-time pull-right">Sun</span>
        </div>
      </div>
    </div>
  ) : (
    <div class="row message-body">
      <div class="col-sm-12 message-main-sender">
        <div class="sender">
          <div class="message-text">{msg}</div>
          <span class="message-time pull-right">Sun</span>
        </div>
      </div>
    </div>
  );
}

function Message() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // get all messages and setMessages constant

    // Here is a dummy messages array
    setMessages([
      {
        isReceived: true,
        msg: "Hello! What a pleasure to help you! What can I do for you?",
      },
      {
        isReceived: false,
        msg: "Hi! I would like to know why my wi-fi is not working anymore?",
      },
      {
        isReceived: true,
        msg: "Mmm...I guess It's due to Wheather conditions. Please wait an hour or two.",
      },
      {
        isReceived: false,
        msg: "Alright, I will wait until it returns to normal",
      },
    ]);
  }, []);
  // --------------------------- VARIABLES ------------------------

  // --------------------------- FUNCTIONS ------------------------

  // ----------------------------- VIEW ---------------------------
  return (
    <div class="row message" id="conversation">
      <div class="row message-previous">
        <div class="col-sm-12 previous">
          <a href="plop">
            Show Previous Message!
          </a>
        </div>
      </div>

      {messages.map(({ msg, isReceived }) => (
        <MessageItem isReceived={isReceived} msg={msg} />
      ))}
    </div>
  );
}

export default Message;

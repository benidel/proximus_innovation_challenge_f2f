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

function Message({messages}) {

  console.log(messages);
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

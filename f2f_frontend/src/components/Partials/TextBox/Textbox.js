import './TextBox.sass';
import React, { useState } from 'react';
import axios from 'axios';



function TextBox({setMessages, messages}){

  const [inputVal, setInputVal ] = useState('')
    
    const onChangeInput = (e) => {
        setInputVal(e.target.value);
    }

    const handleSend =  () => {
      setMessages({msg: inputVal, isReceived: false});
      setInputVal('');
      axios.post('https://a891-81-164-84-191.eu.ngrok.io', {
      content: inputVal
    }, {headers: {'Content-Type': 'application/'}})
    .then(({data}) => setMessages({msg: data.message, isReceived: true}))
    .catch(err => console.log(err.response.status));}
    // --------------------------- VARIABLES ------------------------


    // --------------------------- FUNCTIONS ------------------------


    // ----------------------------- VIEW ---------------------------
    return(
        <div class="row reply">
          <div class="col-sm-10 col-xs-10 reply-main">
            <textarea value={inputVal} onChange={onChangeInput} class="form-control" placeholder="Type a message" rows="1" id="comment"></textarea>
          </div>
          <div class="col-sm-1 col-xs-1 reply-recording text-light fs-1">
            <ion-icon color="white" name="microphone"></ion-icon>
          </div>
          <div class="col-sm-1 col-xs-1 reply-send text-light fs-1">
            <ion-icon onClick={handleSend} name="send"></ion-icon>
          </div>
        </div>
    );
}

export default TextBox;
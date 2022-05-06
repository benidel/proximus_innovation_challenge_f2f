import './Content.sass';
import React, { useState } from 'react';
import Header from '../Partials/Header/Header';
import Message from '../Partials/Message/Message';
import TextBox from '../Partials/TextBox/Textbox';

function Content(){
    const [messages, setMessages] = useState([{msg: 'Hello Mr. Alvarez, we are back were we left. It seems you have a problem with your wifi', isReceived: true}]);

    const handleAddMsg = (msg) => {
        setMessages(prevState => ([...prevState, msg]));
    }
    // --------------------------- FUNCTIONS ------------------------

    //-------------------------- DISPLAY -------------------------
    return(
        <div class="col-sm-8 conversation">
            <div className="content">
                <Header />
                <Message messages={messages} />
                <TextBox setMessages={handleAddMsg} messages={messages} />
            </div>
        </div>
    );
}

export default Content;
import './Content.sass';
import Header from '../Partials/Header/Header';
import Message from '../Partials/Message/Message';
import TextBox from '../Partials/TextBox/Textbox';

function Content(){
    
    // --------------------------- FUNCTIONS ------------------------

    //-------------------------- DISPLAY -------------------------
    return(
        <div class="col-sm-8 conversation">
            <div className="content">
                <Header />
                <Message />
                <TextBox />
            </div>
        </div>
    );
}

export default Content;
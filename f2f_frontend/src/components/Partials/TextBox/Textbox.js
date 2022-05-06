import './TextBox.sass';


function TextBox(){
    // --------------------------- VARIABLES ------------------------


    // --------------------------- FUNCTIONS ------------------------


    // ----------------------------- VIEW ---------------------------
    return(
        <div class="row reply">
          <div class="col-sm-10 col-xs-10 reply-main">
            <textarea class="form-control" placeholder="Type a message" rows="1" id="comment"></textarea>
          </div>
          <div class="col-sm-1 col-xs-1 reply-recording text-light fs-1">
            <ion-icon color="white" name="microphone"></ion-icon>
          </div>
          <div class="col-sm-1 col-xs-1 reply-send text-light fs-1">
            <ion-icon name="send"></ion-icon>
          </div>
        </div>
    );
}

export default TextBox;
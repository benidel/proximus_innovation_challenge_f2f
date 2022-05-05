import './TextBox.sass';


function TextBox(){
    // --------------------------- VARIABLES ------------------------


    // --------------------------- FUNCTIONS ------------------------


    // ----------------------------- VIEW ---------------------------
    return(
        <div class="row reply">
          <div class="col-sm-1 col-xs-1 reply-emojis">
            <i class="fa fa-smile-o fa-2x"></i>
          </div>
          <div class="col-sm-9 col-xs-9 reply-main">
            <textarea class="form-control" placeholder="Type a message" rows="1" id="comment"></textarea>
          </div>
          <div class="col-sm-1 col-xs-1 reply-recording">
            <i class="fa fa-microphone fa-2x" aria-hidden="true"></i>
            
          </div>
          <div class="col-sm-1 col-xs-1 reply-send">
          <i class="fa-solid fa-angle-right fa-2x"></i>
          </div>
        </div>
    );
}

export default TextBox;
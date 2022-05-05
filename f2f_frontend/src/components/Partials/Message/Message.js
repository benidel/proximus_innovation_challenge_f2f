import './Message.sass';

function Message(){
    // --------------------------- VARIABLES ------------------------


    // --------------------------- FUNCTIONS ------------------------


    // ----------------------------- VIEW ---------------------------
    return(
        
        <div class="row message" id="conversation">
          <div class="row message-previous">
            <div class="col-sm-12 previous">
              <a onclick="previous(this)" id="ankitjain28" name="20">
              Show Previous Message!
              </a>
            </div>
          </div>
  
  
          
          <div class="row message-body">
            <div class="col-sm-12 message-main-receiver">
              <div class="receiver">
                <div class="message-text">
                 Hi, what are you doing?!
                </div>
                <span class="message-time pull-right">
                  Sun
                </span>
              </div>
            </div>
          </div>
  
          <div class="row message-body">
            <div class="col-sm-12 message-main-sender">
              <div class="sender">
                <div class="message-text">
                  I am doing nothing man!
                </div>
                <span class="message-time pull-right">
                  Sun
                </span>
              </div>
            </div>
          </div>
        </div>
    );
}

export default Message;
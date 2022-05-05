import './Header.sass';


function Header(){
    // --------------------------- VARIABLES ------------------------


    // --------------------------- FUNCTIONS ------------------------


    // ----------------------------- VIEW ---------------------------
    return(
      <div class="row heading">
        <div class="col-sm-2 col-md-1 col-xs-3 heading-avatar">
          <div class="heading-avatar-icon">
            <img src="./img/BOT.png"/>
          </div>
        </div>
        <div class="col-sm-8 col-xs-7 heading-name">
          <a class="heading-name-meta fw-bold">Helpus
          </a>
          <span class="heading-online">Online</span>
        </div>
        <div class="col-sm-1 col-xs-1  heading-dot pull-right">
          <i class="fa-solid fa-xmark pull-right" aria-hidden="true"></i>
        </div>
      </div>
    );
}

export default Header;
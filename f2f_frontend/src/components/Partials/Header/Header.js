import './Header.sass';


function Header(){
    // --------------------------- VARIABLES ------------------------




    // --------------------------- FUNCTIONS ------------------------


    // ----------------------------- VIEW ---------------------------
    return(
      <div class="row heading mt-3">
        <div class="col-sm-2 col-md-1 col-xs-3 heading-avatar">
          <div class="heading-avatar-icon">
            <img src="./img/BOT.png" class='img-fluid' alt='logo'/>
          </div>
        </div>
        <div class="col-sm-8 col-xs-7 heading-name ms-3">
          <h1>Helpus</h1>
          <span class="heading-online">Online</span>
        </div>
      </div>
    );
}

export default Header;
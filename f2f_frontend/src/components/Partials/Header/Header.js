import './Header.sass';


function Header(){
    // --------------------------- VARIABLES ------------------------




    // --------------------------- FUNCTIONS ------------------------


    // ----------------------------- VIEW ---------------------------
    return(
      <div class="row heading">
        <div class="col-sm-2 col-md-1 col-xs-3 heading-avatar">
          <div class="heading-avatar-icon">
            <img src="./img/BOT.png" class='img-fluid'/>
          </div>
        </div>
        <div class="col-sm-8 col-xs-7 heading-name">
          <a class="heading-name-meta fw-bold fs-1">Helpus
          </a>
          <span class="heading-online">Online</span>
        </div>
        <div class="col-sm-1 col-xs-1  heading-dot pull-right">
        <a href="https://www.proximus.be/fr/id_personal/particuliers.html?v1=paidsearch&v3=google&v4=brand&v5=&v6=proximus&v7=res-brand-proximus&ds_rl=1286644&gclid=CjwKCAjw682TBhATEiwA9crl36BJJqozYS17orgcCiD8rXFxox2UFp65woBex5BivBvgQ7RJuXWehBoCbVoQAvD_BwE&gclsrc=aw.ds"><i class="fa-solid fa-xmark fa-2x pull-right" aria-hidden="true"></i></a>
        </div>
      </div>
    );
}

export default Header;
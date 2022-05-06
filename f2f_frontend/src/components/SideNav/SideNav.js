import './SideNav.sass';


function SideNav() {
    // --------------------------- VARIABLES ------------------------


    // --------------------------- FUNCTIONS ------------------------

    // ----------------------------- VIEW ---------------------------
    return (
            <div class="col-sm-4 side">
                <div class="side-one mx-auto my-auto">
                    {/* <!-- SIDEBAR ENTETE --> */}
                    <div class="row headings">
                        <h2>Assistance</h2>
                        <p class="text-center pt-2">Si Helpus n'as pas pu t'aider, pense à consulter les onglets ci-dessous !</p>
                    </div>
                    
                    {/* <!-- SIDEBAR CONTENT --> */}
                    <div class="row usercard mt-3">
                        <div class="row user">
                            <div className="col-8 mt-3">
                                <img class="img-fluid avatar" src="img/sergio.jpg" alt="logo" />
                            </div>
                        </div>
                        <div className='row profil text-center'>
                            <h3>Sergio Alvarez</h3>
                            <p>Compte Business</p>
                            <button href="https://www.proximus.be/smoothAccess/fr/Personal/services/My-Bill__/" class="btn">My Proximus</button>
                            <button href="https://www.proximus.be/login/fr/?ru=https://www.proximus.be/myproximus/fr/Personal/services/My-Account__/?site%3DsmoothAccess" class="btn">Mes factures</button>
                        </div>
                    </div>

                    <div class="row navigation mt-4">

                        <ul>

                            <li class="list active" onMouseEnter={
                                () => {
                                    let bubble = document.querySelector('#indicator');
                                    let rightcorner = document.querySelector('#rightcorner');
                                    let leftcorner = document.querySelector('#leftcorner');
                                    bubble.style.transform = "translateX(-220px)"
                                    rightcorner.style.transform = "translateX(-205px)"
                                    leftcorner.style.transform = "translateX(-205px)"
                                }}>
                                <a href="https://www.proximus.be/support/fr/id_sfaqr_mypx_global/particuliers/support/myproximus/myproximus/site-web-myproximus/questions-frequentes-sur-myproximus.html">
                                    <span class="icon">
                                        <ion-icon name="help"></ion-icon>
                                    </span>
                                    <span class="text">FAQ</span>
                                </a>
                            </li>

                            <li class="list" onMouseEnter={
                                () => {
                                    let bubble = document.querySelector('#indicator');
                                    let rightcorner = document.querySelector('#rightcorner');
                                    let leftcorner = document.querySelector('#leftcorner');
                                    bubble.style.transform = "translateX(-120px)"
                                    rightcorner.style.transform = "translateX(-105px)"
                                    leftcorner.style.transform = "translateX(-105px)"
                                }}>
                                <a href="https://fr.forum.proximus.be/">
                                    <span class="icon">
                                        <ion-icon name="contacts"></ion-icon>
                                    </span>
                                    <span class="text">Forum</span>
                                </a>
                            </li>

                            <li class="list" onMouseEnter={
                                () => {
                                    let bubble = document.querySelector('#indicator');
                                    let rightcorner = document.querySelector('#rightcorner');
                                    let leftcorner = document.querySelector('#leftcorner');
                                    bubble.style.transform = "translateX(-15px)"
                                    rightcorner.style.transform = "translateX(0px)"
                                    leftcorner.style.transform = "translateX(0px)"
                                }}>
                                <a href="https://www.proximus.be/fr/id_webshop/particuliers/r-orphans/webshop.html">
                                    <span class="icon">
                                        <ion-icon name="pricetag"></ion-icon>
                                    </span>
                                    <span class="text">Shop</span>
                                </a>
                            </li>

                            <div className="indicator" id="indicator">
                            </div>
                            <div className="indicator-right" id="rightcorner"></div>
                            <div className="indicator-left" id="leftcorner"></div>
                        </ul>
                    </div>

                    <div class="copyright text-center">
                        <p class="pt-2">Copyright © F2F TEAM | PXSIC2022</p>
                    </div>
                </div>
            </div>
    );
}

export default SideNav;
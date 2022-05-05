import './SideNav.sass';


function SideNav() {
    // --------------------------- VARIABLES ------------------------


    // --------------------------- FUNCTIONS ------------------------


    // ----------------------------- VIEW ---------------------------
    return (
            <div class="col-sm-4 side">
                <div class="side-one mx-auto my-auto">
                    {/* <!-- SIDEBAR ENTETE --> */}
                    <div class="row heading">
                        <h2>Assistance</h2>
                    </div>

                    {/* <!-- SIDEBAR SEARCHBAR --> */}
                    <div class="row searchBox">
                        <div class="col-sm-12 searchBox-inner">
                            <div class="form-group has-feedback">
                                <input id="searchText" type="text" class="form-control" name="searchText" placeholder="Search"/>
                                    <span class="glyphicon glyphicon-search form-control-feedback"></span>
                            </div>
                        </div>
                    </div>

                    {/* <!-- SIDEBAR CONTENT --> */}
                    <div class="row sideBar">
                        {/* FAQ */}
                        <div class="row sideBar-body">
                            <div class="col-sm-9 col-xs-9 sideBar-main">
                                <div class="row">
                                    <div class="sideBar-name">
                                        <a class="name-meta">FAQ</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* FORUM */}
                        <div class="row sideBar-body">
                            <div class="col-sm-9 col-xs-9 sideBar-main">
                                <div class="row">
                                    <div class="sideBar-name">
                                        <a class="name-meta">FORUM</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* SHOP */}
                        <div class="row sideBar-body">
                            <div class="col-sm-9 col-xs-9 sideBar-main">
                                <div class="row">
                                    <div class="sideBar-name">
                                        <a class="name-meta">SHOP</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default SideNav;
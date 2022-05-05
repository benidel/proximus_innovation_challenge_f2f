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
                        <div class="row sideBar-body">
                            <div class="col-sm-3 col-xs-3 sideBar-avatar">

                            </div>
                            <div class="col-sm-9 col-xs-9 sideBar-main">
                                <div class="row">
                                    <div class="col-sm-8 col-xs-8 sideBar-name">
                                        <span class="name-meta">John Doe
                                        </span>
                                    </div>
                                    <div class="col-sm-4 col-xs-4 pull-right sideBar-time">
                                        <span class="time-meta pull-right">18:18
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row sideBar-body">
                            <div class="col-sm-3 col-xs-3 sideBar-avatar">

                            </div>
                            <div class="col-sm-9 col-xs-9 sideBar-main">
                                <div class="row">
                                    <div class="col-sm-8 col-xs-8 sideBar-name">
                                        <span class="name-meta">John Doe
                                        </span>
                                    </div>
                                    <div class="col-sm-4 col-xs-4 pull-right sideBar-time">
                                        <span class="time-meta pull-right">18:18
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row sideBar-body">
                            <div class="col-sm-3 col-xs-3 sideBar-avatar">

                            </div>
                            <div class="col-sm-9 col-xs-9 sideBar-main">
                                <div class="row">
                                    <div class="col-sm-8 col-xs-8 sideBar-name">
                                        <span class="name-meta">John Doe
                                        </span>
                                    </div>
                                    <div class="col-sm-4 col-xs-4 pull-right sideBar-time">
                                        <span class="time-meta pull-right">18:18
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- SIDEBAR IN THE SIDEBAR MSG -->
                <div class="side-two">
                    <div class="row newMessage-heading">
                        <div class="row newMessage-main">
                            <div class="col-sm-2 col-xs-2 newMessage-back">
                                <i class="fa fa-arrow-left" aria-hidden="true"></i>
                            </div>
                            <div class="col-sm-10 col-xs-10 newMessage-title">
                                FAQ
                            </div>
                        </div>
                    </div>

                    <div class="row composeBox">
                        <div class="col-sm-12 composeBox-inner">
                            <div class="form-group has-feedback">
                                <input id="composeText" type="text" class="form-control" name="searchText" placeholder="Search People"/>
                                    <span class="glyphicon glyphicon-search form-control-feedback"></span>
                            </div>
                        </div>
                    </div>

                    <div class="row compose-sideBar">
                        <div class="row sideBar-body">
                            <div class="col-sm-3 col-xs-3 sideBar-avatar">

                            </div>
                            <div class="col-sm-9 col-xs-9 sideBar-main">
                                <div class="row">
                                    <div class="col-sm-8 col-xs-8 sideBar-name">
                                        <span class="name-meta">Wifi Network
                                        </span>
                                    </div>
                                    <div class="col-sm-4 col-xs-4 pull-right sideBar-time">
                                        <span class="time-meta pull-right">18:18
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row sideBar-body">
                            <div class="col-sm-3 col-xs-3 sideBar-avatar">

                            </div>
                            <div class="col-sm-9 col-xs-9 sideBar-main">
                                <div class="row">
                                    <div class="col-sm-8 col-xs-8 sideBar-name">
                                        <span class="name-meta">John Doe
                                        </span>
                                    </div>
                                    <div class="col-sm-4 col-xs-4 pull-right sideBar-time">
                                        <span class="time-meta pull-right">18:18
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row sideBar-body">
                            <div class="col-sm-3 col-xs-3 sideBar-avatar">

                            </div>
                            <div class="col-sm-9 col-xs-9 sideBar-main">
                                <div class="row">
                                    <div class="col-sm-8 col-xs-8 sideBar-name">
                                        <span class="name-meta">John Doe
                                        </span>
                                    </div>
                                    <div class="col-sm-4 col-xs-4 pull-right sideBar-time">
                                        <span class="time-meta pull-right">18:18
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row sideBar-body">
                            <div class="col-sm-3 col-xs-3 sideBar-avatar">

                            </div>
                            <div class="col-sm-9 col-xs-9 sideBar-main">
                                <div class="row">
                                    <div class="col-sm-8 col-xs-8 sideBar-name">
                                        <span class="name-meta">John Doe
                                        </span>
                                    </div>
                                    <div class="col-sm-4 col-xs-4 pull-right sideBar-time">
                                        <span class="time-meta pull-right">18:18
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row sideBar-body">
                            <div class="col-sm-3 col-xs-3 sideBar-avatar">

                            </div>
                            <div class="col-sm-9 col-xs-9 sideBar-main">
                                <div class="row">
                                    <div class="col-sm-8 col-xs-8 sideBar-name">
                                        <span class="name-meta">John Doe
                                        </span>
                                    </div>
                                    <div class="col-sm-4 col-xs-4 pull-right sideBar-time">
                                        <span class="time-meta pull-right">18:18
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row sideBar-body">
                            <div class="col-sm-3 col-xs-3 sideBar-avatar">

                            </div>
                            <div class="col-sm-9 col-xs-9 sideBar-main">
                                <div class="row">
                                    <div class="col-sm-8 col-xs-8 sideBar-name">
                                        <span class="name-meta">John Doe
                                        </span>
                                    </div>
                                    <div class="col-sm-4 col-xs-4 pull-right sideBar-time">
                                        <span class="time-meta pull-right">18:18
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row sideBar-body">
                            <div class="col-sm-3 col-xs-3 sideBar-avatar">

                            </div>
                            <div class="col-sm-9 col-xs-9 sideBar-main">
                                <div class="row">
                                    <div class="col-sm-8 col-xs-8 sideBar-name">
                                        <span class="name-meta">John Doe
                                        </span>
                                    </div>
                                    <div class="col-sm-4 col-xs-4 pull-right sideBar-time">
                                        <span class="time-meta pull-right">18:18
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row sideBar-body">
                            <div class="col-sm-3 col-xs-3 sideBar-avatar">

                            </div>
                            <div class="col-sm-9 col-xs-9 sideBar-main">
                                <div class="row">
                                    <div class="col-sm-8 col-xs-8 sideBar-name">
                                        <span class="name-meta">John Doe
                                        </span>
                                    </div>
                                    <div class="col-sm-4 col-xs-4 pull-right sideBar-time">
                                        <span class="time-meta pull-right">18:18
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row sideBar-body">
                            <div class="col-sm-3 col-xs-3 sideBar-avatar">

                            </div>
                            <div class="col-sm-9 col-xs-9 sideBar-main">
                                <div class="row">
                                    <div class="col-sm-8 col-xs-8 sideBar-name">
                                        <span class="name-meta">John Doe
                                        </span>
                                    </div>
                                    <div class="col-sm-4 col-xs-4 pull-right sideBar-time">
                                        <span class="time-meta pull-right">18:18
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row sideBar-body">
                            <div class="col-sm-3 col-xs-3 sideBar-avatar">

                            </div>
                            <div class="col-sm-9 col-xs-9 sideBar-main">
                                <div class="row">
                                    <div class="col-sm-8 col-xs-8 sideBar-name">
                                        <span class="name-meta">John Doe
                                        </span>
                                    </div>
                                    <div class="col-sm-4 col-xs-4 pull-right sideBar-time">
                                        <span class="time-meta pull-right">18:18
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
    );
}

export default SideNav;
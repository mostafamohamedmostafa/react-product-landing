


function Nav() {

    return (
        <section>
            <div className="Nav ">
            

                <nav className="navbar fixed-top navbar-light bg-light   navbar-expand-lg bg-body-tertiary ">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Produch Page</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse " id="navbarNav">
                            <ul className="navbar-nav ms-auto p-2">
                                <li className="nav-item  active">
                                    <a className="nav-link  " aria-current="page"  href="#" >Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#Features" >Features</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#Apps"> Apps</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link"  href="#Tracker" >Tracker</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="#Design" >Design</a>
                                </li>


                                <li className="nav-item">
                                    <a className="nav-link " href="#Video" >Video</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link "  href="#Characteristics" >Characteristics</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link "  href="#Pre-Order" >Pre-Order</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

            </div>
        </section>

    );
}

export default Nav;
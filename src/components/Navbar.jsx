
export function Navbar(){
    return (
        <>
        <header>
            <nav class="navbar navbar-dark bg-dark fixed-top">
                <div class="container-fluid">
                    <a class="navbar-brand mb-0 h1" href="/Home">
                        <img
                        class="d-inline-block align-top"
                        src="src/img/logo.png" 
                        width="100" height="60"/>
                    </a>

                    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasNavbarLabel"> Menu </h5>
                            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3" >
                                <li class="nav-item">
                                    <a class="nav-link" href="/Home">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Jogos</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Saldo</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Carteira</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
        </>
    )
}


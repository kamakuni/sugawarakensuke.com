import { FunctionalComponent, h } from "preact";
import { Link } from "preact-router/match";
import "../../style/style.scss";

const Header: FunctionalComponent = () => {
    const toggleNav = () => {
        console.log("clicked");
    };

    return (
        <header className="navbar has-shadow is-spaced is-fixed-top">
            <div className="container">
                <div className="nav-left">
                    <span className="navbar-burger burger" onClick={toggleNav}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </div>
                <div className="nav-right nav-menu" id="nav-menu">
                    <Link className="nav-item" href="/"></Link>
                    <Link className="nav-item" href="/code"></Link>
                    <Link className="nav-item" href="/about"></Link>
                </div>
            </div>
        </header>
    );
};

export default Header;

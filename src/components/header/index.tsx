import { FunctionalComponent, h } from "preact";
import { Link } from "preact-router/match";
import "../../style/style.scss";

const Header: FunctionalComponent = () => {
    const toggleNav = () => {
        console.log("clicked");
    };

    return (
        <header className="navbar has-shadow is-fixed-top">
            <div className="container">
                <div className="navbar-brand">
                    <a className="navbar-item" href="/">
                        <div></div>
                    </a>
                </div>

                <a className="navbar-burger burger" onClick={toggleNav}>
                    <span></span>
                    <span></span>
                    <span></span>
                </a>
                <div className="navbar-menu" id="navbar-menu">
                    <div className="navbar-end">
                        <Link className="navbar-item" href="/">Home</Link>
                        <Link className="navbar-item" href="/code">Code</Link>
                        <Link className="navbar-item" href="/about">About</Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;

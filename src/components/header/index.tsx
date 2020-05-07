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
                <div className="navbar-brand">
                    <a className="navbar-item" href="/">
                        <figure className="image is-64x64 is-square is-hidden-touch"></figure>
                    </a>
                </div>
                <div className="navbar-left">
                    <span className="navbar-burger burger" onClick={toggleNav}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </div>
                <div className="navbar-right navbar-menu" id="navbar-menu">
                    <Link className="navbar-item" href="/">Home</Link>
                    <Link className="navbar-item" href="/code">Code</Link>
                    <Link className="navbar-item" href="/about">About</Link>
                </div>
            </div>
        </header>
    );
};

export default Header;

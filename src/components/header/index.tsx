import { FunctionalComponent, h } from "preact";
import { useState } from "preact/hooks";
import { Link } from "preact-router/match";
import "../../style/style.scss";

const Header: FunctionalComponent = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleNav = () => {
        setIsActive(!isActive);
    };

    return (
        <header className="navbar is-fixed-top">
            <div className="container">
                <div className="navbar-brand">
                    <a className="navbar-item" href="/">
                        <figure class="image is-32x32">
                            <img
                                class="is-rounded"
                                src="/assets/img/face.jpg"
                            />
                        </figure>
                    </a>
                    <a
                        className={
                            "navbar-burger burger " +(isActive ? "is-active" : "")
                        }
                        onClick={toggleNav}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </a>
                </div>

                <div className={"navbar-menu " + (isActive ? "is-active" : "")}>
                    <div className="navbar-end">
                        <Link
                            className="navbar-item"
                            href="/"
                            onClick={toggleNav}
                        >
                            Home
                        </Link>
                        <Link
                            className="navbar-item"
                            href="/code"
                            onClick={toggleNav}
                        >
                            Code
                        </Link>
                        <Link
                            className="navbar-item"
                            href="/about"
                            onClick={toggleNav}
                        >
                            About
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;

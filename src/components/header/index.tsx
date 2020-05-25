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
        <header className="navbar is-fixed-top" style="font-family: '游明朝', YuMincho, 'Hiragino Mincho ProN W3', 'ヒラギノ明朝 ProN W3', 'Hiragino Mincho ProN', 'HG明朝E', 'ＭＳ Ｐ明朝', 'ＭＳ 明朝', serif;">
            <div className="container">
                <div className="navbar-brand">
                    <a className="navbar-item" href="/">
                        <p>菅原健佑の世界</p>
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

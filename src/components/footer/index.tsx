import { FunctionalComponent, h } from "preact";
import { Link } from "preact-router/match";
import "../../style/style.scss";

const Footer: FunctionalComponent = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div class="content has-text-centered"></div>
            </div>
        </footer>
    );
};

export default Footer;

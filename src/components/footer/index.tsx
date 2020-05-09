import { FunctionalComponent, h } from "preact";
import { Link } from "preact-router/match";
import "../../style/style.scss";

const Footer: FunctionalComponent = () => {
    const toggleNav = () => {
        console.log("clicked");
    };

    return (
        <footer className="footer">
            <div className="container">
                <div class="content has-text-centered">
                    <p>Footer</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

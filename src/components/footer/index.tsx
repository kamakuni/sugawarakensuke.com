import { FunctionalComponent, h } from "preact";
import "../../style/style.scss";

export const Footer: FunctionalComponent = () => {
    return (
        <footer className="footer has-background-white">
            <div className="container">
                <div class="content has-text-centered">
                    <span class="icon">
                        <i class="fab fa-github"></i>
                    </span>
                    <span class="icon">
                        <i class="fab fa-twitter"></i>
                    </span>
                    <span class="icon">
                        <i class="fab fa-instagram"></i>
                    </span>
                    <span class="icon">
                        <i class="fab fa-facebook-square"></i>
                    </span>
                </div>
            </div>
        </footer>
    );
};

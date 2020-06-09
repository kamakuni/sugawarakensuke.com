import { FunctionalComponent, h } from "preact";
import "../../style/style.scss";

export const Footer: FunctionalComponent = () => {
    return (
        <footer className="footer has-background-white">
            <div className="container">
                <div class="content has-text-centered">
                    <span class="icon">
                        <i class="fas twitter"></i>
                    </span>
                    <span class="icon">
                        <i class="fas instagram"></i>
                    </span>
                    <span class="icon">
                        <i class="fas facebook-square"></i>
                    </span>
                </div>
            </div>
        </footer>
    );
};

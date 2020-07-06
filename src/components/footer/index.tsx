import { FunctionalComponent, h } from "preact";
import "../../style/style.scss";

interface SnsLinkProps {
    iconClass: string;
    href: string;
}

const SnsLink: FunctionalComponent<SnsLinkProps> = props => {
    return (
        <a href={props.href} >
            <span class="icon px-3">
                <i class={`fab ${props.iconClass}`}></i>
            </span>
        </a>
    );
}

export const Footer: FunctionalComponent = () => {
    return (
        <footer className="footer has-background-white">
            <div className="container">
                <div class="content has-text-centered">
                    <SnsLink
                        href="https://github.com/kamakuni"
                        iconClass="fa-github"
                    />
                    <SnsLink
                        href="https://twitter.com/kamakuni"
                        iconClass="fa-twitter"
                    />
                    <SnsLink
                        href="https://www.instagram.com/kamakuni"
                        iconClass="fa-instagram"
                    />
                </div>
            </div>
        </footer>
    );
};

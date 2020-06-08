import { FunctionalComponent, h } from "preact";
import "../../style/style.scss";

interface TitleProps {
    title: string;
}

export const Title: FunctionalComponent<TitleProps> = props => {
    return (
        <section className="section has-text-centered">
            <p className="is-size-4">{props.title}</p>
        </section>
    );
};

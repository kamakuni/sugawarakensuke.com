import { FunctionalComponent, h, Fragment } from "preact";
import "../../style/style.scss";
import { Title } from "../../components/title";

export const About: FunctionalComponent = () => {
    return (
        <Fragment>
            <Title title="About"></Title>
            <section className="section">
                <figure class="image container is-128x128">
                    <img class="is-rounded" src="/assets/img/face.jpg" />
                </figure>
            </section>
            <section className="section has-text-centered">
                <p>Hello, I'm funny guy.</p>
            </section>
        </Fragment>
    );
};

export default About;

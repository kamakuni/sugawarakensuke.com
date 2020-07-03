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
                <div class="content">
                    <h4>Hello, my name is Kensuke Sugawara.</h4>
                    <p>
                        A software developer in Tokyo. I can speak Japanese 100%
                        fluently.
                    </p>
                </div>
            </section>
        </Fragment>
    );
};

export default About;

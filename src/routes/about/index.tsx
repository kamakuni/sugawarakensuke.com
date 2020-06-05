import { FunctionalComponent, h } from "preact";
import "../../style/style.scss";
import { Title } from "../../components/title";

export const About: FunctionalComponent = () => {
    return (
        <main>
            <Title title="About"></Title>
            <section className="section tiles">
                <figure class="image container is-128x128">
                    <img class="is-rounded" src="/assets/img/face.jpg" />
                </figure>
                <div className="container"></div>
            </section>
        </main>
    );
};

export default About;

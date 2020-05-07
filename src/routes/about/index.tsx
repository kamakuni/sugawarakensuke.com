import { FunctionalComponent, h } from "preact";
import "../../style/style.scss";

const About: FunctionalComponent = () => {
    return (
        <main>
            <section className="hero is-medium">
                <div className="hero-body">
                    <div className="container">
                        <p>About</p>
                    </div>
                </div>
            </section>
            <section className="section tiles">
                <div className="container">
                    <div className="columns">
                        <div className="column">Content1</div>
                        <div className="column">Content2</div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default About;

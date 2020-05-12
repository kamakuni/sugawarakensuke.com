import { FunctionalComponent, h } from "preact";
import "../../style/style.scss";

const Home: FunctionalComponent = () => {
    return (
        <main>
            <section className="hero is-medium">
                <div className="hero-body">
                    <div className="container">
                        <p>I'm Kensuke.</p>
                    </div>
                </div>
            </section>
            <section className="section tiles">
                <div className="container">
                    <div className="columns">
                        <div className="column"></div>
                        <div className="column">Content2</div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;

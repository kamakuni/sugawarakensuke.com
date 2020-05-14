import { FunctionalComponent, h } from "preact";
import "../../style/style.scss";
import AsyncImage from "../../components/asyncimage";

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
            <section className="section">
                <div className="container">
                    <AsyncImage src="/assets/img/home.jpg" />
                </div>
            </section>
            <section className="section tiles">
                <div className="container">
                    <div className="columns">
                        <div className="column">
                            <AsyncImage src="/assets/img/home.jpg" />
                        </div>
                        <div className="column">Content2</div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;

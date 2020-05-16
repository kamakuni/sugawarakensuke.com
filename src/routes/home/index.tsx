import { FunctionalComponent, h } from "preact";
import "../../style/style.scss";
import AsyncImage from "../../components/asyncimage";

const Home: FunctionalComponent = () => {
    return (
        <main>
            <section className="hero is-medium">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns">
                            <div className="column">
                                <p>I'm Kensuke.</p>
                            </div>
                            <div className="column">
                                <AsyncImage src="/assets/img/home.jpg" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;

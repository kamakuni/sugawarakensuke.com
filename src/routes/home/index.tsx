import { FunctionalComponent, h } from "preact";
import "../../style/style.scss";
import AsyncImage from "../../components/asyncimage";

const Home: FunctionalComponent = () => {
    return (
        <main>
            <section className="hero is-medium">
                <div className="hero-body">
                    <p>SUGAWARA KENSUKE</p>
                </div>
            </section>
            <section className="hero is-medium">
                <div className="hero-body is-paddingless">
                    <div className="container">
                        <AsyncImage src="/assets/img/home.jpg" />
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;

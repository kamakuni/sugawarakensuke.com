import { FunctionalComponent, h } from "preact";
import "../../style/style.scss";
import AsyncImage from "../../components/asyncimage";

const Home: FunctionalComponent = () => {
    return (
        <main>
            <section className="section">
                <div className="container">
                    <AsyncImage src="/assets/img/home.jpg" />
                </div>
            </section>
        </main>
    );
};

export default Home;

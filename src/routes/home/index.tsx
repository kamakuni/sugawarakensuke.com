import { Fragment, FunctionalComponent, h } from "preact";
import "../../style/style.scss";
import { AsyncImage } from "../../components/asyncimage";
import { Title } from "../../components/title";

const Home: FunctionalComponent = () => {
    return (
        <Fragment>
            <Title title="Hi, I'm Ken." />
            <section className="hero">
                <div class="columns is-gapless">
                    <div className="column"></div>
                    <div className="column is-7 is-12-mobile">
                        <AsyncImage src="/assets/img/home.jpg" />
                    </div>
                    <div className="column"></div>
                </div>
            </section>
        </Fragment>
    );
};

export default Home;

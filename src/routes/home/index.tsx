import { Fragment, FunctionalComponent, h } from "preact";
import "../../style/style.scss";
import AsyncImage from "../../components/asyncimage";

const Home: FunctionalComponent = () => {
    return (
        <Fragment>
            <section className="hero">
                <div className="hero-body is-paddingless">
                    <AsyncImage src="/assets/img/home.jpg" />
                </div>
            </section>
        </Fragment>
    );
};

export default Home;

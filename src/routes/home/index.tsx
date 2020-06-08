import { Fragment, FunctionalComponent, h } from "preact";
import "../../style/style.scss";
import { AsyncImage } from "../../components/asyncimage";
import { Title } from "../../components/title";

const Home: FunctionalComponent = () => {
    return (
        <Fragment>
            <Title title="sugawarakensuke.com" />
            <section className="hero">
                <div className="hero-body is-paddingless">
                    <AsyncImage src="/assets/img/homewoody.jpg" />
                </div>
            </section>
        </Fragment>
    );
};

export default Home;

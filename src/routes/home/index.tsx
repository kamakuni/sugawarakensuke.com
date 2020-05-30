import { Fragment, FunctionalComponent, h } from "preact";
import "../../style/style.scss";
import AsyncImage from "../../components/asyncimage";

const Home: FunctionalComponent = () => {
    return (
        <Fragment>
            <section className="section has-text-centered">
                <p className="is-size-4">菅原健佑のWEBサイト</p>
            </section>
            <section className="hero">
                <div className="hero-body is-paddingless">
                    <AsyncImage src="/assets/img/home.jpg" />
                </div>
            </section>
        </Fragment>
    );
};

export default Home;

import { Fragment, FunctionalComponent, h } from "preact";
import "../../style/style.scss";
import AsyncImage from "../../components/asyncimage";
import { Title } from "../../components/title";

const Home: FunctionalComponent = () => {
    return (
        <Fragment>
            <Title title="菅原健佑のWEBサイト"></Title>
            <section className="hero">
                <div className="hero-body is-paddingless">
                    <AsyncImage src="/assets/img/home.jpg" />
                </div>
            </section>
        </Fragment>
    );
};

export default Home;

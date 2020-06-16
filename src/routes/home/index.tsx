import { Fragment, FunctionalComponent, h } from "preact";
import "../../style/style.scss";
import { AsyncImage } from "../../components/asyncimage";

const Home: FunctionalComponent = () => {
    return (
        <Fragment>
            <section className="section">
                <div class="columns">
                    <div className="column"></div>
                    <div className="column is-7">
                        <AsyncImage src="/assets/img/homewoody.jpg" />
                    </div>
                    <div className="column"></div>
                </div>
            </section>
        </Fragment>
    );
};

export default Home;

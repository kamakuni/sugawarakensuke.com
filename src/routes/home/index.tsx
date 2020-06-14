import { Fragment, FunctionalComponent, h } from "preact";
import "../../style/style.scss";
import { AsyncImage } from "../../components/asyncimage";

const Home: FunctionalComponent = () => {
    return (
        <Fragment>
            <section className="hero">
                <div className="hero-body">
                    <div class="container px-6">
                        <AsyncImage src="/assets/img/homewoody.jpg" />
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default Home;

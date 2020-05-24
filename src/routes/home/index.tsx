import { Fragment, FunctionalComponent, h } from "preact";
import "../../style/style.scss";
import AsyncImage from "../../components/asyncimage";

const Home: FunctionalComponent = () => {
    return (
        <Fragment>
            <section class="section">
                <p style="font-family: '游明朝', YuMincho, 'Hiragino Mincho ProN W3', 'ヒラギノ明朝 ProN W3', 'Hiragino Mincho ProN', 'HG明朝E', 'ＭＳ Ｐ明朝', 'ＭＳ 明朝', serif;">こんにちは</p>
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

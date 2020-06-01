import { FunctionalComponent, h } from "preact";
import "../../style/style.scss";
import { Title } from "../../components/title";

const Code: FunctionalComponent = () => {
    return (
        <main>
            <Title title="Code"></Title>
            <section className="section tiles">
                <div className="container">
                    <div className="columns">
                        <div className="column">Content1</div>
                        <div className="column">Content2</div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Code;

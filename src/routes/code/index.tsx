import { FunctionalComponent, h, Fragment } from "preact";
import "../../style/style.scss";
import { Title } from "../../components/title";

const Code: FunctionalComponent = () => {
    return (
        <Fragment>
            <Title title="Code"></Title>
            <section className="section tiles">
                <div className="container">
                    <div className="columns">
                        <div className="column">
                            <div class="container">
                                <h4 className="title is-size-4">CHIP-8 Emulator</h4>
                                <div className="contednt">
                                    Virtual machine written in Golang
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <h4 className="title is-size-4">kmcc</h4>
                            <div className="contednt">
                                C language subsets compiler
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default Code;

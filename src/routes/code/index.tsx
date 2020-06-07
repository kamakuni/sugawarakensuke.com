import { FunctionalComponent, h, Fragment } from "preact";
import "../../style/style.scss";
import { Title } from "../../components/title";

interface ContentProps {
    title: string;
    body: string;
    link: string;
}

const Content: FunctionalComponent<ContentProps> = props => {
    return (
        <div class="content is-medium">
            <a className="title is-size-5" href={props.link}>
                <h5>{props.title}</h5>
            </a>
            <p>{props.body}</p>
        </div>
    );
};

const Code: FunctionalComponent = () => {
    return (
        <Fragment>
            <Title title="Code"></Title>
            <section className="section">
                <div className="container">
                    <div className="columns">
                        <div className="column">
                            <Content
                                title="CHIP-8 Emulator"
                                link="https://github.com/kamakuni/chip8"
                                body="Virtual machine written in Golang"
                            />
                        </div>
                        <div className="column">
                            <Content
                                title="kmcc"
                                link="https://github.com/kamakuni/kmcc"
                                body="C language subsets compiler"
                            />
                        </div>
                        <div className="column">
                            <Content
                                title="sugawarakensuke.com"
                                link="https://github.com/kamakuni/sugawarakensuke.com"
                                body="This site with Preact and Bulma"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default Code;

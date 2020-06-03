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
        <div class="container">
            <a className="title is-size-4" href={props.link}>
                {props.title}
            </a>
            <div className="content">
                <p>{props.body}</p>
            </div>
        </div>
    );
};

const Code: FunctionalComponent = () => {
    return (
        <Fragment>
            <Title title="Code"></Title>
            <section className="section tiles">
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
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default Code;

import { FunctionalComponent, h, Fragment } from "preact";
import "../../style/style.scss";
import { Title } from "../../components/title";

interface ContentProps {
    title: string;
    body: string;
    link: string;
    image: string;
}

const Content: FunctionalComponent<ContentProps> = props => {
    return (
        <a href={props.link}>
            <div class="card">
                <div class="card-image">
                    <figure class="image is-2by1">
                        <img src={props.image} alt="Placeholder image" />
                    </figure>
                </div>
                <div class="card-content">
                    <p className="title is-size-5">{props.title}</p>
                    <div class="content">
                        <p>{props.body}</p>
                    </div>
                </div>
            </div>
        </a>
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
                                title="sugawarakensuke.com"
                                link="https://github.com/kamakuni/sugawarakensuke.com"
                                body="This website with Preact and Bulma"
                                image="/assets/img/code/sugawarakensuke.com.jpg"
                            />
                        </div>
                        <div className="column">
                            <Content
                                title="CHIP-8 Emulator"
                                link="https://github.com/kamakuni/chip8"
                                body="A virtual machine for CHIP-8 written in Go"
                                image="/assets/img/code/chip8.jpg"
                            />
                        </div>
                        <div className="column">
                            <Content
                                title="kmcc"
                                link="https://github.com/kamakuni/kmcc"
                                body="A compiler for a subset of C"
                                image="/assets/img/code/kmcc.jpg"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default Code;

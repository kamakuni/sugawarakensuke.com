import { FunctionalComponent, h } from "preact";
import { useState, useEffect } from "preact/hooks";
import { Link } from "preact-router/match";
import "../../style/style.scss";

interface AsyncImageProps {
    src: string;
}

const AsyncImage: FunctionalComponent<AsyncImageProps> = props => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if (!loaded) {
            const img = new Image();
            img.onload = () => {
                setLoaded(true);
            };
            img.onerror = e => {
                console.log(e);
            };
            img.src = props.src;
        }
    });

    return (
        <figure className="image is-2by1">
            {loaded ? <img src={props.src} /> : <div>loading</div>}
        </figure>
    );
};

export default AsyncImage;

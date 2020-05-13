import { FunctionalComponent, h } from "preact";
import { useState, useEffect } from "preact/hooks";
import { Link } from "preact-router/match";
import "../../style/style.scss";

const AsyncImage: FunctionalComponent = () => {
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
            img.src = "/assets/img/home.jpg";
        }
    });

    return (
        <figure>
            {loaded ? <img src="/assets/img/home.jpg" /> : <div>loading</div>}
        </figure>
    );
};

export default AsyncImage;

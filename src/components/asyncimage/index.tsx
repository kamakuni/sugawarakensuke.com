import { FunctionalComponent, h } from "preact";
import { useState, useEffect } from "preact/hooks";
import classes from "./style.css";

interface AsyncImageProps {
    src: string;
}

export const AsyncImage: FunctionalComponent<AsyncImageProps> = props => {
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
        <figure className="image">
            {!loaded ? (
                <img src={props.src} />
            ) : (
                <div class="container">
                    <div className={classes.loading}></div>
                </div>
            )}
        </figure>
    );
};

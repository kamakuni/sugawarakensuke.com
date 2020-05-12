import { FunctionalComponent, h } from "preact";
import { useState, useEffect } from "preact/hooks";
import { Link } from "preact-router/match";
import "../../style/style.scss";

const AsyncImage: FunctionalComponent = () => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if (!loaded) {

        }
    });

    return <img></img>;
};

export default LazyImage;

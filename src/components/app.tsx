import { FunctionalComponent, h } from "preact";
import { Route, Router, RouterOnChangeArgs } from "preact-router";
import "../style/style.scss";

import About from "../routes/about";
import Code from "../routes/code";
import Home from "../routes/home";
import NotFoundPage from "../routes/notfound";
import Footer from "./footer";
import Header from "./header";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
if ((module as any).hot) {
    // tslint:disable-next-line:no-var-requires
    require("preact/debug");
}

const App: FunctionalComponent = () => {
    let currentUrl: string;
    const handleRoute = (e: RouterOnChangeArgs) => {
        currentUrl = e.url;
    };

    return (
        <div className="has-background-white" id="app">
            <Header />
            <Router onChange={handleRoute}>
                <Route path="/" component={Home} />
                <Route path="/code" component={Code} />
                <Route path="/about" component={About} />
                <NotFoundPage default />
            </Router>
            <Footer />
        </div>
    );
};

export default App;

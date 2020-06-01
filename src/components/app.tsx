import { FunctionalComponent, h } from "preact";
import { Route, Router, RouterOnChangeArgs } from "preact-router";
import "../style/style.scss";
import NotFoundPage from "../routes/notfound";
import { Header } from "./header";
import Home from "../routes/home";
import Code from "../routes/code";
import About from "../routes/about";
import { Footer } from "./footer";

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

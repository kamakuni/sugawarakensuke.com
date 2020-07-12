// This `<reference ...>` directive is necessary to include the adapter's
// extensions to types in the "preact" and "enzyme" packages.

// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference types="enzyme-adapter-preact-pure"/>

import { configure } from "enzyme";
import Adapter from "enzyme-adapter-preact-pure";

configure({ adapter: new Adapter() });

import React from "react";
import Page from "./shared/Page";

const App = (): JSX.Element => {
    return (
        <Page>
            <p id="text04">
                <span>
                    Hello! So, there's a <em>lot</em> of terms in the plural/multiple/system community! Not just on
                    Tumblr, but Twitter and Reddit.
                </span>
                <br />{" "}
                <span>
                    We're trying our best to add as much as we can to this dictionary, for anyone to find. I know we've
                    had trouble finding the meaning of some terms, even searching, so hopefully this will help!{" "}
                </span>
                <br /> <span>All flags are above their definition.</span>
                <br /> <br />{" "}
                <span>
                    Disclaimer: Nothing on this website was written by me. All content was taken from the{" "}
                    <a href="https://system-dictionary.carrd.co/">original site</a>, I've only rewritten it in React.
                </span>
            </p>
        </Page>
    );
};

export default App;

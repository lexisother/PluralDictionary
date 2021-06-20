import React from "react";
import Page from "../shared/Page";
import List from "../shared/List";
import {terms} from "../data/terms";

export default function TermsPage(): JSX.Element {
    return (
        <Page>
            <h2 id="text13">Basic Terms</h2>
            <p id="text02">
                <List list={terms} />
            </p>
        </Page>
    );
}

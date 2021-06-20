import React from "react";
import Page from "../shared/Page";
import List from "../shared/List";
import {test} from "./data/terms";

const BasicTerms = (): JSX.Element => {
    return (
        <Page>
            <h2 id="text13">Basic Terms</h2>
            <p id="text02">
                <List list={test} />
            </p>
        </Page>
    );
};

export default BasicTerms;

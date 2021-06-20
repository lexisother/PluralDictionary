import React from "react";
import Page from "../shared/Page";
import List from "../shared/List";
import {Structure} from "../data/structure";

export default function StructurePage(): JSX.Element {
    return (
        <Page>
            <h2 id="text13">System Structure</h2>
            <p id="text02">
                <List list={Structure} />
            </p>
        </Page>
    );
}

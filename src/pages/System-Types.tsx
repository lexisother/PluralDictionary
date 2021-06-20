import React from "react";
import Page from "../shared/Page";
import List from "../shared/List";
import {STypes} from "../data/stypes";

export default function STypesPage(): JSX.Element {
    return (
        <Page>
            <h2 id="text13">System Types</h2>
            <p id="text12">Other than Origin, there's system types that go even further than that.</p>
            <p id="text02">
                <List list={STypes} separate={true} />
            </p>
        </Page>
    );
}

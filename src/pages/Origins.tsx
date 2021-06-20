import React from "react";
import Page from "../shared/Page";
import List from "../shared/List";
import {Origins} from "../data/origins";

export default function OriginsPage(): JSX.Element {
    return (
        <Page>
            <h2 id="text13">Origins</h2>
            <p id="text12">
                A note: Individual system mates can identify with these origins, just the same as systems. Not all
                systems like to use it for individual system mates however, so it's best not to make general statements
                about other systems.
            </p>
            <p id="text02">
                <List list={Origins} separate={true} />
            </p>
        </Page>
    );
}

import React from "react";
import Page from "../shared/Page";
import List from "../shared/List";
import {PluralTools, Relationships, SystemTools} from "../data/more";

export default function MorePage(): JSX.Element {
    return (
        <Page>
            <h2 id="text13">More Plurality Websites</h2>
            <p id="text12">
                Since this is only a dictionary, here's some more websites for further reading. <br />{" "}
                <a href="https://sys-sources.carrd.co/">System Sources</a>
            </p>
            <h2 id="text13">Tools</h2>
            <p id="text02">
                <span>
                    <mark>
                        <strong>Specifically for Plurality</strong>
                    </mark>
                </span>
                <List list={PluralTools} />
                <span>
                    <mark>
                        <strong>Tools Systems May Find Useful</strong>
                    </mark>
                </span>
                <List list={SystemTools} />
            </p>
            <h2 id="text13">Relationships</h2>
            <p id="text02">
                <List list={Relationships} />
            </p>
        </Page>
    );
}

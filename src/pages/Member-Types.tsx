import React from "react";
import Page from "../shared/Page";
import List from "../shared/List";
import {Introjects, JobsAges, Origins, OriginsFlags} from "../data/mtypes";
import {FiLink} from "react-icons/fi";

export default function MTypesPage(): JSX.Element {
    return (
        <Page>
            <h2 id="text13">Member Types</h2>
            <p id="text12">
                Different types of Headmates are around- from what jobs they have (if any), to what kind of introject
                they are (again, if they even are!).
            </p>
            <p id="text12">
                Disclaimer: While we've been trying to not let any triggers get in the way of this dictionary, Jobs are
                too much for us to power through. While we'll write down regular jobs that come up mostly everywhere,
                any specific or coined jobs won't be on this list. Our mental health can barely take regular jobs, let
                alone more specific ones. If anyone wants to make a Job-Specific dictionary, we will gladly link it on
                More Reading.
            </p>
            <h2 id="text19">Jobs And Ages</h2>
            <p id="text02">
                <List list={JobsAges} />
            </p>
            <h2 id="text19">Introject Types</h2>
            <p id="text12">
                An Introject is a system member that either comes from an outside source, or is based on an outside
                source.
            </p>
            <p id="text02">
                <List list={Introjects} />
            </p>
            <h2 id="text19">
                <a className="linkIcon" href="#member-origins">
                    <FiLink />
                </a>{" "}
                Member Origins and Misc
            </h2>
            <p id="text02">
                <List list={Origins} />
                <List list={OriginsFlags} separate={true} />
            </p>
        </Page>
    );
}

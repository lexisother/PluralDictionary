import React from "react";
import reactStringReplace from "react-string-replace";
import {FiLink} from "react-icons/fi";

const ListItem = ({item}: {item: Data}): JSX.Element => {
    return (
        <>
            <div className="link" id={item.link ? item.link : item.name.toLowerCase().replace(" ", "-")}>
                <a className="linkIcon" href={`#${item.link ? item.link : item.name.toLowerCase().replace(" ", "-")}`}>
                    <FiLink />
                </a>{" "}
                <strong>{item.name}</strong> :{" "}
                {reactStringReplace(item.desc, "<br />", () => (
                    <br />
                ))}{" "}
                {item.url && <a href={item.url}>♡</a>}
            </div>
            <br />
        </>
    );
};

export default function List({list}: {list: unknown[]}): JSX.Element {
    return (
        <>
            {/* If there's no list, provide an empty array */}
            {(list || []).map((item: any) => (
                <ListItem item={item} />
            ))}
        </>
    );
}

export interface Data {
    name: string;
    desc: string;
    link?: string;
    url?: string;
}

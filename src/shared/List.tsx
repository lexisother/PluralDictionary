import React from "react";
import reactStringReplace from "react-string-replace";
import {FiLink} from "react-icons/fi";

const ListItem = ({item, separate = false}: {item: Data; separate?: boolean}): JSX.Element => {
    return (
        <>
            {separate && <hr id="divider01" />}
            <div className="link" id={item.link ? item.link : item.name.toLowerCase().replace(" ", "-")}>
                {item.images && (
                    <>
                        <div id="gallery01" className="gallery">
                            <div className="inner">
                                <ul>
                                    {item.images.map((url) => (
                                        <li>
                                            <img src={url} alt="" />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <br />
                    </>
                )}
                <a className="linkIcon" href={`#${item.link ? item.link : item.name.toLowerCase().replace(" ", "-")}`}>
                    <FiLink />
                </a>{" "}
                <strong>{item.name}</strong> :{" "}
                {reactStringReplace(item.desc, "<br />", () => (
                    <br />
                ))}{" "}
                {item.url && <a href={item.url}>♡</a>}
            </div>
            {!separate && <br />}
        </>
    );
};

export default function List({list, separate = false}: {list: unknown[]; separate?: boolean}): JSX.Element {
    return (
        <>
            {/* If there's no list, provide an empty array */}
            {/* Make sure to add the separate prop to ListItem if it's present on List */}
            {separate
                ? (list || []).map((item: any) => <ListItem item={item} separate={true} />)
                : (list || []).map((item: any) => <ListItem item={item} />)}
        </>
    );
}

export interface Data {
    name: string;
    desc: string;
    link?: string;
    url?: string;
    images?: string[];
}

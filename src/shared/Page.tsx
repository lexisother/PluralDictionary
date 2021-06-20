import React from "react";
import Helmet from "react-helmet";
import "../css/index.css";

interface MetaProps {
    title?: string;
    description?: string;
    keywords?: string[];
    imageUrl?: string;
}

const Meta = ({title, description, keywords}: MetaProps): JSX.Element => {
    const defaults = {
        title: "Plural Dictionary",
        description: "Plural Dictionary website"
    };

    const actual = {
        title: title ? `${title} | ${defaults.title}` : defaults.title,
        description: description || defaults.description,
        keywords: keywords?.join(", ")
    };
    return (
        <Helmet>
            <html lang="en" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />

            <title>{actual.title}</title>

            <meta name="description" content={actual.description} />
            {actual.keywords && <meta name="keywords" content={actual.keywords} />}

            <meta property="og:type" content="website" />
            <meta property="og:title" content={actual.title} />
            <meta property="og:description" content={actual.description} />

            <meta name="twitter:title" content={actual.title} />
            <meta name="twitter:site" content="@lexisother" />
            <meta name="twitter:creator" content="@lexisother" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:description" content={actual.description} />
        </Helmet>
    );
};

interface PageProps extends MetaProps {
    children: React.ReactNode;
}

const Page = ({children, ...props}: PageProps): JSX.Element => {
    return (
        <div id="wrapper">
            <div id="main">
                <div className="inner">
                    <header id="header">
                        <div id="image01" className="image">
                            <img
                                src="https://system-dictionary.carrd.co/assets/images/image01.jpg?v97891360700951"
                                alt=""
                            />
                        </div>
                        <h1 id="text01">The Plural Dictionary</h1>
                    </header>
                    <Meta {...props} />
                    <main>{children}</main>
                    <footer id="footer">
                        <hr id="divider01" />
                        <nav>
                            <ul id="buttons01" className="buttons">
                                <li>
                                    <a className="button n01" href="/">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a className="button n01" href="/basic-terms">
                                        Basic Terms
                                    </a>
                                </li>
                                <li>
                                    <a className="button n01" href="/origins">
                                        Origins
                                    </a>
                                </li>
                                <li>
                                    <a className="button n01" href="/member-types">
                                        Member Types
                                    </a>
                                </li>
                                <li>
                                    <a className="button n01" href="/system-types">
                                        System Types
                                    </a>
                                </li>
                                <li>
                                    <a className="button n01" href="/structure">
                                        Structure
                                    </a>
                                </li>
                                {/*
                                <li>
                                    <a className="button n01" href="/mogai">
                                        Mogai
                                    </a>
                                </li>
                                <li>
                                    <a className="button n01" href="/more">
                                        More
                                    </a>
                                </li> */}
                            </ul>
                        </nav>
                    </footer>
                </div>
            </div>
        </div>
    );
};

export default Page;

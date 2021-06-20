// @ts-check
const path = require("path");

/**
 * @type {import('gatsby').GatsbyNode}
 */
module.exports = {
    createPages: async ({actions, graphql}) => {
        actions.createPage({
            path: "/",
            component: path.resolve("./src/Home.tsx"),
            context: null
        });
        actions.createPage({
            path: "/basic-terms",
            component: path.resolve("./src/pages/Basic-Terms.tsx"),
            context: null
        });
        actions.createPage({
            path: "/origins",
            component: path.resolve("./src/pages/Origins.tsx"),
            context: null
        });
        actions.createPage({
            path: "/member-types",
            component: path.resolve("./src/pages/Member-Types.tsx"),
            context: null
        });
        actions.createPage({
            path: "/system-types",
            component: path.resolve("./src/pages/System-Types.tsx"),
            context: null
        });
        actions.createPage({
            path: "/structure",
            component: path.resolve("./src/pages/Structure.tsx"),
            context: null
        });
    }
};

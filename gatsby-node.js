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
    }
};

function resolvePlugin(plugin, options) {
    return {
        resolve: plugin,
        options: options
    };
}

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
    flags: {PRESERVE_WEBPACK_CACHE: true},
    plugins: [resolvePlugin("gatsby-plugin-react-helmet")]
};

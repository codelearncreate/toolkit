/*
Copyright the Weavly copyright holders.

See the AUTHORS.md file at the top-level directory of this distribution and at
https://github.com/codelearncreate/co-design/raw/main/AUTHORS.md.

Licensed under the New BSD license. You may not use this file except in compliance with this License.

You may obtain a copy of the New BSD License at
https://github.com/codelearncreate/co-design/raw/main/LICENSE.md.
*/

"use strict";

const fluidPlugin = require("eleventy-plugin-fluid");
const navigationPlugin = require("@11ty/eleventy-navigation");
const imageShortcode = require("./src/_shortcodes/image.js");

// Import transforms
const parseTransform = require("./src/_transforms/parse-transform.js");

// Import data files
module.exports = function (eleventyConfig) {
    eleventyConfig.setUseGitIgnore(false);

    // Transforms
    eleventyConfig.addTransform("parse", parseTransform);

    // Passthrough copy
    eleventyConfig.addPassthroughCopy({"src/admin/config.yml": "admin/config.yml"});
    eleventyConfig.addPassthroughCopy({"src/assets/icons": "/"});
    eleventyConfig.addPassthroughCopy({"src/assets/images": "assets/images"});
    eleventyConfig.addPassthroughCopy({
        "node_modules/decap-cms/dist/decap-cms.js": "lib/cms/decap-cms.js",
        "node_modules/decap-cms/dist/decap-cms.js.map": "lib/cms/decap-cms.js.map",
        "node_modules/nunjucks/browser/nunjucks-slim.min.js": "lib/cms/nunjucks-slim.min.js",
        "node_modules/prop-types/prop-types.min.js": "lib/cms/prop-types.min.js",
        "node_modules/react/umd/react.development.js": "lib/cms/react.development.js",
        "node_modules/react/umd/react.production.min.js": "lib/cms/react.production.min.js"
    });

    // Custom collections
    eleventyConfig.addCollection("planning", collection => {
        return collection.getFilteredByGlob("./src/collections/planning/*.md");
    });

    eleventyConfig.addCollection("doing", collection => {
        return collection.getFilteredByGlob("./src/collections/doing/*.md");
    });

    eleventyConfig.addCollection("reflecting", collection => {
        return collection.getFilteredByGlob("./src/collections/reflecting/*.md");
    });

    // Plugins
    eleventyConfig.addPlugin(fluidPlugin, {
        defaultLanguage: "en-CA",
        css: {
            enabled: false
        },
        sass: {
            enabled: true
        },
        i18n: false
    });
    eleventyConfig.addPlugin(navigationPlugin);

    // Shortcodes
    eleventyConfig.addShortcode("image", imageShortcode);

    return {
        dir: {
            input: "src"
        },
        passthroughFileCopy: true,
        markdownTemplateEngine: "njk"
    };
};

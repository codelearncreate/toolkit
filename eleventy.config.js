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

// Import transforms
const parseTransform = require("./src/_transforms/parse-transform.js");

// Import data files
module.exports = function (eleventyConfig) {
    eleventyConfig.setUseGitIgnore(false);

    // Transforms
    eleventyConfig.addTransform("parse", parseTransform);

    // Passthrough copy
    eleventyConfig.addPassthroughCopy({
        "src/admin/config.yml": "admin/config.yml"
    });
    eleventyConfig.addPassthroughCopy({ "src/assets/icons": "/" });
    eleventyConfig.addPassthroughCopy({ "src/assets/images": "assets/images" });
    eleventyConfig.addPassthroughCopy({ "src/assets/uploads": "assets/uploads" });

    // Custom collections
    eleventyConfig.addCollection("pages", (collection) => {
        return collection.getFilteredByGlob("./src/collections/pages/*.md");
    });

    eleventyConfig.addCollection("planning", (collection) => {
        return collection
            .getFilteredByGlob("./src/collections/guides/*.md")
            .filter(function (item) {
                return item.data.category === "planning";
            })
            .sort((a, b) => {
                return a.data.order - b.data.order;
            });
    });

    eleventyConfig.addCollection("doing", (collection) => {
        return collection
            .getFilteredByGlob("./src/collections/guides/*.md")
            .filter(function (item) {
                return item.data.category === "doing";
            })
            .sort((a, b) => {
                return a.data.order - b.data.order;
            });
    });

    eleventyConfig.addCollection("reflecting", (collection) => {
        return collection
            .getFilteredByGlob("./src/collections/guides/*.md")
            .filter(function (item) {
                return item.data.category === "reflecting";
            })
            .sort((a, b) => {
                return a.data.order - b.data.order;
            });
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
    eleventyConfig.addShortcode("svgPlaceholder", function (width, height) {
        return `<svg viewBox="0 0 ${width} ${height}" style="--width: ${width}px;" class="placeholder">
        <rect width="${width}" height="${height}" />
    </svg>`;
    });

    return {
        dir: {
            input: "src"
        },
        passthroughFileCopy: true,
        markdownTemplateEngine: "njk"
    };
};

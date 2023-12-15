"use strict";

const eleventyImage = require("@11ty/eleventy-img");

module.exports = async (src, alt) => {
    let metadata = await eleventyImage(src, {
        widths: [300, 600],
        formats: ["avif", "jpeg"]
    });

    let imageAttributes = {
        alt,
        loading: "lazy",
        decoding: "async"
    };

    return Image.generateHTML(metadata, imageAttributes);
};

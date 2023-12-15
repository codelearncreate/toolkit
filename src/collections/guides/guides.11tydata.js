"use strict";

const categories = require("../../_data/categories.json");

module.exports = {
    eleventyComputed: {
        eleventyNavigation: data => {
            /* If this page has an `order` attribute, create an Eleventy Navigation object for it. */
            if (data.order) {
                return {
                    order: data.order,
                    parent: categories[data.category],
                    /* If a key is set, use that for the navigation item label; otherwise use the page title. */
                    key: data.hasOwnProperty("key") ? data.key : data.title
                };
            }
            return false;
        }
    }
};

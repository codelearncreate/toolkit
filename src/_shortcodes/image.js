"use strict";

module.exports = (src, alt, width, height) => {
    const w = parseInt(width, 10);
    const h = parseInt(height, 10);

    return `<picture>
    <source srcset="${src}?nf_resize=smartcrop&w=${w}&h=${h}" media="(min-width: 768px)">
    <img src="${src}?nf_resize=smartcrop&w=${Math.ceil(w / 2)}&h=${Math.ceil(h / 2)}" alt="${alt}" width="${width}" height="${height}" />
</picture>`;
};

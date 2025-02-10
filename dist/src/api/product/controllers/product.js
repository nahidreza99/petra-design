"use strict";
/**
 * product controller
 */
Object.defineProperty(exports, "__esModule", { value: true });
const strapi_1 = require("@strapi/strapi");
exports.default = strapi_1.factories.createCoreController('api::product.product', ({ strapi }) => ({
    async find(ctx) {
        const { query } = ctx;
        // Customize the query to populate nested relationships
        query.populate = {
            landingSection: {
                populate: 'media',
            },
            shape: {
                populate: {
                    sizes: {
                        populate: 'dimension',
                    },
                    thumbnails: true,
                    colors: true,
                },
            },
            images: {
                populate: {
                    featuredImages: {
                        populate: {
                            image1: true,
                            image2: true,
                            image3: true,
                            image4: true,
                            image5: true,
                        }
                    },
                    otherImages: true,
                }
            },
            product_type: {
                populate: {
                    resources: {
                        populate: 'file',
                    },
                },
            },
            meta_data: {
                populate: 'og_media',
            },
        };
        // Call the default find method and log the response
        const { data, meta } = await super.find(ctx);
        return { data, meta };
    },
}));

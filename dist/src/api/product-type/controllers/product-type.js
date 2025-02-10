"use strict";
/**
 * product-type controller
 */
Object.defineProperty(exports, "__esModule", { value: true });
const strapi_1 = require("@strapi/strapi");
exports.default = strapi_1.factories.createCoreController('api::product-type.product-type', ({ strapi }) => ({
    async find(ctx) {
        const { query } = ctx;
        // Customize the query to populate nested relationships
        query.populate = {
            landingSection: {
                populate: 'media',
            },
            resources: {
                populate: 'file',
            },
            products: {
                populate: {
                    shape: {
                        populate: {
                            sizes: {
                                populate: 'dimension',
                            }
                        },
                    },
                },
            },
            meta_data: {
                populate: 'og_media',
            },
        };
        // Call the default find method and return the result
        const { data, meta } = await super.find(ctx);
        return { data, meta };
    },
}));

"use strict";
/**
 * footer controller
 */
Object.defineProperty(exports, "__esModule", { value: true });
const strapi_1 = require("@strapi/strapi");
exports.default = strapi_1.factories.createCoreController('api::footer.footer', ({ strapi }) => ({
    // Override the default `find` method
    async find(ctx) {
        // Call the default core logic
        const { query } = ctx;
        // Customize population logic
        const data = await strapi.entityService.findMany('api::footer.footer', {
            ...query,
            populate: {
                linkGroups: {
                    populate: ['links'],
                },
            },
        });
        // Return the data in the response
        ctx.body = { data };
    },
    // Override the `findOne` method (optional)
    async findOne(ctx) {
        const { id } = ctx.params;
        // Customize population logic
        const data = await strapi.entityService.findOne('api::footer.footer', id, {
            populate: {
                linkGroups: {
                    populate: ['links'],
                },
            },
        });
        ctx.body = { data };
    },
}));

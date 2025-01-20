import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::resource.resource', ({ strapi }) => ({
  async find(ctx) {
    const { query } = ctx;

    // Customize the query to populate nested relationships
    query.populate = {
      product_type: {
        populate: ['product_category'], // Include product_category through product_type
      },
    };

    // Call the default find method and return the result
    const { data, meta } = await super.find(ctx);

    return { data, meta };
  },
}));

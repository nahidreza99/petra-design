/**
 * assembly-type controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::assembly-type.assembly-type', ({strapi})=> ({
  async find(ctx) {
    const { query } = ctx;

    // Customize the query to populate nested relationships
    query.populate = {
      items: {
        populate: 'images',
      },
    };

    // Call the default find method and return the result
    const { data, meta } = await super.find(ctx);

    return { data, meta };
  },
}));
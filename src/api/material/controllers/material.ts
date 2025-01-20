/**
 * material controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::material.material', ({strapi})=> ({
  async find(ctx) {
    const { query } = ctx;

    // Customize the query to populate nested relationships
    query.populate = {
      landingSection: {
        populate: 'media',
      },
      pageHeader: true,
      feature: {
        populate: 'resources',
      },
      projects: true,
      textures: true,
      meta_data: {
        populate: 'og_media',
      },
    };

    // Call the default find method and return the result
    const { data, meta } = await super.find(ctx);

    return { data, meta };
  },
}));

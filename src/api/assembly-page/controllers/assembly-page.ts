/**
 * assembly-page controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::assembly-page.assembly-page', ({strapi})=> ({
  async find(ctx) {
    const { query } = ctx;

    // Customize the query to populate nested relationships
    query.populate = {
      landingSection: {
        populate: 'media',
      },
      callToAction: true,
      meta_data: {
        populate: 'og_media',
      },
    };

    // Call the default find method and return the result
    const { data, meta } = await super.find(ctx);

    return { data, meta };
  },
}));
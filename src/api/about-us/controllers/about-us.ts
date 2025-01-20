/**
 * about-us controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::about-us.about-us', ({strapi})=> ({
  async find(ctx) {
    const { query } = ctx;

    // Customize the query to populate nested relationships
    query.populate = {
      landingSection: true,
      legacy: {
        populate: 'media',
      },
      creativity: {
        populate: 'media',
      },
      precision: {
        populate: 'media',
      },
      passion: {
        populate: 'media',
      },
      meta_data: {
        populate: 'og_media',
      }
    };

    // Call the default find method and return the result
    const { data, meta } = await super.find(ctx);

    return { data, meta };
  },
}));
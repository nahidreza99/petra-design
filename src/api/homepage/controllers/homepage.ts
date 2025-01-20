/**
 * homepage controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::homepage.homepage', ({strapi})=> ({
  async find(ctx) {
    const { query } = ctx;

    // Customize the query to populate nested relationships
    query.populate = {
      landingImages: true,
      meta_data: {
        populate: 'og_media',
      },
      exploreNewProducts: {
        populate: {
          products: {
            populate: 'product_type'
          }
        }
      },
      productCategories: {
        populate: {
          product_categories: {
            populate: 'thumbnail',
          }
        }
      }
    };

    // Call the default find method and return the result
    const { data, meta } = await super.find(ctx);

    return { data, meta };
  },
}));
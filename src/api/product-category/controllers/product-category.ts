/**
 * product-category controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::product-category.product-category', ({strapi})=> ({
  async find(ctx) {
    const { query } = ctx;

    // Customize the query to populate nested relationships
    query.populate = {
      landingSection: {
        populate: 'media',
      },
      product_types: {
        populate: {
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
        }
      },
      images: true,
      projects: true,
      meta_data: {
        populate: 'og_media',
      },
    };

    // Call the default find method and return the result
    const { data, meta } = await super.find(ctx);

    return { data, meta };
  },
}));
import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::project.project', ({ strapi }) => ({
  async find(ctx) {
    const { query } = ctx;

    query.populate = {
      product_types: true,
      materials: true,
      images: true,
      thumbnail: true,
      meta_data: {
        populate: ['og_media']
      }
    };

    const response = await super.find(ctx);
    
    // Log response for debugging
    console.log('Response data:', JSON.stringify(response.data, null, 2));
    
    return response;
  },

  async findOne(ctx) {
    const { query } = ctx;

    query.populate = {
      product_types: true,
      materials: true,
      images: true,
      thumbnail: true,
      meta_data: {
        populate: ['og_media']
      }
    };

    const response = await super.findOne(ctx);
    
    // Log response for debugging
    console.log('FindOne Response data:', JSON.stringify(response.data, null, 2));
    
    return response;
  }
}));
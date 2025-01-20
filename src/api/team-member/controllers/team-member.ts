/**
 * team-member controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::team-member.team-member', ({ strapi }) => ({
  async find(ctx) {
    const { query } = ctx;

    // Customize the query to populate nested relationships
    query.populate = {
      potrait: true,
    };

    // Call the default find method and return the result
    const { data, meta } = await super.find(ctx);

    return { data, meta };
  },
}));

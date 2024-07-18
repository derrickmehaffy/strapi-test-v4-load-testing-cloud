'use strict';

/**
 * simple-test controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::simple-test.simple-test');

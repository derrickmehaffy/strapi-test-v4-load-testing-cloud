'use strict';

/**
 * simple-test router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::simple-test.simple-test');

'use strict';

/**
 * simple-test service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::simple-test.simple-test');

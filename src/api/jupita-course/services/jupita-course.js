'use strict';

/**
 * jupita-course service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::jupita-course.jupita-course');

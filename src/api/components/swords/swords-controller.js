const swordsService = require('./swords-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

async function getSwords(request, response, next) {
  try {
    const swords = await swordsService.getSwords();

    return response.status(200).json(swords);
  } catch (error) {
    return next(error);
  }
}

async function createSwords(request, response, next) {
  try {
    const { roman_name, name, description, type, category, isDestroy, } = request.body;

    if (!roman_name) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'roman_name is required');
    }

    if (!name) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'name is required');
    }

    if (!description) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'description is required');
    }

    if (!type) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'type is required');
    }

    if (!category) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'category is required');
    }

    if (!isDestroy) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'isDestroy is required');
    }

    const success = await swordsService.create(
      roman_name,
      name,
      description,
      type,
      category,
      isDestroy
    );

    if (!success){
      throw errorResponder(
        errorTypes.UNPROCESSABLE_ENTITY,
        'Failed to create swords'
      );
    }

    return response.status(201).json({ message: 'swords created successfully'});
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getSwords,
  createSwords,
};
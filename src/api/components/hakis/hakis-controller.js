const hakisService = require('./hakis-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

async function getHakis(request, response, next) {
  try {
    const hakis = await hakisService.getHakis();

    return response.status(200).json(hakis);
  } catch (error) {
    return next(error);
  }
}

async function createHakis(request, response, next) {
  try {
    const { id, name, roman_name, description, } =
      request.body;

    if (!id) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'id is required');
    }

    if (!name) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'name is required');
    }

    if (!description) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'description is required');
    }

    if (!roman_name) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'roman name is required');
    }

    const success = await hakisService.create(
      id,
      name,
      roman_name,
      description
    );

    if (!success) {
      throw errorResponder(
        errorTypes.UNPROCESSABLE_ENTITY,
        'Failed to create hakis'
      );
    }

    return response.status(201).json({ message: 'Hakis created successfully' });
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getHakis,
  createHakis,
};

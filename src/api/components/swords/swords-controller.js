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
    const { roman_name, name, description, type, category, isDestroy } =
      request.body;

    // Name is required and cannot be empty
    if (!name) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'Name is required');
    }

    // Name must be unique
    if (await swordsService.nameExists(name)) {
      throw errorResponder(
        errorTypes.NAME_ALREADY_TAKEN,
        'Name already exists'
      );
    }

    // Create the swords
    const success = await swordsService.create(
      roman_name,
      name,
      description,
      type,
      category,
      isDestroy
    );

    if (!success) {
      throw errorResponder(
        errorTypes.UNPROCESSABLE_ENTITY,
        'Failed to create sword'
      );
    }

    return response
      .status(201)
      .json({ message: 'sword created successfully' });
  } catch (error) {
    return next(error);
  }
}

async function getSword(request, response, next) {
  try {
    const sword = await swordsService.getSword(request.params.id);

    if (!sword) {
      throw errorResponder(
        errorTypes.UNPROCESSABLE_ENTITY,
        'Sword not found'
      );
    }

    return response.status(200).json(sword);
  } catch (error) {
    return next(error);
  }
}

async function updateSword(request, response, next) {
  try {
    const { roman_name, name, description, type, category, isDestroy } =
      request.body;

    // Swords must exist
    const sword = await swordsService.getSword(request.params.id);
    if (!sword) {
      throw errorResponder(
        errorTypes.UNPROCESSABLE_ENTITY,
        'Character not found'
      );
    }

    // Name is required and cannot be empty
    if (!name) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'Name is required');
    }

    // Name must be unique, if it is changed
    if (name !== sword.name && (await swordsService.nameExists(name))) {
      throw errorResponder(
        errorTypes.NAME_ALREADY_TAKEN,
        'Name already exists'
      );
    }

    const success = await swordsService.updateSword(
      request.params.id,
      roman_name,
      name,
      description,
      type,
      category,
      isDestroy
    );

    if (!success) {
      throw errorResponder(
        errorTypes.UNPROCESSABLE_ENTITY,
        'Failed to update sword'
      );
    }

    return response
      .status(200)
      .json({ message: 'Sword updated successfully' });
  } catch (error) {
    return next(error);
  }
}

async function deleteSword(request, response, next) {
  try {
    const success = await swordsService.deleteSword(request.params.id);

    if (!success) {
      throw errorResponder(
        errorTypes.UNPROCESSABLE_ENTITY,
        'Failed to delete sword'
      );
    }

    return response
      .status(200)
      .json({ message: 'Sword deleted successfully' });
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getSwords,
  createSwords,
  getSword,
  updateSword,
  deleteSword,
};

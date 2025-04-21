const luffyGearsService = require('./luffy-gears-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

async function getLuffyGears(request, response, next) {
  try {
    const luffyGears = await luffyGearsService.getLuffyGears();

    return response.status(200).json(luffyGears);
  } catch (error) {
    return next(error);
  }
}

async function createLuffyGears(request, response, next) {
  try {
    // eslint-disable-next-line camelcase
    const { id, name, description, count_technique } = request.body;

    // Id is required and cannot be empty
    if (!id) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'Id is required');
    }

    // Name is required and cannot be empty
    if (!name) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'Name is required');
    }

    // Name must be unique
    if (await luffyGearsService.nameExists(name)) {
      throw errorResponder(
        errorTypes.NAME_ALREADY_TAKEN,
        'Name already exists'
      );
    }

    // Create the luffy-gears
    const success = await luffyGearsService.create(
      id,
      name,
      description,
      count_technique
    );

    if (!success) {
      throw errorResponder(
        errorTypes.UNPROCESSABLE_ENTITY,
        'Failed to create luffy-gears'
      );
    }

    return response
      .status(201)
      .json({ message: 'Luffy-Gears created successfully' });
  } catch (error) {
    return next(error);
  }
}

async function getLuffyGear(request, response, next) {
  try {
    const luffyGear = await luffyGearsService.getLuffyGear(request.params.id);

    if (!luffyGear) {
      throw errorResponder(
        errorTypes.UNPROCESSABLE_ENTITY,
        'Luffy-Gear not found'
      );
    }

    return response.status(200).json(luffyGear);
  } catch (error) {
    return next(error);
  }
}

async function updateLuffyGear(request, response, next) {
  try {
    // eslint-disable-next-line camelcase
    const { name, description, count_technique } = request.body;

    // LuffyGear must exist
    const luffyGear = await luffyGearsService.getLuffyGear(request.params.id);
    if (!luffyGear) {
      throw errorResponder(
        errorTypes.UNPROCESSABLE_ENTITY,
        'Luffy-Gear not found'
      );
    }

    // Name is required and cannot be empty
    if (!name) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'Name is required');
    }

    // Name must be unique, if it is changed
    if (name !== luffyGear.name && (await luffyGearsService.nameExists(name))) {
      throw errorResponder(
        errorTypes.NAME_ALREADY_TAKEN,
        'Name already exists'
      );
    }

    const success = await luffyGearsService.updateLuffyGear(
      request.params.id,
      name,
      description,
      count_technique
    );

    if (!success) {
      throw errorResponder(
        errorTypes.UNPROCESSABLE_ENTITY,
        'Failed to update luffy-gear'
      );
    }

    return response
      .status(200)
      .json({ message: 'Luffy-Gear updated successfully' });
  } catch (error) {
    return next(error);
  }
}

async function deleteLuffyGear(request, response, next) {
  try {
    const success = await luffyGearsService.deleteLuffyGear(request.params.id);

    if (!success) {
      throw errorResponder(
        errorTypes.UNPROCESSABLE_ENTITY,
        'Failed to delete luffy-gear'
      );
    }

    return response
      .status(200)
      .json({ message: 'Luffy-Gear deleted successfully' });
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getLuffyGears,
  createLuffyGears,
  getLuffyGear,
  updateLuffyGear,
  deleteLuffyGear,
};

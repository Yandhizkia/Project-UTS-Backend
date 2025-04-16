const luffyGearsService = require('./luffy-gears-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

// Get all Luffy gears
async function getGears(request, response, next) {
  try {
    const gears = await luffyGearsService.getGears();
    return response.status(200).json(gears);
  } catch (error) {
    return next(error);
  }
}

// Get a Luffy gear by ID (from body.str)
async function getGearById(request, response, next) {
  try {
    const { str } = request.body;

    if (!str) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'str is required');
    }

    const gear = await luffyGearsService.getItem(Number(str));

    if (!gear) {
      throw errorResponder(errorTypes.UNPROCESSABLE_ENTITY, 'Gear not found');
    }

    return response.status(200).json(gear);
  } catch (error) {
    return next(error);
  }
}

// Create a new Luffy gear
async function createGear(request, response, next) {
  try {
    const { id, name, description, countTechniques } = request.body;

    if (!id) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'Id is required');
    }

    if (!name) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'Name is required');
    }

    const existing = await luffyGearsService.getItem(id);
    if (existing) {
      throw errorResponder(
        errorTypes.VALIDATION_ERROR,
        'Gear with this ID already exists'
      );
    }

    const success = await luffyGearsService.createGear(
      id,
      name,
      description,
      countTechniques
    );

    if (!success) {
      throw errorResponder(
        errorTypes.VALIDATION_ERROR,
        'Failed to create gear'
      );
    }

    return response.status(201).json({ message: 'Gear created successfully' });
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getGears,
  getGearById,
  createGear,
};

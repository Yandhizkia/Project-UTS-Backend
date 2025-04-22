const dialsService = require('./dials-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

async function getDials(request, response, next) {
  try {
    const dials = await dialsService.getDials();

    return response.status(200).json(dials);
  } catch (error) {
    return next(error);
  }
}

async function createDials(request, response, next) {
  try {
    const { id, name, type } = request.body;

    // id is required and cannot be empty
    if (!id) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'id is required');
    }
    // name is required and cannot be empty
    if (!name) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'Name is required');
    }

    // Name is required and cannot be empty
    if (!type) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'type is required');
    }

    // Name must be unique
    if (await dialsService.nameExists(name)) {
      throw errorResponder(
        errorTypes.NAME_ALREADY_TAKEN,
        'Name already exists'
      );
    }

    // Create the Dials
    const success = await dialsService.create(id, name, type);

    if (!success) {
      throw errorResponder(
        errorTypes.UNPROCESSABLE_ENTITY,
        'Failed to create dials'
      );
    }

    return response
      .status(201)
      .json({ message: 'Dials  created successfully' });
  } catch (error) {
    return next(error);
  }
}

async function getDial(request, response, next) {
  try {
    const dial = await dialsService.getDial(request.params.id);

    if (!dial) {
      throw errorResponder(errorTypes.UNPROCESSABLE_ENTITY, 'Dial not found');
    }

    return response.status(200).json(dial);
  } catch (error) {
    return next(error);
  }
}

async function updateDial(request, response, next) {
  try {
    const { name, type } = request.body;

    // Dials must exist
    const dial = await dialsService.getDial(request.params.id);
    if (!dial) {
      throw errorResponder(errorTypes.UNPROCESSABLE_ENTITY, 'Dials not found');
    }

    // Name is required and cannot be empty
    if (!name) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'name is required');
    }

    // Name must be unique, if it is changed
    if (name !== dial.name && (await dialsService.nameExists(name))) {
      throw errorResponder(
        errorTypes.NAME_ALREADY_TAKEN,
        'Name already exists'
      );
    }

    const success = await dialsService.updateDial(
      request.params.id,
      name,
      type
    );

    if (!success) {
      throw errorResponder(
        errorTypes.UNPROCESSABLE_ENTITY,
        'Failed to update Dials'
      );
    }

    return response.status(200).json({ message: 'Dials updated successfully' });
  } catch (error) {
    return next(error);
  }
}

async function deleteDial(request, response, next) {
  try {
    const success = await dialsService.deleteDial(request.params.id);

    if (!success) {
      throw errorResponder(
        errorTypes.UNPROCESSABLE_ENTITY,
        'Failed to delete Dials'
      );
    }

    return response.status(200).json({ message: 'Dials deleted successfully' });
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getDials,
  createDials,
  getDial,
  updateDial,
  deleteDial,
};

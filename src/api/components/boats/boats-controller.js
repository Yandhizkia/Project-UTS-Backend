const boatsService = require('./boats-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

async function getBoats(request, response, next) {
  try {
    const boats = await boatsService.getBoats();

    return response.status(200).json(boats);
  } catch (error) {
    return next(error);
  }
}

async function createBoats(request, response, next) {
  try {
    const {
      id,
      name,
      job,
      size,
      brithday,
      age,
      bounty,
      status,
      crew,
      character_captain
    } = request.body;

    // id is required and cannot be empty
    if (!id) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'id is required');
    }

    // name is required and cannot be empty
    if (!name) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'name is required');
    }

    // Name must be unique
    if (await boatsService.nameExists(name)) {
      throw errorResponder(
        errorTypes.NAME_ALREADY_TAKEN,
        'Name already exists'
      );
    }

    // Create the boats
    const success = await boatsService.create(
      id,
      name,
      job,
      size,
      brithday,
      age,
      bounty,
      status,
      crew,
      character_captain
    );

    if (!success) {
      throw errorResponder(
        errorTypes.UNPROCESSABLE_ENTITY,
        'Failed to create boats'
      );
    }

    return response.status(201).json({ message: 'boats created successfully' });
  } catch (error) {
    return next(error);
  }
}

async function getBoat(request, response, next) {
  try {
    const boat = await boatsService.getBoat(request.params.id);

    if (!boat) {
      throw errorResponder(errorTypes.UNPROCESSABLE_ENTITY, 'boat not found');
    }

    return response.status(200).json(boat);
  } catch (error) {
    return next(error);
  }
}

async function updateBoat(request, response, next) {
  try {
    const {
      name,
      job,
      size,
      birthday,
      age,
      bounty,
      status,
      crew,
      character_captain
    } = request.body;

    // User must exists
    const boat = await boatsService.getBoat(request.params.id);
    if (!boat) {
      throw errorResponder(errorTypes.UNPROCESSABLE_ENTITY, 'Boat not found');
    }

    // Email is required and cannot be empty
    if (!name) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'Name is required');
    }

    // email must be unique, if it is changed
    if (name !== boat.name && (await boatsService.nameExists(name))) {
      throw errorResponder(
        errorTypes.NAME_ALREADY_TAKEN,
        'Name already exists'
      );
    }

    const succes = await boatsService.updateBoat(
      request.params.id,
      name,
      job,
      size,
      birthday,
      age,
      bounty,
      status,
      crew,
      character_captain
    );

    if (!succes) {
      throw errorResponder(
        errorTypes.UNPROCESSABLE_ENTITY,
        'Failed to update boat'
      );
    }

    return response.status(200).json({ message: 'Boat updated successfully' });
  } catch (error) {
    return next(error);
  }
}

async function deleteBoat(request, response, next) {
  try {
    const success = await boatsService.deleteBoat(request.params.id);

    if (!success) {
      throw errorResponder(
        errorTypes.UNPROCESSABLE_ENTITY,
        'Failed to delete boat'
      );
    }

    return response.status(200).json({ message: 'Boat deleted successfuly'});
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getBoats,
  createBoats,
  getBoat,
  updateBoat,
  deleteBoat,
};

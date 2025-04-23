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
    const { id, name, roman_name, description } =
      request.body;

    // id is required and cannot be empty
    if (!id) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'id is required');
    }

    // name is required and cannot be empty
    if (!name) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'name is required');
    }

    // Name must be unique
    if (await hakisService.nameExists(name)) {
      throw errorResponder(
        errorTypes.NAME_ALREADY_TAKEN,
        'Name already exists'
      );
    }

    // Create the haki
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

async function getHaki(request, response, next) {
  try {
    const haki = await hakisService.getHaki(request.params.id);

    if (!haki) {
      throw errorResponder(
        errorTypes.UNPROCESSABLE_ENTITY,
        'haki not found'
      );
    }

    return response.status(200).json(haki);
  } catch (error) {
    return next(error);
  }
}

async function updateHaki(request, response, next) {
  try {
    const { name, roman_name, description } =
      request.body;

    // User must exists
    const haki = await hakisService.getHaki(request.params.id);
    if (!haki) {
      throw errorResponder(
        errorTypes.UNPROCESSABLE_ENTITY,
        ('Haki not found')
      );
    }

    // Email is required and cannot be empty
    if (!name) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'Name is required');
    }

    // email must be unique, if it is changed
    if (name !== haki.name && (await hakisService.nameExists(name))) {
      throw errorResponder(
        errorTypes.NAME_ALREADY_TAKEN,
        'Name already exists'
      );
    }

    const succes = await hakisService.updateHaki(
      request.params.id,
      name,
      roman_name,
      description
    );

    if (!succes) {
      throw errorResponder(
        errorTypes.UNPROCESSABLE_ENTITY,
        'Failed to update haki'
      );
    }

    return response
      .status(200)
      .json({ message: 'Haki updated successfully' });
    } catch (error) {
      return next(error);
  }
}

async function deleteHaki(request, response, next) {
  try {
    const success = await hakisService.deleteHaki(request.params.id);

    if (!success) {
      throw errorResponder(
        errorTypes.UNPROCESSABLE_ENTITY,
        'Failed to delete haki'
      );
    }

    return response
      .status(200)
      .json({ message: 'Haki deleted successfuly '});
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getHakis,
  createHakis,
  getHaki,
  updateHaki,
  deleteHaki,
};

const crewsService = require('./crews-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

async function getCrews(request, response, next) {
  try {
    const crews = await crewsService.getCrews();

    return response.status(200).json(crews);
  } catch (error) {
    return next(error);
  }
}

async function createCrews(request, response, next) {
  try {
    const {
      id,
      name,
      description,
      status,
      number,
      roman_name,
      total_prime,
      is_yonko,
    } = request.body;

    // Id is required and cannot be empty
    if (!id) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'Id is required');
    }

    // Name is required and cannot be empty
    if (!name) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'Name is required');
    }

    // Name must be unique
    if (await crewsService.nameExists(name)) {
      throw errorResponder(
        errorTypes.NAME_ALREADY_TAKEN,
        'Name already exists'
      );
    }

    // Create the crew
    const success = await crewsService.create(
      id,
      name,
      description,
      status,
      number,
      roman_name,
      total_prime,
      is_yonko
    );

    if (!success) {
      throw errorResponder(
        errorTypes.UNPROCESSABLE_ENTITY,
        'Failed to create crew'
      );
    }

    return response.status(201).json({ message: 'Crew created successfully' });
  } catch (error) {
    return next(error);
  }
}

async function getCrew(request, response, next) {
  try {
    const crew = await crewsService.getCrew(request.params.id);

    if (!crew) {
      throw errorResponder(errorTypes.UNPROCESSABLE_ENTITY, 'Crew not found');
    }

    return response.status(200).json(crew);
  } catch (error) {
    return next(error);
  }
}

async function updateCrew(request, response, next) {
  try {
    const {
      name,
      description,
      status,
      number,
      roman_name,
      total_prime,
      is_yonko,
    } = request.body;

    // Crew must exist
    const crew = await crewsService.getCrew(request.params.id);
    if (!crew) {
      throw errorResponder(errorTypes.UNPROCESSABLE_ENTITY, 'Crew not found');
    }

    // Name is required and cannot be empty
    if (!name) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'Name is required');
    }

    // Name must be unique, if it is changed
    if (name !== crew.name && (await crewsService.nameExists(name))) {
      throw errorResponder(
        errorTypes.NAME_ALREADY_TAKEN,
        'Name already exists'
      );
    }

    const success = await crewsService.updateCrew(
      request.params.id,
      name,
      description,
      status,
      number,
      roman_name,
      total_prime,
      is_yonko
    );

    if (!success) {
      throw errorResponder(
        errorTypes.UNPROCESSABLE_ENTITY,
        'Failed to update crew'
      );
    }

    return response.status(200).json({ message: 'Crew updated successfully' });
  } catch (error) {
    return next(error);
  }
}

async function deleteCrew(request, response, next) {
  try {
    const success = await crewsService.deleteCrew(request.params.id);

    if (!success) {
      throw errorResponder(
        errorTypes.UNPROCESSABLE_ENTITY,
        'Failed to delete crew'
      );
    }

    return response.status(200).json({ message: 'Crew deleted successfully' });
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getCrews,
  createCrews,
  getCrew,
  updateCrew,
  deleteCrew,
};

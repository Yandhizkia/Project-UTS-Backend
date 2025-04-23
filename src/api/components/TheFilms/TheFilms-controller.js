const theFilmsService = require('./TheFilms-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

async function getTheFilms(request, response, next) {
  try {
    const theFilms = await theFilmsService.getTheFilms();

    return response.status(200).json(theFilms);
  } catch (error) {
    return next(error);
  }
}

async function createTheFilms(request, response, next) {
  try {
    const { id, number, title, description, release_date, saga } = request.body;

    if (!id) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'Id is required');
    }

    if (!title) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'Title is required');
    }

    if (await theFilmsService.titleExists(title)) {
      throw errorResponder(
        errorTypes.NAME_ALREADY_TAKEN,
        'Title already exists'
      );
    }

    const success = await theFilmsService.create(
      id,
      number,
      title,
      description,
      release_date,
      saga
    );

    if (!success) {
      throw errorResponder(
        errorTypes.UNPROCESSABLE_ENTITY,
        'Failed to create films'
      );
    }

    return response.status(201).json({ message: 'Films created successfully' });
  } catch (error) {
    return next(error);
  }
}

async function getTheFilm(request, response, next) {
  try {
    const theFilms = await theFilmsService.getTheFilm(request.params.id);

    if (!theFilms) {
      throw errorResponder(
        errorTypes.UNPROCESSABLE_ENTITY,
        'The films not found'
      );
    }

    return response.status(200).json(theFilms);
  } catch (error) {
    return next(error);
  }
}

async function updateTheFilms(request, response, next) {
  try {
    const { number, title, description, release_date, saga } = request.body;

    // Films must exist
    const theFilms = await theFilmsService.getTheFilm(request.params.id);
    if (!theFilms) {
      throw errorResponder(errorTypes.UNPROCESSABLE_ENTITY, 'Films not found');
    }

    // Title is required and cannot be empty
    if (!title) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'Title is required');
    }

    // Title must be unique, if it is changed
    if (
      title !== theFilms.title &&
      (await theFilmsService.titleExists(title))
    ) {
      throw errorResponder(
        errorTypes.TITLE_ALREADY_TAKEN,
        'Title already exists'
      );
    }

    const success = await theFilmsService.updateTheFilms(
      request.params.id,
      number,
      title,
      description,
      release_date,
      saga
    );

    if (!success) {
      throw errorResponder(
        errorTypes.UNPROCESSABLE_ENTITY,
        'Failed to update films'
      );
    }

    return response.status(200).json({ message: 'Films updated successfully' });
  } catch (error) {
    return next(error);
  }
}

async function deleteTheFilms(request, response, next) {
  try {
    const success = await theFilmsService.deleteTheFilms(request.params.id);

    if (!success) {
      throw errorResponder(
        errorTypes.UNPROCESSABLE_ENTITY,
        'Failed to delete films'
      );
    }

    return response.status(200).json({ message: 'Films deleted successfully' });
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getTheFilms,
  createTheFilms,
  getTheFilm, 
  updateTheFilms,
  deleteTheFilms,
};

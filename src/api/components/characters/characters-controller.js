const charactersService = require('./characters-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

async function getCharacters(request, response, next) {
  try {
    const characters = await charactersService.getCharacters();

    return response.status(200).json(characters);
  } catch (error) {
    return next(error);
  }
}

async function createCharacters(request, response, next) {
  try {
    const { id, name, job, size, birthday, age, bounty, status, crew, fruit } =
      request.body;

    // Id is required and cannot be empty
    if (!id) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'Id is required');
    }

    // Name is required and cannot be empty
    if (!name) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'Name is required');
    }

    // Name must be unique
    if (await charactersService.nameExists(name)) {
      throw errorResponder(
        errorTypes.NAME_ALREADY_TAKEN,
        'Name already exists'
      );
    }

    // Create the character
    const success = await charactersService.create(
      id,
      name,
      job,
      size,
      birthday,
      age,
      bounty,
      status,
      crew,
      fruit
    );

    if (!success) {
      throw errorResponder(
        errorTypes.UNPROCESSABLE_ENTITY,
        'Failed to create character'
      );
    }

    return response
      .status(201)
      .json({ message: 'Character created successfully' });
  } catch (error) {
    return next(error);
  }
}

async function getCharacter(request, response, next) {
  try {
    const character = await charactersService.getCharacter(request.params.id);

    if (!character) {
      throw errorResponder(
        errorTypes.UNPROCESSABLE_ENTITY,
        'Character not found'
      );
    }

    return response.status(200).json(character);
  } catch (error) {
    return next(error);
  }
}

async function updateCharacter(request, response, next) {
  try {
    const { name, job, size, birthday, age, bounty, status, crew, fruit } =
      request.body;

    // Character must exist
    const character = await charactersService.getCharacter(request.params.id);
    if (!character) {
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
    if (name !== character.name && (await charactersService.nameExists(name))) {
      throw errorResponder(
        errorTypes.NAME_ALREADY_TAKEN,
        'Name already exists'
      );
    }

    const success = await charactersService.updateCharacter(
      request.params.id,
      name,
      job,
      size,
      birthday,
      age,
      bounty,
      status,
      crew,
      fruit
    );

    if (!success) {
      throw errorResponder(
        errorTypes.UNPROCESSABLE_ENTITY,
        'Failed to update character'
      );
    }

    return response
      .status(200)
      .json({ message: 'Character updated successfully' });
  } catch (error) {
    return next(error);
  }
}

async function deleteCharacter(request, response, next) {
  try {
    const success = await charactersService.deleteCharacter(request.params.id);

    if (!success) {
      throw errorResponder(
        errorTypes.UNPROCESSABLE_ENTITY,
        'Failed to delete character'
      );
    }

    return response
      .status(200)
      .json({ message: 'Character deleted successfully' });
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getCharacters,
  createCharacters,
  getCharacter,
  updateCharacter,
  deleteCharacter,
};

const lTechniqueService = require('./LTechnique-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

async function getLTechniques(request, response, next) {
  try {
    const lTechnique = await lTechniqueService.getLTechniques();

    return response.status(200).json(lTechnique);
  } catch (error) {
    return next(error);
  }
}

async function createLTechnique(request, response, next) {
  try {
    const { id, name, translation, type, description, after_ellipsis, luffy_gear } = request.body;

    // Id is required and cannot be empty
    if (!id) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'Id is required');
    }

    // Name is required and cannot be empty
    if (!name) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'Name is required');
    }

    if (!type) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'Type is required');
    }

    // Create the LTechnique
    const success = await lTechniqueService.create(
      id,
      name,
      translation,
      type,
      description,
      after_ellipsis,
      luffy_gear
    );

    if (!success) {
      throw errorResponder(
        errorTypes.UNPROCESSABLE_ENTITY,
        'Failed to create technique'
      );
    }

    return response
      .status(201)
      .json({ message: 'Technique created successfully' });
  } catch (error) {
    return next(error);
  }
}

async function getLTechnique(request, response, next) {
  try {
    const lTechnique = await lTechniqueService.getLTechnique(request.params.id);

    if (!lTechnique) {
      throw errorResponder(
        errorTypes.UNPROCESSABLE_ENTITY,
        'Technique not found'
      );
    }

    return response.status(200).json(lTechnique);
  } catch (error) {
    return next(error);
  }
}

async function updateLTechnique(request, response, next) {
  try {
    const { name, translation, type, description, after_ellipsis, luffy_gear } = request.body;

    // LTechnique must exist
    const lTechnique = await lTechniqueService.getLTechnique(request.params.id);
    if (!lTechnique) {
      throw errorResponder(
        errorTypes.UNPROCESSABLE_ENTITY,
        'Technique not found'
      );
    }

    // Name is required and cannot be empty
    if (!name) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'Name is required');
    }

    // Name must be unique, if it is changed
    if (name !== lTechnique.name && (await lTechniqueService.nameExists(name))) {
      throw errorResponder(
        errorTypes.NAME_ALREADY_TAKEN,
        'Name already exists'
      );
    }

    const success = await lTechniqueService.updateLTechnique(
      request.params.id,
      name,
      translation,
      type,
      description,
      after_ellipsis,
      luffy_gear
    );

    if (!success) {
      throw errorResponder(
        errorTypes.UNPROCESSABLE_ENTITY,
        'Failed to update technique'
      );
    }

    return response
      .status(200)
      .json({ message: 'Technique updated successfully' });
  } catch (error) {
    return next(error);
  }
}

async function deleteLTechnique(request, response, next) {
  try {
    const success = await lTechniqueService.deleteLTechnique(request.params.id);

    if (!success) {
      throw errorResponder(
        errorTypes.UNPROCESSABLE_ENTITY,
        'Failed to delete technique'
      );
    }

    return response
      .status(200)
      .json({ message: 'Technique deleted successfully' });
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getLTechniques,
  createLTechnique,
  getLTechnique,
  updateLTechnique,
  deleteLTechnique,
};

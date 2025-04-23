const arcsService = require('./arcs-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

async function getArcs(request, response, next) {
  try {
    const arcs = await arcsService.getArcs();

    return response.status(200).json(arcs);
  } catch (error) {
    return next(error);
  }
}

async function createArcs(request, response, next) {
  try {
    const { id, title, description, saga } =
      request.body;

    // Id is required and cannot be empty
    if (!id) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'Id is required');
    }

    // Title is required and cannot be empty
    if (!title) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'Title is required');
    }

    // Title must be unique
    if (await arcsService.titleExists(title)) {
      throw errorResponder(
        errorTypes.NAME_ALREADY_TAKEN,
        'Title already exists'
      );
    }

    // Create the arcs
    const success = await arcsService.create(
      id,
      title,
      description,
      saga
    );

    if (!success) {
      throw errorResponder(
        errorTypes.UNPROCESSABLE_ENTITY,
        'Failed to create arc'
      );
    }

    return response
      .status(201)
      .json({ message: 'Arc created successfully' });
  } catch (error) {
    return next(error);
  }
}

async function getArc(request, response, next) {
  try {
    const arc = await arcsService.getArc(request.params.id);

    if (!arc) {
      throw errorResponder(
        errorTypes.UNPROCESSABLE_ENTITY,
        'Arc not found'
      );
    }

    return response.status(200).json(arc);
  } catch (error) {
    return next(error);
  }
}

async function updateArc(request, response, next) {
  try {
    const { title, description, saga } =
      request.body;

    // Arc must exist
    const arc = await arcsService.getArc(request.params.id);
    if (!arc) {
      throw errorResponder(
        errorTypes.UNPROCESSABLE_ENTITY,
        'Arc not found'
      );
    }

    // Title is required and cannot be empty
    if (!title) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'Title is required');
    }

    // Title must be unique, if it is changed
    if (title !== arc.title && (await arcsService.titleExists(title))) {
      throw errorResponder(
        errorTypes.NAME_ALREADY_TAKEN,
        'Title already exists'
      );
    }

    const success = await arcsService.updateArc(
      request.params.id,
      title,
      description,
      saga
    );

    if (!success) {
      throw errorResponder(
        errorTypes.UNPROCESSABLE_ENTITY,
        'Failed to update arc'
      );
    }

    return response
      .status(200)
      .json({ message: 'Arc updated successfully' });
  } catch (error) {
    return next(error);
  }
}

async function deleteArc(request, response, next) {
  try {
    const success = await arcsService.deleteArc(request.params.id);

    if (!success) {
      throw errorResponder(
        errorTypes.UNPROCESSABLE_ENTITY,
        'Failed to delete arc'
      );
    }

    return response
      .status(200)
      .json({ message: 'Arc deleted successfully' });
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getArcs,
  createArcs,
  getArc,
  updateArc,
  deleteArc,
};

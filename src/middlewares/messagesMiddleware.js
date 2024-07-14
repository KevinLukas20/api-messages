const validateBody = (request, response, next) => {
    const { body } = request;

    if (body.name === undefined || body.texts === undefined) {
        response.status(400).json({ message: 'The field "name" or "texts" is required' });
    }

    if (body.name === '' || body.texts === '') {
        response.status(400).json({ message: 'name or texts cannot be empty' });
    }

    next();
};

module.exports = {
    validateBody,
};
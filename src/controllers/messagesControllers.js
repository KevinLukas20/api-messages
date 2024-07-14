const messagesModel = require('../models/messagesModel');

const getAll = async (_request, response) => {

    const messages = await messagesModel.getAll();
    return response.status(200).json(messages);
};

const createMessage = async (request, response) => {
    const createdMeassage = await messagesModel.createMessage(request.body);
    return response.status(201).json(createdMeassage);
};

const deleteMessage = async (request, response) => {
    const { id } = request.params;

    await messagesModel.deleteMessage(id);
    return response.status(204).json();
};

module.exports = {
    getAll,
    createMessage,
    deleteMessage,
};
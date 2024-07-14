const connection = require('./connection');

const getAll = async () => {
    const [messages] = await connection.execute('SELECT * FROM messages');
    return messages;
};

const createMessage = async (recado) => {
    const { name, texts } = recado;

    const query = 'INSERT INTO messages(name, texts) VALUES (?, ?)';

    const [createdMessage] = await connection.execute(query, [name, texts]);
    return {insertId: createdMessage.insertId};
};

const deleteMessage = async (id) => {
    const [removedMessage] = await connection.execute('DELETE FROM messages WHERE id = ?', [id]);
    return removedMessage;
};

module.exports = {
    getAll,
    createMessage,
    deleteMessage,
};
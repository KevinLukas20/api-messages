const pool = require('./connection');

const getAll = async () => {
    const { rows } = await pool.query('SELECT * FROM messages');
    return rows;
};

const createMessage = async (recado) => {
    const { name, texts } = recado;

    const query = 'INSERT INTO messages(name, texts) VALUES ($1, $2) RETURNING id';
    const values = [name, texts];

    const { rows } = await pool.query(query, values);
    return { insertId: rows[0].id };
};

const deleteMessage = async (id) => {
    const query = 'DELETE FROM messages WHERE id = $1';
    const values = [id];

    await pool.query(query, values);
};

module.exports = {
    getAll,
    createMessage,
    deleteMessage,
};


// const connection = require('./connection');

// const getAll = async () => {
//     const [messages] = await connection.execute('SELECT * FROM messages');
//     return messages;
// };

// const createMessage = async (recado) => {
//     const { name, texts } = recado;

//     const query = 'INSERT INTO messages(name, texts) VALUES (?, ?)';

//     const [createdMessage] = await connection.execute(query, [name, texts]);
//     return {insertId: createdMessage.insertId};
// };

// const deleteMessage = async (id) => {
//     const [removedMessage] = await connection.execute('DELETE FROM messages WHERE id = ?', [id]);
//     return removedMessage;
// };

// module.exports = {
//     getAll,
//     createMessage,
//     deleteMessage,
// };
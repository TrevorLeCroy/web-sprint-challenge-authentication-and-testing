const db = require('../../data/dbConfig');

const find = async () => {
    return await db('users');
}

const findBy = async (filter) => {
    return await db('users').where(filter).first();
}

const findById = async (id) => {
    return await db('users').where('id', id).first();
}

const add = async ({username, password}) => {
    const [id] = await db('users').insert({username, password});
    return await findById(id);
};

module.exports = {
    find,
    findBy,
    findById,
    add
}


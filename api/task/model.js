const db = require('../../data/dbConfig');

const get = () => {
    return db('tasks');
}

const getById = async (id) => {
    const result = await db('tasks').where('task_id', id).first();
    return result;
}

const create = async (task) => {
    const [id] = await db('tasks').insert(task);
    const newTask = await getById(id);
    return newTask;
}

module.exports = {
    get,
    getById,
    create
}
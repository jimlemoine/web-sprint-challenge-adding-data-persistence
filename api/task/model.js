const db = require('../../data/dbConfig');

const get = () => {
    return db('tasks as t')
        .leftJoin('projects as p', 't.project_id', 'p.project_id')
        .select(
            'task_id', 
            'task_description', 
            'task_notes', 
            db.raw("CASE WHEN task_completed = 1 THEN true ELSE false END AS task_completed"), 
            'project_name', 
            'project_description');
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
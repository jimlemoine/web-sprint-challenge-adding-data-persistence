const db = require('../../data/dbConfig');

const get = () => {
    return db('projects');
}

const getById = async (id) => {
    const result = await db('projects').where('project_id', id).first();
    return result;
}

const create = async (project) => {
    const [id] = await db('projects').insert(project);
    const newProject = await getById(id);
    return newProject;
}

module.exports = {
    get,
    getById,
    create
}
const db = require('../../data/dbConfig');

const checkProjectId = async ( req, res, next) => {
    try {
        const possibleProject = await db('projects')
            .where('project_id', req.body.project_id)
            .first()
            if (possibleProject) {
                next()
            } else {
                next({ status: 404, message: 'Could not find project' })
            }
    } catch (err) {
        next(err)
    }
}

module.exports = {
    checkProjectId
}

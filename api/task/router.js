const express = require('express');
const {
    checkProjectId
} = require('./middleware');
const Task = require('./model');

const router = express.Router();

router.get('/', (req, res, next) => {
    Task.get()
        .then(tasks => {
            res.status(200).json(tasks);
        })
        .catch(next);
})

router.post('/', checkProjectId, (req, res, next) => {
    Task.create(req.body)
        .then(task => {
            res.status(201).json(task);
        })
        .catch(next);
});



module.exports = router;

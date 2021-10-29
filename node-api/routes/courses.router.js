
const experss = require('express');
const router = experss.Router();
const Controller = require('../controllers/courses.controller');

router.post('/', Controller.addNew);
router.get('/', Controller.getAll);
router.get('/:id', Controller.getById);
router.patch('/', Controller.updateStatus);
router.put('/:id', Controller.updateById);

module.exports = router;
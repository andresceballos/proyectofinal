const express = require ('express');
const router = express.Router();
const usuarioController= require('../controllers/usuarioController');

router.get('/crud', usuarioController.list);
router.post('/crud/add', usuarioController.add);
router.get('/crud/update/:id', usuarioController.edit);
router.get('/crud/update/:id', usuarioController.list);
router.post('/crud/update/:id', usuarioController.update);
router.get('/crud/delete/:id', usuarioController.delete);

module.exports=router;
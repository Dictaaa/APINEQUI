const express = require('express');
const router = express.Router(); 
const loanController = require('../../controllers/loan.controller');

router
    .get('/', loanController.get )
    .get('/:id', loanController.getById )
    .post('/', loanController.create )
    .post('/search/', loanController._loanSearch )
    .put('/:id', loanController.update )
    .delete('/:id', loanController._delete );

module.exports = router;
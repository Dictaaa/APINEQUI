const LoanService = require('../services/Loan.service');
const service = new LoanService();

const create = async ( req, res ) => {
    try { 
        const response = await service.create(req.body);
        res.json({ success: true, message: 'Creacion exitosa', data: response});
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}

const get = async ( req, res ) => {
    try {
        const response = await service.find();
        res.json({ success: true, data: response});
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}

const getById = async ( req, res ) => {
    try {
        const { id } = req.params;
        const response = await service.findById(id);
        res.json({ success: true, data: response});
    } catch (error) {
        if (!error.statusCode) {
            error.statusCode=500;
        }
        res.status(error.statusCode).send({ success: false, message: error.message });
    }
}

const update = async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const response = await service.update(id,body);
        res.json({ success: true, message: 'Actualizacion exitosa', data: response});
    } catch (error) {
        if (!error.statusCode) {
            error.statusCode=500;
        }
        res.status(error.statusCode).send({ success: false, message: error.message });
    }
}

const _delete = async (req, res) => {
    try {
        const { id } = req.params; 
        await service.delete(id);
        res.json({ success: true, message: 'Eliminacion exitosa'});
    } catch (error) {
        if (!error.statusCode) {
            error.statusCode=500;
        }
        res.status(error.statusCode).send({ success: false, message: error.message });
    }
}

const _loanSearch = async ( req, res ) => {
    try {
        const search = req.body;
        const response = await service.loanSearch(search);
        res.json({ success: true, data: response});
    } catch (error) {
        if (!error.statusCode) {
            error.statusCode=500;
        }
        res.status(error.statusCode).send({ success: false, message: error.message });
    }
}

module.exports = {
    create, get, getById, update, _delete, _loanSearch
};

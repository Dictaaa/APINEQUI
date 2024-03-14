const UserService = require('../services/User.service');
const service = new UserService();



const login = async ( req, res ) => {
    try {
        const { identificationTypeId, identificationNumber } = req.body;
        const user = await service.login( identificationTypeId, identificationNumber );
        
       
        if (typeof user === 'object' && user !== null) {
            res.json({ success: true, message: 'Inicio de sesión exitoso',  user: user});
        } else {
            res.status(401).json({ success: false, message: 'Verifique su numero de numeod de identificación' });
        }
    } catch (error) {
        if (!error.statusCode) {
            error.statusCode=500;
        }
        res.status(error.statusCode).send({ success: false, message: error.message });
    }
}

module.exports = {
    login
};
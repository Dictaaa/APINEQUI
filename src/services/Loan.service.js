const LoanModel = require('../models/Loan');

class LoanService { 
  
    constructor() {}

    async find(where={}) {
      const res = await LoanModel.find(where);
      return res;
    }

    async findById(id) {
      const res = await LoanModel.findById(id);
      return res;
    }

    async create(data) {
      const res = await LoanModel.create(data);;
      return res;
    }

    async update(id, data) {
      const res = await LoanModel.findByIdAndUpdate(id, data, {new:true});
      if (!res) {
        const error = new Error('Identification type not found');
        error.statusCode = 404; 
        throw error;
      }
      return res;
    }

    async delete(id) {
      const res = await LoanModel.findByIdAndDelete(id);
      if (!res) {
        const error = new Error('Identification type not found');
        error.statusCode = 404; 
        throw error;
      }
      return res;
    }

    async loanSearch(search) {
        const res = await LoanModel.find(search);
        if (!res) {
          const error = new Error('Identification type not found');
          error.statusCode = 404; 
          throw error;
        }
        return res;
      }
  
  }
  
  module.exports = LoanService;
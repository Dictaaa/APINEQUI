const {Schema, model} = require('mongoose');

const loanSchema = new Schema({
loanStartDate: { type: Date, required: true },
loanEndDate: { type: Date, required: true },
state: { type: String, required: true},
identificationNumber: { type: Number, required: true },
borrowedMoney: { type: Number, required: true },
loanCost: { type: Number, required: true },
moneyOwed: { type: Number, required: true },
},
{
  timestamps: true,
  versionKey: false
});

const Loan = model('Loan', loanSchema);

module.exports = Loan;
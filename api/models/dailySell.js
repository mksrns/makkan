const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var dailySellSchema = new Schema({
    customer_name: {type: String, required:true},
    mobile: {type: Number, required:true},
    area: {type: String},
    locality: {type: String},
    district: {type: String, required:true},
    state: {type: String},
    brick_qty: {type: String, required:true},
    rate: {type: Number, required:true},
    qty: {type: Number, required:true},
    total_brick_amt: {type: Number},
    total_amt: {type: Number},
    gaddi_bhara: {type: Number},
    vehicle_no: {type: String},
    deposit: {type: Number, required:true},
    pending: {type: Number},
    // category: {type: mongoose.Schema.Types.ObjectId, ref: 'Category', required:true},
    // brand: {type: mongoose.Schema.Types.ObjectId, ref: 'Brand', required:true},
    created_at: {type: Date, required:true },
    updated_at: {type: Date},
});

module.exports = mongoose.model('DailySell', dailySellSchema);
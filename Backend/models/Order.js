const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    orderNumber: String,
    mobileNo: String,
    totalBurgers: [
        {
            type: Map,
            of: Number 
        }
    ],
    totalPrice: Number
});

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;

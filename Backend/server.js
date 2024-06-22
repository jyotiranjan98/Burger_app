const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const Order = require('./models/Order');
const app = express();


app.use(bodyParser.json());
app.use(cors());


const uri = "mongodb+srv://jyotidas955:dJ5A0ui1WuonLPeQ@cluster0.knhiyfl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(uri)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));

// API Routes
app.post('/api/orders', async (req, res) => {
    const { mobileNo, totalBurgers, totalPrice } = req.body;

    try {

        const orderCount = await Order.countDocuments();
        const orderNumber = `BURG-${String(orderCount + 1).padStart(3, '0')}`;

        const newOrder = new Order({ orderNumber, mobileNo, totalBurgers, totalPrice });
        await newOrder.save();

        res.json({ orderNumber });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while creating the order.' });
    }
});

app.listen(5000, () => console.log('Server running on port 5000'));

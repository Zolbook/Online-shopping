const express = require('express');
const mongoose = require('mongoose'); 
const { Warehouse, UserLocation } = require('./db');
const router = express.Router();

const createAndSaveWarehouses = async () => {
    const warehouses = [
        {
            name: '10-р хороолол',
            location: { type: "Point", coordinates: [106.86491479486024, 47.916657865578784] },
        },
        {
            name: 'Grand plaza',
            location: { type: "Point", coordinates: [106.89242353050601, 47.91490333370539] },
        },
        {
            name: 'Төв номын сан',
            location: { type: "Point", coordinates: [106.91939306939472, 47.91597438893693] },
        },
        {
            name: '21-р хороолол',
            location: { type: "Point", coordinates: [ 106.82155406185898, 47.9219630756081] },
        },

    ];

    for (let warehouseData of warehouses) {
        const existingWarehouse = await Warehouse.findOne({ name: warehouseData.name });
        if (existingWarehouse) {
            console.log(`Warehouse with name ${warehouseData.name} already exists.`);
            continue;  
        }
        try {
            const warehouse = new Warehouse(warehouseData);
            await warehouse.save();
            console.log(`Saved ${warehouse.name} to database.`);
        } catch (error) {
            console.error('Error saving warehouse:', error.message);
        }
    }
};

createAndSaveWarehouses();
const fetchAndLogWarehouses = async () => {
    try {
        const warehouses = await Warehouse.find({});
        console.log("All warehouses:", warehouses);
    } catch (error) {
        console.error('Error fetching warehouses:', error.message);
    }
};

fetchAndLogWarehouses();
router.get('/warehouses', async (req, res) => {
    try {
        const warehouses = await Warehouse.find({});
        res.json(warehouses);
    } catch (error) {
        console.error('Error fetching warehouses:', error.message);
        res.status(500).send('Error fetching warehouses');
    }
});
module.exports = router;



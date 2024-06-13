const express = require('express');
const router = express.Router();
const MilkProduction = require('../models/milkProduction');

// Create a new milk production record
router.post('/milkProduction', async (req, res) => {
  try {
    const { date, records } = req.body;

    const savedRecords = await Promise.all(records.map(async record => {
      const newRecord = new MilkProduction({
        tagId: record.tagId,
        morning: record.morning,
        evening: record.evening,
        date,
        grandTotal: record.grandTotal
      });

      return await newRecord.save();
    }));

    res.status(201).json(savedRecords);
  } catch (error) {
    console.error('Error creating milk production records:', error);
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;

const express = require('express');
const router = express.Router();

const HealthCheck = require('../models/HealthCheck');
const LabTest = require('../models/LabTest');
const Medication = require('../models/Medication');
const ReproductiveHealth = require('../models/ReproductiveHealth');
const Vaccination = require('../models/Vaccination');

// Health Checks
router.post('/healthChecks', async (req, res) => {
  try {
    const healthCheck = new HealthCheck(req.body);
    await healthCheck.save();
    res.status(201).send(healthCheck);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get('/healthChecks', async (req, res) => {
  try {
    const healthChecks = await HealthCheck.find();
    res.send(healthChecks);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Lab Tests
router.post('/labTests', async (req, res) => {
  try {
    const labTest = new LabTest(req.body);
    await labTest.save();
    res.status(201).send(labTest);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get('/labTests', async (req, res) => {
  try {
    const labTests = await LabTest.find();
    res.send(labTests);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Medication
router.post('/medication', async (req, res) => {
  try {
    const medication = new Medication(req.body);
    await medication.save();
    res.status(201).send(medication);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get('/medication', async (req, res) => {
  try {
    const medications = await Medication.find();
    res.send(medications);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Reproductive Health
router.post('/reproductiveHealth', async (req, res) => {
  try {
    const reproductiveHealth = new ReproductiveHealth(req.body);
    await reproductiveHealth.save();
    res.status(201).send(reproductiveHealth);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get('/reproductiveHealth', async (req, res) => {
  try {
    const reproductiveHealthRecords = await ReproductiveHealth.find();
    res.send(reproductiveHealthRecords);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Vaccination
router.post('/vaccination', async (req, res) => {
  try {
    const vaccination = new Vaccination(req.body);
    await vaccination.save();
    res.status(201).send(vaccination);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get('/vaccination', async (req, res) => {
  try {
    const vaccinations = await Vaccination.find();
    res.send(vaccinations);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;

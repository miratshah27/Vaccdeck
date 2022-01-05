const express = require('express');
const router = express.Router();
const { getVaccineInfo, updateVaccineInfo, addVaccineInfo, deleteVaccineInfo, normal } = require('../controllers/vaccination');

router.route('/:id')
    .get(getVaccineInfo) //get vaccine info for given person's ID
    .put(updateVaccineInfo) //update vaccine info for given person's ID
    .delete(deleteVaccineInfo);

router.route('/')
    .post(addVaccineInfo);

module.exports = router;
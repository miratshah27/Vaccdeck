const mongoose = require('mongoose');

const VaccinationSchema = new mongoose.Schema({
    _id: {
        type: Number,
        required: true
    },
    mobileNo:{
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    sex: {
        type: String,
        required: true
    },
    vaccineID: {
        //covishield - 1, covaccine - 2, sputnik - 3
        type: Number,
        required: true
    },
    firstDoseDate: {
        type: Date,
        required: false
    },
    secondDoseDate: {
        type: Date,
        required: false
    },
    fullyVaccinated: {
        type: Boolean,
        default: false,
        required: true
    },
    sideEffects: {
        type: String
    }
});

module.exports = mongoose.model('vaccine-info', VaccinationSchema);

// {
//     "_id": 123456789900,
//     "mobileNo": 9870805145,
//     "name": "Mirat Shah",
//     "age": 19,
//     "sex": "male",
//     "vaccineID": 1,
//     "firstDoseDate": "2021-07-02",
//     "secondDoseDate": "2021-09-28",
//     "fullyVaccinated": true,
//     "sideEffect": "Fever for 1.5 days after vaccination"
// }
const VaccineInfo = require('../models/vaccination');

exports.getVaccineInfo = async (req, res, next) => {
    try {
        const personVaccineInfo = await VaccineInfo.findById(req.params.id);

        return res.status(200).json({
            success: true,
            data: personVaccineInfo
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: "Server error"
        });
    }
}

exports.updateVaccineInfo = async (req, res, next) => {
    try {
        const personVaccineInfo = await VaccineInfo.findById(req.params.id);

        if(!personVaccineInfo){
            return res.status(400).json({
                success: false,
                error: 'No such ID existes'
            });
        }else{
            const updatedVaccineInfo = Object.assign(personVaccineInfo, req.body);
            // issue : receiving updated data but not actually updating database
            await personVaccineInfo.replaceOne(updatedVaccineInfo);
            return res.status(200).json({
                success: true,
                data: updatedVaccineInfo
            });
        }
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: `${error.message}`
        });
    }
}

exports.addVaccineInfo = async (req, res, next) => {
    try {
        const personVaccineInfo = await VaccineInfo.create(req.body);
        return res.status(201).json({
            success: true,
            data: personVaccineInfo
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Server error'
        });
    }
}

exports.deleteVaccineInfo = async (req, res, next) => {
    try {
        const personVaccineInfo = await VaccineInfo.findById(req.params.id);

        if(!personVaccineInfo){
            return res.status(400).json({
                success: false,
                error: 'No such ID exists'
            });
        }else{
            await personVaccineInfo.remove();

            return res.status(200).json({
                success: true,
                message: 'Vaccine info deleted successfully'
            });
        }
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Server error'
        });
    }
}
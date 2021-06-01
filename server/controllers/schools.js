const {
    findMany,
    findOne,
    findWizards
} = require('../models/schools');

const getAllSchools = async (req, res) => {
    const rawData = await findMany();
    res.json(rawData);
}

const getOneSchool = async (req, res) => {
    const rawData = await findOne(req.params.id);
    res.json(rawData);
}

const getWizardFromSchool = async (req, res) => {
    const rawData = await findWizards(req.params.id);
    res.json(rawData);
}

module.exports = {
    getAllSchools,
    getOneSchool,
    getWizardFromSchool
}
const SoilDetails = require("../models/SoilDetails");

exports.updateSoilDetails = async (req, res) => {
    try {
        const {
            pH,
            phosphorus,
            potassium,
            magnesium,
            limestone,
            calcium,
            cec,
            zinc,
            copper,
            sulfur,
        } = req.body;

        const updateFields = {};

        if (pH) updateFields.pH = pH;
        if (phosphorus) updateFields.phosphorus = phosphorus;
        if (potassium) updateFields.potassium = potassium;
        if (magnesium) updateFields.magnesium = magnesium;
        if (limestone) updateFields.limestone = limestone;
        if (calcium) updateFields.calcium = calcium;
        if (cec) updateFields.cec = cec;
        if (zinc) updateFields.zinc = zinc;
        if (copper) updateFields.copper = copper;
        if (sulfur) updateFields.sulfur = sulfur;

        console.log(updateFields);

        const soilDetail = await SoilDetails.create(updateFields);

        return res.status(200).json({
            success: true,
            message: "Soil details updated successfully",
            soilDetail
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Soil details cannot be updated. Please try again later"
        });
    }
};
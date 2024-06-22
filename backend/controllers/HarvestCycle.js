const HarvestCycle = require("../models/HarvestCycle");
const Crop = require("../models/Crop");

exports.harvestCycleData = async (req, res) => {
    const inputData = req.body;

    try {
        // Check if the crop exists in the Crop collection
        let crops = [];

        for (const cropData of inputData.crop) {
            let crop = await Crop.findOne({ crop: cropData.crop });

            if (!crop || crop.seedsUsed !== cropData.seedsUsed) {
                // Crop does not exist or seedsUsed is different, create a new crop
                crop = new Crop({
                    crop: cropData.crop,
                    seedsUsed: cropData.seedsUsed
                });
                await crop.save();
            }

            crops.push(crop._id);
        }

        // Create new input document
        const harvestCycle = new HarvestCycle({
            crop: crops,
            season: inputData.season,
            transplanting: inputData.transplanting,
            irrigationMethod: inputData.irrigationMethod,
            yield: inputData.yield
        });

        // Save input document to the database
        await harvestCycle.save();

        res.status(200).send('Data inserted successfully!');
    } catch (error) {
        console.error('Error inserting data:', error);
        res.status(500).send('Error inserting data');
    }
};

exports.updateSeedHarvestDate = async (req, res) => {

    const {harvestCycleId} = req.body;

    try {
        // Update the seedHarvestDate to the current date
        const updatedHarvestCycle = await HarvestCycle.findByIdAndUpdate(
            harvestCycleId,
            { seedHarvestDate: new Date() },
            { new: true, runValidators: true }
        );

        if (!updatedHarvestCycle) {
            return res.status(404).json({ error: 'HarvestCycle not found' });
        }

        res.status(200).json({ message: 'seedHarvestDate updated successfully', data: updatedHarvestCycle });
    } catch (error) {
        console.error('Error updating seedHarvestDate:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
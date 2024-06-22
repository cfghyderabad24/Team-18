const User = require("../models/User");

exports.visualData =  async (req, res) => {
    try {
        // Fetch all farmers
        const farmers = await User.find({ accountType: 'Farmer' })
            .populate('additionalDetails')
            .populate({
                path: 'harvestCycle',
                populate: {
                    path: 'crop'
                }
            });

        if (!farmers.length) {
            return res.status(404).json({ error: 'No farmers found' });
        }

        // Collecting required data for each farmer
        const farmerDetails = farmers.map(user => {
            const profile = user.additionalDetails;
            const harvestCycle = user.harvestCycle;

            const farmerDetail = {
                name: `${user.firstName} ${user.lastName}`,
                age: profile.age,
                gender: profile.gender,
                fieldSize: profile.areaPloughed,
                pincode: profile.pincode,
                village: profile.village,
                state: profile.state,
                yield: harvestCycle ? harvestCycle.yield : null,
                crops: harvestCycle && harvestCycle.crop.length > 0 ? [harvestCycle.crop[0].crop] : [],
                irrigationMethod: harvestCycle ? harvestCycle.irrigationMethod : null,
                fertilizersUse: profile.fertilizersUsed
            };

            // Check for empty fields
            if (
                !farmerDetail.name ||
                !farmerDetail.age ||
                !farmerDetail.gender ||
                !farmerDetail.fieldSize ||
                !farmerDetail.pincode ||
                !farmerDetail.village ||
                !farmerDetail.state ||
                !farmerDetail.yield ||
                !farmerDetail.crops.length ||
                !farmerDetail.irrigationMethod ||
                !farmerDetail.fertilizersUse
            ) {
                return null;
            }

            return farmerDetail;
        }).filter(detail => detail !== null); // Filter out any null entries

        if (!farmerDetails.length) {
            return res.status(404).json({ error: 'No complete farmer details found' });
        }

        res.json(farmerDetails);
    } catch (error) {
        console.error('Error fetching farmer details:', error);
        res.status(500).json({ error: 'Server error' });
    }
};



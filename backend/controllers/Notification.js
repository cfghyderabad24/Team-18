const NotificationModel = require("../models/Notifications");
const UserModel = require("../models/User");

exports.sendNotifs = async (req, res) => {
    try {
        const { heading, body, users } = req.body;

        const newNotif = await new NotificationModel({
            heading,
            body
        }).save();

        await Promise.all(users.map(userId => 
            UserModel.findByIdAndUpdate(
                userId, 
                { $push: { notifications: newNotif._id } },
                { new: true } 
            )
        ));

        res.json("success");
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Error in sending notification"
        });
    }
};

exports.deleteNotif = async (req, res) => {
    try {
        const { userId, notificationId } = req.body;
        const updatedUser = await UserModel.findByIdAndUpdate(
            userId,
            { $pull: { notifications: notificationId } },
            { new: true }
        );

        if (!updatedUser) {
            return res.status(404).json({ error: "User not found" });
        }

        await NotificationModel.findByIdAndDelete(notificationId);

        res.json({ message: "Notification removed successfully", user: updatedUser });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Error in deleting notification"
        });
    }
};

exports.getAllNotif = async (req, res) => {
    try {
        const { userId } = req.body;
        const updatedUser = await UserModel.findById(userId).populate("notifications");

        if (!updatedUser) {
            return res.status(404).json({ error: "No notifications" });
        }

        res.json({ message: "Got all notifications successfully", user: updatedUser.notifications });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Error in get all notifications"
        });
    }
};
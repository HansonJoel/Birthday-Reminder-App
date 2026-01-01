const cron = require("node-cron");
const User = require("../model/user");
const sendBirthdayEmail = require("./emailService");

const startBirthdayJob = () => {
  cron.schedule("0 7 * * *", async () => {
    console.log("Running birthday check...");

    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth();
    const year = today.getFullYear();

    const users = await User.find();

    for (let user of users) {
      const dob = new Date(user.dateOfBirth);

      if (
        dob.getDate() === day &&
        dob.getMonth() === month &&
        user.lastEmailedYear !== year
      ) {
        await sendBirthdayEmail(user);

        user.lastEmailedYear = year;
        await user.save();

        console.log(`Birthday email sent to ${user.email}`);
      }
    }
  });
};

module.exports = startBirthdayJob;

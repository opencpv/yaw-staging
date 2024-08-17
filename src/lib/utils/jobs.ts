import Schedule from "node-schedule";

// Rule for scheduling (every day at 2:30 PM)
const rule = new Schedule.RecurrenceRule();
// rule.hour = 14; // 2 (0-based index) for 2 PM
// rule.minute = 30;
rule.second = 5;

// Schedule the task
const job = Schedule.scheduleJob("42 * * * *", () => {});

setInterval(() => {}, 3000);

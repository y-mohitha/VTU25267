const fs = require("fs");

const data = JSON.parse(
  fs.readFileSync("notification.json")
);

const notifications = data.notifications;

function getPriority(type) {
  switch (type) {
    case "Placement":
      return 3;
    case "Result":
      return 2;
    case "Event":
      return 1;
    default:
      return 0;
  }
}

notifications.sort((a, b) => {
  const priority1 = getPriority(a.Type);
  const priority2 = getPriority(b.Type);

  if (priorityA !== priorityB) {
    return priorityB - priorityA;
  }

  return (
    new Date(b.Timestamp).getTime() -
    new Date(a.Timestamp).getTime()
  );
});

const top10 = notifications.slice(0, 10);


top10.forEach((notification, index) => {
  console.log(`Notification ${index + 1}`);
  console.log(`ID        : ${notification.ID}`);
  console.log(`Type      : ${notification.Type}`);
  console.log(`Message   : ${notification.Message}`);
  console.log(`Timestamp : ${notification.Timestamp}`);
 
});
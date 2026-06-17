import { useEffect, useState } from "react";
import { getNotifications } from "../services/api";
import NotificationCard from "../components/NotificationCard";
import { Container, Typography } from "@mui/material";

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

function PriorityNotifications() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    async function loadData() {
      const data = await getNotifications();

      const sorted = [...data].sort(
        (a, b) => {
          const p1 = getPriority(a.Type);
          const p2 = getPriority(b.Type);

          if (p1 !== p2) {
            return p2 - p1;
          }

          return (
            new Date(b.Timestamp) -
            new Date(a.Timestamp)
          );
        }
      );

      setNotifications(
        sorted.slice(0, 10)
      );
    }

    loadData();
  }, []);

  return (
    <Container>
      <Typography
        variant="h4"
        sx={{ mt: 2, mb: 2 }}
      >
        Top 10 Priority Notifications
      </Typography>

      {notifications.map(
        (notification) => (
          <NotificationCard
            key={notification.ID}
            notification={notification}
            viewed={false}
            onView={() => {}}
          />
        )
      )}
    </Container>
  );
}

export default PriorityNotifications;
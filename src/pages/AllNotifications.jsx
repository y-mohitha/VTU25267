import { useEffect, useState } from "react";
import { getNotifications } from "../services/api";
import NotificationCard from "../components/NotificationCard";
import {
  Container,
  Typography,
  Select,
  MenuItem
} from "@mui/material";

function AllNotifications() {
  const [notifications, setNotifications] = useState([]);
  const [filter, setFilter] = useState("All");
  const [viewed, setViewed] = useState(
    JSON.parse(localStorage.getItem("viewed")) || []
  );

  useEffect(() => {
    async function loadData() {
      const data = await getNotifications();
      setNotifications(data);
    }

    loadData();
  }, []);

  const handleView = (id) => {
    if (!viewed.includes(id)) {
      const updated = [...viewed, id];

      setViewed(updated);

      localStorage.setItem(
        "viewed",
        JSON.stringify(updated)
      );
    }
  };

  const filtered =
    filter === "All"
      ? notifications
      : notifications.filter(
          (n) => n.Type === filter
        );

  return (
    <Container>
      <Typography variant="h4" sx={{ mt: 2 }}>
        All Notifications
      </Typography>

      <Select
        value={filter}
        onChange={(e) =>
          setFilter(e.target.value)
        }
        sx={{ mt: 2, mb: 2 }}
      >
        <MenuItem value="All">All</MenuItem>
        <MenuItem value="Placement">
          Placement
        </MenuItem>
        <MenuItem value="Result">
          Result
        </MenuItem>
        <MenuItem value="Event">
          Event
        </MenuItem>
      </Select>

      {filtered.map((notification) => (
        <NotificationCard
          key={notification.ID}
          notification={notification}
          viewed={viewed.includes(
            notification.ID
          )}
          onView={handleView}
        />
      ))}
    </Container>
  );
}

export default AllNotifications;
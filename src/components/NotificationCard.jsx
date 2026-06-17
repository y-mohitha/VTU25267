import {
  Card,
  CardContent,
  Typography,
  Chip
} from "@mui/material";

function NotificationCard({
  notification,
  viewed,
  onView
}) {
  return (
    <Card
      sx={{ mb: 2 }}
      onClick={() => onView(notification.ID)}
    >
      <CardContent>
        <Typography variant="h6">
          {notification.Type}
        </Typography>

        <Typography>
          {notification.Message}
        </Typography>

        <Typography variant="body2">
          {notification.Timestamp}
        </Typography>

        <Chip
          label={viewed ? "Viewed" : "New"}
          color={viewed ? "success" : "error"}
          sx={{ mt: 1 }}
        />
      </CardContent>
    </Card>
  );
}

export default NotificationCard;
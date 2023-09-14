import { useState, useEffect } from "react";
import { IconButton, Badge, Modal } from "@mui/material";
import { Notifications as NotificationsIcon } from "@mui/icons-material";
import WidgetWrapper from "./WidgetWrapper";

function NotificationButton() {
    const [open, setOpen] = useState(false);
    const [hasSeenNotifications, setHasSeenNotifications] = useState(
      localStorage.getItem("hasSeenNotifications") === "false"
    );
  
    useEffect(() => {
      if (hasSeenNotifications) {
        localStorage.setItem("hasSeenNotifications", "true");
      }
    }, [hasSeenNotifications]);
  
    return (
      <>
        <IconButton color="inherit" onClick={() => setOpen(true)}>
          <Badge badgeContent={hasSeenNotifications ? 0 : 1} color="error">
            <NotificationsIcon sx={{ fontSize: "25px" }} />
          </Badge>
        </IconButton>
        <Modal
          open={open}
          onClose={() => {
            setOpen(false);
            setHasSeenNotifications(true);
          }}
          onOpen={() => setHasSeenNotifications(true)}
        >
            <WidgetWrapper>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%"
                }}
              >
                <p>This my fullstack social media project</p>
                <p>Many functions are still in development, but I hope you liked the existing functionality :)</p>
                <p>For any suggestions please contact @HarshxHunter</p>
              </div>
            </WidgetWrapper>
        </Modal>
      </>
    );
  }
export default NotificationButton;

import { Box, Button, Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // مثال بسيط: امسح token من localStorage
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <Box sx={{ width: "min(100% , 480px)" }}>
      <Paper
        elevation={3}
        sx={{
          p: 3,
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Typography variant="h6">Are you sure you want to log out?</Typography>
        <Button onClick={handleLogout} color="error" variant="contained">
          Log Out
        </Button>
      </Paper>
    </Box>
  );
}

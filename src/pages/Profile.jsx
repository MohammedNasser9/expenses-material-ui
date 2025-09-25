import { Avatar, Box, Paper, Typography } from "@mui/material";

export default function Profile() {
  return (
    <Box sx={{ width: "min(100% , 480px)" }}>
      <Paper
        elevation={3}
        sx={{
          p: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Avatar sx={{ width: 80, height: 80 }} />
        <Typography variant="h5">Mohammed Nasser</Typography>
        <Typography color="text.secondary">mohammed@email.com</Typography>
      </Paper>
    </Box>
  );
}

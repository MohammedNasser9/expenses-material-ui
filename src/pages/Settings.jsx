import { Box, FormControlLabel, Switch, Typography, Paper } from "@mui/material";
import { useThemeMode } from "../ThemeContext";

export default function Settings() {
  const { mode, toggleTheme } = useThemeMode();

  return (
    <Box sx={{ width: "min(100% , 480px)" }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h5" mb={2}>
          Settings
        </Typography>
        <FormControlLabel
          control={<Switch checked={mode === "dark"} onChange={toggleTheme} />}
          label="Dark Mode"
        />
      </Paper>
    </Box>
  );
}

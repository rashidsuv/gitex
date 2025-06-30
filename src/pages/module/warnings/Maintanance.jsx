import { useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Maintanance() {
  const navigate = useNavigate();
  return (
    <Box className="flex items-center justify-center !mt-40">
      <Stack spacing={2} justifyContent="start" alignItems="center">
        <Typography align="center" variant="h4">
          Under Construction
        </Typography>
        <Typography align="center" sx={{ width: "85%" }}>
          Hey! Please check out this menu later. We are doing some maintenance
          on it right now.
        </Typography>
        <Button
          variant="contained"
          className="bg-gradient-to-r from-[#299D3F] to-[#123F22] text-white"
          onClick={() => navigate("/")}
        >
          Back To Home
        </Button>
      </Stack>
    </Box>
  );
}

import { useNavigate } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";

export default function SuccessPage() {
  const navigate = useNavigate();

  return (
    <Box className="!rounded-[10px] bg-white shadow p-15 text-center mx-auto !mt-20 my-10 max-w-[600px] border-t-[6px] border-t-[#299D3F]">
      <Typography variant="h5" className="!font-bold !text-black !mb-6">
        THANK YOU!
      </Typography>
      <Typography variant="body1" className="text-[#1A1A1A] !mb-4">
        Your Registration Has Been Submitted Successfully
      </Typography>
      <Typography variant="body2" className="text-[#1A1A1A] !mb-4">
        A Confirmation Email With Your Event Details Will Be Sent To You
        Shortly. Please Check Your Inbox (And Spam Folder).
      </Typography>
      <Button
        variant="contained"
        className="bg-gradient-to-r from-[#299D3F] to-[#123F22] text-white"
        onClick={() => navigate("/")}
      >
        Return To Homepage
      </Button>
    </Box>
  );
}

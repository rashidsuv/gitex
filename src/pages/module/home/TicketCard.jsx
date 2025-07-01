import { useNavigate } from "react-router-dom";

import { Box, Typography, Divider, ButtonBase } from "@mui/material";

import ticket_bg1 from "../../../assets/images/ticket_bg1.png";
import ticket_bg2 from "../../../assets/images/ticket_bg2.jpg";
import ticket_bg3 from "../../../assets/images/ticket_bg3.jpg";
import bg_header from "../../../assets/images/ticket_header.png";

export default function TicketCard({ ticket }) {
  const navigate = useNavigate();

  const gradients = [
    "linear-gradient(to right, #5B2A7C, #431B5A)",
    "linear-gradient(to right, #CD670A, #CA3722)",
    "linear-gradient(to right, #173903, #081D01)",
    "linear-gradient(to right, #B5040A, #631308)",
    "linear-gradient(to right, #53BE2C, #27870C)",
    "linear-gradient(to right, #004D98, #01277C)",
  ];
  const selectedGradient = gradients[ticket.id];

  const bgImages = [
    ticket_bg1,
    ticket_bg2,
    ticket_bg3,
    ticket_bg2,
    ticket_bg2,
    ticket_bg3,
  ];
  const selectedBgImage = bgImages[ticket.id];

  return (
    <Box className="overflow-hidden rounded-[28px]">
      <Box
        className="rounded-t-[28px] !pl-10"
        sx={{
          background: `${selectedGradient}, url(${bg_header})`,
          backgroundBlendMode: "overlay",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          padding: 2,
        }}
      >
        <Typography className="text-white !font-bold">
          {ticket.title}
        </Typography>
        <ButtonBase
          className="!text-[#E6FF00] !text-sm"
          onClick={() => navigate("/registration")}
        >
          VIEW DETAILS →
        </ButtonBase>
      </Box>

      <Box
        className="relative"
        sx={{
          backgroundImage: `url(${selectedBgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Box
          className="absolute inset-0"
          sx={{
            backgroundColor: "#000000DE",
            backdropFilter: "blur(4px)",
          }}
        />
        <Box className="relative z-10 p-4 text-white !max-h-[300px] !min-h-[300px]">
          {ticket.content}
          <Divider className="bg-gradient-to-r from-[#FFFFFF] to-[#FFFFFF05] h-[2px] absolute bottom-15 right-0 left-9 w-[80%]" />
          {ticket.footer}
        </Box>
      </Box>
    </Box>
  );
}

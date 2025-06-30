import { Link } from "react-router-dom";

import TicketCard from "./TicketCard";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import gitex_ai from "../../../assets/images/gitex_ai.png";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Grid, Box, Typography, IconButton, Button } from "@mui/material";

const features = [
  "Access to ConneXions & Investor Lounge",
  "Network Events",
  "All Conference Tracks",
  "All Masterclasses",
  "3 Days Access to the Show",
  "Access to Dubai Internet City Lounge",
];

const content1 = (
  <Box className="mt-6 p-4">
    <Typography className="text-white  !text-[0.8rem]">
      Visitor Passes provide{" "}
      <span className="text-[#16DB65] font-semibold">3 DAYS ACCESS</span> to
      GITEX NIGERIA exhibition and all free conference
    </Typography>
    <Box
      className="!w-35 !h-14 mt-4"
      sx={{
        backgroundImage: `url(${gitex_ai})`,
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    ></Box>
  </Box>
);

const content2 = (
  <Box className="p-4">
    <Typography className="text-white  !text-[0.8rem]">
      Visitor Passes provide{" "}
      <span className="text-[#16DB65] font-semibold">3 DAYS ACCESS</span> to
      GITEX NIGERIA exhibition and all free conference
    </Typography>
    <Box className="flex flex-wrap gap-2 mt-2">
      {features.map((feature, index) => (
        <Box
          key={index}
          className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm"
        >
          <CheckCircleIcon className="text-[#00C308] " fontSize="small" />
          <Typography className="text-white !text-[0.8rem] whitespace-nowrap">
            {feature}
          </Typography>
        </Box>
      ))}
    </Box>
  </Box>
);

const footer1 = (
  <Box className="flex items-center justify-between  mt-2 absolute !bottom-4 left-10 w-[80%]">
    <Box className="flex items-center gap-2">
      <Typography className="text-white text-sm !font-bold">
        USD <span className="line-through text-red-600">43</span>
      </Typography>
      <Typography className="bg-black text-white !font-bold px-1 py-[1px] rounded border border-white">
        32.5
      </Typography>
      <Typography className="text-white !text-xs">Incl. 20% VAT</Typography>
    </Box>

    <Box className="flex items-center border border-white rounded overflow-hidden text-white">
      <IconButton
        size="small"
        className="!text-white !p-0.5"
        sx={{ borderRadius: 0 }}
      >
        <RemoveIcon fontSize="small" />
      </IconButton>
      <Box className="bg-white text-black px-3 py-[2px] text-sm">25</Box>
      <IconButton
        size="small"
        className="!text-white !p-0.5"
        sx={{ borderRadius: 0 }}
      >
        <AddIcon fontSize="small" />
      </IconButton>
    </Box>
  </Box>
);

const footer2 = (
  <Box className="flex items-center justify-between  !mt-2 absolute !bottom-4 left-10 w-[80%]">
    <Box className="flex flex-col">
      <Typography className="text-white !font-bold !text-sm">FREE</Typography>
      <Typography className="!text-[#8F8F8F] !text-[0.6rem]">
        INCL. 20% VAT
      </Typography>
    </Box>

    <Box className="flex items-center border border-white rounded overflow-hidden text-white">
      <Button
        variant="contained"
        size="small"
        className="!bg-white !text-black !font-bold"
        component={Link}
        to="/registration"
      >
        BUY NOW
      </Button>
    </Box>
  </Box>
);

const tickets = [
  {
    id: 0,
    title: "VISITOR 3 DAY ACCESS TICKET",
    content: content1,
    footer: footer1,
  },
  {
    id: 1,
    title: "VISITOR 3 DAY ACCESS TICKET",
    content: content2,
    footer: footer2,
  },
  {
    id: 2,
    title: "VISITOR 3 DAY ACCESS TICKET",
    badge: "EXCLUSIVE",
    content: content2,
    footer: footer2,
  },
  {
    id: 3,
    title: "VISITOR 3 DAY ACCESS TICKET",
    badge: "BEST SELLER",
    content: content2,
    footer: footer2,
  },
  {
    id: 4,
    title: "VISITOR 3 DAY ACCESS TICKET",
    content: content2,
    footer: footer2,
  },
  {
    id: 5,
    title: "VISITOR 3 DAY ACCESS TICKET",
    content: content2,
    footer: footer2,
  },
];

export default function HomePage() {
  return (
    <Grid container spacing={1.5} className="!mt-4">
      {tickets.map((ticket) => (
        <Grid item size={{ xs: 12, sm: 6, md: 4 }} key={ticket.id}>
          <TicketCard ticket={ticket} />
        </Grid>
      ))}
    </Grid>
  );
}

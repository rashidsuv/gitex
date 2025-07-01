import { AppBar, Toolbar } from "@mui/material";
import bg_header from "../../assets/images/bg_header_footer.png";

export default function Header() {
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundImage: `url(${bg_header})`,
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        zIndex:10002
      }}
    >
      <Toolbar className="!min-h-[110px] px-2">{/* login button remine */}</Toolbar>
    </AppBar>
  );
}

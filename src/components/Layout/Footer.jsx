import youtube from "../../assets/images/Youtube.png";
import twitter from "../../assets/images/Twitter.png";
import linkedin from "../../assets/images/Linkedin.png";
import facebook from "../../assets/images/Facebook.png";
import instagram from "../../assets/images/Instagram.png";
import footer_logo from "../../assets/images/footer_logo.png";
import bg_header from "../../assets/images/bg_header_footer.png";

import { Box, IconButton, Stack, Toolbar } from "@mui/material";

export default function Footer() {
  const socialLinks = [
    { href: "https://facebook.com", src: facebook, alt: "Facebook" },
    { href: "https://twitter.com", src: twitter, alt: "Twitter" },
    { href: "https://instagram.com", src: instagram, alt: "Instagram" },
    { href: "https://linkedin.com", src: linkedin, alt: "LinkedIn" },
    { href: "https://youtube.com", src: youtube, alt: "YouTube" },
  ];
  return (
    <Box
      component="footer"
      sx={{
        position: "relative",
        backgroundImage: `url(${bg_header})`,
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "130px",
      }}
    >
      <Toolbar className="px-2 flex flex-col justify-center items-center h-full">
        <Box
          component="img"
          src={footer_logo}
          alt="Footer Logo"
          className="max-h-[60px] object-contain"
        />

        <Stack direction="row" spacing={2.5} mt={1}>
          {socialLinks.map(({ href, src, alt }) => (
            <IconButton
              key={alt}
              href={href}
              target="_blank"
              rel="noopener"
              className="!p-0"
            >
              <Box component="img" src={src} alt={alt} className="w-6 h-6" />
            </IconButton>
          ))}
        </Stack>
      </Toolbar>
    </Box>
  );
}

import { Box, Typography } from "@mui/material";
import info_logo from "../../../assets/images/info_icons.png";
import bg_header from "../../../assets/images/bg_header_footer.png";

const RegistrationInfoCard = ({ forms }) => {
  return (
    <>
      <Box className="w-full h-full flex flex-col mx-auto my-auto">
        <Box
          sx={{
            position: "sticky",
            top: 0,
            zIndex: 100,
            backgroundImage: `url(${bg_header})`,
            backgroundSize: "100% 100%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            borderTopLeftRadius: "9.77px",
            borderTopRightRadius: "9.77px",
            py: 3.2,
          }}
        >
          <Box
            component="img"
            src={info_logo}
            alt="Footer Logo"
            className="max-h-[40px] object-contain ml-3"
          />
        </Box>

        <Box className="overflow-y-auto flex-1 w-full max-h-screen">
          {forms.map((item, index) => {
            const labels = [
              { label: "JOB TITLE", name: item.jobTitle },
              { label: "COMPANY NAME", name: item.companyName },
              {
                label: "COUNTRY OF RESIDENCE",
                name: item.countryOfResidenceName,
              },
            ];
            return (
              <>
                <Box className="border border-solid border-[#EBEBEBEE] rounded-[10px] rounded-tl-none rounded-tr-none flex flex-col items-center text-center gap-3">
                  <Typography className="bg-gradient-to-r from-[#299D3F] to-[#123F22] text-white rounded-[10px] p-2 rounded-tl-none rounded-tr-none w-auto !px-5">
                    Registration Information {index + 1}
                  </Typography>
                  <Typography
                    className={`${
                      item.firstName === "" ? "text-[#D4D4D4]" : "text-black"
                    } !text-[1.5rem] font-extrabold  uppercase`}
                  >
                    {item.firstName?.trim() !== ""
                      ? `${item.firstName} ${item.lastName?.trim() || ""}`
                      : "FULL NAME"}
                  </Typography>

                  {labels.map((item) => {
                    return (
                      <Typography
                        className={`${
                          item.name === "" ? "text-[#D4D4D4]" : "text-black"
                        } font-extrabold uppercase`}
                      >
                        {item.name !== "" ? item.name : item.label}
                      </Typography>
                    );
                  })}

                  <Box className="shadow-[0px_4.81px_33.7px_0px_#0000001F] flex flex-col text-center p-4 gap-2 w-full rounded-[10px]">
                    <Typography className="text-[#ACACAC] !text-[1.4rem]   uppercase">
                      BADGE CATEGORY
                    </Typography>
                    <Typography className="text-[#010216] !text-[1.8rem] font-extrabold  uppercase">
                      {item.vistorType}
                    </Typography>
                  </Box>
                </Box>
              </>
            );
          })}
        </Box>
      </Box>
    </>
  );
};

export default RegistrationInfoCard;

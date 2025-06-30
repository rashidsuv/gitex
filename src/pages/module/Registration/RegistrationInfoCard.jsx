import { Box, Typography } from "@mui/material";
import info_logo from "../../../assets/images/info_icons.png";
import bg_header from "../../../assets/images/bg_header_footer.png";

const RegistrationInfoCard = ({ formik }) => {
  const { jobTitle, companyName, countryOfResidenceName } = formik.values;
  const labels = [
    { label: "JOB TITLE", name: jobTitle },
    { label: "COMPANY NAME", name: companyName },
    { label: "COUNTRY OF RESIDENCE", name: countryOfResidenceName },
  ];

  return (
    <Box className="w-full mx-auto my-auto">
      <Box
        sx={{
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

      <Box className="border border-solid border-[#EBEBEBEE] rounded-[10px] rounded-tl-none rounded-tr-none flex flex-col items-center text-center gap-3">
        <Typography className="bg-gradient-to-r from-[#299D3F] to-[#123F22] text-white rounded-[10px] p-2 rounded-tl-none rounded-tr-none w-70">
          Registration Information 1
        </Typography>
        <Typography className="text-[#D4D4D4] !text-[1.5rem] font-extrabold  uppercase">
          {formik.values.firstName?.trim() !== ""
            ? `${formik.values.firstName} ${
                formik.values.lastName?.trim() || ""
              }`
            : "FULL NAME"}
        </Typography>

        {labels.map((item) => {
          return (
            <Typography className="text-[#D4D4D4] font-extrabold uppercase">
              {item.name !== "" ? item.name : item.label}
            </Typography>
          );
        })}

        <Box className="shadow-[0px_4.81px_33.7px_0px_#0000001F] flex flex-col text-center p-6 gap-3 w-full rounded-[10px]">
          <Typography className="text-[#ACACAC] !text-[1.4rem]   uppercase">
            BADGE CATEGORY
          </Typography>
          <Typography className="text-[#010216] !text-[1.8rem] font-extrabold  uppercase">
            VISITOR
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default RegistrationInfoCard;

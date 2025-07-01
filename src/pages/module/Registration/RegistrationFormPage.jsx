import * as yup from "yup";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Grid } from "@mui/material";
import RegistrationSummary from "./RegistrationSummary";
import RegistrationInfoCard from "./RegistrationInfoCard";
import CustomStepper from "../../components/CustomStepper";
import RegistrationInformationForm from "./RegistrationInformationForm";

const RegistrationFormPage = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);

  const validationSchema = yup.object({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    countryOfResidence: yup.string().required("Residence country is required"),
    email: yup
      .string()
      .email("Please enter a valid email address")
      .required("Email is required"),
    confirmEmail: yup
      .string()
      .nullable()
      .test(
        "confirm-email-match",
        "Confirm email must match email",
        function (value) {
          const { email } = this.parent;
          if (!value) return true;
          return value === email;
        }
      ),
    jobTitle: yup.string().required("Job title is required"),
    companyName: yup.string().required("Company name is required"),
    companyType: yup.string().required("Company type is required"),
    industry: yup.string().required("Industry is required"),
    mobile: yup.string().required("Phone number is required"),
    product: yup
      .array()
      .min(1, "Please select at least one product or service")
      .required("Please select at least one product or service"),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      countryOfResidence: "",
      countryOfResidenceName: "",
      region: "",
      email: "",
      confirmEmail: "",
      nationality: "",
      countryCode: "",
      mobile: "",
      companyName: "",
      jobTitle: "",
      companyType: "",
      industry: "",
      product: [],
      subProduct: [],

      promoCode: "",
    },
    validationSchema,
  });

  useEffect(() => {
    const { errors, submitCount } = formik;

    if (Object.keys(errors).length > 0 || submitCount === 0) {
      setActiveStep(0);
      formik.setFieldValue("subProduct", []);
      return;
    } else if (Object.keys(errors).length === 0 && submitCount !== 0) {
      setActiveStep(1);
    } else {
      setActiveStep(1);
      formik.setFieldValue("subProduct", []);
    }

    if (Object.keys(errors).length === 0 && activeStep === 1 && submitCount) {
      setActiveStep(2);
    } else if (Object.keys(errors).length === 0 && activeStep === 2) {
      navigate("/success");
    }
    // eslint-disable-next-line
  }, [formik.errors, formik.submitCount]);

  return (
    <>
      <CustomStepper activeStep={activeStep} />

      {[0, 1].includes(activeStep) ? (
        <Box className="border border-solid border-[#579B29] bg-white rounded-[10px] m-6 mt-8 p-3 mx-0 sm:!mx-5 md:!mx-10 lg:!mx-20">
          <Grid container spacing={1}>
            <Grid item size={{ xs: 12, md: 8 }}>
              <RegistrationInformationForm formik={formik} />
            </Grid>
            <Grid item size={{ xs: 12, md: 4 }}>
              <RegistrationInfoCard formik={formik} />
            </Grid>
          </Grid>
        </Box>
      ) : (
        [2].includes(activeStep) && <RegistrationSummary formik={formik} />
      )}
      <Box mt={2} display="flex" justifyContent="center" gap={2}>
        {activeStep > 0 && (
          <Button
            variant="contained"
            onClick={() => setActiveStep((prev) => Math.max(prev - 1, 0))}
            className="bg-gradient-to-r from-[#5C2F66] to-[#25102C]"
          >
            Previous
          </Button>
        )}
        <Button
          variant="contained"
          onClick={() => formik.handleSubmit()}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
            }
          }}
          className="bg-gradient-to-r from-[#299D3F] to-[#123F22] !px-6"
        >
          Next
        </Button>
      </Box>
    </>
  );
};

export default RegistrationFormPage;

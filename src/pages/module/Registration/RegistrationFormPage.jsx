import * as yup from "yup";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { Box, Button, Grid } from "@mui/material";
import RegistrationSummary from "./RegistrationSummary";
import RegistrationInfoCard from "./RegistrationInfoCard";
import CustomStepper from "../../components/CustomStepper";
import RegistrationInformationForm from "./RegistrationInformationForm";

const RegistrationFormPage = () => {
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
    const { errors, submitCount, values } = formik;

    if (Object.keys(errors).length > 0 || submitCount === 0) {
      setActiveStep(0);
      return;
    }

    if (values.product.length > 1) {
      setActiveStep(2);
    } else if (values.product.length === 1) {
      setActiveStep(3);
    } else {
      setActiveStep(1);
      formik.setFieldValue("subProduct", []);
    }
    // eslint-disable-next-line
  }, [formik.errors, formik.submitCount, formik.values.product]);

  return (
    <>
      <CustomStepper activeStep={activeStep} />

      {[0, 1, 2].includes(activeStep) ? (
        <Box className="border border-solid border-[#579B29] bg-white rounded-[10px] m-6 mt-8 mx-20 p-3">
          <Grid container spacing={1}>
            <Grid item size={{ xs: 12, md: 8 }}>
              <RegistrationInformationForm
                formik={formik}
                activeStep={activeStep}
                setActiveStep={setActiveStep}
              />
            </Grid>
            <Grid item size={{ xs: 12, md: 4 }}>
              <RegistrationInfoCard formik={formik} />
            </Grid>
          </Grid>
        </Box>
      ) : (
        <RegistrationSummary formik={formik} />
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
          className="bg-gradient-to-r from-[#299D3F] to-[#123F22] !px-6"
        >
          Next
        </Button>
      </Box>
    </>
  );
};

export default RegistrationFormPage;

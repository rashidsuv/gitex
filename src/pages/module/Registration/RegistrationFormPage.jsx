import * as yup from "yup";
import { useState } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { Box, Button, Grid } from "@mui/material";
import RegistrationInfoCard from "./RegistrationInfoCard";
import CustomStepper from "../../components/CustomStepper";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import RegistrationInformationForm from "./RegistrationInformationForm";

const initialFormValues = {
  firstName: "",
  lastName: "",
  countryOfResidence: "",
  countryOfResidenceName: "",
  region: "",
  email: "",
  confirmEmail: "",
  nationality: "",
  countryCode: "+234",
  mobile: "",
  companyName: "",
  jobTitle: "",
  companyType: "",
  industry: "",
  product: [],
  subProduct: [],
  promoCode: "",
  vistorType: "visitor",
};

const RegistrationFormPage = () => {
  const navigate = useNavigate();

  const ticketCount = Number(localStorage.getItem("ticketCount")) || 1;

  const [forms, setForms] = useState([initialFormValues]);
  const [activeFormIndex, setActiveFormIndex] = useState(0);

  const countryCodeMap = {
    "+91": "IN",
    "+234": "NG",
    "+44": "GB",
    "+1": "US",
  };

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
      .required("Confirm Email is required")
      .test(
        "confirm-email-match",
        "Confirm email must match email",
        function (value) {
          const { email } = this.parent;
          if (!value) return true;
          return value.toLowerCase() === email.toLowerCase();
        }
      ),
    jobTitle: yup.string().required("Job title is required"),
    companyName: yup.string().required("Company name is required"),
    companyType: yup.string().required("Company type is required"),
    industry: yup.string().required("Industry is required"),
    region: yup.string().required("Region is required"),
    nationality: yup.string().required("Nationality is required"),
    product: yup
      .array()
      .min(1, "Please select at least one product or service")
      .required("Please select at least one product or service"),
    countryCode: yup.string().required("Country code is required"),
    mobile: yup
      .string()
      .required("Phone number is required")
      .test("is-valid-mobile", "Invalid mobile number", function (value) {
        const { countryCode } = this.parent;
        if (!value || !countryCode) return false;

        const isoCode = countryCodeMap[countryCode];
        if (!isoCode) return false;

        const phoneNumber = parsePhoneNumberFromString(value, isoCode);
        return phoneNumber ? phoneNumber.isValid() : false;
      }),
  });

  const validationSchemaForChild = yup.object({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    email: yup
      .string()
      .email("Please enter a valid email address")
      .required("Email is required"),
    confirmEmail: yup
      .string()
      .nullable()
      .required("Confirm Email is required")
      .test(
        "confirm-email-match",
        "Confirm email must match email",
        function (value) {
          const { email } = this.parent;
          if (!value) return true;
          return value.toLowerCase() === email.toLowerCase();
        }
      ),
  });
  console.log("activeFormIndex", activeFormIndex);
  const formik = useFormik({
    initialValues: forms[activeFormIndex],
    validationSchema:
      activeFormIndex === 0 ? validationSchema : validationSchemaForChild,
    enableReinitialize: true,
  });

  const handleNextClick = async () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    formik.setErrors({});
    formik.setTouched({});
    const errors = await formik.validateForm();

    if (Object.keys(errors).length > 0) {
      formik.setTouched(
        Object.keys(errors).reduce((acc, key) => {
          acc[key] = true;
          return acc;
        }, {})
      );
      return;
    }

    const updatedForms = [...forms];
    updatedForms[activeFormIndex] = formik.values;
    setForms(updatedForms);

    if (activeFormIndex + 1 < ticketCount) {
      if (!updatedForms[activeFormIndex + 1]) {
        updatedForms.push({ ...initialFormValues });
      }
      setForms(updatedForms);
      setActiveFormIndex(activeFormIndex + 1);
      formik.setValues(initialFormValues);
    } else {
      navigate("/registration-summary");
    }
  };

  const handlePrevious = () => {
    if (activeFormIndex > 0) {
      setActiveFormIndex(activeFormIndex - 1);
    }
  };

  return (
    <>
      <CustomStepper activeStep={activeFormIndex} />
      <Box className="border border-solid border-[#579B29] bg-white rounded-[10px] m-6 mt-8 p-3 mx-0 sm:!mx-5 md:!mx-10 lg:!mx-20">
        <Grid container spacing={1}>
          <Grid item size={{ xs: 12, md: 8 }}>
            <RegistrationInformationForm
              key={activeFormIndex}
              index={activeFormIndex}
              formik={formik}
            />
          </Grid>
          <Grid item size={{ xs: 12, md: 4 }}>
            <RegistrationInfoCard
              forms={forms}
              formik={formik}
              activeFormIndex={activeFormIndex}
            />
          </Grid>
        </Grid>
      </Box>

      <Box mt={2} display="flex" justifyContent="center" gap={2}>
        {activeFormIndex > 0 && (
          <Button
            variant="contained"
            onClick={handlePrevious}
            className="bg-gradient-to-r from-[#5C2F66] to-[#25102C]"
          >
            Previous
          </Button>
        )}
        <Button
          type="button"
          variant="contained"
          onClick={handleNextClick}
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

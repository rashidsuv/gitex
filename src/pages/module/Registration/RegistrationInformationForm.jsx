import {
  Box,
  Grid,
  Chip,
  Stack,
  Button,
  TextField,
  Typography,
  Autocomplete,
  FormHelperText,
} from "@mui/material";
import { useState } from "react";
import { MuiTelInput } from "mui-tel-input";
import ProductOrSolutionPopup from "../../components/ProductOrSolutionPopup";

const RegistrationInformationForm = ({ formik, index }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const countryData = [
    {
      code: "IN",
      name: "India",
      regions: [
        { code: "MH", name: "Maharashtra" },
        { code: "TN", name: "Tamil Nadu" },
        { code: "KA", name: "Karnataka" },
      ],
    },
    {
      code: "US",
      name: "United States",
      regions: [
        { code: "CA", name: "California" },
        { code: "NY", name: "New York" },
        { code: "TX", name: "Texas" },
      ],
    },
    {
      code: "CA",
      name: "Canada",
      regions: [
        { code: "ON", name: "Ontario" },
        { code: "QC", name: "Quebec" },
        { code: "BC", name: "British Columbia" },
      ],
    },
  ];

  const nationalities = [
    { code: "IN", name: "Indian" },
    { code: "US", name: "American" },
    { code: "CA", name: "Canadian" },
  ];

  const industries = [
    {
      category: "Technology",
      options: [
        { value: "tech_software", label: "Software Development" },
        { value: "tech_hardware", label: "Computer Hardware" },
        { value: "tech_ai", label: "Artificial Intelligence" },
        { value: "tech_cloud", label: "Cloud Computing" },
      ],
    },
    {
      category: "Finance",
      options: [
        { value: "fin_banking", label: "Banking" },
        { value: "fin_insurance", label: "Insurance" },
        { value: "fin_investment", label: "Investment" },
        { value: "fin_fintech", label: "Fintech" },
      ],
    },
    {
      category: "Healthcare",
      options: [
        { value: "health_hospital", label: "Hospitals" },
        { value: "health_pharma", label: "Pharmaceuticals" },
        { value: "health_biotech", label: "Biotechnology" },
        { value: "health_wellness", label: "Wellness" },
      ],
    },
    {
      category: "Manufacturing",
      options: [
        { value: "mfg_automotive", label: "Automotive" },
        { value: "mfg_electronics", label: "Electronics" },
        { value: "mfg_textiles", label: "Textiles" },
        { value: "mfg_chemicals", label: "Chemicals" },
      ],
    },
    {
      category: "Retail",
      options: [
        { value: "retail_ecommerce", label: "E-commerce" },
        { value: "retail_grocery", label: "Grocery" },
        { value: "retail_apparel", label: "Apparel" },
        { value: "retail_furniture", label: "Furniture" },
      ],
    },
  ];

  const FormLabel = ({ label, required = false }) => {
    return (
      <Typography variant="subtitle1" color="textPrimary">
        {label}
        {required && <span style={{ color: "#d32f2f" }}> *</span>}
      </Typography>
    );
  };

  return (
    <Box className="w-full mx-auto my-auto">
      <Box className="bg-gradient-to-r from-[#299D3F] to-[#123F22] rounded-tl-[9.77px] rounded-tr-[9.77px] flex justify-between items-center py-3">
        <Box className="text-white p-4 text-[1.5rem] font-bold">
          Registration Information {index + 1 || 1}
        </Box>
        <Box className="border border-solid border-[#FFFFFF47] rounded-[9.77px] bg-[#FFFFFF14] text-white text-[0.9rem] font-thin pt-[11.72px] pr-[19.53px] pb-[11.72px] pl-[19.53px] mx-4">
          PREMIUM TICKET - FREEIncl. 19% VAT
        </Box>
      </Box>

      <Box className="border border-solid border-[#EBEBEBEE] rounded-[10px] p-4 rounded-tl-none rounded-tr-none">
        <Grid container spacing={3}>
          <Grid item size={{ xs: 12, sm: 6 }}>
            <Stack spacing={1}>
              <FormLabel label="First name" required />
              <TextField
                fullWidth
                id="firstName"
                name="firstName"
                value={formik.values.firstName}
                onChange={(e) => {
                  formik.setFieldValue("firstName", e.target.value.trimStart());
                }}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.firstName && Boolean(formik.errors.firstName)
                }
                helperText={formik.touched.firstName && formik.errors.firstName}
                placeholder="Enter first name"
              />
            </Stack>
          </Grid>

          <Grid item size={{ xs: 12, sm: 6 }}>
            <Stack spacing={1}>
              <FormLabel label="Last name" required />
              <TextField
                required
                id="lastName"
                name="lastName"
                value={formik.values.lastName}
                onChange={(e) => {
                  formik.setFieldValue("lastName", e.target.value.trimStart());
                }}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.lastName && Boolean(formik.errors.lastName)
                }
                helperText={formik.touched.lastName && formik.errors.lastName}
                placeholder="Enter last name"
                fullWidth
              />
            </Stack>
          </Grid>

          <Grid item size={{ xs: 12, sm: 6 }}>
            <Stack spacing={1}>
              <FormLabel label="Country of residence" required={index === 0} />
              <Autocomplete
                id="tags-outlined"
                options={countryData}
                value={
                  countryData?.find(
                    (option) => option.code === formik.values.countryOfResidence
                  ) || null
                }
                getOptionLabel={(option) => option.name}
                onChange={(_, value) => {
                  formik.setFieldValue("countryOfResidence", value.code);
                  formik.setFieldValue("countryOfResidenceName", value.name);
                  formik.setFieldValue("region", "");
                }}
                onBlur={() =>
                  formik.setFieldTouched("countryOfResidence", true)
                }
                renderInput={(params) => (
                  <TextField
                    {...params}
                    fullWidth
                    id="countryOfResidence"
                    placeholder="Choose residence country"
                    value={formik.values.countryOfResidence}
                    error={
                      formik.touched.countryOfResidence &&
                      Boolean(formik.errors.countryOfResidence)
                    }
                    helperText={
                      formik.touched.countryOfResidence &&
                      formik.errors.countryOfResidence
                    }
                  />
                )}
              />
            </Stack>
          </Grid>

          <Grid item size={{ xs: 12, sm: 6 }}>
            <Stack spacing={1}>
              <FormLabel label="Region" required={index === 0} />
              <Autocomplete
                id="tags-outlined"
                options={
                  countryData.find(
                    (val) => val.code === formik.values.countryOfResidence
                  )?.regions || []
                }
                value={
                  countryData
                    .find(
                      (val) => val.code === formik.values.countryOfResidence
                    )
                    ?.regions.find(
                      (reg) => reg.code === formik.values.region
                    ) || null
                }
                getOptionLabel={(option) => option.name}
                onChange={(_, value) => {
                  formik.setFieldValue("region", value?.code);
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    fullWidth
                    id="region"
                    placeholder="Choose region"
                    value={formik.values.region}
                    error={
                      formik.touched.region && Boolean(formik.errors.region)
                    }
                    helperText={formik.touched.region && formik.errors.region}
                  />
                )}
              />
            </Stack>
          </Grid>

          <Grid item size={{ xs: 12, sm: 6 }}>
            <Stack spacing={1}>
              <FormLabel label="Email address" required />
              <TextField
                required
                id="email"
                name="email"
                value={formik.values.email}
                onChange={(e) => {
                  formik.setFieldValue("email", e.target.value.trimStart());
                }}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                placeholder="Enter email address"
                fullWidth
              />
            </Stack>
          </Grid>

          <Grid item size={{ xs: 12, sm: 6 }}>
            <Stack spacing={1}>
              <FormLabel label="Confirm email address" required />
              <TextField
                required
                id="confirmEmail"
                name="confirmEmail"
                value={formik.values.confirmEmail}
                onChange={(e) => {
                  formik.setFieldValue(
                    "confirmEmail",
                    e.target.value.trimStart()
                  );
                }}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.confirmEmail &&
                  Boolean(formik.errors.confirmEmail)
                }
                helperText={
                  formik.touched.confirmEmail && formik.errors.confirmEmail
                }
                placeholder="Enter confirm email address"
                fullWidth
              />
            </Stack>
          </Grid>

          <Grid item size={{ xs: 12, sm: 6 }}>
            <Stack spacing={1}>
              <FormLabel label="Nationality" required={index === 0} />
              <Autocomplete
                id="tags-outlined"
                options={nationalities}
                value={
                  nationalities?.find(
                    (option) => option.code === formik.values.nationality
                  ) || null
                }
                getOptionLabel={(option) => option.name}
                onChange={(_, value) => {
                  formik.setFieldValue("nationality", value.code);
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    fullWidth
                    id="nationality"
                    placeholder="Choose nationality"
                    value={formik.values.nationality}
                    error={
                      formik.touched.nationality &&
                      Boolean(formik.errors.nationality)
                    }
                    helperText={
                      formik.touched.nationality && formik.errors.nationality
                    }
                  />
                )}
              />
            </Stack>
          </Grid>

          <Grid item size={{ xs: 12, sm: 6 }}>
            <Stack spacing={1}>
              <FormLabel label="Mobile number" required={index === 0} />
              <Stack direction="row" spacing={1}>
                <MuiTelInput
                  value={formik.values.countryCode}
                  onChange={(value) =>
                    formik.setFieldValue("countryCode", value)
                  }
                  onlyCountries={["NG", "US", "GB", "IN"]}
                  defaultCountry="NG"
                  forceCallingCode
                  flagSize="small"
                  sx={{ width: 180 }}
                  inputProps={{
                    style: { display: "none" },
                  }}
                />

                <TextField
                  fullWidth
                  placeholder="Enter mobile number"
                  name="mobile"
                  value={formik.values.mobile}
                  onChange={(e) => {
                    formik.setFieldValue("mobile", e.target.value.trimStart());
                  }}
                  onBlur={formik.handleBlur}
                  error={formik.touched.mobile && Boolean(formik.errors.mobile)}
                  helperText={formik.touched.mobile && formik.errors.mobile}
                />
              </Stack>
            </Stack>
          </Grid>

          <Grid item size={{ xs: 12, sm: 6 }}>
            <Stack spacing={1}>
              <FormLabel label="Company name" required={index === 0} />
              <TextField
                fullWidth
                id="companyName"
                name="companyName"
                value={formik.values.companyName}
                onChange={(e) => {
                  formik.setFieldValue(
                    "companyName",
                    e.target.value.trimStart()
                  );
                }}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.companyName &&
                  Boolean(formik.errors.companyName)
                }
                helperText={
                  formik.touched.companyName && formik.errors.companyName
                }
                placeholder="Enter company name"
              />
            </Stack>
          </Grid>

          <Grid item size={{ xs: 12, sm: 6 }}>
            <Stack spacing={1}>
              <FormLabel label="Job title" required={index === 0} />
              <TextField
                fullWidth
                id="jobTitle"
                name="jobTitle"
                value={formik.values.jobTitle}
                onChange={(e) => {
                  formik.setFieldValue("jobTitle", e.target.value.trimStart());
                }}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.jobTitle && Boolean(formik.errors.jobTitle)
                }
                helperText={formik.touched.jobTitle && formik.errors.jobTitle}
                placeholder="Enter job title"
              />
            </Stack>
          </Grid>

          <Grid item size={{ xs: 12, sm: 6 }}>
            <Stack spacing={1}>
              <FormLabel label="Company type" required={index === 0} />
              <Autocomplete
                id="tags-outlined"
                options={industries}
                value={
                  industries?.find(
                    (option) => option.category === formik.values.companyType
                  ) || null
                }
                getOptionLabel={(option) => option.category}
                onChange={(_, value) => {
                  formik.setFieldValue("companyType", value.category);
                  formik.setFieldValue("industry", "");
                }}
                onBlur={() => formik.setFieldTouched("companyType", true)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    fullWidth
                    id="companyType"
                    placeholder="Choose company type"
                    value={formik.values.companyType}
                    error={
                      formik.touched.companyType &&
                      Boolean(formik.errors.companyType)
                    }
                    helperText={
                      formik.touched.companyType && formik.errors.companyType
                    }
                  />
                )}
              />
            </Stack>
          </Grid>

          <Grid item size={{ xs: 12, sm: 6 }}>
            <Stack spacing={1}>
              <FormLabel label="Industry" required={index === 0} />
              <Autocomplete
                id="tags-outlined"
                options={
                  industries.find(
                    (val) => val.category === formik.values.companyType
                  )?.options || []
                }
                value={
                  industries
                    .find((val) => val.category === formik.values.companyType)
                    ?.options.find(
                      (item) => item.value === formik.values.industry
                    ) || null
                }
                getOptionLabel={(option) => option.label}
                onChange={(_, value) => {
                  formik.setFieldValue("industry", value.value || "");
                }}
                onBlur={() => formik.setFieldTouched("industry", true)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    fullWidth
                    id="industry"
                    placeholder="Choose industry"
                    value={formik.values.industry}
                    error={
                      formik.touched.industry && Boolean(formik.errors.industry)
                    }
                    helperText={
                      formik.touched.industry && formik.errors.industry
                    }
                  />
                )}
              />
            </Stack>
          </Grid>

          <Grid item size={{ xs: 12, sm: 6 }}>
            <Typography className="!mt-6">
              What products & services are you interested in?
              {index === 0 && <span style={{ color: "red" }}> *</span>}
            </Typography>
            {index === 0 && formik.touched.product && formik.errors.product && (
              <FormHelperText error>{formik.errors.product}</FormHelperText>
            )}
          </Grid>

          <Grid
            item
            size={{ xs: 12, sm: 6 }}
            className="flex justify-center sm:!justify-end"
          >
            <Button
              onClick={handleOpen}
              variant="contained"
              className="!mt-4 bg-gradient-to-r from-[#AB0202] to-[#240102] !whitespace-nowrap !h-fit"
            >
              Select &nbsp;
              <span style={{ fontWeight: "bold" }}> Solutions/Products</span>
            </Button>
          </Grid>

          {formik.values.product.length > 0 && (
            <Grid item size={{ xs: 12 }}>
              <>
                <Typography variant="">Main Categories</Typography>
                <Box display="flex" flexWrap="wrap" gap={1} mt={1}>
                  {formik.values.product.map((label, index) => (
                    <Chip
                      key={index}
                      label={label}
                      size="small"
                      variant="filled"
                      className="!bg-[#5E3169] !text-white !p-1"
                    />
                  ))}
                </Box>
              </>
            </Grid>
          )}
          {formik.values.subProduct.length > 0 && (
            <Grid item size={{ xs: 12 }}>
              <>
                <Typography variant="">Sub Categories</Typography>
                <Box display="flex" flexWrap="wrap" gap={1} mt={1}>
                  {formik.values.subProduct.map((label, index) => (
                    <Chip
                      key={index}
                      label={label}
                      size="small"
                      variant="filled"
                      className="!text-[#616161] !p-1"
                    />
                  ))}
                </Box>
              </>
            </Grid>
          )}
        </Grid>
      </Box>

      <ProductOrSolutionPopup
        open={open}
        formik={formik}
        handleClose={handleClose}
      />
    </Box>
  );
};

export default RegistrationInformationForm;

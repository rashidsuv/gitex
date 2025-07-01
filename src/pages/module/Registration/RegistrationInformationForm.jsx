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

const RegistrationInformationForm = ({ formik, activeStep, setActiveStep }) => {
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

  return (
    <Box className="w-full mx-auto my-auto">
      <Box className="bg-gradient-to-r from-[#299D3F] to-[#123F22] rounded-tl-[9.77px] rounded-tr-[9.77px] flex justify-between items-center py-3">
        <Box className="text-white p-4 text-[1.5rem] font-bold">
          Registration Information 1
        </Box>
        <Box className="border border-solid border-[#FFFFFF47] rounded-[9.77px] bg-[#FFFFFF14] text-white text-[0.9rem] font-thin pt-[11.72px] pr-[19.53px] pb-[11.72px] pl-[19.53px] mx-4">
          PREMIUM TICKET - FREEIncl. 19% VAT
        </Box>
      </Box>

      <Box className="border border-solid border-[#EBEBEBEE] rounded-[10px] p-4 rounded-tl-none rounded-tr-none">
        <Grid container spacing={3}>
          <Grid item size={{ xs: 12, sm: 6 }}>
            <Stack spacing={1}>
              <Typography variant="subtitle1" color="textPrimary">
                First name <span style={{ color: "red" }}>*</span>
              </Typography>
              <TextField
                fullWidth
                id="firstName"
                name="firstName"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.firstName && Boolean(formik.errors.firstName)
                }
                helperText={formik.touched.firstName && formik.errors.firstName}
                placeholder="Enter first name"
                FormHelperTextProps={{
                  sx: { color: "red", marginLeft: 0 },
                }}
              />
            </Stack>
          </Grid>

          <Grid item size={{ xs: 12, sm: 6 }}>
            <Stack spacing={1}>
              <Typography variant="subtitle1">
                Last name <span style={{ color: "red" }}>*</span>
              </Typography>
              <TextField
                required
                id="lastName"
                name="lastName"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.lastName && Boolean(formik.errors.lastName)
                }
                helperText={formik.touched.lastName && formik.errors.lastName}
                placeholder="Enter last name"
                fullWidth
                FormHelperTextProps={{
                  sx: { color: "red", marginLeft: 0 },
                }}
              />
            </Stack>
          </Grid>

          <Grid item size={{ xs: 12, sm: 6 }}>
            <Stack spacing={1}>
              <Typography variant="subtitle1">
                Country of residence <span style={{ color: "red" }}>*</span>
              </Typography>
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
                    FormHelperTextProps={{
                      sx: { color: "red", marginLeft: 0 },
                    }}
                  />
                )}
              />
            </Stack>
          </Grid>

          <Grid item size={{ xs: 12, sm: 6 }}>
            <Stack spacing={1}>
              <Typography variant="subtitle1">Region</Typography>
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
                  />
                )}
              />
            </Stack>
          </Grid>

          <Grid item size={{ xs: 12, sm: 6 }}>
            <Stack spacing={1}>
              <Typography variant="subtitle1">
                Email address <span style={{ color: "red" }}>*</span>
              </Typography>
              <TextField
                required
                id="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                placeholder="Enter email address"
                fullWidth
                FormHelperTextProps={{
                  sx: { color: "red", marginLeft: 0 },
                }}
              />
            </Stack>
          </Grid>

          <Grid item size={{ xs: 12, sm: 6 }}>
            <Stack spacing={1}>
              <Typography variant="subtitle1">Confirm email address</Typography>
              <TextField
                required
                id="confirmEmail"
                name="confirmEmail"
                value={formik.values.confirmEmail}
                onChange={formik.handleChange}
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
                FormHelperTextProps={{
                  sx: { color: "red", marginLeft: 0 },
                }}
              />
            </Stack>
          </Grid>

          <Grid item size={{ xs: 12, sm: 6 }}>
            <Stack spacing={1}>
              <Typography variant="subtitle1">Nationality</Typography>
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
                  />
                )}
              />
            </Stack>
          </Grid>

          <Grid item size={{ xs: 12, sm: 6 }}>
            <Stack spacing={1}>
              <Typography variant="subtitle1">
                Mobile number <span style={{ color: "red" }}>*</span>
              </Typography>
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
                  onChange={formik.handleChange}
                  error={formik.touched.mobile && Boolean(formik.errors.mobile)}
                  helperText={formik.touched.mobile && formik.errors.mobile}
                />
              </Stack>
            </Stack>
          </Grid>

          <Grid item size={{ xs: 12, sm: 6 }}>
            <Stack spacing={1}>
              <Typography variant="subtitle1" color="textPrimary">
                Company name <span style={{ color: "red" }}>*</span>
              </Typography>
              <TextField
                fullWidth
                id="companyName"
                name="companyName"
                value={formik.values.companyName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.companyName &&
                  Boolean(formik.errors.companyName)
                }
                helperText={
                  formik.touched.companyName && formik.errors.companyName
                }
                placeholder="Enter company name"
                FormHelperTextProps={{
                  sx: { color: "red", marginLeft: 0 },
                }}
              />
            </Stack>
          </Grid>

          <Grid item size={{ xs: 12, sm: 6 }}>
            <Stack spacing={1}>
              <Typography variant="subtitle1" color="textPrimary">
                Job title <span style={{ color: "red" }}>*</span>
              </Typography>
              <TextField
                fullWidth
                id="jobTitle"
                name="jobTitle"
                value={formik.values.jobTitle}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.jobTitle && Boolean(formik.errors.jobTitle)
                }
                helperText={formik.touched.jobTitle && formik.errors.jobTitle}
                placeholder="Enter job title"
                FormHelperTextProps={{
                  sx: { color: "red", marginLeft: 0 },
                }}
              />
            </Stack>
          </Grid>

          <Grid item size={{ xs: 12, sm: 6 }}>
            <Stack spacing={1}>
              <Typography variant="subtitle1">
                Company type <span style={{ color: "red" }}>*</span>
              </Typography>
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
                    FormHelperTextProps={{
                      sx: { color: "red", marginLeft: 0 },
                    }}
                  />
                )}
              />
            </Stack>
          </Grid>

          <Grid item size={{ xs: 12, sm: 6 }}>
            <Stack spacing={1}>
              <Typography variant="subtitle1">
                Industry <span style={{ color: "red" }}>*</span>
              </Typography>
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
                    FormHelperTextProps={{
                      sx: { color: "red", marginLeft: 0 },
                    }}
                  />
                )}
              />
            </Stack>
          </Grid>

          <Grid item size={{ xs: 12, sm: 6 }}>
            <Typography className="!mt-6">
              What products & services are you interested in?
              <span style={{ color: "red" }}>*</span>
            </Typography>
            {formik.values.product.length === 0 && activeStep > 0 && (
              <FormHelperText error>Select Product or Serivce</FormHelperText>
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
        setActiveStep={setActiveStep}
      />
    </Box>
  );
};

export default RegistrationInformationForm;

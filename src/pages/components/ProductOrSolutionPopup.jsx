import {
  Box,
  Dialog,
  Button,
  Divider,
  Checkbox,
  TextField,
  IconButton,
  Typography,
  DialogContent,
  DialogActions,
  FormControlLabel,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import bg_header from "../../assets/images/bg_header_footer.png";

export default function ProductOrSolutionPopup({ open, formik, handleClose }) {
  const solutions = [
    { id: 1, value: "Global Leaders Forum !NEW (3 Days)" },
    { id: 2, value: "GITEX Main Stage" },
    { id: 3, value: "Artificial Intelligence & Robotics (15)" },
    { id: 4, value: "Future Health !NEW (2 Days)" },
    { id: 5, value: "AI Everything (4 Days)" },
  ];

  const subSolutoins = [
    { id: 1, value: "Digital Cities (1 Day)" },
    { id: 2, value: "Edtech (1 Day)" },
    { id: 3, value: "Energy Transition (1 Day)" },
    { id: 4, value: "Intelligent Connectivity (1 Day)" },
    { id: 5, value: "Artificial Intelligence & Robotics (15)" },
  ];

  const handleChangeCheckbox = (label, field) => {
    const currentValues = formik.values[field] || [];
    if (currentValues.includes(label)) {
      formik.setFieldValue(
        field,
        currentValues.filter((item) => item !== label)
      );
    } else {
      formik.setFieldValue(field, [...currentValues, label]);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="md"
      PaperProps={{
        sx: {
          borderRadius: "20px",
        },
      }}
    >
      <Box
        sx={{
          backgroundImage: `url(${bg_header})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="p-2 px-3 flex justify-between items-center rounded-t-[20px]"
      >
        <Typography variant="" className="text-white font-bold uppercase">
          Select Solutions/Products
        </Typography>
        <IconButton
          onClick={handleClose}
          className="!text-white !border !border-white"
        >
          <CloseIcon className="!size-4" />
        </IconButton>
      </Box>

      <DialogContent className="p-4">
        <TextField fullWidth placeholder="Try Product/Service" size="small" />
        <Typography variant="body2" className="text-[13px] text-black !mt-4">
          I am interested in sourcing the following solutions/products? (Select
          Top 5) * Please ensure you have chosen at least one category in each
          section
        </Typography>

        <Box className="flex justify-between">
          <Box className="space-y-1 mt-4 flex flex-col">
            {solutions.map((item) => (
              <FormControlLabel
                key={item.id}
                control={
                  <Checkbox
                    checked={formik.values.product?.includes(item.value)}
                    onChange={() => handleChangeCheckbox(item.value, "product")}
                    sx={{
                      color: "#000000",
                      "&.Mui-checked": {
                        color: "#000000",
                      },
                    }}
                  />
                }
                label={item.value}
                className="text-sm"
              />
            ))}
          </Box>
          <Box className="space-y-1 mt-4 flex flex-col">
            {formik.values.product.includes(
              "Global Leaders Forum !NEW (3 Days)"
            ) &&
              subSolutoins.map((item, idx) => (
                <FormControlLabel
                  key={idx}
                  control={
                    <Checkbox
                      checked={formik.values.subProduct?.includes(item.value)}
                      onChange={() =>
                        handleChangeCheckbox(item.value, "subProduct")
                      }
                      sx={{
                        color: "#000000",
                        "&.Mui-checked": {
                          color: "#000000",
                        },
                      }}
                    />
                  }
                  label={item.value}
                  className="text-sm"
                />
              ))}
          </Box>
        </Box>
        <Divider />
      </DialogContent>

      <DialogActions className="!pr-4 !pb-4">
        <Button
          onClick={handleClose}
          variant="outlined"
          className="rounded-[8px] !border-[2px] !border-[#262626] !text-[#262626] !font-bold normal-case"
        >
          Cancel
        </Button>
        <Button
          disabled={formik.values.product.length === 0}
          variant="contained"
          className="bg-gradient-to-r from-[#299D3F] to-[#123F22] text-white"
          onClick={() => {
            handleClose();
          }}
        >
          Apply
        </Button>
      </DialogActions>
    </Dialog>
  );
}

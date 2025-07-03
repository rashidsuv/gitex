import {
  Box,
  Step,
  styled,
  Stepper,
  StepLabel,
  StepConnector,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

const ColorConnector = styled(StepConnector)(() => ({
  top: 14,
  "& .MuiStepConnector-line": {
    borderColor: "#EFF0F6",
    borderTopWidth: 6,
    borderRadius: 5,
    width: "80%",
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
  },
  "&.Mui-active .MuiStepConnector-line": {
    borderColor: "#258B39",
  },
  "&.Mui-completed .MuiStepConnector-line": {
    borderColor: "#258B39",
  },
}));

function CustomStepIcon(props) {
  const { active, completed, icon } = props;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%",
        width: 32,
        height: 32,
        fontWeight: "bold",
        border: completed || active ? "none" : "2px solid #00000038",
        color: completed || active ? "white" : "#2F2F2F80",
        backgroundColor: completed || active ? "#258B39" : "transparent",
      }}
    >
      {completed ? (
        <CheckIcon className="text-[16px] font-bold" fontSize="small" />
      ) : (
        icon
      )}
    </div>
  );
}

export default function CustomStepper({ activeStep }) {
  const ticketCount = Number(localStorage.getItem("ticketCount")) || 0;
  const steps = Array.from({ length: ticketCount + 1 }, (_, i) => `${i + 1}`);

  return (
    <Box
      sx={{
        maxWidth: 600,
        margin: "0 auto",
      }}
    >
      <Stepper
        alternativeLabel
        activeStep={activeStep}
        connector={<ColorConnector />}
        sx={{ mt: 4 }}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={CustomStepIcon}></StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}

const textfield = {
  MuiTextField: {
    styleOverrides: {
      root: {
        "& .MuiOutlinedInput-root": {
          height: "45px",
          padding: "0 10px",
        },
        "& .MuiFormHelperText-root": {
          color: "#d32f2f",
          marginLeft: 0,
          fontSize: "0.75rem",
        },
      },
    },
  },
};

export default textfield;

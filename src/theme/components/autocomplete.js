const autocomplete = {
  MuiAutocomplete: {
    styleOverrides: {
      root: {
        "& .MuiOutlinedInput-root": {
          padding: "3px 9px",
          height: "45px",
        },
      },
      "& .MuiFormHelperText-root": {
        color: "#d32f2f",
        marginLeft: 0,
        fontSize: "0.75rem",
      },
      popupIndicator: {
        width: "auto",
        height: "auto",
      },
      clearIndicator: {
        width: "auto",
        height: "auto",
      },
    },
  },
};

export default autocomplete;

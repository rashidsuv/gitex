const autocomplete = {
  MuiAutocomplete: {
    styleOverrides: {
      root: {
        "& .MuiOutlinedInput-root": {
          padding: "3px 9px",
          height: "45px",    
        },
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

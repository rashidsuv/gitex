import autocomplete from "./components/autocomplete";
import textfield from "./components/textfield";

const components = {
  ...autocomplete,
  ...textfield,
};

const themeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
    },
  },
  typography: {
    fontFamily: `'Alexandria', sans-serif`,
  },
  components,
};

export default themeOptions;

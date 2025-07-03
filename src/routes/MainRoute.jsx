import Layout from "../components/Layout/Layout";
import HomePage from "../pages/module/home/HomePage";
import Maintanance from "../pages/module/warnings/Maintanance";
import SuccessPage from "../pages/module/Registration/SuccessPage";
import RegistrationSummary from "../pages/module/Registration/RegistrationSummary";
import RegistrationFormPage from "../pages/module/Registration/RegistrationFormPage";

const MainRoute = {
  path: "/",
  children: [
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/registration", element: <RegistrationFormPage /> },
        { path: "/registration-summary", element: <RegistrationSummary /> },
        { path: "/success", element: <SuccessPage /> },
        { path: "*", element: <Maintanance /> },
      ],
    },
  ],
};

export default MainRoute;

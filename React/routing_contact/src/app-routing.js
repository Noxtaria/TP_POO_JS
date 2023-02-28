import {createBrowserRouter} from "react-router-dom"
import App from "./App";
import ErrorPage from "./routes/ErrorPage";
import HomePage from "./routes/HomePage";
import ContactPage from "./routes/ContactPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
    ],
  },
]);

export default router;

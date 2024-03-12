import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home";
import { SignIn } from "@clerk/clerk-react";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <RootLayout>
        <Home />
      </RootLayout>
    ),
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
]);

export default router;

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./pages/home";
import Layout from "./layout/layout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Index />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

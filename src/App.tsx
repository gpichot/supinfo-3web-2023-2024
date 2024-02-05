import "./App.css";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { Menu } from "./components/Menu";
import { AboutPage } from "./pages/AboutPage";
import { WelcomePage } from "./pages/WelcomePage";

function Root() {
  return (
    <>
      <Menu />
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/hello/:prenom",
        element: <WelcomePage />,
      },
      {
        path: "/a-propos",
        element: <AboutPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

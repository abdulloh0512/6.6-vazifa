import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./pages/RootLayout";
import Mercury from "./pages/Mercury";
import Venus from "./pages/Venus";
import Earth from "./pages/Earth";
import Jupiter from "./pages/Jupeter";
import Saturn from "./pages/Saturan";
import Uranus from "./pages/Uranus";
import Neptune from "./pages/Neptune";

import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Mercury /> },
      { path: "Mercury", element: <Mercury /> },
      { path: "Venus", element: <Venus /> },
      { path: "Earth", element: <Earth /> },
      { path: "Mars", element: <Mars /> },
      { path: "Jupiter", element: <Jupiter /> },
      { path: "Saturn", element: <Saturn /> },
      { path: "Uranus", element: <Uranus /> },
      { path: "Neptune", element: <Neptune /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
import { Container } from "components/Container";
import { Header } from "components/Header";
import { EarthPage } from "pages/EarthPage";
import { JupiterPage } from "pages/JupiterPage";
import { MarsPage } from "pages/MarsPage";
import { MercuryPage } from "pages/MercuryPage";
import { NeptunePage } from "pages/NeptunePage";
import { SaturnPage } from "pages/SaturnPage";
import { UranusPage } from "pages/UranusPage";
import { VenusPage } from "pages/VenusPage";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header />
          <Container>
            <Outlet />
          </Container>
        </>
      ),
      children: [
        {
          path: "/",
          element: <MercuryPage />,
        },
        {
          path: "/venus",
          element: <VenusPage />,
        },
        {
          path: "/earth",
          element: <EarthPage />,
        },
        {
          path: "/mars",
          element: <MarsPage />,
        },
        {
          path: "/jupiter",
          element: <JupiterPage />,
        },
        {
          path: "/saturn",
          element: <SaturnPage />,
        },
        {
          path: "/uranus",
          element: <UranusPage />,
        },
        {
          path: "/neptune",
          element: <NeptunePage />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

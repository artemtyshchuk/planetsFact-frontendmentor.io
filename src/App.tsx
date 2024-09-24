import { Container } from "components/Container";
import { Header } from "components/Header";
import { MercuryPage } from "pages/MercuryPage";
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
          element: <MercuryPage/>,
        },
        {
          path: "/venus",
          element: <div>Venus</div>,
        },
        {
          path: "/earth",
          element: <div>Earth</div>,
        },
        {
          path: "/mars",
          element: <div>Mars</div>,
        },
        {
          path: "/jupiter",
          element: <div>Jupiter</div>,
        },
        {
          path: "/saturn",
          element: <div>Saturn</div>,
        },
        {
          path: "/uranus",
          element: <div>Uranus</div>,
        },
        {
          path: "/neptune",
          element: <div>Neptune</div>,
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

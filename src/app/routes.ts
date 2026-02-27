import { createBrowserRouter } from "react-router";
import { RootLayout } from "./components/RootLayout";
import { ScentPowerPage } from "./components/pages/ScentPowerPage";
import { ProductsPage } from "./components/pages/ProductsPage";
import { ScentAppPage } from "./components/pages/ScentAppPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: ScentPowerPage },
      { path: "products", Component: ProductsPage },
      { path: "app", Component: ScentAppPage },
    ],
  },
]);

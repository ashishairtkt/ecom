import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Loader from "../utils/loader";
import NotFound from "./Notfound";
import PrivateRoute from "./PrivateRoutes";

const Login = lazy(() => import("../auth/login"));
const Layout = lazy(() => import("../components/layout/layout"));
const ProductPage = lazy(() => import("../components/product/productPage"));

function RouterConfig() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />

        <Route path="/login" element={<Login />} />

        <Route element={<PrivateRoute />}>
          <Route path="/ProductPage" element={<ProductPage />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default RouterConfig;

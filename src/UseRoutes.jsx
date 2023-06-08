import { Routes, Route } from "react-router-dom";
import { lazy } from "react";

const SharedLayout = lazy(() =>
  import("./components/SharedLayout/SharedLayout")
);
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const MyLibraryPage = lazy(() => import("./pages/MyLibraryPage/MyLibraryPage"));

const UseRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/library" element={<MyLibraryPage />} />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default UseRoutes;

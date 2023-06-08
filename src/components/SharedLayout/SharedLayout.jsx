import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const SharedLayout = () => {
  return (
    <>
      <Header />
      <main>
        <section>
          <div>
            <Suspense fallback={null}>
              <Outlet />
            </Suspense>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default SharedLayout;

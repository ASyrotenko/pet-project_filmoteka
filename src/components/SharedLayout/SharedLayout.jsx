import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Container from "../Container/Container";

const SharedLayout = () => {
  return (
    <>
      <Header />
      <main>
        <section>
          <Container>
            <Suspense fallback={null}>
              <Outlet />
            </Suspense>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default SharedLayout;

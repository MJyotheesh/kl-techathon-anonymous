import React from "react";
import { useRouter } from "next/router";
import HeaderDetails from "../components/header";
import { Layout } from "antd";
import SideMenu from "../components/menu";
import FooterSection from "../components/footer";

function AppRoute({ Component, pageProps }) {
  const router = useRouter();
  const RenderContent = () => {
    if (router.route === "/explore" || router.route === "/my-feed" || router.route === "/draft") {
      return (
        <>
        <Layout>
          <HeaderDetails />
          <Layout
            style={{
              minHeight: "78vh",
              background: "rgb(226 232 240 / 80%)",
            }}
          >
            <SideMenu />    
            <Component {...pageProps} />
          </Layout>
          <FooterSection></FooterSection>
          </Layout>
        </>
      );
    }
    return (
        <>
          <HeaderDetails />
          <Component {...pageProps} />
          <FooterSection />
        </>
      );
  };

  return (
    // <div>AppRoute</div>
    <RenderContent />
  );
}

export default AppRoute;

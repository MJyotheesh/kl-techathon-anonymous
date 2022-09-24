import React from "react";
import { useRouter } from "next/router";
import HeaderDetails from "../components/header";
import { Layout, Row, Col, Menu } from "antd";
import SideMenu from "../components/menu";
import FooterSection from "../components/footer";

function AppRoute({ Component, pageProps }) {
  const router = useRouter();

  const RenderContent = () => {
    if (router.route === "/explore" || router.route === "/my-feed" || router.route === "/draft" || router.route === '/question/[...pd]') {
      return (
        <>
          <Layout>
            <HeaderDetails />
            <Layout
              className="layout-body"
              style={{
                minHeight: "78vh",
                marginTop: '20px',
              }}
            >
              <SideMenu />
              <Component {...pageProps} />
              <SideMenu />
            </Layout>
            <FooterSection></FooterSection>
          </Layout>
        </>
      );
    }
    // if( router.route === "/draft"){
    //   return(<>
    //    <Layout>
    //       <HeaderDetails />
    //       <Layout
    //         style={{
    //           minHeight: "78vh",
    //           marginTop: '20px'
    //         }}
    //       >
    //         <SideMenu />    
    //         <Component {...pageProps}/>
    //       </Layout>
    //       <FooterSection></FooterSection>
    //       </Layout>
    //   </>)
    // }
    if (router.route === "/login") {
      return (
        <Component {...pageProps} />
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
    <RenderContent />
  );
}

export default AppRoute;

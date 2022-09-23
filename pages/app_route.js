import React from "react";
import { useRouter } from "next/router";
import HeaderDetails from "../components/header";
import { Layout, Row, Col, Menu } from "antd";
import SideMenu from "../components/menu";
import FooterSection from "../components/footer";
// #f0f2f5
function AppRoute({ Component, pageProps }) {
  const router = useRouter();
  const RenderContent = () => {
    if (router.route === "/explore" || router.route === "/my-feed" || router.route === "/draft") {
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
            <Component {...pageProps}/>
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

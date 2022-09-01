import type { NextPage } from 'next'
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu } from "antd";
import Item from "antd/lib/list/Item";
import React, { useContext, useEffect, useState } from "react";
import GraphTest from "../src/graph_canvas";
import Graphin, { Behaviors, Utils, GraphinContext, Graph } from "@antv/graphin";
import PageSider from "../src/page_layout/PageSider";
// import "antd/dist/antd.css";

const { Header, Content, Footer } = Layout;

const Home: NextPage = () => {
  const data = Utils.mock(5).circle().graphin();

  return (
    <Layout style={{ minHeight: "100vh", maxHeight:"100%", minWidth: "100vh", maxWidth:"100%"}}>
    <PageSider/>
    <Layout style={{ minHeight: "100vh", maxHeight:"100%", minWidth: "100vh", maxWidth:"100%"}} className="site-layout">
      <Header className="site-layout-background" style={{ padding: 0 }} />
      <Content>
        <>
        <GraphTest></GraphTest>
        </>
          {/* <GraphTest></GraphTest> */}
      </Content>
      {/* <Footer/> */}
    </Layout>
  </Layout>
  );
}

export default Home

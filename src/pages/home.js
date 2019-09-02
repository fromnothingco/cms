import React from "react";
import { H1 } from "../components/generics/headings";
import Layout from "../layout";

const Home = ({ match }) => {
  return (
    <Layout>
      <H1>Home</H1>
      <div>Add custom code here</div>
    </Layout>
  );
};

export default Home;

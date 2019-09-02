import React, { useState, useEffect } from "react";
import { H1 } from "../components/generics/headings";
import Layout from "../layout";
import config from "../../api.config";
import Form from "../components/generics/form";
import * as Fields from "../components/generics/inputs";

const EditCreate = ({ match }) => {
  const { params } = match;
  const { data } = config.endpoints[params.type];
  return (
    <Layout>
      <H1>
        {params.action} {params.type}
      </H1>
      <Form onSubmit={data => console.log(data)}>
        {data.map(field => {
          const Component = Fields[field.component || "Input"];
          console.log(field);
          return (
            <Component
              type={field.type}
              label={field.label}
              name={field.label}
            />
          );
        })}
      </Form>
    </Layout>
  );
};

export default EditCreate;

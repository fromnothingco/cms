import React, { useState, useEffect } from "react";
import { H1 } from "../components/generics/headings";
import Layout from "../layout";
import config from "../../api.config";
import Form from "../components/generics/form";
import * as Fields from "../components/generics/inputs";
import Header from "../components/headings";
import api from "../api";

const getData = async (type, id, callback) => {
  console.log("hello");
  try {
    const currentData = await api.get(`/${type}/${id}`);
    console.log(currentData);
    callback(currentData);
  } catch (e) {
    console.log(e);
  }
};

const EditCreate = ({ match }) => {
  const { params } = match;
  const [editData, setData] = useState({});
  const { data } = config.endpoints[params.type];
  useEffect(() => {
    if (params.action === "edit") {
      getData(params.type, params.id, setData);
    }
  }, []);

  const save = async data => {
    if (params.action === "edit") {
      await api.put(`/${params.type}/${params.id}`, {
        body: JSON.stringify(data)
      });
    } else {
      await api.post(`/${params.type}`, {
        body: JSON.stringify(data)
      });
    }
  };

  return (
    <Layout>
      <Header>
        <H1>
          {params.action} {params.type}
        </H1>
      </Header>
      <Form onSubmit={save}>
        {data.map(field => {
          const Component = Fields[field.component || "Input"];
          console.log(field);
          return (
            <Component
              type={field.type}
              label={field.label}
              name={field.label}
              value={editData[field.label] || undefined}
            />
          );
        })}
      </Form>
    </Layout>
  );
};

export default EditCreate;

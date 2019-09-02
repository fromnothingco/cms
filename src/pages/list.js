import React, { useState, useEffect } from "react";
import { H1 } from "../components/generics/headings";
import { Link } from "react-router-dom";
import Button from "../components/generics/button";
import Layout from "../layout";
import Table from "../components/generics/table";
import config from "../../api.config";

const EditCreate = ({ match }) => {
  const { params } = match;
  const { data } = config.endpoints[params.type];
  return (
    <Layout>
      <H1>{params.type}</H1>
      <Button type="link" href={`/${params.type.toString()}/new`}>
        New {params.type.toString()}
      </Button>
      <Table>
        <thead>
          <tr>
            {data.map(({ label }) => (
              <th key={label}>{label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Link to={`/${params.type.toString()}/edit/1`}>Jill</Link>
            </td>
            <td>
              <Link to={`/${params.type.toString()}/edit/1`}>Smith</Link>
            </td>
          </tr>

          <tr>
            <td>
              <Link to={`/${params.type.toString()}/edit/1`}>Eve</Link>
            </td>
            <td>
              <Link to={`/${params.type.toString()}/edit/1`}>Jackson</Link>
            </td>
          </tr>
        </tbody>
      </Table>
    </Layout>
  );
};

export default EditCreate;

import React from "react";
import styled from "styled-components";
import Form from "../components/generics/form";
import { Input } from "../components/generics/inputs";
import { H1 } from "../components/generics/headings";

const Pod = styled.div`
  background: #fff;
  border-radius: 5px;
  padding: 1rem 2rem;
  border-collapse: collapse;
  box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.1);
`;

const Login = ({ history }) => {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Pod>
        <H1>Login</H1>
        <Form onSubmit={() => history.push("/home")}>
          <Input type="email" label="Email" name="email" />
          <Input type="password" label="Password" name="password" />
        </Form>
      </Pod>
    </div>
  );
};

export default Login;

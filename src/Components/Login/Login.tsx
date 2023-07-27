import React from "react";
import "./Login.scss";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as yup from "yup";

function Login() {
  const initialValue = {
    email: "",
    password: "",
  };
  const validationSchema = yup.object().shape({
    email: yup.string().required("email required"),
    password: yup.string().required("password required"),
  });
  const submitHandler = (values: any) => {
    console.log(values);
  };
  return (
    <div className="login-main-container">
      <h1>Login</h1>
      <div className="login-container">

        <Formik
          initialValues={initialValue}
          validationSchema={validationSchema}
          onSubmit={submitHandler}
        >
          <Form className="login-form">
      

            <div className="login-form-items">
              <label>Email</label>
              <br />
              <Field
                type="text"
                name="email"
                placeholder="enter email"
                className="login-field"
              />
              <br />
              <div className="login-err">
                <ErrorMessage name="email" />
              </div>
            </div>

            <div className="login-form-items">
              <label>password</label>
              <br />

              <Field
                type="password"
                name="password"
                placeholder="enter password"
                className="login-field"
              />
              <br />
              <div className="login-err">
                <ErrorMessage name="password" />
              </div>
            </div>
          

            <button type="submit" className="login-submit">Submit</button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default Login;

import React from "react";
import "./Register.scss";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as yup from "yup";

function Register() {
  const initialValue = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const validationSchema = yup.object().shape({
    name: yup.string().required("name required"),
    email: yup.string().required("email required"),
    password: yup.string().required("password required"),
    confirmPassword: yup.string().required("confirm password required"),
  });
  const submitHandler = (values: any) => {
    console.log(values);
  };
  return (
    <div className="register-main-container">
      <h1>Register</h1>
      <div className="register-container">

        <Formik
          initialValues={initialValue}
          validationSchema={validationSchema}
          onSubmit={submitHandler}
        >
          <Form className="register-form">
            <div className="register-form-items">
              <label>Name</label>
              <br />
              <Field
                type="text"
                name="name"
                placeholder="enter name"
                className="register-field"
              />
              <br />
              <div className="register-err">
                <ErrorMessage name="name" />
              </div>
            </div>

            <div className="register-form-items">
              <label>Email</label>
              <br />
              <Field
                type="text"
                name="email"
                placeholder="enter email"
                className="register-field"
              />
              <br />
              <div className="register-err">
                <ErrorMessage name="email" />
              </div>
            </div>

            <div className="register-form-items">
              <label>password</label>
              <br />

              <Field
                type="password"
                name="password"
                placeholder="enter password"
                className="register-field"
              />
              <br />
              <div className="register-err">
                <ErrorMessage name="password" />
              </div>
            </div>
            <div className="register-form-items">
              <label>confirmPassword</label>
              <br />

              <Field
                type="password"
                name="confirmPassword"
                placeholder="enter confirmPassword"
                className="register-field"
              />
              <br />
              <div className="register-err">
                <ErrorMessage name="confirmPassword" />
              </div>
            </div>

            <button type="submit" className="register-submit">Submit</button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default Register;

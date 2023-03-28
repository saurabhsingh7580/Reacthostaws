import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

function Singup() {
  const formInitialSchema = {
    name: "",
    email: "",
    password: "",
    website: "",
    comment: "",
  };
  let formValidationonSchema = yup.object().shape({
    name: yup.string().required("Plase Enter Your Name"),
    email: yup.string().required("Plase Enter Your Email").email("Plase Enter valid Email"),
    password: yup.string().min(6).max(8).required("Plase Enter Your Password"),
    website: yup.string().required("Plase Enter Your Website"),
    comment: yup.string().required("Plase Enter Your Comment"),
  });

  const handleFormSubmit = (values) => {
    console.log("Submit values", values);
  };
  return (
    <div className="container">
      <div className="col-md-12">
        <h1>Formik with yup from validation</h1>
        <div className="col-md-8 offset-md-2">
          <Formik
            initialValues={formInitialSchema}
            validationSchema={formValidationonSchema}
            onSubmit={(values) => handleFormSubmit(values)}
          >
            <Form>
              <div className="col-md-12 mt-4">
                <Field type="text" name="name" placeholder="Enter your Name" />
                <p style={{color:"red"}}>
                  <ErrorMessage name="name" />
                  </p>
            
              </div>
           
              <div className="col-md-12 mt-4">
                <Field
                  type="email"
                  name="email"
                  placeholder="Enter your Email"
                />
                <p style={{color:"red"}}>
                <ErrorMessage name="email"  />
                </p>
              </div>
            
              <div className="col-md-12 mt-4">
                <Field
                  type="password"
                  name="password"
                  placeholder="Enter your Password"
                />
                <p style={{color:"red"}}>
                  <ErrorMessage name="password" />
                  </p>
              </div>
          
              <div className="col-md-12 mt-4">
                <Field
                  type="text"
                  name="website"
                  placeholder="Enter your Website"
                />
               <p style={{color:"red"}}>
                  <ErrorMessage name="website" />
                  </p>
              </div>
            
              <div className="col-md-12 mt-4">
                <Field
                  type="text"
                  name="comment"
                  placeholder="Enter your Comment"
                />
               <p style={{color:"red"}}>
                  <ErrorMessage name="comment" />
                  </p>
              </div>
           

              <button className="btn btn-primary btn-block" type="submit">
                submit
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default Singup;

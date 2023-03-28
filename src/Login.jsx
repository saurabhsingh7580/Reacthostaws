import React from "react";
import { useFormik } from "formik";
import { signUpSchema } from "./yupval.jsx";
const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
};

function Login() {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values) => {
        console.log(values);
      },
    });
  console.log(errors);
  

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            values={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.name && touched.name ? (
            <p className="from-error" style={{ color: "red" }}>
              {errors.name}
            </p>
          ) : null}
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            values={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && touched.email ? (
            <p className="from-error" style={{ color: "red" }}>
              {errors.email}
            </p>
          ) : null}
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            values={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.password && touched.password ? (
            <p className="from-error" style={{ color: "red" }}>
              {errors.password}
            </p>
          ) : null}
        </div>
        <div>
          <input
            type="password"
            name="confirm_password"
            placeholder="Confirm_Name"
            values={values.confirm_password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.confirm_password && touched.confirm_password ? (
            <p className="from-error" style={{ color: "red" }}>
              {errors.confirm_password}
            </p>
          ) : null}
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Login;

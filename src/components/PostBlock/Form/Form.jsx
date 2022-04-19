import React from "react";
import "./Form.scss";
import { validationSchema } from "./validator";
import { useFormik } from "formik";
import Button from "../../UI/Button";

const Form = ({ positions }) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "+380",
      position_id: "",
      photo: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <>
      {" "}
      <form className="form" onSubmit={formik.handleSubmit}>
        <div className="form-item">
          {" "}
          <div className="form-item__name">
            <label htmlFor="name">Name</label>
            <input
              name="name"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <div>{formik.errors.name}</div>
            ) : null}
          </div>
          <div className="form-item__email">
            <label htmlFor="email">Email Address</label>
            <input
              name="email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="form-item__phone">
            <label htmlFor="phone">Phone</label>
            <input
              name="phone"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
            />
            {formik.touched.phone && formik.errors.phone ? (
              <div>{formik.errors.phone}</div>
            ) : null}
          </div>
          <div className="form-item__position">
            {" "}
            {positions.map((position) => (
              <React.Fragment key={position.id}>
                <input
                  type="radio"
                  value={position.id}
                  onChange={formik.handleChange}
                  name="position_id"
                />
                <label htmlFor={position.name}>{position.name}</label>
                <br></br>
              </React.Fragment>
            ))}
            {formik.touched.position_id && formik.errors.position_id ? (
              <div>{formik.errors.position_id}</div>
            ) : null}
          </div>
          <div className="form-item__photo">
            <label htmlFor="photo">photo</label>
            <input
              name="photo"
              type="file"
              onChange={(e) => {
                formik.setFieldValue("photo", e.target.files[0]);
              }}
            />
            {formik.touched.photo && formik.errors.photo ? (
              <div>{formik.errors.photo}</div>
            ) : null}
          </div>
          <Button disabled={!(formik.isValid && formik.dirty)} type="submit">
            Submit
          </Button>
        </div>
      </form>
    </>
  );
};

export default Form;

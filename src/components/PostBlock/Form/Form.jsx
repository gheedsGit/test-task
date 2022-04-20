import React from "react";
import "./Form.scss";
import { validationSchema } from "./validator";
import { useFormik } from "formik";
import Button from "../../UI/Button";
import Body from "../../UI/Typography/Body";

const Form = ({ positions }) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
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
      <form className="form" onSubmit={formik.handleSubmit}>
        <div className="form-item">
          <div className="form-item__name input-wrapper">
            <label className="input-label" htmlFor="name">
              Your name
            </label>
            <input
              name="name"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="error">{formik.errors.name}</div>
            ) : null}
          </div>
          <div className="form-item__email input-wrapper">
            <label className="input-label" htmlFor="email">
              Email
            </label>
            <input
              name="email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="error">{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="form-item__phone input-wrapper">
            <label className="input-label" htmlFor="phone">
              Phone
            </label>
            <input
              name="phone"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
            />
            {formik.touched.phone && formik.errors.phone ? (
              <div className="error">{formik.errors.phone}</div>
            ) : null}
          </div>
          <div className="form-item__position">
            <div className="position-invite">
              <Body type="normal">Select your position</Body>
            </div>
            {positions.map((position) => (
              <div className="radio-item" key={position.id}>
                <input
                  type="radio"
                  value={position.id}
                  onChange={formik.handleChange}
                  name="position_id"
                />
                <label className="radio-label" htmlFor={position.name}>
                  {position.name}
                </label>
                <br></br>
              </div>
            ))}
            {formik.touched.position_id && formik.errors.position_id ? (
              <div className="error">{formik.errors.position_id}</div>
            ) : null}
          </div>
          <div className="form-item__photo">
            <button>Upload</button>
            <input
              name="photo"
              type="file"
              placeholder="Upload your photo"
              onChange={(e) => {
                formik.setFieldValue("photo", e.target.files[0]);
              }}
            />
            <label>Upload your photo</label>
            {formik.touched.photo && formik.errors.photo ? (
              <div className="error">{formik.errors.photo}</div>
            ) : null}
          </div>
          <div className="form-item__submit">
            <Button disabled={!(formik.isValid && formik.dirty)} type="submit">
              Submit
            </Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Form;

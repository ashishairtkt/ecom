import { useState } from "react";
import { Formik, Form as FormikForm, Field } from "formik";
import * as Yup from "yup";
import { Col, Button, Form } from "react-bootstrap";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (values, { setSubmitting }) => {
    // Handle form submission here
    console.log(values);
    setSubmitting(false);
  };

  return (
    <div className="login_form">
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, errors, touched }) => (
          <FormikForm>
            <Form.Group as={Col} controlId="email" className="m-3">
              <Field
                name="email"
                type="email"
                placeholder="Email"
                as={Form.Control}
                isInvalid={touched.email && errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} controlId="password" className="m-3">
              <div className="password-input">
                <Field
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  as={Form.Control}
                  className="password"
                  isInvalid={touched.password && errors.password}
                />

                {showPassword ? (
                  <FaRegEye
                    onClick={() => setShowPassword(!showPassword)}
                    style={{ right: errors.password ? "" : "10px" }}
                  />
                ) : (
                  <FaRegEyeSlash
                    onClick={() => setShowPassword(!showPassword)}
                    style={{ right: errors.password ? "" : "10px" }}
                  />
                )}
              </div>

              <Form.Control.Feedback
                type="invalid"
                style={{ display: errors.password ? "block" : "none" }}
              >
                {errors.password}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} className="m-3">
              <Button type="submit" disabled={isSubmitting} variant="dark">
                {isSubmitting ? "Submitting..." : "Submit"}
              </Button>
            </Form.Group>
          </FormikForm>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;

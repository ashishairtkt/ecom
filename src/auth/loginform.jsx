import { useState } from "react";
import { Formik, Form as FormikForm, Field } from "formik";
import * as Yup from "yup";
import { Col, Button, Form } from "react-bootstrap";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import Cookies from "js-cookie";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const testAuthData = {
  email: "test@gmail.com",
  password: "test",
};

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (values) => {
    // Handle form submission here

    const isAuthenticated = authenticateUser(values);
    console.log(isAuthenticated, "isAuthenticated");
    if (isAuthenticated) {
      console.log("User verified");
      // Redirect or perform further actions for authenticated user
    } else {
      console.log("User verify failed");
      // Handle failed authentication, perhaps show an error message
    }
  };
  const authenticateUser = (values) => {
    const { email, password } = values; // Destructure email and password from values
    if (email === testAuthData.email && password === testAuthData.password) {
      const userData = { email, password }; // Use email and password from values
      const expirationTime = new Date(Date.now() + 60000);
      Cookies.set("auth", JSON.stringify(userData), {
        expires: expirationTime,
      });
      return true;
    }
    return false;
  };

  return (
    <div className="login_form">
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
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
              <Button type="submit" variant="dark">
                Submit
              </Button>
            </Form.Group>
          </FormikForm>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;

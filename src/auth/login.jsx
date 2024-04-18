import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LoginForm from "./loginform";
import { FcGoogle } from "react-icons/fc";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

function Login() {
  const GoogleLoginPage = () => {
    const navigate = useNavigate();

    const responseGoogle = (response) => {
      console.log(response);
      const userObject = jwtDecode(response.credential);
      console.log(userObject);
      localStorage.setItem("user", JSON.stringify(userObject));
      const { name, sub, picture } = userObject;
      const doc = {
        _id: sub,
        _type: "user",
        userName: name,
        image: picture,
      };
      navigate("/", { replace: true });
      console.log(doc, "GoogleLoginPage");
      // client.createIfNotExists(doc).then(() => {
      // navigate('/', { replace: true });
      // });
    };

    return (
      <div className="">
        <div className="">
          <GoogleOAuthProvider clientId={import.meta.env.VITE_CLIENT_ID}>
            <GoogleLogin
              render={(renderProps) => (
                <button
                  type="button"
                  className=""
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  <FcGoogle className="" /> Sign in with google
                </button>
              )}
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy="single_host_origin"
            />
          </GoogleOAuthProvider>
        </div>
      </div>
    );
  };

  return (
    <Container fluid>
      <Row>
        <Col></Col>
        <Col>
          <div className="login_container">
            <div className="login_para">
              <h1>Welcome Back!</h1>
              <p>Login to continue</p>
            </div>
            <LoginForm />{" "}
            <div className="social_login">
              <div className="divide">
                <p>or login with</p>
              </div>

              {/* <FcGoogle /> */}
              <GoogleLoginPage />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;

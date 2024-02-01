import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import puma from "../../assets/puma.png";
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
//import { sigIn } from '../../store/authSlice/authSlice';

const LogIn = () => {
  const [showPassword, setshowPassword] = useState(false);
  const TogglePassword = () => {
    setshowPassword(!showPassword);
  };

  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email Required"),
      password: Yup.string()
        .max(10, "Must be 10 characters or less")
        .required("Password Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      console.log("values", values);
      //dispatch(sigIn(values))
    },
  });
  return (
    <div className="container">
      <div className="col-12">
        <div className="loginbg">
          <div className="container">
            <div className="leftsec"></div>
          </div>
          <div class="login-container w-100">
            <form onSubmit={formik.handleSubmit} className="login-form">
              <Link>
                <img className="puma" src={puma} alt="" />
              </Link>

              <h1>Log In</h1>
              <p>Please login to your account</p>

              <label htmlFor="email">Email Address</label>
              <input
                className="ein"
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className=" text-danger">{formik.errors.email}</div>
              ) : null}

              <div className="loginput position-relative">
                <label className="ms-0" htmlFor="Password ">
                  Password
                </label>
                <input
                  className="input-group "
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder={"Password"}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className=" text-danger  ">{formik.errors.password}</div>
                ) : null}
                <div
                  className="conform-eye position-absolute"
                  style={{ top: "60px", right: "15px" }}
                  onClick={TogglePassword}
                >
                  {" "}
                  {showPassword ? <FaRegEye /> : <FaEyeSlash />}{" "}
                </div>
              </div>

              <button type="submit" className="logbtn">
                Log In
              </button>
              <div class="bottom-text">
                <p>Don't have an account? </p>
                <button
                  className="signupbtn"
                  onClick={() => navigate("/signUp")}
                >
                  Sign Up
                </button>
                <p>
                  {" "}
                  <Link
                    to="forgetPassword"
                    onClick={() => navigate("/forgetPassword")}
                  >
                    Forgot password?
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LogIn;

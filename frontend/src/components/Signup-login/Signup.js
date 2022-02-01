import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  signupActions,
  submitUserDetails,
} from "../../slices/Signup-login-slice/SignUp-Slice";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  console.log(signupActions);

  const handleEmailChange = (event) => {
    dispatch(signupActions.setSignupEmailAddress(event.target.value));
  };

  const handleNameChange = (event) => {
    dispatch(signupActions.setSignupName(event.target.value));
  };

  const handlePasswordChange = (event) => {
    dispatch(signupActions.setSignupPassword(event.target.value));
  };

  const state = useSelector((state) => state.signup);
  const handleSubmitButton = (event) => {
    event.preventDefault();
    dispatch(submitUserDetails(state));
    navigate("/signin");
  };

  return (
    <div className="signup-container max-w-sm mx-auto flex flex-1 flex-col items-center justify-center min-h-screen ;x-2">
      <div className="bg-white rounded-lg shadow-lg text-black w-full my-10 px-6 py-4">
        <h1 className="font-bold text-3xl">Sign Up</h1>
        <form className="signup-form pt-4">
          <input
            className="block border border-grey-light w-full p-3 rounded mb-4"
            type="text"
            placeholder="Email"
            onChange={handleEmailChange}
          ></input>
          <input
            className="block border border-grey-light w-full p-3 rounded mb-4"
            type="text"
            placeholder="Name"
            onChange={handleNameChange}
          ></input>
          <input
            className="block border border-grey-light w-full p-3 rounded mb-4"
            type="password"
            placeholder="Password"
            onChange={handlePasswordChange}
          ></input>
          <button
            className="block bg-indigo-600 text-white hover:bg-indigo-700 w-full p-3 rounded mb-4"
            type="submit"
            onClick={handleSubmitButton}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;

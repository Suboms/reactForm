import React, { useState } from "react";
import style from "./Form.module.css";

const Form = () => {
  const symbolExpression = /[!@#$%^&*()_+=[\]{};':"|,.<>/?]/;
  const numberExpression = /[0-9]/;
  const emailExpression = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const passwordExpression =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=])[a-zA-Z\d@#$%^&+=]{6,20}$/;

  const [userData, setUserData] = useState({
    fname: "",
    lname: "",
    email: "",
    uname: "",
    gender: "",
    password: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!handleValidation()) {
      alert("Please ensure all fields are valid");
      return;
    }
    console.log(userData);
  };
  const handleValidation = () => {
    if (
      userData.fname === "" ||
      userData.lname === "" ||
      userData.email === "" ||
      userData.uname === "" ||
      userData.gender === "" ||
      userData.password === ""
    ) {
      return false;
    } else {
      if (
        userData.fname.length <= 3 ||
        userData.lname.length <= 3 ||
        userData.uname.length <= 3
      ) {
        console.log("Name should be greater than 3 characters");
        return false;
      } else if (
        symbolExpression.test(userData.fname) ||
        symbolExpression.test(userData.lname)
      ) {
        console.log("Symbols are not allowed in name");
        return false;
      } else if (
        numberExpression.test(userData.fname) ||
        numberExpression.test(userData.lname)
      ) {
        console.log("Numbers are not allowed in name");
        return false;
      }
      if (!emailExpression.test(userData.email)) {
        console.log("Invalid email");
        return false;
      }
      if (!passwordExpression.test(userData.password)) {
        console.log("Invalid Password");
        return false;
      }
    }
    return true;
  };
  return (
    <>
      <div className={`${style["form-container"]}`}>
        <div className={`${style["header-container"]}`}>
          <h1>Form</h1>
        </div>
        <div className={`${style["form-content"]}`}>
          <form action="" method="post" onSubmit={handleSubmit}>
            <div className={`${style["row"]}`}>
              <div className={`${style["input-container"]}`}>
                <label htmlFor={style.fname}>First Name</label>
                <input
                  type="text"
                  name="fname"
                  id={style.fname}
                  placeholder="First Name"
                  className={`${style["form-control"]} `}
                  onChange={handleChange}
                />
                <span>Pussy</span>
              </div>
              <div className={`${style["input-container"]}`}>
                <label htmlFor={style.lname}>Last Name</label>
                <input
                  type="text"
                  name="lname"
                  id={style.lname}
                  placeholder="Last Name"
                  className={`${style["form-control"]} `}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className={`${style["input-container"]}`}>
              <label htmlFor={style.email}>Email</label>
              <input
                type="email"
                name="email"
                id={style.email}
                placeholder="Email"
                className={`${style["form-control"]} `}
                onChange={handleChange}
              />
            </div>

            <div className={`${style["input-container"]}`}>
              <label htmlFor={style.uname}>Username</label>
              <input
                type="text"
                name="uname"
                id={style.uname}
                placeholder="Username"
                className={`${style["form-control"]} `}
                onChange={handleChange}
              />
            </div>

            <div className={`${style["input-container"]}`}>
              <label htmlFor={style.gender}>Gender</label>
              <select
                name="gender"
                id={style.gender}
                className={`${style["form-control"]} `}
                onChange={handleChange}
                defaultValue="disabled">
                <option value="disabled" disabled>
                  Select your Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="others">Prefer not to say</option>
              </select>
            </div>

            <div className={`${style["input-container"]}`}>
              <label htmlFor={style.password}>Password</label>
              <input
                type="password"
                name="password"
                id={style.password}
                placeholder="Password"
                className={`${style["form-control"]} `}
                onChange={handleChange}
              />
            </div>

            <div className={`${style["submit-container"]}`}>
              <button type="submit" className={`${style["submit-button"]} `}>
                Submit
              </button>
            </div>
          </form>
        </div>

        <h1>
          First Name: {userData.fname} <br />
          Last Name: {userData.lname} <br />
          Email: {userData.email} <br />
          Username: {userData.uname} <br />
          Gender: {userData.gender} <br />
          Password: {userData.password} <br />
        </h1>
      </div>
    </>
  );
};
export default Form;

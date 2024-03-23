import React, { useState } from "react";
import style from "./Form.module.css";

const Form = () => {
  const [userData, setUserData] = useState({});

  return (
    <>
      <div className={`${style["form-container"]}`}>
        <div className={`${style["header-container"]}`}>
          <h1>Form</h1>
        </div>
        <div className={`${style["form-content"]}`}>
          <form action="" method="post">
            <div className={`${style["row"]}`}>
              <div className={`${style["input-container"]}`}>
                <label htmlFor={style.fname}>First Name</label>
                <input
                  type="text"
                  name="fname"
                  id={style.fname}
                  placeholder="First Name"
                  className={`${style["form-control"]} `}
                />
              </div>
              <div className={`${style["input-container"]}`}>
                <label htmlFor={style.lname}>Last Name</label>
                <input
                  type="text"
                  name="lname"
                  id={style.lname}
                  placeholder="Last Name"
                  className={`${style["form-control"]} `}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Form;

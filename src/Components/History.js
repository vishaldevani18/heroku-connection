import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import FormData from "./Form";

const Form = () => {
  const [value, valueHandler] = useState("");
  let history = useHistory();
  const HandleOnChange = (e) => {
    valueHandler(e.target.value);
  };

  const OnSubmit = (e) => {
    e.preventDefault();
    console.log(history);
    history.push(`/React_Vishal/${value}`);
  };

  return (
    <div>
      <FormData />
      <div className="m-5 p-5 shadow-lg">
        <form
          className="form-inline col-lg-6 offset-lg-3"
          onSubmit={(e) => OnSubmit(e)}
        >
          <div class="row">
            <input
              placeholder="Search"
              className="mr-sm-2 p-2 text-muted"
              value={value}
              onChange={(e) => HandleOnChange(e)}
            />

{/* <Button variant="primary" type="submit">Submit</Button> */}

            <button
              variant="primary"
              className="btn-primary"
              type="submit"
            >
              Find
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
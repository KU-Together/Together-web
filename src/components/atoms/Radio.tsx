import React from "react";

const Radio: React.FunctionComponent = () => {
    const radioHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    };
    return (
      <div className="container">
          <p>
            <input
              type="radio"
              name="major"
              value="yes"
              id="major_yes"
              onChange={radioHandler}
            />
            <label htmlFor="major_yes">전공</label>

            <input
              type="radio"
              name="major"
              value="no"
              id="major_no"
              onChange={radioHandler}
            />
            <label htmlFor="major_no">비전공</label>
          </p>
      </div>
    );
  };
  
  export default Radio;
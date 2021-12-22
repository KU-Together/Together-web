import React from "react";

const Checkbox: React.FunctionComponent = () => {
    const CheckboxHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    };
    return (
      <div className="container">
          <p>
            <input
              type="checkbox"
              name="likes"
              value="yes"
              id="html"
              onChange={CheckboxHandler}
            />
            <label htmlFor="">HTML</label>

            <input
              type="checkbox"
              name="likes"
              value="css"
              id=""
              onChange={CheckboxHandler}
            />
            <label htmlFor="">CSS</label>
            
            <input
              type="checkbox"
              name="likes"
              value="javascript"
              id=""
              onChange={CheckboxHandler}
            />
            <label htmlFor="">JavaScript</label>

            <input
              type="checkbox"
              name="likes"
              value="react"
              id=""
              onChange={CheckboxHandler}
            />
            <label htmlFor="">React</label>

            <input
              type="checkbox"
              name="likes"
              value="reactnative"
              id=""
              onChange={CheckboxHandler}
            />
            <label htmlFor="">React-native</label>

            <input
              type="checkbox"
              name="likes"
              value="vue_js"
              id=""
              onChange={CheckboxHandler}
            />
            <label htmlFor="">Vue.js</label>

            <input
              type="checkbox"
              name="likes"
              value="anguler"
              id=""
              onChange={CheckboxHandler}
            />
            <label htmlFor="">Anguler</label>

            <input
              type="checkbox"
              name="likes"
              value="node_js"
              id=""
              onChange={CheckboxHandler}
            />
            <label htmlFor="">Node.js</label>

            <input
              type="checkbox"
              name="likes"
              value="nuxt_js"
              id=""
              onChange={CheckboxHandler}
            />
            <label htmlFor="">Nuxt.js</label>

            <input
              type="checkbox"
              name="likes"
              value="flask"
              id=""
              onChange={CheckboxHandler}
            />
            <label htmlFor="">Flask</label>

            <input
              type="checkbox"
              name="likes"
              value="bootstrap"
              id=""
              onChange={CheckboxHandler}
            />
            <label htmlFor="">Bootstrap</label>

            <input
              type="checkbox"
              name="likes"
              value="typescript"
              id=""
              onChange={CheckboxHandler}
            />
            <label htmlFor="">Typescript</label>

            <input
              type="checkbox"
              name="likes"
              value="jquery"
              id=""
              onChange={CheckboxHandler}
            />
            <label htmlFor="">jQuery</label>

            <input
              type="checkbox"
              name="likes"
              value="redux"
              id=""
              onChange={CheckboxHandler}
            />
            <label htmlFor="">Redux</label>

            <input
              type="checkbox"
              name="likes"
              value="django"
              id=""
              onChange={CheckboxHandler}
            />
            <label htmlFor="">django</label>
          </p>
      </div>
    );
  };
  
  export default Checkbox;
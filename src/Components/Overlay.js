import React, { useState } from "react";
import "./Overlay.css";
import axios from "axios";

const Overlay = ({ onClose }) => {
  const [isAdvancedConfig, setAdvancedConfig] = useState(false);
  const tag = "*";
  const tagStyle = {
    color: tag === "*" ? "red" : "inherit",
  };

  const handleOpenAdvancedConfig = () => {
    setAdvancedConfig(!isAdvancedConfig);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    let formData = {};
    if (isAdvancedConfig) {
      formData = {
        field1: e.target.field1.value,
        field2: e.target.field2.value,
        field3: e.target.field3.value,
        field4: e.target.field4.value,
        field5: e.target.field5.value,
        field6: e.target.field6.value,
        field7: e.target.field7.value,
      };
    } else {
      formData = {
        field1: e.target.field1.value,
        field2: e.target.field2.value,
        field3: e.target.field3.value,
        field4: e.target.field4.value,
      };
    }

    axios
      .post("https://jsonplaceholder.typicode.com/posts", formData)
      .then((response) => {
        console.log(response);
        e.target.field1.value = "";
        e.target.field2.value = "";
        e.target.field3.value = "";
        e.target.field4.value = "";
        e.target.field5.value = "";
        e.target.field6.value = "";
        e.target.field7.value = "";
      })
      .catch((error) => {
        console.log("No response received from server for some input fields");
      });
  };

  return (
    <div className="overlay">
      <form onSubmit={submitHandler}>
        <div className="overlay-content">
          <div className="first-line">
            <h4>Create Ordering Service</h4>
            <i
              className="bi bi-x-square"
              style={{ marginRight: "10px", padding: "10px" }}
              onClick={onClose}
            ></i>
          </div>

          <div className="first-row">
            <div>
              <label>
                Organization Name<span style={tagStyle}>{tag}</span>
              </label>
              <input
                type="text"
                placeholder="Organization Name 1"
                name="field1"
                required
              />
            </div>
            <div>
              <label>
                Organization Name<span style={tagStyle}>{tag}</span>
              </label>
              <input
                type="text"
                placeholder="Organization Name 1"
                name="field2"
                required
              />
            </div>
          </div>

          <div className="second-row">
            <div>
              <label>
                Channel Name<span id="optional">(Optional)</span>
              </label>
              <input
                type="text"
                placeholder="Organization Name 1"
                name="field3"
              />
            </div>
            <div>
              <label>
                Domain<span style={tagStyle}>{tag}</span>
              </label>
              <input
                type="text"
                placeholder="Organization Name 1"
                name="field4"
                required
              />
            </div>
          </div>

          <h4>
            Advanced Configurations
            <i onClick={handleOpenAdvancedConfig}>
              <i
                className= {`bi bi-chevron-${isAdvancedConfig ? "up" : "down"}`}
              ></i>
            </i>
          </h4>
          {isAdvancedConfig && (
            <div className="advanced-config">
              <div className="first-row">
                <div>
                  <label>
                    Max Message Count <span style={tagStyle}>{tag}</span>
                  </label>
                  <input type="text" placeholder="E.g. 10" name="field5" />
                </div>
                <div>
                  <label>Absolute Max Bytes</label>
                  <input type="text" placeholder="E.g 1038723" name="field6" />
                </div>
              </div>
              <div className="second-row">
                <div>
                  <label>
                    Preffered Max Bytes <span style={tagStyle}>{tag}</span>
                  </label>
                  <br />
                  <input type="text" placeholder="E.g 1038723" name="field7" />
                </div>
                <div></div>
              </div>
            </div>
          )}
        </div>

        <div className="submit-buttons">
          <button className="cancel" onClick={onClose}>
            Cancel
          </button>
          <button className="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};
export default Overlay;

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
    const field1 = e.target.field1.value;
    const field2 = e.target.field2.value;
    const field3 = e.target.field3.value;
    const field4 = e.target.field4.value;
    const field5 = e.target.field5.value;
    const field6 = e.target.field6.value;
    const field7 = e.target.field7.value;

    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        field1,
        field2,
        field3,
        field4,
        field5,
        field6,
        field7,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
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
                className={`bi bi-chevron-${isAdvancedConfig ? "up" : "down"}`}
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

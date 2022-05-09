import useMediaQuery from "hooks/useMediaQuery";
import React, { useState } from "react";
import styles from "scss/components/Checkbox.module.scss";

function Checkbox({ title, inputName, isChecked = false }) {
  const isBellow1536px = useMediaQuery("(max-width : 96em)");
  const [checked, setChecked] = useState(isChecked);

  return (
    <div className={styles.checkbox}>
      <div>
        <input
          type={"checkbox"}
          name={inputName}
          id={title}
          className="fs-16px"
          checked={checked}
          onChange={() => setChecked((val) => !val)}
        />
      </div>
      <label
        htmlFor={title}
        className={`pointer ${
          isBellow1536px ? "fs-16px" : "fs-18px"
        } black opactiy-0_9 weight-4`}
      >
        {title}
      </label>
    </div>
  );
}

export default Checkbox;

import useMediaQuery from "hooks/useMediaQuery";
import React from "react";
import styles from "scss/components/FormField.module.scss";

function FormField({ id, placeholder, label, onChange, type = "text" }) {
  const isBellow1536px = useMediaQuery("(max-width : 96em)");

  return (
    <div className={`${styles.field}`}>
      <label
        htmlFor={id}
        className={`mb-15px ${
          isBellow1536px ? "fs-16px" : "fs-18px"
        } font-ubuntu weight-4 inline-block pointer`}
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full ${isBellow1536px ? "fs-16px" : "fs-18px"} weight-4`}
      />
    </div>
  );
}

export default FormField;

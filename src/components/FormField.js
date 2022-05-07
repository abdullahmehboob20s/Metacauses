import React from "react";
import styles from "scss/components/FormField.module.scss";

function FormField({ id, placeholder, label, onChange, type = "text" }) {
  return (
    <div className={`${styles.field}`}>
      <label
        htmlFor={id}
        className="mb-15px fs-18px font-ubuntu weight-4 inline-block pointer"
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full fs-18px weight-4"
      />
    </div>
  );
}

export default FormField;

import React, { useRef, useState } from "react";
import styles from "scss/components/Accordion.module.scss";

function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggle = () => {
    if (menuRef.current.clientHeight === 0) {
      menuRef.current.style.height = menuRef.current.scrollHeight + "px";
      setIsOpen(true);
    } else {
      menuRef.current.style.height = 0 + "px";
      setIsOpen(false);
    }
  };

  return (
    <div className={`${styles.accordion}`}>
      <button className="pointer" onClick={() => toggle()}>
        <p
          className={`${
            isOpen ? "fs-32px pink" : "fs-24px black"
          } weight-4 font-ubuntu text-left`}
        >
          {title}
        </p>
        <span className={`block ${isOpen ? styles.open : ""}`}></span>
      </button>
      <main ref={menuRef}>
        <div className={`${styles.divider}`}>
          <div className={`${styles.line}`}></div>
        </div>
        <div className={`${styles.content}`}>{children}</div>
      </main>
    </div>
  );
}

export default Accordion;

import React from "react";
import FormField from "components/FormField";
import styles from "scss/layout/Contact.module.scss";
import Button from "components/Button";
import Checkbox from "components/Checkbox";

function Contact() {
  return (
    <div className={`${styles.contact} container-wrapper-2`}>
      <header className="mb-70px">
        <h3 className="fs-18px black text-center font-ubuntu weight-4 mb-10px">
          Get in touch with Us
        </h3>
        <h1 className="fs-48px black text-center weight-7 font-ubuntu">
          Contact Metacauses
        </h1>
      </header>

      <form action="">
        <FormField id="name" label="Name" placeholder="Enter Your Name Here" />
        <FormField
          id="email"
          label="Email"
          placeholder="Enter Your Email Here "
        />
        <FormField
          id="number"
          label="Phone Number (Optional) "
          placeholder="Enter Your Phone Number"
        />
        <FormField
          id="message"
          label="Message"
          placeholder="Enter Your Message Here"
        />
        <div>
          <Checkbox
            isChecked={true}
            title="I agree that this information will be used to contact me."
          />
          <Button title="Send Message" />
        </div>
      </form>
    </div>
  );
}

export default Contact;

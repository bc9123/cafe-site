import styles from "../css/Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactContext}>
        <h1>Contact Us</h1>
      </div>
      <div className={styles.contactFormContainer}>
        <form className={styles.contactForm}>
          <div className={styles.contactFormGroup}>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              required
            />
            <label htmlFor="name">Name</label>
          </div>

          <div className={styles.contactFormGroup}>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
            />
            <label htmlFor="email">Email</label>
          </div>

          <div className={styles.contactFormGroup}>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Phone"
              required
            />
            <label htmlFor="phone">Phone</label>
          </div>

          <div className={styles.contactFormGroup}>
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              required
            ></textarea>
            <label htmlFor="message">Message</label>
          </div>
          <button type="submit" className={styles.contactBtn}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

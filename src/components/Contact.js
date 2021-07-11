const Contact = () => {
  return (
    <section className="contact">
      <div className="contact__heading">
        <div className="text">
          <h1>Get in touch</h1>
          <p>Send me a message</p>
        </div>
      </div>
      <form
        className="form"
        action="https://formspree.io/f/mqkwlnnd"
        method="POST"
      >
        <label className="form__name">
          <span className="form__label">Your full name</span>
          <input type="text" name="name" />
        </label>
        <label className="form__name">
          <span className="form__label">Your email</span>
          <input type="email" name="_replyto" />
        </label>
        <label className="form__name">
          <span className="form__label">Your message</span>
          <textarea name="message"></textarea>
        </label>
        <button className="form__button" type="submit">
          Send
        </button>
      </form>
    </section>
  );
};
export default Contact;

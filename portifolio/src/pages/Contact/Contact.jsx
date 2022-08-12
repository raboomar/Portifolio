import React from "react";

const Contact = () => {
  return (
    <div id="contact">
      <div className="contact-me">
        <h2>Get In Touch</h2>
      </div>

      <div className="bottom-container">
        <a className="footer-link" href="mailto:aboomar.2@osu.edu">
          E-mail
        </a>
        <a
          className="footer-link"
          href="https://www.linkedin.com/in/rami-aboomar-4553a8b0/"
        >
          LinkedIn
        </a>

        <a className="footer-link" href="https://github.com/raboomar">
          Github
        </a>
        <p className="copyright">© 2022 Rami Aboomar.</p>
      </div>
    </div>
  );
};

export default Contact;

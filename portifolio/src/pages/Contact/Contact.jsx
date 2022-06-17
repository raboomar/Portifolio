import React from "react";

const Contact = () => {
  return (
    <div>
      <div class="contact-me">
        <h2>Get In Touch</h2>
        <h3>If you love hot wings as much as I do.</h3>
        <p class="contact-message">
          Love hot wings as much as I do? Let's talk about how awesome they are!
          We can code while we eat hot wings!
        </p>
        <a class="btn" href="mailto:raboomar@yahoo.com">
          CONTACT ME
        </a>
      </div>

      <div class="bottom-container">
        <a
          class="footer-link"
          href="https://www.linkedin.com/in/rami-aboomar-4553a8b0/"
        >
          LinkedIn
        </a>

        <a class="footer-link" href="https://github.com/raboomar">
          Github
        </a>
        <p class="copyright">© 2022 Rami Aboomar.</p>
      </div>
    </div>
  );
};

export default Contact;

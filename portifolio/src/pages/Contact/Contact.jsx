import { useState } from "react";
import { send } from "emailjs-com";
import { Container, Row, Col } from "react-bootstrap";
import "./contact.css";

function Contact() {
  const [toSend, setToSend] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setToSend({
      ...toSend,
      [e.target.name]: e.target.value,
      [e.target.email]: e.target.value,
      [e.target.message]: e.target.value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    send("service_h1qtonw", "template_x8ctwxe", toSend, "85mkxOZ4NTOGuEsTt")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  return (
    <Container>
      <Row className="mb-5 mt-3">
        <Col lg="8">
          <h1 className="display-4 mb-4">Contact Me</h1>
        </Col>
      </Row>

      <Row className="sec_sp">
        <Col lg="5" className="mb-5">
          <h3 className="color_sec py-4">Get in touch</h3>
          <address>
            <strong>Email: rami9418@outlook.com</strong>
            <br />
            <br />
            <p>
              <strong>Phone: 614-226-5850</strong>
            </p>
          </address>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
            soluta voluptatum hic repellat nobis reiciendis sequi quam,
            veritatis est nisi alias et totam similique delectus inventore
            accusamus autem sit? Laudantium.
          </p>
        </Col>
        <Col ls="7" className="d-flex align-items-center">
          <form className="contact_form w-100">
            <Row>
              <Col lg="6" className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="Name"
                  value={toSend.name}
                  onChange={handleChange}
                />
              </Col>

              <Col lg="6" className="form-group rounded-0">
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Email"
                  onChange={handleChange}
                />
              </Col>
            </Row>
            <br />
            <textarea
              className="form-control rounded-0"
              id="message"
              name="message"
              placeholder="Message"
              rows="5"
              value={toSend.message}
              onChange={handleChange}
            ></textarea>
            <br />
            <Row>
              <Col lg="12" className="form-group">
                <button
                  className="btn ac_btn"
                  type="submit"
                  onClick={(e) => {
                    onSubmit(e);
                  }}
                >
                  {" "}
                  Send
                </button>
              </Col>
            </Row>
          </form>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;

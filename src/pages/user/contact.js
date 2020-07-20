import React, { useState } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
export default function Contact() {
  const [description, setDescription] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [sending, setSending] = useState(false);

  const validateData = (description, email, phone) => {
    let errors = {};
    if (!description || description.length < 15) {
      errors.description = "Description must include 15 alphabets";
    }
    if (!phone || phone.length < 10 || phone.length > 13) {
      errors.phone = "Enter a valid number";
    }
    if (!email) {
      errors.email = "Enter an email";
    }
    return errors;
  };

  const sendEmail = (description, phone, email) => {
    window.emailjs
      .send("gmail", "template_mlkKWBlB", {
        message_html: description,
        from_contact: phone,
        from_email: email,
      })
      .then((res) => {
        alert("Enquiry successfully sent!");
      })
      .catch((err) => {
        console.log(err);
        alert("An error occured while sending enquiry!");
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    const errors = validateData(description, email, phone);

    if (Object.keys(errors).length > 0) {
      const errorString = Object.keys(errors)
        .map((error) => `${error}: ${errors[error]}`)
        .join("\n");
      setSending(false);
      alert(errorString);
    } else {
      sendEmail(description, phone, email);
      setSending(false);
    }
  };

  return (
    <>
      <section className="contact-form py-5">
        <div className="container">
          <h4 className="text-center">GOLDEN PANKH EXPORT IMPORT</h4>
          <hr />
          <h5>
            Describe Your BUYING Requirements <span>*</span>
          </h5>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label for="exampleFormControlTextarea1">
                <span>*</span> Tips on getting accurate quotes. Please include
                product name, order quantity, usage, special requests if any in
                your inquiry.
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              ></textarea>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label for="inputEmail4">
                  Email <span>*</span>
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail4"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your Email"
                  required
                />
              </div>
              <div className="form-group col-md-6">
                <label for="inputPhone">
                  Mobile No. <span>*</span>
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="inputPhone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter your Phone Number"
                  required
                />
              </div>
            </div>
            <div className="text-center">
              {sending ? (
                <CircularProgress color="yellow" size="small" />
              ) : (
                <button type="submit" className="btn btn-warning text-center">
                  Send Enquiry
                </button>
              )}
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
